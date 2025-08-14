import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider, ServerStyleSheet } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import path from 'path';

import App from './App';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

const server = express();
const PORT = process.env.WEB_PORT || 3000;

// Middleware
server.use(helmet({
  contentSecurityPolicy: false, // Disable for development
  crossOriginEmbedderPolicy: false
}));
server.use(compression());
server.use('/static', express.static(path.join(__dirname, 'static')));
server.use('/public', express.static(path.join(__dirname, '../public')));

// SSR Route Handler
server.get('*', async (req, res) => {
  try {
    const queryClient = new QueryClient();
    const sheet = new ServerStyleSheet();
    const helmetContext = {};
    
    // Render the React app to string
    const appHtml = renderToString(
      sheet.collectStyles(
        <HelmetProvider context={helmetContext}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <StaticRouter location={req.url}>
                <App />
              </StaticRouter>
            </ThemeProvider>
          </QueryClientProvider>
        </HelmetProvider>
      )
    );
    
    // Get styled-components styles
    const styleTags = sheet.getStyleTags();
    sheet.seal();
    
    // Get helmet data
    const { helmet } = helmetContext as any;
    
    // Generate HTML template
    const html = generateHTML({
      appHtml,
      styleTags,
      helmet,
      dehydratedState: queryClient.getQueryData('*')
    });
    
    res.status(200).send(html);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

// HTML Template Generator
function generateHTML({ appHtml, styleTags, helmet, dehydratedState }: any) {
  return `
    <!DOCTYPE html>
    <html ${helmet?.htmlAttributes?.toString() || ''}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        ${helmet?.title?.toString() || '<title>ClaimTrix - 空投矩阵</title>'}
        ${helmet?.meta?.toString() || ''}
        ${helmet?.link?.toString() || ''}
        ${styleTags}
        <link rel="icon" href="/public/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      </head>
      <body ${helmet?.bodyAttributes?.toString() || ''}>
        <div id="root">${appHtml}</div>
        <script>
          window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)};
        </script>
        <script src="/static/client.js"></script>
      </body>
    </html>
  `;
}

// Start server
server.listen(PORT, () => {
  console.log(`🚀 ClaimTrix Web Server running on port ${PORT}`);
  console.log(`🔗 URL: http://localhost:${PORT}`);
});

export default server;
