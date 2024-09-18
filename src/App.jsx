import React from 'react'

let a = "5";

const App = () => {
  return (
    <>
      <div className='flex justify-center items-center bg-gray-800 h-[80vh] text-blue-600  flex-col leading-none tracking-tight'>
        <h1 className='text-7xl font-bold uppercase'>React App</h1>
        <br />
        <h1>your creds are:</h1>
        <h2 className='text-3xl'> {import.meta.env.VITE_API_KEY}</h2>
      </div>
    </>
  )
}

export default App
