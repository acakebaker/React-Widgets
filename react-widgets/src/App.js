import './css/App.css';
import React, { useState } from 'react';
import Route from './components/Route';
import Header from './components/Header';
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

   return (
      <div className='wrapper'>
         <Header />

         <Route path='/'>
            <Accordion items={items} />
         </Route>
         <Route path='/list'>
            <Search />
         </Route>
         <Route path='/dropdown'>
            <h1 style={{ color: selectedColor.value }}>Dropdown Widget</h1>
            <Dropdown selected={selectedColor} setSelected={setSelectedColor} options={options} label='Select a color' />
         </Route>
         <Route path='/translate'>
            <Translate />
         </Route>
      </div>
   );
};

export default App;