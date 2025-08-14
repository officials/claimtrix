import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/airdrops', label: '空投列表' },
    { path: '/analytics', label: '数据分析' }
  ];

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          <LogoIcon>🎯</LogoIcon>
          <LogoText>ClaimTrix</LogoText>
        </Logo>

        <DesktopNav>
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              to={item.path}
              $isActive={location.pathname === item.path}
            >
              {item.label}
            </NavItem>
          ))}
        </DesktopNav>

        <HeaderActions>
          <ConnectButton>
            连接钱包
          </ConnectButton>
          
          <MobileMenuButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            $isOpen={isMenuOpen}
          >
            {isMenuOpen ? (
              <XMarkIcon width={24} height={24} />
            ) : (
              <Bars3Icon width={24} height={24} />
            )}
          </MobileMenuButton>
        </HeaderActions>
      </HeaderContent>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <MobileNavItem
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                $isActive={location.pathname === item.path}
              >
                {item.label}
              </MobileNavItem>
            ))}
            
            <MobileConnectButton onClick={() => setIsMenuOpen(false)}>
              连接钱包
            </MobileConnectButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  backdrop-filter: blur(8px);
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
`;

const LogoIcon = styled.span`
  font-size: 2rem;
`;

const LogoText = styled.span`
  background: ${({ theme }) => theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavItem = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  color: ${({ theme, $isActive }) => $isActive ? theme.colors.primary : theme.colors.textSecondary};
  font-weight: ${({ $isActive }) => $isActive ? 600 : 400};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transition.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ConnectButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.gradient.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all ${({ theme }) => theme.transition.fast};
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.colors.shadow.md};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileMenuButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  background: none;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const MobileMenu = styled(motion.nav)`
  display: none;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const MobileNavItem = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  color: ${({ theme, $isActive }) => $isActive ? theme.colors.primary : theme.colors.text};
  padding: 1rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-weight: ${({ $isActive }) => $isActive ? 600 : 400};
  
  &:hover {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }
`;

const MobileConnectButton = styled.button`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.gradient.primary};
  color: white;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-align: left;
`;

export default Header;
