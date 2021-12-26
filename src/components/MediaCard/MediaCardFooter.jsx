import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  footerContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-start",
    gap: "14px",
    marginLeft: "24px",
    marginTop: "4px",
  },
  imageContainer: {
    border: "1px solid white",
    borderRadius: "50%",
  },
  textContainer: {
    color: "hsl(215, 51%, 70%)",
    fontFamily: "Outfit, sans-serif",
    fontSize: "15px",
    fontWeight: "300",
  },
  author: {
    color: "hsl(0, 0%, 100%)",
    transition: ".5s ease",
    '&:hover': {
      color: "hsl(178, 100%, 50%)",
      cursor: "pointer",
    },
  }
});

export const MediaCardFooter = () => {
  const classes = useStyles();
  const {author, imageContainer, footerContainer, textContainer} = classes;

  return (
    <div className={footerContainer}>
      <div className={imageContainer}>
        <img src="/imgs/image-avatar.png" alt="avatar" height="28" width="30"/>
      </div>
      <div className={textContainer}>
        <span>Creation of&nbsp;</span>
        <span className={author}>Jules Wyvern</span>
      </div>
    </div>
  )
}
