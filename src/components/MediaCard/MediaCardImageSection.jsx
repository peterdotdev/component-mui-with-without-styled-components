import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  mediaContainer: {
    borderRadius: "6px",
    height: 278,
    margin: "24px auto",
    position: "relative",
    width: "86%",
  },
  media: {
    borderRadius: "6px",
    display: "block",
    height: 278,
    margin: "0",
    opacity: "1",
    width: "100%",
  },
  block: {
    borderRadius: "6px",
    height: "278px",
    left: "50%",
    opacity: 0,
    position: "absolute",
    textAlign: "center",
    top: "50%",
    transform: "translate(-50%, -50%)",
    transition: ".65s ease",
    width: "100%",
    "&:hover": {
    cursor: "pointer",
      background: "rgba(0,255,247,0.5)",
      opacity: 1,
    },
  },
  image: {
    marginTop: "39%",
  },
});

export const MediaCardImageSection = () => {
  const classes = useStyles();
  const {block, image, media, mediaContainer} = classes;

  return (
    <div className={mediaContainer}>
      <img className={media} src="/imgs/equilibrium.jpg" alt="Equilibrium" />
      <div className={block}>
        <img className={image} src="imgs/icon-view.svg" alt="View" />
      </div>
  </div>
  )
}
