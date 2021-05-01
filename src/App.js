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
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';

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
          <Route path='/resume'>
            <Resume></Resume>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
        </Switch>
      </AnimatePresence>
      </>
  );
}

export default App;
