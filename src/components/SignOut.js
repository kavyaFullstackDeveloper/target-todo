// src/components/SignOut.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Button, Box } from '@mui/material';

const SignOut = () => {
  const { signout } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      await signout();
      // Handle successful sign-out (e.g., redirect or display a message)
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error(error.message);
    }
  };

  return (
    <Box>
      <Button onClick={handleSignOut} variant="contained" color="primary">
        Sign Out
      </Button>
    </Box>
  );
};

export default SignOut;
