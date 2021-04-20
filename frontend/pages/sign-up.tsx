import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from '../src/components/header';
import { db } from '../database/db';
import { Button } from '@material-ui/core';

const Index: React.FC = () => {
  const signUp = async () => {
    const { user, session, error } = await db.auth.signUp({
      email: 'test@sauntimo.org',
      password: 'example-password',
    });

    console.log(user, session, error);
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Header />
        <Button onClick={signUp}>Sign Up</Button>
      </Box>
    </Container>
  );
};

export default Index;
