import { useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCustomerById } from 'fakeApi';
import { Box } from '../components/Box';

const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getCustomerById(Number(customerId)).then(setCustomer);
  }, [customerId]);

  if (!customer) {
    return null;
  }

  const { name, id } = customer;
  const backLinkHref = location.state?.from ?? '/customers';

  return (
    <Box as="main" p={5}>
      <p>Customer name: {name}</p>
      <p>Customer ID: {id}</p>
      <Link to={backLinkHref}>Back to customers list</Link>
    </Box>
  );
};

export default CustomerDetails;
