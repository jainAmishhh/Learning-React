import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() 
{

  const data = useLoaderData();

  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data);
  //   })
  // })

  return (
    <div className=' text-center text-4xl m-4 bg-cyan-900/60 p-4' >Github</div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
}