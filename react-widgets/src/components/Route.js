import { useState, useEffect } from 'react';

// Returns the pathname if it's there.  If not, then it returns null.
const Route = ({ path, children }) => {
   const [currentPath, setCurrentPath] = useState(window.location.pathname);

   // Updates when the URL changes and sets the 'currentPath' to the path.
   useEffect(() => {
      const onLocationChange = () => {
         setCurrentPath(window.location.pathname);
      };

      window.addEventListener('popstate', onLocationChange);

      return () => {
         window.removeEventListener('popstate', onLocationChange);
      };
   }, []);

   // Displays the 'path' when the 'currentPath' changes.
   return currentPath === path ? children : null;
};

export default Route;