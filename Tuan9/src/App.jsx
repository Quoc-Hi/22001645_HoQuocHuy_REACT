import React from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import Theme from './components/Theme';
import ShoppingCart from './components/ShoppingCart';
import Login from './components/Login';
 
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
     </div>
   );
 }
 
 export default App;