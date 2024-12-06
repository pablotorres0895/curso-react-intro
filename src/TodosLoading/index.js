import React from 'react';
import './TodosLoading.css'
function TodosLoading() {
    
    return (
        <div className='todo-list'>
            <div className="skeleton-item">
                <div className="skeleton-circle"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-button"></div>
            </div>
            <div className="skeleton-item">
                <div className="skeleton-circle"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-button"></div>
            </div>
            <div className="skeleton-item">
                <div className="skeleton-circle"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-button"></div>
            </div>
        </div>
    
    );
}

export { TodosLoading };
