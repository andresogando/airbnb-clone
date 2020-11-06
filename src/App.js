import './App.css';
import Header from './Header';
import Home from './Home';
import Searchpage from './Searchpage';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

      <Switch>
        {/* /Search  */}
      <Route path="/search">
          <Searchpage />
      </Route> 
        {/* / */}
        <Route path="/">         
          <Home  />  
        </Route>
      
    </Switch>



    <Footer />
    </Router>

    </div>
  );
}

export default App;
