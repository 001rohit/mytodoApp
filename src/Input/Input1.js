import React from 'react'

const Input1 = ({title,desc,date,index,delete1,mail}) => {
   const date1 = date.getDate() ;
   const month = date.getMonth(); 
  const year = date.getFullYear();
  return (
    <div className='list'>
        <div className='list-content'>
        <div className='sub'>
        <p>{index+1}) {date1}/{month+1}/{year}</p>
        {/* <p>{mail}</p> */}
        <h2>Title:- {title}</h2>
        </div>
         <p><span>Description</span>:- {desc}</p>
        </div>
         <button onClick={()=>delete1(index)}>Remove</button>
    </div>
  )
}

export default Input1
