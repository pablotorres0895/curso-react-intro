import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const { 
      completedTodos, 
      totalTodos 
    } = React.useContext(TodoContext)


    if (parseInt(totalTodos) === parseInt(completedTodos) && (parseInt(totalTodos) > 0 && parseInt(completedTodos) > 0)){
      return (
        <header>
          <h1>
            You did a great JOB!
          </h1>
          <img src='cat-with-umbrella-happy.gif' className='cat-image' alt='Cat with umbrella' />
        </header>
      )
    }
    return (
      <header>
        <h1>
          {completedTodos} of {totalTodos} TO-DOS Done
        </h1>
        <img src='cat-with-umbrella.gif' className='cat-image' alt='Cat with umbrella' />
      </header>
    );
}

export { TodoCounter };
