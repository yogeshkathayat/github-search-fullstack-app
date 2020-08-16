import React from 'react';
import {Box } from '@chakra-ui/core';
import {Feed} from './components/feed';

function App(){ 

  return (
      <Box width='100vw' minHeight={'100vh'} bg="gray.100">
             <Feed />
      </Box>
      );
}

export default App;
