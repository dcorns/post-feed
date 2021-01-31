import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/presentations/home/Home';
import About from './components/presentations/about/About';
import Posts from './components/containers/posts/Posts';
import Header from './components/presentations/header/Header';
import ErrorPage from './components/presentations/error-page/ErrorPage';
function App() {
  return (
    <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path={"/about"} component={About}/>
            <Route path={"/posts"} component={Posts}/>
            <Route component={ErrorPage}/>
        </Switch>
    </div>
  );
}

export default App;
