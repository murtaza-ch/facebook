import './App.css';

import Feed from './components/Layout/Feed/Feed';
import Header from './components/Header/Header';
import Login from './components/Auth/Login';
import React from 'react';
import Sidebar from './components/Layout/Sidebar/Sidebar';
import Widget from './components/Layout/Widgets/Widget';
import {useStateValue} from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();
  
  return (
    <div className="App">
    { !user ? <Login/> :
    (
    <>
    <Header/>
    <div className="app_body">
    <Sidebar/>
    <Feed/>
    <Sidebar/>
    </div>
    </>
    )}
    </div>
  );
}

export default App;
