import React from "react";
import {styled} from "@stitches/react";

const Container = styled('div', {
  width: '100%',
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  flex: '1',
})

export const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
}