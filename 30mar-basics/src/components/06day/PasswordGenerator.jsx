import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

const PasswordGenerator = () => {
    let [password,setPassword]=useState('')
    let [length,setLength]=useState(8)
    let [numAllowed,setNumAllowed]=useState(false)
    let [charAllowed,setCharAllowed]=useState(false)
    // let copyRef=React.useRef()
    let copyRef=useRef()

    // let randomgenerator =()=>{
    //     let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    //     if(numAllowed){str+='0987654321'}
    //     if(charAllowed){str+='!@#$%^&*-=+_.'}
    //     let data=''
    //     for(let i=1;i<=length;i++){
    //         data+=str.charAt(Math.floor(Math.random()*str.length))
    //     }
    //     setPassword(data)
    // }

    let randomgenerator =useCallback(()=>{ //cache
        let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if(numAllowed){str+='0987654321'}
        if(charAllowed){str+='!@#$%^&*-=+_.'}
        let data=''
        for(let i=1;i<=length;i++){
            data+=str.charAt(Math.floor(Math.random()*str.length))
        }
        setPassword(data)
    },[length,numAllowed,charAllowed])

    // useEffect(()=>{randomgenerator()},[])
    useEffect(()=>{randomgenerator()},[length,numAllowed,charAllowed])

    let handleCopy=()=>{
        copyRef.current.select()
        copyRef.current.setSelectionRange(0,5)
        copyRef.current.style.backgroundColor='yellow'
        window.navigator.clipboard.writeText(password)
    }
  return (
    <div className='container mt-5 col-6'>
          <InputGroup className="mb-3">
          <Form.Control value={password} ref={copyRef}></Form.Control>
            <Button variant="outline-secondary" onClick={handleCopy}>copy  </Button>
      </InputGroup>
      
        <input type="range" name="length" value={length} onChange={(e)=>setLength(e.target.value)}
        min={5} max={100} /> <label className='me-3'> Length ({length})</label>
        <input type="checkbox" value={numAllowed} onClick={()=>setNumAllowed(!numAllowed)} /><label className='me-3'> Numbers </label>
        <input type="checkbox" value={charAllowed} onClick={()=>setCharAllowed(!charAllowed)} /><label>Sp. Characters</label>

    </div>
  )
}

export default PasswordGenerator
