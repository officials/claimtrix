import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - 页面未找到 | ClaimTrix</title>
        <meta name="description" content="抱歉，您访问的页面不存在" />
      </Helmet>

      <PageContainer>
        <ContentArea
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ErrorCard>
            <ErrorIcon
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              🔍
            </ErrorIcon>
            
            <ErrorCode>404</ErrorCode>
            <ErrorTitle>页面未找到</ErrorTitle>
            <ErrorDescription>
              抱歉，您访问的页面不存在或已被移动。
              <br />
              请检查URL是否正确，或返回首页继续浏览。
            </ErrorDescription>
            
            <ActionButtons>
              <BackButton
                to="-1"
                as={motion(Link)}
                onClick={(e) => {
                  e.preventDefault();
                  window.history.back();
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeftIcon width={20} height={20} />
                返回上一页
              </BackButton>
              
              <HomeButton
                to="/"
                as={motion(Link)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HomeIcon width={20} height={20} />
                返回首页
              </HomeButton>
            </ActionButtons>
          </ErrorCard>
        </ContentArea>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentArea = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const ErrorCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 3rem;
  text-align: center;
  box-shadow: ${({ theme }) => theme.colors.shadow.lg};
`;

const ErrorIcon = styled(motion.div)`
  font-size: 4rem;
  margin-bottom: 1.5rem;
`;

const ErrorCode = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }
`;

const ErrorTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

const ErrorDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: 2rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all ${({ theme }) => theme.transition.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.borderSecondary};
  }
`;

const HomeButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.gradient.primary};
  color: white;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all ${({ theme }) => theme.transition.fast};
  
  &:hover {
    color: white;
    box-shadow: ${({ theme }) => theme.colors.shadow.md};
  }
`;

export default NotFoundPage;
