import {useTeamContext} from '../../../context/TeamsContext.tsx'
import {Team} from '../../../types/team.ts'
import {styled} from '@stitches/react'
import {Button, Flex, Input, InputNumber} from 'antd'
import {useQuizQuestions} from '../../../context/useQuizQuestions.tsx'
import {useState} from 'react'
import {MinusOutlined, PlusOutlined} from '@ant-design/icons'

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

const stopPropagation = (cb: () => void) => (e: React.MouseEvent) => {
	e.stopPropagation()
	cb()
}

const Title = styled('h3', {
	margin: 0,
})

export const TeamData: React.FC<{team: Team}> = ({team}) => {
	const {selectTeam, selectedTeamId, updateScore, addPoints} = useTeamContext()
	const {currentRound} = useQuizQuestions()
	const [bet, setBet] = useState<string>('')
	return (
		<TeamCard onClick={() => selectTeam(team.id)} selected={selectedTeamId === team.id}>
			<Title>{team.name}</Title>
			<Flex align="center">
				<strong>Рахунок:</strong>{' '}
				<Input
					type="text"
					variant="borderless"
					value={team.score}
					onChange={e => updateScore(team.id, +e.target.value)}
					onClick={e => e.stopPropagation()}
				/>
			</Flex>
			{currentRound === 4 && (
				<Flex gap="small">
					<strong>Ставка:</strong>{' '}
					<InputNumber
						size="small"
						onClick={e => e.stopPropagation()}
						value={bet}
						onChange={value => setBet(value === null ? '' : value)}
					/>
					<Button
						variant="solid"
						size="small"
						type="primary"
						shape="circle"
						onClick={stopPropagation(() => addPoints(team.id, +bet))}
						icon={<PlusOutlined />}
					/>{' '}
					<Button
						size="small"
						color="danger"
						variant="solid"
						shape="circle"
						onClick={stopPropagation(() => {
							addPoints(team.id, +`-${bet}`)
						})}
						icon={<MinusOutlined />}
					/>
				</Flex>
			)}
		</TeamCard>
	)
}
