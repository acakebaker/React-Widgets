import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ selected, setSelected, options, label }) => {
   const [open, setOpen] = useState(false);
   const ref = useRef();

   // Allows the dropdown to close if a click happens outside the dropdown form.
   useEffect(() => {
      // The function that sets setOpen to false if the reference contains the event.
      const onBodyClick =  (event) => {
         if(!ref.current.contains(event.target)) {
            setOpen(false);
         }
      };

      // Adds the event listener.
      document.body.addEventListener('click', onBodyClick, { capture: true });

      // Removes the event listener.
      return () => document.body.removeEventListener('click', onBodyClick, { capture: true });
   }, []);

   // Maps over the options.
   const mappedOptions = options.map((option) => {
      return (
         <div 
            key={option.value} 
            className='item'
            style={selected.value == option.value ? { fontWeight: 'bold' } : null}
            onClick={() => setSelected(option)}
         >
            {option.label}
         </div>
      );
   });
   
   return (
      <div ref={ref} className='ui form'>
         <div className='field'>
            <label className='label'>{label}</label>
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