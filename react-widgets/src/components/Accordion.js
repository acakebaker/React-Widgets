import React, { useState } from 'react';

const Accordion = ({ items }) => {
   // Hooks
   const [activeIndex, setActiveIndex] = useState(null);

   // The function that is called when the title is clicked.
   const onTitleClick = (index) => {
      activeIndex !== index ? setActiveIndex(index) : setActiveIndex(null);
   };

   // Maps over the items and lists them out on the screen.
   const mappedItems = items.map((item, index) => {
      // Used to show the content in the dropdowns.  Returns 'active' if they are the same.
      const active = (index === activeIndex ? 'active' : '');

      return (
         <React.Fragment key={item.title}>
            {/* Using an arrow function here stops it from running as soon as the page loads. */}
            <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
               <i className={`icon angle ${activeIndex === index ? 'down' : 'right'}`}></i>
               {item.title}
            </div>
            <div className={`content ${active}`} >
               <p>{item.content}</p>
            </div>
         </React.Fragment>
      );
   });

   return (
      <div className='ui styled accordion'>
         {mappedItems}
      </div>
   );
};

export default Accordion;