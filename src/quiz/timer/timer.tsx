import {useEffect, useState} from 'react'

export const TIMER_DURATION = 20
export const useTimer = () => {
	const [time, setTime] = useState<number>(TIMER_DURATION)
	const [isRunning, setIsRunning] = useState<boolean>(false)
	const [intervalId, setIntervalId] = useState<number | undefined>(undefined)
	const [isFinished, setIsFinished] = useState<boolean>(false)

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.code === 'Space') {
				if (isRunning) {
					stop()
				} else {
					start()
				}
			}
		}
		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [isRunning])

	useEffect(() => {
		if (time === 0) {
			stop()
			setIsFinished(true)
		}
	}, [time])

	const start = () => {
		setIsRunning(true)
		setIntervalId(
			setInterval(() => {
				setTime(prevTime => prevTime - 1)
			}, 1000)
		)
	}

	const stop = () => {
		setIsRunning(false)
		if (intervalId) {
			clearInterval(intervalId)
		}
	}

	const reset = () => {
		setTime(TIMER_DURATION)
		setIsRunning(false)
		setIsFinished(false)
		if (intervalId) {
			clearInterval(intervalId)
		}
	}

	return {time, isRunning, isFinished, start, stop, reset}
}
