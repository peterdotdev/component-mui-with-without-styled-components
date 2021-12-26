import React from 'react';
import { CardActions as AdditionalContent } from '@material-ui/core';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';

export const MediaCardAdditionalContent2 = () => {
  return (
    <StylesProvider injectFirst>
      <StyledAdditionalContent>
        <EthereumContainer>
          <img src="/imgs/ethereum.svg" alt="Ethereum" />
          <EthereumText>0.041 ETH</EthereumText>
        </EthereumContainer>
        <TimeContainer>
          <img src="/imgs/clock.svg" alt="Clock" />
          <TimeText>3 days left</TimeText>
        </TimeContainer>
      </StyledAdditionalContent>
    </StylesProvider>
  )
}

const StyledAdditionalContent = styled(AdditionalContent)`
  display: flex;
  justify-content: space-between;
  margin: -30px auto -7px;
  width: 275px;
`
const EthereumContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 30px;
  width: 90px;
`
const TimeContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 30px;
  width: 96px;
`
const EthereumText = styled.p`
  color: hsl(178, 100%, 50%);
  font-family: Outfit, sans-serif;
  font-size: 16px;
  font-weight: 400;
`
const TimeText = styled.p`
  color: hsl(215, 51%, 70%);
  font-family: Outfit, sans-serif;
  font-size: 16px;
  font-weight: 300;
`