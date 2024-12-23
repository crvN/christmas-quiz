import {Link, useParams} from 'react-router'
import {useQuizQuestions} from '../../../context/useQuizQuestions.tsx'
import {Button, Flex, Progress} from 'antd'
import {useState} from 'react'
import {useTeamContext} from '../../../context/TeamsContext.tsx'
import {TIMER_DURATION, useTimer} from '../../timer/timer.tsx'
import {styled} from '@stitches/react'

const TimerBlock = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	height: '100px',
	marginLeft: 'auto',
	position: 'absolute',
	right: '0',
	top: '0',
})

const QuestionStyled = styled('div', {
	fontSize: '48px',
	margin: '36px auto',
})

export const QuestionPage: React.FC = () => {
	const {id} = useParams<{id: string}>()
	const [showAnswer, setShowAnswer] = useState<boolean>(false)

	const {getQuestionById, markQuestionAsFinished} = useQuizQuestions()
	const {selectedTeamId, addPoints, selectTeam} = useTeamContext()
	const {time, reset} = useTimer()

	const question = getQuestionById(Number(id))
	const barPercent = 100 - (time / TIMER_DURATION) * 100

	const onShowAnswerClick = () => {
		if (selectedTeamId === undefined) {
			alert('Виберіть команду')
			return
		}
		markQuestionAsFinished(Number(id))
		addPoints(selectedTeamId!, question?.price || 0)
		selectTeam(undefined)
		setShowAnswer(true)
	}
	return (
		<Flex vertical style={{width: '100%', position: 'relative'}}>
			<TimerBlock onClick={reset}>
				<Progress percent={barPercent} type="circle" format={() => time} strokeColor={'red'} size={50} />
			</TimerBlock>
			{!showAnswer ? (
				<div>
					{question?.type === 'text' && <QuestionStyled>{question?.question}</QuestionStyled>}
					{question?.type === 'img' && (
						<div>
							<img src={question?.image} alt="question" />
						</div>
					)}
					<Button variant="outlined" type="primary" onClick={onShowAnswerClick} size={'large'}>
						Відповідь
					</Button>
				</div>
			) : (
				<QuestionStyled>{question?.answer}</QuestionStyled>
			)}

			<Link to="/" style={{marginRight: 'auto'}}>
				Назад
			</Link>
		</Flex>
	)
}
