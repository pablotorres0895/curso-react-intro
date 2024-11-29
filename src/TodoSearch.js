import React from 'react';
import './TodoSearch.css'
function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('');
    console.log('Los usuarios buscan todos de ' + searchValue)
    return (
      <div className="input-container">
        <input 
          placeholder="Cortar Cebolla"
          className="task-input"
          value={searchValue}
          onChange={(event)=>{
            setSearchValue(event.target.value)
          }} />
      </div>
    );
}

export { TodoSearch };
