import React from 'react';
import Item from '../Item/Item'

const ItemList = ({items}) => {


  return (
    <div>
      {items.map((item, idx) => {
        return <Item key={idx} item={item} />
      })}
    </div>
  )}


export default ItemList