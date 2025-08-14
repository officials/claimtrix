import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AnalyticsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>数据分析 - ClaimTrix</title>
        <meta name="description" content="查看空投市场数据分析和趋势报告" />
      </Helmet>

      <PageContainer>
        <PageHeader
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PageTitle>📈 数据分析</PageTitle>
          <PageDescription>
            空投市场数据分析和趋势报告，帮助您做出明智决策
          </PageDescription>
        </PageHeader>

        <ContentArea
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <PlaceholderCard>
            <PlaceholderIcon>📊</PlaceholderIcon>
            <PlaceholderTitle>数据分析中心</PlaceholderTitle>
            <PlaceholderText>
              我们正在构建全面的空投数据分析中心。
              <br />
              即将推出详细的市场数据和趋势分析！
            </PlaceholderText>
            <FeatureList>
              <FeatureItem>📉 市场趋势分析</FeatureItem>
              <FeatureItem>💰 收益统计报告</FeatureItem>
              <FeatureItem>🔄 实时数据更新</FeatureItem>
              <FeatureItem>🎨 可视化图表</FeatureItem>
            </FeatureList>
          </PlaceholderCard>
        </ContentArea>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const PageDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
`;

const ContentArea = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

const PlaceholderCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 3rem;
  text-align: center;
  max-width: 500px;
  box-shadow: ${({ theme }) => theme.colors.shadow.lg};
`;

const PlaceholderIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
`;

const PlaceholderTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const PlaceholderText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: 2rem;
`;

const FeatureList = styled.div`
  display: grid;
  gap: 0.75rem;
`;

const FeatureItem = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export default AnalyticsPage;
