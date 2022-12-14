import { useState, useEffect } from 'react';
import { Box } from './Box';
import { getInvoices } from './../fakeApi';
import { NavItem } from './Invoices.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices().then(setInvoices);
  }, []);

  return (
    <Box display="flex">
      <Box as="aside" borderRight="3px solid black" height="100vh" p={4}>
        {invoices.map(({ id }) => (
          <NavItem key={id} to={`${id}`}>
            {id}
          </NavItem>
        ))}
      </Box>
      <Suspense>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Invoices;
