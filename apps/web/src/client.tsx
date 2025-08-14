import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

// Create React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: false,
      retry: 2
    }
  }
});

// Hydrate the React app on the client side
const container = document.getElementById('root');
if (container) {
  hydrateRoot(
    container,
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

// Hot Module Replacement for development
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}
