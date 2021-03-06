import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './Styles/Styles.scss'
import Home from './pages/Home'
import Deals from './pages/Deals'
import Cart from './pages/Cart'
import Nav from './components/Nav'
import Product from './pages/Product'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/deals" component={Deals} />
          <Route path="/cart" component={Cart} />
          <Route path="/item/:_id" component={Product} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
