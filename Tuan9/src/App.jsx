import React from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import Theme from './components/Theme';
import ShoppingCart from './components/ShoppingCart';
import Login from './components/Login';
import UserList from './components/UserList';
import AdvancedCounter from './components/AdvancedCounter';
import BMICalculator from './components/BMICalculator';
 
 function App() {
   return (
     <div>
      <Counter />
      <hr />
      <TodoList />
      <hr />
      <Theme />
      <hr />
      <ShoppingCart />
      <hr />
      <Login />
      <hr />
      <UserList /> 
      <hr />
      <AdvancedCounter />
      <hr />
      <BMICalculator />
      </div>
   );
 }
 
 export default App;