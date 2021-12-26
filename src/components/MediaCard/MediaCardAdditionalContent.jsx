import React from 'react';
import { CardActions as AdditionalContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  additional: {
    display: "flex",
    justifyContent: "space-between",
    margin: "-30px auto -7px",
    width: "275px",
  },
  ethereumContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    height: 30,
    width: "90px",
  },
  timeContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    height: 30,
    width: "96px",
  },
  ethereumText: {
    color: "hsl(178, 100%, 50%)",
    fontFamily: "Outfit, sans-serif",
    fontSize: "16px",
    fontWeight: "400",
  },
  timeText: {
    color: "hsl(215, 51%, 70%)",
    fontFamily: "Outfit, sans-serif",
    fontSize: "16px",
    fontWeight: "300",  
  },
});

export const MediaCardAdditionalContent = () => {
  const classes = useStyles();
  const {additional, ethereumContainer, ethereumText, timeContainer, timeText} = classes;

  return (
    <AdditionalContent className={additional}>
      <div className={ethereumContainer}>
        <img src="/imgs/ethereum.svg" alt="Ethereum" />
        <p className={ethereumText}>0.041 ETH</p>
      </div>
      <div className={timeContainer}>
        <img src="/imgs/clock.svg" alt="Clock" />
        <p className={timeText}>3 days left</p>
      </div>
    </AdditionalContent>
  )
}
