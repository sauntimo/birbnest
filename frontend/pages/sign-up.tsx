import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Header from '../src/components/header';
import { db } from '../database/db';

const Index: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState<Error>();

  const signUp = async () => {
    const { user, session, error } = await db.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error);
    }

    console.log(user, session, error);
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Header />
        <FormControl margin="normal">
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input
            id="email"
            aria-describedby="email-helper-text"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <FormHelperText id="email-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl margin="normal">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            aria-describedby="password-helper-text"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <FormHelperText id="password-helper-text">
            Make it something good
          </FormHelperText>
        </FormControl>
        <Button type="submit" onClick={signUp}>
          Sign Up
        </Button>
      </Box>

      {error && (
        <Alert variant="filled" severity="error">
          {error.message}
        </Alert>
      )}
    </Container>
  );
};

export default Index;
