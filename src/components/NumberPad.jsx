import React from 'react'
import { BUTTON_CODE } from '../utils/commandsMap'
import { LIVEBOX_IP } from '../utils/constants'
import { getUrl, sendRequest } from '../utils/helpers'
import { Button } from './Button'
import styled from 'styled-components'
import disney from '../assets/disney.svg'
import netflix from '../assets/netflix.svg'


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'netflix', 0, 'disney']


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
  }
`

const vodClick = async ([number1, number2]) => {
  try {
    await sendRequest(number1)
    setTimeout(() => sendRequest(number2), 300)
  } catch(e) {
    setTimeout(() => sendRequest(number2), 300)
    console.error(e)
  }
}

const getUrlsFromNumbers = (array) => array.map(e => getUrl(LIVEBOX_IP, BUTTON_CODE[e]))

const vods = {
  netflix: getUrlsFromNumbers([6, 6]),
  disney: getUrlsFromNumbers([6, 8])
}
const images = {
  disney: {
    img: disney,
    height: 50
  },
  netflix: {
    img: netflix,
    height: 25
  }
}

export const NumberPad = () => {
  return (
    <StyledNumberPad>
      { numbers.map((number, i) => {
        const url = getUrl(LIVEBOX_IP, BUTTON_CODE[number])
        return (
          <StyledButton
            key={i}
            onClick={async () => {
              if (typeof number === 'string') {
                await vodClick(vods[number])
              } else {
                await sendRequest(url);
              }
            }}
            onTouchStart={() => ({})}
          >
            {typeof number === 'string' ? (
              <img src={images[number].img} height={images[number].height} alt="vod"/>
            ) : (
              <>
              {number}
              </>
            )}
          </StyledButton>
        )
      }) }
    </StyledNumberPad>
  )
}
