import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import CatPage from './components/CatPage.jsx';
import ContactUs from './components/ContactUs.jsx';
import CatProfile from './components/CatProfile.jsx';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path='/About' component={About}/>
                        <Route path='/Cats' component={CatPage}/>
                        <Route path='/ContactUs' component={ContactUs}/>
                    </Switch>
            </Layout>
        </App>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();