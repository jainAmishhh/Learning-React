import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userId } = useParams();
  return (
    <div className='bg-amber-200 text-gray-600 text-4xl text-center  py-5'>User: {userId} </div>
  )
}

export default User