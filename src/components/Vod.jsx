import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { LIVEBOX_IP } from '../utils/constants'
import { sendRequest, getUrl } from '../utils/helpers'
import netflix from '../assets/netflix.svg'

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  border-radius: 30px;

  padding: 20px 20px 16px;
  width: 150px;
  margin-top: 16px;

`

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 64px;
`

const url = getUrl(LIVEBOX_IP, 518)

export const Vod = () => {
  return (
    <FooterContainer>
      <StyledButton
        onClick={async () => {
          try {
            await sendRequest(url)
          } catch(e) {
            setTimeout(() => sendRequest(url), 300)
            console.error(e)
          }
          }
        }
      >
        <img src={netflix} height="20" alt="vod"/>
      </StyledButton>
    </FooterContainer>
  )
}
