import React from 'react'
import { Button } from './Button'
import { BUTTON_CODE } from '../utils/commandsMap'
import { LIVEBOX_IP } from '../utils/constants'
import { getUrl, sendRequest } from '../utils/helpers'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  border-radius: 30px;
  padding: 23px;
  width: 64px;
  height: 64px;
`


const controlsButton = [
  [
    {
      key: 'MENU',
      text: 'menu'
    },
    {
      key: 'UP',
      text: '⬆'
    },
    {
      key: 'VOL+',
      text: '🔊'
    },
  ],
  [
    {
      key: 'LEFT',
      text: '⬅'
    },
    {
      key: 'OK',
      text: 'OK'
    },
    {
      key: 'RIGHT',
      text: '➡'
    },
  ],
  [
    {
      key: 'BACK',
      text: 'back'
    },
    {
      key: 'DOWN',
      text: '⬇'
    },
    {
      key: 'VOL-',
      text: '🔈'
    },
  ],
]


const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin-bottom: 16px;
`

export const Controls = () => {
  return (
    <div style={{marginTop: '32px'}}>
      { controlsButton.map((line, indexLine) => {
        return <ButtonGrid key={indexLine}>
        {
          line.map(button => {
            const { text, key } = button
            const url = getUrl(LIVEBOX_IP, BUTTON_CODE[key])
            return (
              <StyledButton
                key={key}
                onClick={async () => await sendRequest(url)}
              >
                {text}
              </StyledButton>
            )
          })
        }

        </ButtonGrid>
      }) }
    </div>
  )
}
