import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const onRef = useRef(null)
  
  const h1Ref = useRef(null)
  
  const On = ()=>{
      onRef.current.style.backgroundColor ="yellow"
      h1Ref.current.innerHTML='Bulb ON'
      h1Ref.current.style.color='black'
    
  } 
  const Off = ()=>{
      onRef.current.style.backgroundColor ="black"
    h1Ref.current.innerHTML='Bulb OFF'
    h1Ref.current.style.color='white'
  } 
  

  return (
    <>
      <div className='bg-slate-800 w-full h-screen '>
          <div className=' flex justify-center items-center p-10  flex-col '>
            <div ref={onRef} className=' bg-black h-80 w-80 rounded-full mb-10 flex justify-center items-center'>
              <h1 ref={h1Ref} className='text-white text-xl font-semibold'>ON/OFF</h1>
              </div>
              <div className='text-white font-semibold text-2xl flex gap-10'>
                <button  onClick={On} className='px-8 py-3 bg-slate-100 text-black font-bold rounded-3xl active:scale-95 '>ON</button>
                <button onClick={Off} className='px-8 py-3 bg-slate-100 text-black font-bold rounded-3xl active:scale-95 '>OFF</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
