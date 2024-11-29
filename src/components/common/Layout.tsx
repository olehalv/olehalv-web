import { ReactNode } from 'react';

import './layout.css';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="layout">
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
