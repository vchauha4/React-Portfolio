import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useLocation
} from "react-router-dom";
import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import { AnimatePresence } from 'framer-motion';

function App() {
  let location = useLocation();
  return (<>
      <Header></Header>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <AboutMe></AboutMe>
          </Route>
        </Switch>
      </AnimatePresence>
      </>
  );
}

export default App;
