import React, { useState } from 'react'
import ItemList from './ItemList'

const ResturantCategory = ({data,showitems,setshowindex}) => {
   
    const handleclick=()=>{
setshowindex();
    }
  return (
    <div>
   <div className="my-4 mx-auto w-6/12 bg-gray-100 h shadow-lg p-4  font-boldhover:transition-all duration-200 ease-out">
   <div className='flex justify-between cursor-pointer hover:bg-gray-250 rounded-lg  hover:scale-105 transition-all duration-200 ease-out '  onClick={handleclick }>
    <span className='font-bold text-lg'>{data.title}({data.title.length})</span>
    <span>🔽</span>
   </div>
   {   showitems&& <ItemList items={data.itemCards}/>}
    </div>
    </div>
  )
}

export default ResturantCategory