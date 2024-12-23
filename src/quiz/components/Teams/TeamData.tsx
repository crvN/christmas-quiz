import {useTeamContext} from '../../../context/TeamsContext.tsx'
import {Team} from '../../../types/team.ts'
import {styled} from '@stitches/react'

const TeamCard = styled('div', {
	border: '1px solid black',
	borderRadius: '15px',
	padding: '10px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	minWidth: '300px',
	variants: {
		selected: {
			true: {
				backgroundColor: 'lightblue',
			},
			false: {
				backgroundColor: 'white',
			},
		},
	},
})

const Title = styled('h3', {
	margin: 0,
})

const TeamControls = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	gap: '10px',
})

export const TeamData: React.FC<{team: Team}> = ({team}) => {
	const {selectTeam, selectedTeamId} = useTeamContext()
	// const [score, setScore] = useState<string>('')
	return (
		<TeamCard onClick={() => selectTeam(team.id)} selected={selectedTeamId === team.id}>
			<Title>{team.name}</Title>
			<p>
				<strong>Рахунок:</strong> {team.score}
			</p>
			{/*<TeamControls>*/}
			{/*	<Input placeholder="Задати кількість балів" value={score} onChange={e => setScore(e.target.value)} />*/}
			{/*	<Button onClick={() => updateScore(team.id, +score)}>Додати</Button>*/}
			{/*</TeamControls>*/}
		</TeamCard>
	)
}
