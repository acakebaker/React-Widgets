import React, { useState } from 'react';

const Dropdown = ({ selected, setSelected, options, formLabel }) => {
   const [open, setOpen] = useState(false);

   // Maps over the options.
   const mappedOptions = options.map((option) => {
      return (
         <div 
            key={option.value} 
            className='item'
            style={{ color: option.value, fontWeight: '900' }}
            onClick={() => setSelected(option)}
         >
            {option.label}
         </div>
      );
   });
   
   return (
      <div className='ui form'>
         <div className='field'>
            <label className='label'>{formLabel}</label>
            <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
               <i className='dropdown icon'></i>
               <div className='text' style={{ color: '#9c9c9c' }}><b>{selected.label}</b></div>
               <div onClick={() => setOpen(!open)} className={`menu ${open ? 'visible transition' : ''}`}>
                  {mappedOptions}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dropdown;