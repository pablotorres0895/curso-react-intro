import './TodoCounter.css'

function TodoCounter({ total, completed }) {
    return (
      <header>
        <h1>
          {completed} of {total} TO-DOS Done
        </h1>
        <img src='cat-with-umbrella.gif' className='cat-image' alt='Cat with umbrella' />
      </header>
    );
}

export { TodoCounter };
