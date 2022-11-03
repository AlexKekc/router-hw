import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CustomersItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  border-radius: 6px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};

  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;
