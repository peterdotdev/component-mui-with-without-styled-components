import React from 'react';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';

export const MediaCardImageSection2 = () => {
  return (
    <StylesProvider injectFirst>
      <MediaContainer>
        <Media src="/imgs/equilibrium.jpg" alt="Equilibrium" />
        <Block>
          <Image src="imgs/icon-view.svg" alt="View" />
        </Block>
      </MediaContainer>
    </StylesProvider>
  )
}

const MediaContainer = styled.div`
  border-radius: 6px;
  height: 278px;
  margin: 24px auto;
  position: relative;
  width: 86%;
`
const Media = styled.img`
  border-radius: 6px;
  display: block;
  height: 278px;
  margin: 0;
  opacity: 1;
  width: 100%;
`
const Block = styled.div`
  border-radius: 6px;
  height: 278px;
  left: 50%;
  opacity: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: .65s ease;
  width: 100%;
  &:hover {
    cursor: pointer;
    background: rgba(0,255,247,0.5);
    opacity: 1;
  };
`
const Image = styled.img`
  margin-top: 39%;
`