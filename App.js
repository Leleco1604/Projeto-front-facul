import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import ItemList from './ItemList';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Lógica para recuperar itens do localStorage
    const itemsFromStorage = localStorage.getItem('items');
    if (itemsFromStorage) {
      setItems(JSON.parse(itemsFromStorage));
    }
  }, []);

  const addItemToList = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/cadastro">
            <RegistrationForm addItemToList={addItemToList} />
          </Route>
          <Route path="/listagem">
            <ItemList items={items} />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          {/* Rota padrão */}
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
