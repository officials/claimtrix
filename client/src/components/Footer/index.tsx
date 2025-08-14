import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>
            <LogoIcon>🎯</LogoIcon>
            <LogoText>ClaimTrix</LogoText>
          </FooterLogo>
          <FooterDescription>
            空投矩阵平台，帮助您发现和管理加密货币空投机会。
          </FooterDescription>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>快速链接</FooterTitle>
          <FooterLinks>
            <FooterLink to="/">首页</FooterLink>
            <FooterLink to="/airdrops">空投列表</FooterLink>
            <FooterLink to="/analytics">数据分析</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>关于我们</FooterTitle>
          <FooterLinks>
            <FooterExternalLink href="https://github.com/officials/claimtrix" target="_blank">
              GitHub
            </FooterExternalLink>
            <FooterExternalLink href="#" target="_blank">
              Twitter
            </FooterExternalLink>
            <FooterExternalLink href="#" target="_blank">
              Discord
            </FooterExternalLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>联系方式</FooterTitle>
          <ContactInfo>
            <ContactItem>support@claimtrix.com</ContactItem>
            <ContactItem>商务合作: partnerships@claimtrix.com</ContactItem>
          </ContactInfo>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <Copyright>
          © 2024 ClaimTrix. All rights reserved.
        </Copyright>
        <BottomLinks>
          <BottomLink href="#">隐私政策</BottomLink>
          <BottomLink href="#">服务条款</BottomLink>
        </BottomLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    padding: 2rem 1rem 1rem;
    gap: 1.5rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const LogoIcon = styled.span`
  font-size: 1.5rem;
`;

const LogoText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  background: ${({ theme }) => theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const FooterDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transition.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FooterExternalLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transition.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactItem = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;

const Copyright = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1rem;
  }
`;

const BottomLink = styled.a`
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  transition: color ${({ theme }) => theme.transition.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export default Footer;
