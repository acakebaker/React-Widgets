import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
   const [term, setTerm] = useState('');
   const [results, setResults] = useState([]);

   // Gets the information from Wikipedia and stores it in results.
   useEffect(() => {
      if(term) {
         const search = setTimeout(async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
               params: { 
                  action: 'query', list: 'search', origin: '*', format: 'json', srsearch: term
               }
            });
   
            setResults(data.query.search);
         }, 500);

         return () => clearTimeout(search);
      };
   }, [term]);

   // Cleans the results so there are no HTML tags and adds a ... to the end of the string.
   const cleanResults = (string) => {
      return string.replace( /(<([^>]+)>)/ig, '') + '...';
   };

   // Maps the results and lists them out.
   const mappedResults = results.map((result) => {
      return(
         <div key={result.pageid} className='item'>
            <div className='content'>
               <div className='header'>
                  <a href={`https://en.wikipedia.org?curid=${result.pageid}`} target='_blank'>{result.title}</a>
               </div>
               {cleanResults(result.snippet)}
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