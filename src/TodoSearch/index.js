import React from 'react';
import './TodoSearch.css'
function TodoSearch({ searchValue,setSearchValue }) {
    
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
