import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

// Holds all the languages for the dropdown.
const options = [
   {
      label: 'French',
      value: 'fr'
   },
   {
      label: 'German',
      value: 'de'
   },
   {
      label: 'Greek',
      value: 'el'
   },
   {
      label: 'Japanese',
      value: 'ja'
   },
   {
      label: 'Russian',
      value: 'ru'
   },
   {
      label: 'Spanish',
      value: 'es'
   },
];

const Translate = () => {
   const [language, setLanguage] = useState(options[0]);
   const [text, setText] = useState('');

   return (
      <div>
         <div className='ui form'>
            <div className='field'>
               <label className='label'>Enter Text</label>
               <textarea value={text} onChange={(e) => setText(e.target.value)} />
            </div>
      
            <Dropdown 
               selected={language} 
               setSelected={setLanguage} 
               options={options}
               formLabel='Select a Language'
            />

            <div className='ui fluid card'>
            <div className="content">
               <div className="header">English → {language.label}</div>
               <div className='description'>
                     <Convert text={text} language={language} />
               </div>
            </div>
            </div>
            
         </div>
      </div>
   );
};

export default Translate;