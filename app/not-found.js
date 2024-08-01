const   {  default : Link} = require("next/link") 
import React from 'react';

function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={'/'} > Home</Link>
    </div>
  )
}

export default NotFound ;