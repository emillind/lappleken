import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Splash from './components/Splash'
import NewGame from './components/NewGame'
import JoinGame from './components/JoinGame'
import Header from './components/Header'
import EnterGame from './components/EnterGame'
import './App.css';

class App extends Component {
  render() {
    return (
      <Routes />
    )
  }
}

const Routes = () => (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Route path='/game/:id/enter' component={EnterGame}/>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={Splash} />
            <Route exact path='/newgame' component={NewGame} />
            <Route exact path='/joingame' component={JoinGame} />
          </Switch>
        </div>
      </Switch>
    </BrowserRouter>
  </Layout>
)

const Layout = ({ children }) => (
  <div className='App'>
    { children }
  </div>
)

export default hot(module)(App);
