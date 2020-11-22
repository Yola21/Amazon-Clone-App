import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './DataLayer';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const cleanup = auth.onAuthStateChanged((User) => {
      if(User){
        dispatch({
          type: 'SET_USER',
          user: User,
        });
      }

      else{
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }

    }); 

    return () => {
      cleanup();
    }
  }, []);
  //In here [], if we don't add any dependency then it will just render once the app loads but if we add any dependency than it will also renders every time the dependency changes.


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/"> {/*Default route path*/}
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
