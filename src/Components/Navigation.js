import React from 'react'

const Navigation = ({reels}) => {
  return (
    <div  className='reels'>
   {reels.map((el)=><div>
     <img src={el.url} alt='404'/>
     </div>
)}
    </div>
  )
}

export default Navigation