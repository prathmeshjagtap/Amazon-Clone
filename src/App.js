import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import {useStateValue} from './StateProvider'
import {auth} from './firebase'

function App() {

  const [{user}, dispatch] = useStateValue();
    
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        // the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
    // cleanup
    return () => {
      unsubscribe();
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("USER is >>>>>>: ", user);
 
     
  return (
    
      <Router>
        <div className="App">
        <Switch>
          <Route path='/checkout'>
            <Header/>
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          {/* home page */}
          <Route path='/'>
            <Header />
            <Home />
            </Route>
        </Switch>
        </div>
      </Router>
    
  );
}

export default App;