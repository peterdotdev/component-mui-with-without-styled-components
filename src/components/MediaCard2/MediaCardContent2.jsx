import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';

export const MediaCardContent2 = () => {
  return (
    <StylesProvider injectFirst>
      <StyledCardContent>
        <Title>Equilibrium #3429</Title>
        <Description>
          Our Equilibrium collection promotes balance and calm.
        </Description>
      </StyledCardContent>
    </StylesProvider>
  )
}

const StyledCardContent = styled(CardContent)`
  margin: -14px 10px 0;
  width: 276px;
`
const Title = styled.h2`
display: inline;
font-family: Outfit, sans-serif;
font-size: 21px;
font-weight: 600;
transition: .5s ease;
&:hover {
  color: hsl(178, 100%, 50%);
  cursor: pointer;
}
`
const Description = styled.p`
  color: hsl(215, 51%, 70%);
  font-family: Outfit, sans-serif;
  font-weight: 300;
  line-height: 1.62rem; 
  opacity: 0.9;
`