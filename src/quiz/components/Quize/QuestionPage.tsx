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

const AssetsWrapper = styled('div', {
	margin: '24px auto',
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
		if (selectedTeamId === undefined && time > 0) {
			alert('Виберіть команду')
			return
		}
		if (time === 0) {
			markQuestionAsFinished(Number(id))
			setShowAnswer(true)
			return
		}
		addPoints(selectedTeamId!, question?.price || 0)
		selectTeam(undefined)
		markQuestionAsFinished(Number(id))
		setShowAnswer(true)
	}

	const renderQuestion = () => {
		switch (question?.type) {
			case 'text':
				return <QuestionStyled>{question?.question}</QuestionStyled>
			case 'img':
				return (
					<AssetsWrapper>
						<img src={question?.image} alt="question" />
					</AssetsWrapper>
				)
			case 'sound':
				return (
					<AssetsWrapper>
						<audio src={question?.sound} controls />
					</AssetsWrapper>
				)
			default:
				return null
		}
	}
	return (
		<Flex vertical style={{width: '100%', position: 'relative'}}>
			{question?.type !== 'sound' && (
				<TimerBlock onClick={reset}>
					<Progress percent={barPercent} type="circle" format={() => time} strokeColor={'red'} size={50} />
				</TimerBlock>
			)}
			{!showAnswer ? (
				<div>
					{renderQuestion()}
					<Button
						variant="outlined"
						type="primary"
						onClick={onShowAnswerClick}
						style={{marginTop: '24px'}}
						size={'large'}
					>
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
