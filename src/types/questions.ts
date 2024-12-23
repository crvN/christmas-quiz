export type Question = {
	id: number
	round: number
	question: string
	answer: string
	price: number
	category?: string
	difficulty: string
	type?: 'text' | 'img'
	finished?: boolean
}
