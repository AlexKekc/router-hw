import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavItem } from './Sales.styled';
import { Box } from 'components/Box';

const navItems = [
  { href: 'analytics', text: 'Analytics' },
  { href: 'invoices', text: 'Invoices' },
  { href: 'deposits', text: 'Deposits' },
];

const Sales = () => {
  return (
    <Box as="main" dispaly="flex" flexDirection="column">
      <Box as="header" borderBottom="3px solid black" p={4}>
        <Box as="ul" display="flex">
          {navItems.map(({ href, text }) => (
            <NavItem key={href} to={href}>
              {text}
            </NavItem>
          ))}
        </Box>
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Sales;
