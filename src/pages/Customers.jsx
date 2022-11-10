import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getCustomers } from '../fakeApi';
import { SearchBox } from '../components/SearchBox';
import { useSearchParams } from 'react-router-dom';
import { Box } from '../components/Box';
import { CustomersItem } from './Customers.styled';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const paramsFilter = searchParams.get('filter') ?? '';

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  const visibleCustomers = useMemo(() => {
    return customers.filter(customer =>
      customer.name.toLowerCase().includes(paramsFilter.toLowerCase())
    );
  }, [customers, paramsFilter]);

  return (
    <Box as="main" p={5}>
      <SearchBox value={paramsFilter} onChange={changeFilter} />
      {customers.length > 0 && (
        <ul>
          {visibleCustomers.map(({ id, name }) => (
            <li key={id}>
              <CustomersItem to={`${id}`} state={{ from: location }}>
                {name}
              </CustomersItem>
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
};

export default Customers;
