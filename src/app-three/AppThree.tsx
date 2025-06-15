import { Container } from '@openedx/paragon';
import { Link, Outlet } from 'react-router-dom';

import './appThree.scss';

export default function AppThree() {
  return (
    <main>
      <Container className="py-5">
        <h1 className="three">App Three</h1>
        <ul>
          <li><Link to="child">View the App Three child page content</Link></li>
          <li><Link to="/">View App One</Link></li>
          <li><Link to="/two">View App Two</Link></li>
        </ul>
        <Outlet />
        <p>App three content after the outlet.</p>
      </Container>
    </main>
  )
}
