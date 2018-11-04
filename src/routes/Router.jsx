// @flow

import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from '~/components/about/About';

import Home from '~/components/Home';
import Login from '~/components/Login';
import NotFound from '~/components/NotFound';
import Publish from '~/components//Publish';
import ChangePassword from '~/components/ChangePassword';
import ViewLeasing from '~/components/ViewLeasing';
import ChangeProfile from '~/components/ChangeProfile';
import SearchPage from '~/components/SearchPage';
import Display from '~/components/Display';
import GoogleMapTest from '~/components/GoogleMapTest';
import Sample from '~/components/PopUpSample';

export default class Router extends React.Component<{}> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/display" component={Display} />
          <Route exact path="/publish" component={Publish} />
          <Route exact path="/leasing" component={ViewLeasing} />
          <Route exact path="/profile/edit" component={ChangeProfile} />
          <Route exact path="/profile/change_password" component={ChangePassword} />
          <Route exact path="/searchpage" component={SearchPage} />
          <Route exact path="/map" component={GoogleMapTest} />
          <Route exact path="/sample" component={Sample} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}