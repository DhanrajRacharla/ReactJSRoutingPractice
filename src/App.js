import {BrowserRouter, Route, Switch} from 'react-router-dom'
import "./App.css"

import NotFound from './components/NotFound'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => (
  <div className="main-container">
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
  </div>
  
)

export default App
