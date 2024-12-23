import './App.css'
import {TeamProvider} from './context/TeamsContext.tsx'
import {Layout} from './layout/Layout.tsx'
import {TeamsContainer} from './quiz/components/Teams/TeamsContainer.tsx'
import {styled} from '@stitches/react'
import {Outlet} from 'react-router'
import {QuizQuestionsProvider} from './context/useQuizQuestions.tsx'

const GameContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '20px',
	padding: '20px',
	borderRadius: '10px',
	color: '#282c34',
	backgroundColor: 'white',
	width: '100%',
	height: '100%',
	overflow: 'auto',
	marginTop: '20px',
})

function App() {
	return (
		<TeamProvider>
			<QuizQuestionsProvider>
				<Layout>
					<TeamsContainer />

					<GameContainer>
						<Outlet />
					</GameContainer>
				</Layout>
			</QuizQuestionsProvider>
		</TeamProvider>
	)
}

export default App
