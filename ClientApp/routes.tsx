import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import TwoCounters from './components/TwoCounters';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ TwoCounters } />
    <Route path='/fetchdata/:startDateIndex?' component={ FetchData } />
</Layout>;
