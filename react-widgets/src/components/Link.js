import React from 'react';

const Link = ({ href, className, value }) => {
   // Prvents a page reload and then sets the pathname to the href.
   const onClick = (event) => {
      // Allows the user to command-click or control-click a link and open it in a new tab.
      if(event.metaKey || event.ctrlKey) {
         return;
      };

      event.preventDefault();
      window.history.pushState({}, '', href);

      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);
   };

   return (
      <a onClick={onClick} href={href} className={className}>{value}</a>
   );
};

export default Link;