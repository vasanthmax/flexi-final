import React, { useEffect, useState } from 'react';
import Navbar from './../components/Navbar';
import IndexPage from './index';
import AboutPage from './about';
import FaqPage from './faq';
import PricingPage from './pricing';
import ContactPage from './contact';
import DashboardPage from './dashboard';
import SettingsPage from './settings';
import PurchasePage from './purchase';
import AuthPage from './auth';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
  useHistory,
} from 'react-router-dom';
import FirebaseActionPage from './firebase-action.js';
import NotFoundPage from './not-found.js';
import Footer from './../components/Footer';
import './../util/analytics.js';
import { AuthProvider } from './../util/auth.js';
import { ThemeProvider } from './../util/theme.js';
import { QueryClientProvider } from './../util/db.js';
import UserArea from '../pages/userArea';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import FlipCardGet from '../pages/FlipCardPage';
import PricingCardGet from '../pages/PricingCardPage';
import NormalCardGet from '../pages/NormalCard';
import Dashboard from '../pages/dashboardtable';
import UserAreaUpdate from '../pages/userareaupdate';
function App(props) {
  const history = useHistory();
  const locationl = window.location.pathname;
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <Router history={history}>
          {locationl === '/flip' ? null : locationl ===
            '/normal' ? null : locationl === '/pricing' ? null : (
            <Navbar
              color='default'
              logo='https://files.secure.website/wscfus/10639594/28914209/2.svg'
              logoInverted='https://files.secure.website/wscfus/10639594/28914211/copy-of-copy-of-untitled.svg'
            />
          )}

          <Switch>
            <Route exact path='/' component={IndexPage} />

            <Route exact path='/about' component={AboutPage} />

            <Route exact path='/faq' component={FaqPage} />

            <Route exact path='/pricingpage' component={PricingPage} />

            <Route exact path='/contact' component={ContactPage} />

            <Route exact path='/flip' component={FlipCardGet} />
            <Route exact path='/pricing' component={PricingCardGet} />
            <Route exact path='/normal' component={NormalCardGet} />
            <Route exact path='/userarea' component={UserArea} />

            <Route exact path='/dashboard' component={Dashboard} />
            <Route path='/update/:id' component={UserAreaUpdate} />
            <Route exact path='/settings/:section' component={SettingsPage} />

            <Route exact path='/purchase/:plan' component={PurchasePage} />

            <Route exact path='/auth/:type' component={AuthPage} />

            <Route
              exact
              path='/firebase-action'
              component={FirebaseActionPage}
            />

            <Route component={NotFoundPage} />
          </Switch>
          {locationl === '/flip' ? null : locationl ===
            '/normal' ? null : locationl === '/pricing' ? null : (
            <Footer
              bgColor='light'
              size='normal'
              bgImage=''
              bgImageOpacity={1}
              description='google sheets stylized'
              copyright='© 2020 flexi.cards'
              logo='https://files.secure.website/wscfus/10639594/28914209/2.svg'
              logoInverted='https://files.secure.website/wscfus/10639594/28914211/copy-of-copy-of-untitled.svg'
              sticky={true}
            />
          )}
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
