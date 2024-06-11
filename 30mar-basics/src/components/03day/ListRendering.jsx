import React from 'react'
import list from './list.js'
const ListRendering = () => {
    let names = ["abc","xys","wrwr","wrw","wrw","323","ujj"]
    let result=  names.map((name,i)=><h2 key={i}>{name}</h2>)
    // console.log(list[0].name)
  return (
  <>
    <h1>List Rendering</h1>
    {/* {names.map((name,i)=><h2 key={i}>{name}</h2>)} */}
    {/* {result} */}
    {/* {list.map((item)=><h5>{JSON.stringify(item)}</h5>)} */}
    {/* {list.map((item)=><h5 key={item.id}>{item.name}</h5>)} */}

    <div class="table-responsive"   >
        <table class="table table-brodered table-striped " >
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th>Price</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {list.length == 0 && <tr><td colspan={5}>No item in list</td></tr>}
                {/* {list.map((item)=>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td><img src={item.image} height={50} width={50}/></td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                    </tr>
                )} */}
                   {/* {list.map((item)=>{
                   return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td><img src={item.image} height={50} width={50}/></td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                    </tr>}
                )} */}

        {list.map((item)=>{
            let {id,name,image,price,category}=item
                   return <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td><img src={image} height={50} width={50}/></td>
                        <td>{price}</td>
                        <td>{category}</td>
                    </tr>}
                )}
            </tbody>
        </table>
    </div>
    
  </>
  )
}

export default ListRendering
