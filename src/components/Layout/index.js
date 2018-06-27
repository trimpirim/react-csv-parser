import React from 'react';

const Layout = ({ route, ...props }) => (
  <div style={{ height: '100%' }}>
    {route.main && <route.main key="main" {...props} />}
  </div>
);

export default Layout;
