import './css/App.css';
import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';


// Items object for the accordion.
const items = [
   {
      title: 'What is React?',
      content: 'React is a front end JavaScript framework.'
   },
   {
      title: 'Why use React?',
      content: 'React is a favorite Javascript library amount engineers.'
   },
   {
      title: 'How do you use React?',
      content: 'You use react by creating components.'
   }
];

// Holds all the colors for the dropdown.
const options = [
   {
      label: 'Crunchberry',
      value: '#EF6C98'
   },
   {
      label: 'Lagoon Blue',
      value: '#66CEE9'
   },
   {
      label: 'Lime',
      value: '#8FC567'
   },
   {
      label: 'Melon',
      value: '#F69159'
   },
   {
      label: 'Violet',
      value: '#786FA6'
   }
];

const App = () => {
   const [selectedColor, setSelectedColor] = useState(options[0]);
   const [showDropdown, setShowDropdown] = useState(true);

   return (
      <div className='wrapper'>
         {/* <Accordion items={items} /> */}
         {/* <Search /> */}
         {/* <Dropdown selected={selectedColor} setSelected={setSelectedColor} options={options} formLabel='Select a color' /> 
         <h1 style={{ color: selectedColor.value }}>This text is colored: {selectedColor.label}</h1> */}

         <Translate />
      </div>
   );
}

export default App;