
import './App.css';
import League from './Components/League/League';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotMatch from './Components/NotMatch/NotMatch';
import LeagueDetail from './Components/LeagueDetail/LeagueDetail';

function App() {
  return (
    <Router>
<Switch>
<Route path="/home">
<League/>
</Route >

<Route path="/detail/:idTeam">
<LeagueDetail/>
</Route>

<Route exact path="/">
  <League/>
</Route>

  <Route path="*">
    
    <NotMatch/>
  </Route>

</Switch>
    </Router>


  );
}

export default App;
