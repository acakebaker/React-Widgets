import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ text, language }) => {
   const [translated, setTranslated] = useState('');
   const [debouncedText, setDebouncedText] = useState(text);

   // Sets 'debouncedText' to 'text' after the user has stopped typing for 500ms.
   useEffect(() => {
      const timeout = setTimeout(() => {
         setDebouncedText(text);
      }, 500);

      return () => clearTimeout(timeout);
   }, [text]);

   // Looks for changes to either 'language' or 'debouncedText' and runs the API.
   useEffect(() => {
      const doTranslation = async () => {
        const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
               q: debouncedText, target: language.value, key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            },
         });
         setTranslated(data.data.translations[0].translatedText);
      };

      doTranslation();
   }, [language, debouncedText]); // Runs at start and when 'language' or 'text' change.
   
   return translated;
};

export default Convert;