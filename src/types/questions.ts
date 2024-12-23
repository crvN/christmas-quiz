export type Question =
	| {
			id: number
			round: number
			question: string
			answer: string
			price: number
			category?: string
			difficulty: string
			type?: 'text'
			finished?: boolean
	  }
	| {
			id: number
			round: number
			question?: string
			answer: string
			price: number
			category?: string
			difficulty: string
			type?: 'img'
			image: string
			finished?: boolean
	  }
	| {
			id: number
			round: number
			question?: string
			answer: string
			price: number
			category?: string
			difficulty: string
			type?: 'sound'
			sound: any
			finished?: boolean
	  }
