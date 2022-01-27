import React from 'react';
import Link from './Link';

const Header = () => {
   return (
      <div className='ui secondary pointing menu'>
         <Link href='/' className='item' value='Accordion' />
         <Link href='/list' className='item' value='Search' />
         <Link href='/dropdown' className='item' value='Dropdown' />
         <Link href='/translate' className='item' value='Translate' />
      </div>
   );
};

export default Header;