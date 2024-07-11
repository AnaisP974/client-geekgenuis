import React from 'react';
import './toggle.css'

interface Toggle{
    handleChange: () => void,
    isChecked: boolean,
    mode: string,
}

export const Toggle: React.FC<Toggle> = ({handleChange, isChecked, mode}) => {
  return (
    <div className='toggle-container flex'>
        <input 
        type='checkbox' 
        id='toggle' 
        checked={isChecked} 
        onChange={handleChange} />
        <label htmlFor='check'>
            <img src={'./'+mode+'.png'}/></label> 
    </div>
  )  
};