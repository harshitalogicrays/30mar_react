import React from 'react'

const ConditionalRendering = ({loggedIn,username}) => {
    let cssvar = {color:'blue',textTransform:'uppercase',border:'2px solid orange'}

  /*  if(loggedIn){
        return(<><h1>Welcome {username}</h1>
            <h2 style={cssvar}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cumque voluptatibus aliquam error numquam hic beatae obcaecati? Amet unde in saepe dolores illum modi quia non incidunt cum, qui excepturi.</h2>
        </>)
    }
    else {
        return(<> <h1 style={{color:'red',backgroundColor:'yellow'}}>Welcome Guest</h1></>)
    } */

      /*  let result=''
        if(loggedIn){
            result =<><h1>Welcome {username}</h1>
                <h2 style={cssvar}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cumque voluptatibus aliquam error numquam hic beatae obcaecati? Amet unde in saepe dolores illum modi quia non incidunt cum, qui excepturi.</h2>
            </>
        }
        else {
            result= <> <h1 style={{color:'red',backgroundColor:'yellow'}}>Welcome Guest</h1></>        }

    return (<>
        {result}
    </>) */


    return (
        <>
            <h1>Conditional Rendering</h1>
            {loggedIn ?<><h1 style={cssvar}>Welcome {username}</h1></> :
            <> <h1 style={{color:'red',backgroundColor:'yellow'}}>Welcome Guest</h1></>  }<br/>

            <h2>short circuit</h2>
            {loggedIn && <><h1 style={cssvar}>Welcome {username}</h1></> }
        </>

    )
   
}

export default ConditionalRendering
