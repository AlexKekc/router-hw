import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getInvoiceById } from './../fakeApi';
import { Box } from './Box';

const InvoiceDetails = () => {
  const { invoiceId } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    getInvoiceById(invoiceId).then(setInvoice);
  }, [invoiceId]);

  if (!invoice) {
    return null;
  }

  const { recipient, account, total, date } = invoice;

  return (
    <Box as="div" p={5}>
      <Box as="ul">
        <li>
          <b>Recipient:</b> {recipient}
        </li>
        <li>
          <b>Account number:</b> {account}
        </li>
        <li>
          <b>Total due:</b> {total}$
        </li>
        <li>
          <b>Invoice date:</b> {new Date(date.created).toLocaleDateString()}
        </li>
        <li>
          <b>Due date:</b> {new Date(date.due).toLocaleDateString()}
        </li>
      </Box>
    </Box>
  );
};

export default InvoiceDetails;
