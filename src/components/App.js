import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import HomeComponent from './Home';
import AboutComponent from './About';
import WinsCountComponent from './WinsCount';
import HeaderComponent from './Header';
import PageNotFound from './PageNotFound';
import BottomNavComponent from './BottomNav';
import './App.scss';

export default function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/wins" component={WinsCountComponent} />
        <Route component={PageNotFound} />
      </Switch>
      <BottomNavComponent />
    </div>
  );
}
