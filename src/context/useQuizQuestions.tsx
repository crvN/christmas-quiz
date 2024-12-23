import {Question} from '../types/questions.ts'
import React, {useState} from 'react'
import gentlemenImg from '../assets/gentlemen.png'
import jokerImg from '../assets/joker.png'
import legendImg from '../assets/i-m-legend.png'

const firstRoundQuestions: Question[] = [
	{
		id: 1,
		round: 1,
		category: 'Українські Різдвяні традиції',
		price: 100,
		question: 'Як називається головна різдвяна страва в Україні',
		answer: 'Кутя',
		type: 'text',
		difficulty: 'easy',
	},
	{
		id: 2,
		round: 1,
		category: 'Українські Різдвяні традиції',
		price: 200,
		question: 'Скільки страв традиційно подають на Святвечір?',
		answer: '12',
		type: 'text',
		difficulty: 'medium',
	},
	{
		id: 3,
		round: 1,
		category: 'Українські Різдвяні традиції',
		price: 300,
		question: 'Як називається вечір перед Різдвом у народі?',
		answer: 'Святвечір',
		type: 'text',
		difficulty: 'hard',
	},
	{
		id: 4,
		round: 1,
		category: 'Географія та Різдво',
		price: 100,
		question: 'У якій країні з’явилася традиція прикрашати ялинку?',
		answer: 'Німеччина',
		type: 'text',
		difficulty: 'easy',
	},
	{
		id: 5,
		round: 1,
		category: 'Географія та Різдво',
		price: 200,
		question: 'У якому океані розташований острів Різдва?',
		answer: 'Індійський океан',
		type: 'text',
		difficulty: 'medium',
	},
	{
		id: 6,
		round: 1,
		category: 'Географія та Різдво',
		price: 300,
		question: 'Яке місто вважається місцем народження Ісуса Христа?',
		answer: 'Віфлеєм',
		type: 'text',
		difficulty: 'hard',
	},
	{
		id: 7,
		round: 1,
		category: 'Анаграми (страви)',
		price: 100,
		question: 'Т Я К У',
		answer: 'Кутя',
		type: 'text',
		difficulty: 'easy',
	},
	{
		id: 8,
		round: 1,
		category: 'Анаграми (страви)',
		price: 200,
		question: 'И И Р К В А Е Н',
		answer: 'Вареники',
		type: 'text',
		difficulty: 'medium',
	},
	{
		id: 9,
		round: 1,
		category: 'Анаграми (страви)',
		price: 300,
		question: 'В Р А З У',
		answer: 'Узвар',
		type: 'text',
		difficulty: 'hard',
	},
]

const secondRoundQuestions: Question[] = [
	{
		id: 10,
		round: 2,
		category: 'Цитати з відомих фільмів (треба назвати фільм по цитаті)',
		price: 200,
		question: 'Хто наважиться зазіхати на мій дім, отримає гідну відсіч!',
		answer: 'Сам удома',
		type: 'text',
		difficulty: 'easy',
	},
	{
		id: 11,
		round: 2,
		category: 'Цитати з відомих фільмів (треба назвати фільм по цитаті)',
		price: 400,
		question: 'Мій меч з тобою. І мій лук також. І моя сокира.',
		answer: 'Володар перснів',
		type: 'text',
		difficulty: 'medium',
	},
	{
		id: 12,
		round: 2,
		category: 'Цитати з відомих фільмів (треба назвати фільм по цитаті)',
		price: 600,
		question: 'Щастя можна знайти навіть у найтемніші часи, якщо не забувати вмикати світло.',
		answer: 'Гаррі Поттер',
		type: 'text',
		difficulty: 'hard',
	},
	{
		id: 15,
		round: 2,
		category: 'Різдвяні легенди та історії',
		price: 200,
		question: 'Яка країна вперше почала святкувати Різдво офіційно в IV столітті?',
		answer: 'Римська імперія',
		type: 'text',
		difficulty: 'easy',
	},
	{
		id: 14,
		round: 2,
		category: 'Різдвяні легенди та історії',
		price: 400,
		question: 'Яка тварина, за легендою, зігрівала немовля Ісуса у яслах?',
		answer: 'Віслюк',
		type: 'text',
		difficulty: 'medium',
	},
	{
		id: 13,
		round: 2,
		category: 'Різдвяні легенди та історії',
		price: 600,
		question: 'Як звали трьох волхвів, які прийшли до новонародженого Ісуса?',
		answer: 'Мельхіор, Гаспар(Каспар), Балтазар',
		type: 'text',
		difficulty: 'hard',
	},
	{
		id: 16,
		round: 2,
		category: 'Світові традиції Різдва',
		price: 200,
		question: 'У якій країні діти отримують подарунки 6 січня, у день Трьох королів?',
		answer: 'Іспанія',
		type: 'text',
		difficulty: 'easy',
	},
	{
		id: 17,
		round: 2,
		category: 'Світові традиції Різдва',
		price: 400,
		question: 'Яка страва є традиційною на Різдво в більшості країн Європи? Цікаво, до чого тут пілігрими?',
		answer: 'Індичка',
		type: 'text',
		difficulty: 'medium',
	},
	{
		id: 18,
		round: 2,
		category: 'Світові традиції Різдва',
		price: 600,
		question: 'Демонічна істота, яка карає неслухняних дітей',
		answer: 'Крампус',
		type: 'text',
		difficulty: 'hard',
	},
]

const thirdRoundQuestions: Question[] = [
	{
		id: 19,
		round: 3,
		category: 'Географія Різдва',
		price: 300,
		question: 'У якій країні на Різдво запускають найбільшу кількість феєрверків?',
		answer: 'Бразилія',
		type: 'text',
		difficulty: 'easy',
	},
	{
		id: 20,
		round: 3,
		category: 'Географія Різдва',
		price: 600,
		question: "Яке місто має прізвисько 'Різдвяна столиця Європи'?",
		answer: 'Страсбург',
		type: 'text',
		difficulty: 'medium',
	},
	{
		id: 21,
		round: 3,
		category: 'Географія Різдва',
		price: 900,
		question: "Яке місто має прізвисько 'Різдвяна столиця Європи'?",
		answer: 'Страсбург',
		type: 'text',
		difficulty: 'hard',
	},
	{
		id: 22,
		round: 3,
		category: 'Назвіть фільм за акторським складом',
		price: 300,
		type: 'img',
		answer: 'Джентельмени',
		difficulty: 'easy',
		image: gentlemenImg,
	},
	{
		id: 23,
		round: 3,
		category: 'Назвіть фільм за акторським складом',
		price: 600,
		type: 'img',
		answer: 'Джокер',
		difficulty: 'medium',
		image: jokerImg,
	},
	{
		id: 24,
		round: 3,
		category: 'Назвіть фільм за акторським складом',
		price: 900,
		type: 'img',
		answer: 'Я легенда',
		difficulty: 'hard',
		image: legendImg,
	},
]

const fourthRoundQuestions: Question[] = [
	{
		id: 212,
		round: 4,
		price: 1000,
		category: 'Прикраси для церкви',
		question:
			'Цей різдвяний атрибут, за однією з легенд, став популярним завдяки дружині священика, яка вирішила прикрасити церкву на Різдво. Спочатку він був білим, але пізніше набув своїх знаменитих червоно-білих смуг. Що це?',
		answer: 'Різдвяний льодяник',
		difficulty: 'hard',
		type: 'text',
	},
	{
		id: 222,
		round: 4,
		price: 1000,
		category: 'Багатогранний аксесуар',
		question:
			'У XVIII столітті в Англії почали використовувати цей аксесуар, щоб запобігти пожежам під час святкових гулянь. Проте зараз його асоціюють із подарунками та сюрпризами. Що це?',
		answer: 'Різдвяна шкарпетка',
		difficulty: 'hard',
		type: 'text',
	},
]

const QUIZ_QUESTIONS: Question[] = [
	...firstRoundQuestions,
	...secondRoundQuestions,
	...thirdRoundQuestions,
	...fourthRoundQuestions,
]

type QuestionsContext = {
	questions: Question[]
	selectedQuestion: Question | undefined
	setSelectedQuestion: (question: Question) => void
	getFirstRoundQuestions: () => Question[]
	getSecondRoundQuestions: () => Question[]
	getThirdRoundQuestions: () => Question[]
	getFourthRoundQuestions: () => Question[]
	getQuestionById: (questionId: number) => Question | undefined
	markQuestionAsFinished: (questionId: number) => void
}

const QuizQuestionsContext = React.createContext<QuestionsContext | undefined>(undefined)

export const QuizQuestionsProvider: React.FC<React.PropsWithChildren> = ({children}) => {
	const questions = useQuestions()
	return <QuizQuestionsContext.Provider value={questions}>{children}</QuizQuestionsContext.Provider>
}

const useQuestions = (): QuestionsContext => {
	const [questions, setQuestions] = useState<Question[]>(QUIZ_QUESTIONS)
	const [selectedQuestion, setSelectedQuestion] = useState<Question | undefined>()
	const getQuestionByRound = (round: number) => questions.filter(question => question.round === round)
	const getFirstRoundQuestions = () => getQuestionByRound(1)
	const getSecondRoundQuestions = () => getQuestionByRound(2)
	const getThirdRoundQuestions = () => getQuestionByRound(3)
	const getFourthRoundQuestions = () => getQuestionByRound(4)
	const markQuestionAsFinished = (questionId: number) => {
		setQuestions(questions.map(question => (question.id === questionId ? {...question, finished: true} : question)))
	}
	const getQuestionById = (questionId: number) => questions.find(question => question.id === questionId)

	return {
		questions,
		selectedQuestion,
		getQuestionById,
		markQuestionAsFinished,
		setSelectedQuestion,
		getFirstRoundQuestions,
		getSecondRoundQuestions,
		getThirdRoundQuestions,
		getFourthRoundQuestions,
	}
}

export const useQuizQuestions = (): QuestionsContext => {
	const context = React.useContext(QuizQuestionsContext)
	if (context === undefined) {
		throw new Error('useQuizQuestions must be used within a QuizQuestionsProvider')
	}
	return context
}
