import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Layout from '@components/Layout';
import HomePage from '@pages/HomePage';
import AirdropsPage from '@pages/AirdropsPage';
import AirdropDetailPage from '@pages/AirdropDetailPage';
import AnalyticsPage from '@pages/AnalyticsPage';
import NotFoundPage from '@pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>ClaimTrix - 空投矩阵</title>
        <meta name="description" content="发现、追踪和管理各种加密货币空投机会的智能平台" />
        <meta name="keywords" content="空投,加密货币,DeFi,区块链,Web3" />
        <meta property="og:title" content="ClaimTrix - 空投矩阵" />
        <meta property="og:description" content="发现、追踪和管理各种加密货币空投机会的智能平台" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/airdrops" element={<AirdropsPage />} />
          <Route path="/airdrops/:id" element={<AirdropDetailPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
