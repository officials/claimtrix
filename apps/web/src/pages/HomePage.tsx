import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Hero from '@components/Hero';
import FeaturedAirdrops from '@components/FeaturedAirdrops';
import Stats from '@components/Stats';
import Newsletter from '@components/Newsletter';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>ClaimTrix - 空投矩阵 | 发现最新的加密货币空投机会</title>
        <meta 
          name="description" 
          content="ClaimTrix是领先的空投发现平台，帮助您追踪、分析和管理加密货币空投机会。支持多链，实时更新，智能提醒。" 
        />
        <meta name="keywords" content="空投,加密货币,DeFi,区块链,Web3,Arbitrum,Optimism,Polygon" />
      </Helmet>

      <HomeContainer>
        {/* Hero Section */}
        <HeroSection>
          <Hero />
        </HeroSection>

        {/* Stats Section */}
        <StatsSection>
          <Stats />
        </StatsSection>

        {/* Featured Airdrops */}
        <FeaturedSection>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            🔥 热门空投
          </SectionTitle>
          <FeaturedAirdrops />
          <ViewAllButton
            to="/airdrops"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            查看所有空投 →
          </ViewAllButton>
        </FeaturedSection>

        {/* Features Section */}
        <FeaturesSection>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            🚀 平台优势
          </SectionTitle>
          <FeaturesGrid>
            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <FeatureIcon>🎯</FeatureIcon>
              <FeatureTitle>精准发现</FeatureTitle>
              <FeatureDescription>
                实时监控各大公链的空投机会，第一时间发现新项目
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <FeatureIcon>📊</FeatureIcon>
              <FeatureTitle>数据分析</FeatureTitle>
              <FeatureDescription>
                深度分析空投价值，提供收益预测和风险评估
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <FeatureIcon>🔄</FeatureIcon>
              <FeatureTitle>自动化工具</FeatureTitle>
              <FeatureDescription>
                智能化空投参与流程，批量操作，提高效率
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <FeatureIcon>🔔</FeatureIcon>
              <FeatureTitle>智能提醒</FeatureTitle>
              <FeatureDescription>
                重要空投提醒，领取截止日期通知，不错过任何机会
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesSection>

        {/* Newsletter Section */}
        <NewsletterSection>
          <Newsletter />
        </NewsletterSection>
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  margin-bottom: 4rem;
`;

const StatsSection = styled.section`
  margin-bottom: 4rem;
`;

const FeaturedSection = styled.section`
  margin-bottom: 4rem;
  text-align: center;
`;

const FeaturesSection = styled.section`
  margin-bottom: 4rem;
  text-align: center;
`;

const NewsletterSection = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    margin-bottom: 1.5rem;
  }
`;

const ViewAllButton = styled(motion(Link))`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.gradient.primary};
  color: white;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  transition: all ${({ theme }) => theme.transition.fast};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.colors.shadow.lg};
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FeatureCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.colors.shadow.sm};
  transition: all ${({ theme }) => theme.transition.normal};
  
  &:hover {
    box-shadow: ${({ theme }) => theme.colors.shadow.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

export default HomePage;
