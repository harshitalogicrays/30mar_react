import axios from 'axios'
import React, { useEffect } from 'react'

const Home = () => {
  // useEffect(()=>{
  //     getData()
  // },[])

  // let getData=()=>{
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res)=>{
  //     return res.json().then((result)=>{
  //       console.log(result)
  //     })
  //   })
  //   .catch((err)=>console.log(err))
  // }

  // let getData=async()=>{
  //   try{
  //   let res =   await fetch("https://jsonplaceholder.typicode.com/users")
  //   let result = await res.json()
  //   console.log(result)
  //   }
  //   catch(err){console.log(err)}
  // }

  // let getData=()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
  //     console.log(result.data)
  //   }).catch(err=>console.log(err))
  // }

//  let getData=async()=>{
//     try{
//     let res =   await axios.get("https://jsonplaceholder.typicode.com/users")
//     console.log(res.data)
//     }
//     catch(err){console.log(err)}
//   }

// let getData=async()=>{
//   try{
//   let res =   await axios.get('https://dummyjson.com/users')
//   console.log(res.data.users)
//   }
//   catch(err){console.log(err)}
// }

// let getData=async()=>{
//   try{
//   let res =   await axios.get('http://localhost:1000/users')
//   console.log(res.data)
//   }
//   catch(err){console.log(err)}
// }
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home
