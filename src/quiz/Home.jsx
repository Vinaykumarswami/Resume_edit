import React from 'react'
import Siderbar from './Siderbar'


const Home = () => {
  return (
    <div>
      <div className="justify-between">
        <Siderbar/>
        <button className="bg-blue-600 border rounded-[4px] h-8 text-center w-15"
        >Result</button>
      </div>
    </div>
  )
}

export default Home
