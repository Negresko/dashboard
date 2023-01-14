import React from 'react';

import Layout from './components/Layout/Layout';

import GlobalStyles from './styles/GlobalStyles';

import { ThemeProvider } from 'styled-components';

import dark from './styles/themes/dark';

import Dashboard from './pages/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <Dashboard/>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
