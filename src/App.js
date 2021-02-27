import React from 'react';
import './App.css';
import Birthday from './Birthday';
import { Route, Switch } from 'react-router-dom';
import RouterBirthday from './RouterBirthday';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Birthday />
        </Route>
        <Route exact path='/birthday'>
          <RouterBirthday />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
