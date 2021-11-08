import './App.css';
import {Switch, Route} from 'react-router-dom'
import Homepage from './pages/homepage/Homepage';

const HatsPage = () => (
  <div>
    Hats
  </div>
)
function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path='/' component={Homepage}/>
       <Route path='/hats' component={HatsPage}/>
     </Switch>
    </div>
  );
}

export default App;
