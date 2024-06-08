// import React from 'react'

// const Childrenpropsdemoinfun = (props) => {
//     console.log(props)
//   return (
//     <>
//         <h1>{props.username}</h1><hr/>
//         {/* {props.children} */}
//         {props.children[0]}
//     </>
//   )
// }

// export default Childrenpropsdemoinfun

import React from 'react'
import propTypes from 'prop-types';

const Childrenpropsdemoinfun = ({username="Ram",mobile,children}) => {
  return (
    <>
        <h1>username: {username}</h1><hr/>
            {children}
         </>
  )
}


Childrenpropsdemoinfun.propTypes={
    "username":propTypes.string
}

export default Childrenpropsdemoinfun
