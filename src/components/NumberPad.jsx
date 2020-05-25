import React from 'react'
import { BUTTON_CODE } from '../utils/commandsMap'
import { LIVEBOX_IP } from '../utils/constants'
import { getUrl, sendRequest } from '../utils/helpers'
import { Button } from './Button'
import styled from 'styled-components'

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  border-radius: 30px;
`

const StyledNumberPad = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-column-gap: 10px;
  grid-row-gap: 14px;

  ${StyledButton} {
    display: flex;
    justify-content: center;
    align-items: center;
  
    padding: 25px;
    width: 64px;
    height: 64px;

    font-size: 18px;

    &:last-child {
      grid-column: 2 / 2
    }
  }
`

export const NumberPad = () => {
  return (
    <StyledNumberPad>
      { numbers.map((number, i) => {
        const url = getUrl(LIVEBOX_IP, BUTTON_CODE[number])
        return (
          <StyledButton
            key={i}
            onClick={async () => await sendRequest(url)}
          >
            {number}
          </StyledButton>
        )
      }) }
    </StyledNumberPad>
  )
}
