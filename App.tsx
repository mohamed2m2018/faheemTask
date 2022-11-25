import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {QueryClient, QueryClientProvider} from 'react-query';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: true,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  );
};

export default App;
