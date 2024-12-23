import {useTeamContext} from '../../../context/TeamsContext.tsx'
import {useState} from 'react'
import {TeamData} from './TeamData.tsx'
import {styled} from '@stitches/react'
import {Button, Input, Space, Typography} from 'antd'
import {PlusOutlined} from '@ant-design/icons'

const TeamsContainerStyled = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
})

const TeamsData = styled('div', {
	display: 'flex',
	alignItems: 'flex-start',
	gap: '10px',
	flexWrap: 'wrap',
	marginTop: '20px',
})
const TitleText = styled('span', {
	color: 'white',
})
export const TeamsContainer = () => {
	const {createTeam, teams} = useTeamContext()
	const [teamName, setTeamName] = useState<string>('')
	return (
		<TeamsContainerStyled>
			<Typography.Title level={5}>
				<TitleText>Додати команду</TitleText>
			</Typography.Title>
			<form
				onSubmit={e => {
					e.preventDefault()
					createTeam(teamName)
					setTeamName('')
				}}
			>
				<Space.Compact>
					<Input type="text" value={teamName} onChange={e => setTeamName(e.target.value)} />
					<Button htmlType="submit" type="primary" icon={<PlusOutlined />} />
				</Space.Compact>
			</form>
			<TeamsData>
				{teams.map(team => (
					<TeamData key={team.id} team={team} />
				))}
			</TeamsData>
		</TeamsContainerStyled>
	)
}
