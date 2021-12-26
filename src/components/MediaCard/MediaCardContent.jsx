import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  content: {
    margin: "-14px 10px 0",
    width: "276px",
  },
  title: {
    display: "inline",
    fontFamily: "Outfit, sans-serif",
    fontSize: "21px",
    fontWeight: "600",
    transition: ".5s ease",
    '&:hover': {
      color: "hsl(178, 100%, 50%)",
      cursor: "pointer",
    },
  },
  description: {
    color: "hsl(215, 51%, 70%)",
    fontFamily: "Outfit, sans-serif",
    fontWeight: "300",
    lineHeight: "1.62rem", 
    opacity: "0.9",
  },
});

export const MediaCardContent = () => {
  const classes = useStyles();
  const { content, description, title } = classes;

  return (
    <CardContent className={content}>
      <h2 className={title}>Equilibrium #3429</h2>
      <p className={description}>
        Our Equilibrium collection promotes balance and calm.
      </p>
  </CardContent>
  )
}
