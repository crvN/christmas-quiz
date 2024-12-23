import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from 'react-router'
import {QuizTable} from './quiz/components/Quize/QuizTable.tsx'
import {QuestionPage} from './quiz/components/Quize/QuestionPage.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<QuizTable />} />
					<Route path="/question/:id" element={<QuestionPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
