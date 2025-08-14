import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroText
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroTitle>
            发现下一个
            <GradientText>空投机会</GradientText>
          </HeroTitle>
          <HeroSubtitle>
            ClaimTrix 帮助您追踪、分析和管理加密货币空投机会
            <br />
            支持多链，实时更新，智能提醒
          </HeroSubtitle>
          <CTAButtons>
            <PrimaryButton
              to="/airdrops"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 探索空投
            </PrimaryButton>
            <SecondaryButton
              to="/portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📊 查看收益
            </SecondaryButton>
          </CTAButtons>
        </HeroText>

        <HeroVisual
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FloatingCard
            animate={{
              y: [0, -10, 0],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <CardIcon>🎯</CardIcon>
            <CardTitle>精准发现</CardTitle>
            <CardValue>$12,500</CardValue>
          </FloatingCard>

          <FloatingCard
            animate={{
              y: [0, -15, 0],
              rotate: [0, -1, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            style={{ top: '20%', right: '10%' }}
          >
            <CardIcon>📈</CardIcon>
            <CardTitle>收益追踪</CardTitle>
            <CardValue>+156%</CardValue>
          </FloatingCard>

          <FloatingCard
            animate={{
              y: [0, -8, 0],
              rotate: [0, 0.5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            style={{ bottom: '15%', left: '15%' }}
          >
            <CardIcon>⚡</CardIcon>
            <CardTitle>自动化</CardTitle>
            <CardValue>24/7</CardValue>
          </FloatingCard>
        </HeroVisual>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.backgroundSecondary} 100%
  );
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at top left,
      ${({ theme }) => theme.colors.primary}08 0%,
      transparent 50%
    );
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const HeroText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  color: ${({ theme }) => theme.colors.text};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`;

const GradientText = styled.span`
  background: ${({ theme }) => theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(motion(Link))`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.gradient.primary};
  color: white;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  box-shadow: ${({ theme }) => theme.colors.shadow.md};
  transition: all ${({ theme }) => theme.transition.fast};
  
  &:hover {
    box-shadow: ${({ theme }) => theme.colors.shadow.lg};
  }
`;

const SecondaryButton = styled(motion(Link))`
  padding: 1rem 2rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  transition: all ${({ theme }) => theme.transition.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const HeroVisual = styled(motion.div)`
  position: relative;
  height: 400px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 300px;
  }
`;

const FloatingCard = styled(motion.div)`
  position: absolute;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.colors.shadow.lg};
  backdrop-filter: blur(8px);
  min-width: 120px;
  text-align: center;
  
  &:nth-child(1) {
    top: 10%;
    left: 20%;
  }
`;

const CardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const CardTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.25rem;
`;

const CardValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

export default Hero;
