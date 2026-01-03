import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';  
import { router } from './router.tsx';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "./components/ui/toaster";

// Create the client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider value={defaultSystem}>
      <Toaster />
      <RouterProvider router={router} />
    </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>
);
