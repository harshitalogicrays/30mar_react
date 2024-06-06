/*import React from 'react'
const Funcomppropsdemo = (props) => {
    //props = {username:'happy',address:'pune',mobile:9087654321,isMarried:true}
    //props are read only , we can only access props coming from parent but we can not change them.
    console.log(props.username)
    // props.username = "Ram" // Cannot assign to read only property 'username' of object 
  return ( <div>
      <h1>Username : {props.username}</h1>
        <h2>{props.address}</h2>
    </div>)}
export default Funcomppropsdemo */

import React from 'react'
const Funcomppropsdemo = ({username,address,mobile}) => { //destructuring 
  return (<>
       <h1>Username : {username}</h1>
        <h2>{address}</h2>
    </>)}
export default Funcomppropsdemo


