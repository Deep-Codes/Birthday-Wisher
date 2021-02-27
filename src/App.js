import React from 'react';
import './App.css';
import Birthday from './Birthday';
import { Route, Switch } from 'react-router-dom';
import RouterBirthday from './RouterBirthday';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Birthday} />
        <Route
          exact
          path='/birthday/:name?/:day?/:month?'
          component={RouterBirthday}
        />
      </Switch>
    </div>
  );
}

export default App;
