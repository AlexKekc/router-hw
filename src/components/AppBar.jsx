import {
  BsStack,
  BsWalletFill,
  BsBriefcaseFill,
  BsChatLeftTextFill,
  BsPersonLinesFill,
} from 'react-icons/bs';
import { Box } from './Box';
import { NavItem } from './AppBar.styled';

const navItems = [
  { href: 'dashboard', text: 'Dashboard', icon: BsStack },
  { href: 'sales', text: 'Sales', icon: BsWalletFill },
  { href: 'reports', text: 'Reports', icon: BsBriefcaseFill },
  { href: 'feedback', text: 'Feedback', icon: BsChatLeftTextFill },
  { href: 'customers', text: 'Customers', icon: BsPersonLinesFill },
];

export const AppBar = () => {
  return (
    <Box as="header" p={4} height="100vh" borderRight="3px solid black">
      <Box as="nav" display="flex" flexDirection="column">
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavItem key={href} to={href}>
            <Icon />
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};
