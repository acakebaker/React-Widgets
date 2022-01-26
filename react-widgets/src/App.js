import './css/App.css';
import Accordion from './components/Accordion';
import Search from './components/Search';

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




const App = () => {
   

   return (
      <div>
         {/* <Accordion items={items} /> */}
         <Search />
      </div>
   );
}

export default App;