import { Flex } from '@mantine/core'
import { Typography } from 'components/Typography'
import { useCreateEntityState } from 'hooks/createEntity'
import { Button } from 'pages/CreateEntity/Components'
import React, { useMemo } from 'react'
import { SetupActionsForm } from './SetupActionsForm'
import { useNavigate, useParams } from 'react-router-dom'

const SetupActions: React.FC = () => {
  const navigate = useNavigate()
  const { entityId, coreAddress } = useParams<{ entityId: string; coreAddress: string }>()
  const { proposal, updateProposal } = useCreateEntityState()

  const actions = useMemo(() => proposal?.actions ?? [], [proposal])

  const handleBack = () => {
    navigate(`/entity/${entityId}/dashboard/governance/${coreAddress}/create/setup`)
  }
  const handleContinue = () => {
    navigate(`/entity/${entityId}/dashboard/governance/${coreAddress}/create/review`)
  }

  return (
    <Flex w={'100%'} direction='column' gap={32} justify={'center'}>
      <Typography variant='secondary' size='2xl'>
        Create new proposal
      </Typography>

      <SetupActionsForm actions={actions} setActions={(actions) => updateProposal({ ...proposal, actions })} />

      <Flex w='100%' justify={'flex-start'} gap={4}>
        <Button variant='secondary' onClick={handleBack}>
          Back
        </Button>
        <Button onClick={handleContinue}>Continue</Button>
      </Flex>
    </Flex>
  )
}

export default SetupActions
