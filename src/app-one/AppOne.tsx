import { getConfig } from '@openedx/frontend-base';
import { Container } from '@openedx/paragon';
import { Link, Outlet } from 'react-router-dom';

import './appOne.css';

const AppOne = () => (
  <main>
    <Container className="py-5">
      <h1 className="one">App One</h1>
      <p>This module is acting as a homepage because it was mounted at the root.</p>
      <p>The site's name is {getConfig().siteName}!</p>
      <ul>
        <li><Link to="child">View the child page content</Link></li>
        <li><Link to="/two">View App Two</Link></li>
        <li><Link to="/three">View App Three</Link></li>
      </ul>
      <Outlet />
      <p>App one content after the outlet.</p>
    </Container>
  </main>
);

export default AppOne;
