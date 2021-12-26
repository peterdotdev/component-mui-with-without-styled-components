import React from 'react';
import Card from '@material-ui/core/Card';
import { Divider, makeStyles } from '@material-ui/core';
import { MediaCardImageSection } from './MediaCardImageSection';
import { MediaCardContent } from './MediaCardContent';
import { MediaCardAdditionalContent } from './MediaCardAdditionalContent';
import { MediaCardFooter } from './MediaCardFooter';

const useStyles = makeStyles({
  root: {
    background: "hsl(216, 50%, 16%)",
    border: "none",
    borderRadius: "12px",
    boxShadow: "none",
    color: "hsl(0, 0%, 100%)",
    display: "flex",
    flexDirection: "column",
    height: 545,
    margin: "40px auto",
    maxWidth: 325,
  },
  divider: {
    backgroundColor: "hsl(215, 32%, 27%)",
    margin: "10px 24px 12px",
  },
});

export const MediaCard = () => {
  const classes = useStyles();
  const {divider, root} = classes;

  return (
    <Card className={root}>
      <MediaCardImageSection />
      <MediaCardContent />
      <MediaCardAdditionalContent />
      <Divider variant="middle" className={divider} />
      <MediaCardFooter />
    </Card>
  )
}