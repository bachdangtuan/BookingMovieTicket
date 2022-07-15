import './App.css';
import { createBrowserHistory } from 'history'
import { Router } from 'react-router'
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Homepage';
import New from './pages/News/New';
import Contact from './pages/Contact/Contact';
import Detail from './pages/Details/Detail';

export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
      <HomeTemplate path="/home" exact Component={Home}></HomeTemplate>
      <HomeTemplate path="/news" exact Component={New}></HomeTemplate>
      <HomeTemplate path="/contact" exact Component={Contact}></HomeTemplate>
      <HomeTemplate path="/detail/:id" exact Component={Detail}></HomeTemplate>
    </Router>
  );
}

export default App;
