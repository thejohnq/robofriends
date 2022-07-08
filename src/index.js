import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import 'tachyons';
import { robots } from './robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Card name={robots[0].name} id={robots[0].id} email={robots[0].email} username={robots[0].username}/>
      <Card name={robots[1].name} id={robots[1].id} email={robots[1].email} username={robots[1].username}/>
      <Card name={robots[2].name} id={robots[2].id} email={robots[2].email} username={robots[2].username}/>
    </div>
  </React.StrictMode>
);