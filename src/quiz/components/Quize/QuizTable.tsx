import {useQuizQuestions} from '../../../context/useQuizQuestions.tsx'
import {Link} from 'react-router'
import {styled} from '@stitches/react'
import {Button} from 'antd'

const TableStyled = styled('table', {
	width: '100%',
	borderSpacing: '0',
	borderCollapse: 'collapse',
})
const GameContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '20px',
	borderRadius: '10px',
	color: '#282c34',
	backgroundColor: 'white',
	width: '100%',
	height: '100%',
	overflow: 'auto',
})
const CellStyled = styled('td', {
	border: '1px solid black',
	padding: '10px',
	textAlign: 'left',
	fontSize: '32px',
	minWidth: '200px',
})
export const QuizTable = () => {
	const {
		getFirstRoundQuestions,
		getSecondRoundQuestions,
		getThirdRoundQuestions,
		getFourthRoundQuestions,
		currentRound,
		setCurrentRound,
	} = useQuizQuestions()
	const questions = [
		getFirstRoundQuestions(),
		getSecondRoundQuestions(),
		getThirdRoundQuestions(),
		getFourthRoundQuestions(),
	][currentRound - 1]
	const prices = [...new Set(questions.map(question => question.price))]
	const categories = [...new Set(questions.map(question => question.category))]
	return (
		<GameContainer>
			<h2>Christmas Quiz</h2>

			<TableStyled>
				<tbody>
					{categories.map(category => (
						<tr key={category}>
							<CellStyled>{category}</CellStyled>
							{prices.map(price => {
								const question = questions.find(question => question.price === price && question.category === category)
								if (!question || question.finished) {
									return <CellStyled key={`${price}${category}`}></CellStyled>
								}
								return (
									<CellStyled key={`${price}${category}`} css={{textAlign: 'center'}}>
										<Link to={{pathname: `/question/${question.id}`}}>{question.price}</Link>
									</CellStyled>
								)
							})}
						</tr>
					))}
				</tbody>
			</TableStyled>

			{currentRound < 4 && (
				<Button
					onClick={() => {
						setCurrentRound(currentRound + 1)
					}}
					type="primary"
					disabled={questions.some(question => !question.finished)}
					size={'large'}
					style={{marginRight: 'auto', marginTop: '36px'}}
				>
					Наступний раунд
				</Button>
			)}
		</GameContainer>
	)
}
