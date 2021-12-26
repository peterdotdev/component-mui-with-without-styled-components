import React from 'react';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';

export const MediaCardFooter2 = () => {
  return (
    <StylesProvider injectFirst>
      <FooterContainer>
        <ImageContainer>
          <img src="/imgs/image-avatar.png" alt="avatar" height="28" width="30"/>
        </ImageContainer>
        <TextContainer>
          <span>Creation of&nbsp;</span>
          <Author>Jules Wyvern</Author>
        </TextContainer>
      </FooterContainer>
    </StylesProvider>
  )
}

const FooterContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  gap: 14px;
  margin-left: 24px;
  margin-top: 4px;
`
const ImageContainer = styled.div`
  border: 1px solid white;
  border-radius: 50%;
`
const TextContainer = styled.div`
  color: hsl(215, 51%, 70%);
  font-family: Outfit, sans-serif;
  font-size: 15px;
  font-weight: 300;
`
const Author = styled.span`
  color: hsl(0, 0%, 100%);
  transition: .5s ease;
  &:hover {
    color: hsl(178, 100%, 50%);
    cursor: pointer;
  };
`