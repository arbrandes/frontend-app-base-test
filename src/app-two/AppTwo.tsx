import { Container } from '@openedx/paragon';
import { Link, Outlet } from 'react-router-dom';

import './appTwo.scss';

const AppTwo = () => (
  <main>
    <Container className="py-5">
      <h1 className="two">App Two</h1>
      <ul>
        <li><Link to="child">View the App Two child page content</Link></li>
        <li><Link to="/">View App One</Link></li>
        <li><Link to="/three">View App Three</Link></li>
      </ul>
      <Outlet />
      <p>App two content after the outlet.</p>
    </Container>
  </main>
);

export default AppTwo;
