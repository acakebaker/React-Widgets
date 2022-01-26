import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
   const [term, setTerm] = useState('React');
   const [results, setResults] = useState([]);

   // Gets the information from Wikipedia and stores it in results.  It also doesn't pull data until 500ms after the last term change.
   // This code runs the return 1st, then it doesn't run the first part until 500ms has passed.  It will just keep running the return and resetting the timer.
   useEffect(() => {
      const search = async () => {
         const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: { 
               action: 'query', list: 'search', origin: '*', format: 'json', srsearch: term
            }
         });
         setResults(data.query.search);
      };

      if(term && !results.length) {
         search();
      } else {
         const timeout = setTimeout(() => {
            search();
         }, 800);
         return () => clearTimeout(timeout);
      }
   }, [term]);

   // Cleans the results so there are no HTML tags and adds a ... to the end of the string.
   const cleanResults = (string) => {
      return (string.replace( /(<([^>]+)>)/ig, '')).replace(/&quot;/g, '') + '...';
   };

   // Maps the results and lists them out.
   const mappedResults = results.map(({ pageid, title, snippet }) => {
      return(
         <div key={pageid} className='item'>
            <div className='content'>
               <div className='header'>
                  <a href={`https://en.wikipedia.org?curid=${pageid}`} target='_blank'>{title}</a>
               </div>
               <div className='description'>{cleanResults(snippet)}</div>
            </div>
         </div>
      );
   });

   return (
      <div>
         <div className='ui form'>
            <div className='field'>
               <label>Enter Search Term</label>
               <input value={term} onChange={(e) => setTerm(e.target.value)} className='input' />
            </div>
         </div>
         <div className='ui celled list'>{mappedResults}</div>
      </div>
   );
}

export default Search;