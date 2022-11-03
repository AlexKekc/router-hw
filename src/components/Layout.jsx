import { Box } from './Box';
import { AppBar } from './AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <Box display="grid" gridTemplateColumns="200px 1fr">
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Layout;
