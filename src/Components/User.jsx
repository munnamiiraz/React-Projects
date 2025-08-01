import React, { use } from 'react'
import { useParams } from 'react-router-dom'


function User() {
  const { userid } = useParams(); 
  return (
    <div className='text-center text-2xl font-bold py-10 bg-gray-200 text-black'>
      User : {userid}
    </div>
  )
}

export default User
