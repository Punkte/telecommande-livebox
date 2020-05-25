import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { LIVEBOX_IP } from '../utils/constants'
import { sendRequest, getUrl } from '../utils/helpers'
import { BUTTON_CODE } from '../utils/commandsMap'

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  border-radius: 30px;

  padding: 25px;
  width: 64px;
  height: 64px;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 64px;
`

const url = getUrl(LIVEBOX_IP, BUTTON_CODE['ON/OFF'])

export const Header = () => {
  return (
    <HeaderContainer>
      <StyledButton onClick={async () => await sendRequest(url)}>O</StyledButton>
    </HeaderContainer>
  )
}
