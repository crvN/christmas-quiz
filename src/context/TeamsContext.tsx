import {createContext, useContext, useState} from 'react'
import {Team} from '../types/team.ts'
import {v4 as uuidv4} from 'uuid'

export type TeamsContext = {
	teams: Team[]
	createTeam: (name: string) => void
	updateScore: (id: string, score: number) => void
	addPoints: (id: string, points: number) => void
	selectedTeamId: string | undefined
	selectTeam: (id: string | undefined) => void
}

const TeamContext = createContext<TeamsContext | undefined>(undefined)

export const TeamProvider: React.FC<React.PropsWithChildren> = ({children}) => {
	const [teams, setTeams] = useState<Team[]>([])
	const [selectedTeamId, setSelectedTeamId] = useState<string | undefined>()

	const createTeam = (name: string) => {
		setTeams(prevTeams => [...prevTeams, {id: uuidv4(), name, score: 0}])
	}

	const updateScore = (id: string, score: number) => {
		setTeams(prevTeams => prevTeams.map(team => (team.id === id ? {...team, score} : team)))
	}

	const addPoints = (id: string, points: number) => {
		setTeams(prevTeams => prevTeams.map(team => (team.id === id ? {...team, score: team.score + points} : team)))
	}

	const selectTeam = (id: string | undefined) => {
		if (id === selectedTeamId) {
			setSelectedTeamId(undefined)
		} else {
			setSelectedTeamId(id)
		}
	}

	return (
		<TeamContext.Provider value={{teams, addPoints, createTeam, updateScore, selectedTeamId, selectTeam}}>
			{children}
		</TeamContext.Provider>
	)
}
export const useTeamContext = () => {
	const context = useContext(TeamContext)
	if (context === undefined) {
		throw new Error('useTeamContext must be used within a QuizProvider')
	}
	return context
}
