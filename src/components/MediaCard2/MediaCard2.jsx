import React from 'react';
import Card from '@material-ui/core/Card';
import { Divider } from '@material-ui/core';
import { MediaCardImageSection2 } from './MediaCardImageSection2';
import { MediaCardContent2 } from './MediaCardContent2';
import { MediaCardAdditionalContent2 } from './MediaCardAdditionalContent2';
import { MediaCardFooter2 } from './MediaCardFooter2';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';

export const MediaCard2 = () => {
  return (
    <StylesProvider injectFirst>
      <StyledCard>
        <MediaCardImageSection2 />
        <MediaCardContent2 />
        <MediaCardAdditionalContent2 />
        <StyledDivider variant="middle" />
        <MediaCardFooter2 />
      </StyledCard> 
    </StylesProvider>
  )
}

const StyledCard = styled(Card)`
  background-color: hsl(216, 50%, 16%);
  border: none;
  border-radius: 12px;
  box-shadow: none;
  color: hsl(0, 0%, 100%);
  display: flex;
  flex-direction: column;
  height: 545px;
  margin: 40px auto;
  max-width: 325px;
`
const StyledDivider = styled(Divider)`
  background-color: hsl(215, 32%, 27%);
  margin: 10px 24px 12px;
`