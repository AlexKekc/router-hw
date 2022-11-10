import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Layout from './Layout';
import InvoiceDetails from './InvoiceDetails';

const Sales = lazy(() => import('../Pages/Sales'));
const Customers = lazy(() => import('../Pages/Customers'));
const CustomerDetails = lazy(() => import('../Pages/CustomerDetails'));
const Invoices = lazy(() => import('./Invoices'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" />}></Route>
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<div>Sales index route</div>}></Route>
            <Route path="analytics" element={<div>Analytics</div>}></Route>
            <Route path="invoices" element={<Invoices />}>
              <Route index element={<div>Invoices index route</div>}></Route>
              <Route path=":invoiceId" element={<InvoiceDetails />}></Route>
            </Route>
            <Route path="deposits" element={<div>Deposits</div>}></Route>
          </Route>
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:customerId" element={<CustomerDetails />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
