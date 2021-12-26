import React from "react";
import { MediaCard } from "./components/MediaCard/MediaCard";
import { MediaCard2 } from "./components/MediaCard2/MediaCard2";
import { StylesProvider } from '@material-ui/core/styles';

export const App = () => {
  return (
    <StylesProvider injectFirst>
      <div style={{display:"flex", gap:"24px"}}>
        <MediaCard />
        <MediaCard2 />
      </div>
    </StylesProvider>
  );
};
