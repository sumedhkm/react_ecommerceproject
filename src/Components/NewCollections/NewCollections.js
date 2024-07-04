import React from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
import new_collection from "../Assets/new_collections"
const NewCollections = () => {
  return (
    <div className='newcollection'>
    <h1>NEW COLLECTIONS</h1>
    <hr/>
    <div className='collections'>
      {new_collection.map((item,i)=>{
        return <Item key={item.id}
        id={item.id}
        name={item.name}  // Pass the name to Item component
        image={item.image}
        new_price={item.new_price}
        old_price={item.old_price}/>
      })}
    </div>
    </div>
  )
}
export default NewCollections;