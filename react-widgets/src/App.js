import './css/App.css';
import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';


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

// Options object for the dropdown.
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
   const [selected, setSelected] = useState(options[0]);

   return (
      <div>
         {/* <Accordion 
            items={items} 
         /> */}
         {/* <Search /> */}
         <Dropdown 
            selected={selected} 
            setSelected={setSelected} 
            options={options} 
            formLabel='Select a color'
         />
         <h1 style={{ color: selected.value }}>Widgets App!!</h1>
      </div>
   );
}

export default App;