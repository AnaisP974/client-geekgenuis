
import './toggle.css'

export const Toggle = ({handleChange, isChecked, mode}) => {
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