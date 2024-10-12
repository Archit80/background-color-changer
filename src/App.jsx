import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#292524")
  const [text, setText] = useState("white")
  return (
    <div>
      <div className='h-screen w-full flex justify-center' style={{backgroundColor:color}}>
        <h1 className='text-white font-bold top-16 absolute text-3xl font-sans tracking-wide uppercase' style={{color:text}}>background color changer</h1>
      <div className='absolute w-1/2 bottom-8 rounded-2xl px-8 py-4 bg-neutral-600 text-white flex justify-center gap-12'>
      <button className="red w-24 bg-red-500 px-4 py-1 rounded-md" onClick={()=>setColor("#EF4444")&setText("white")}>Red</button>
      <button className="green w-24 bg-green-500 px-4 py-1 rounded-md" onClick={()=>setColor("#16A34A")&setText("black")}>Green</button>
      <button className="blue w-24 bg-blue-500 px-4 py-1 rounded-md " onClick={()=>setColor("#60A5FA")&setText("white")}>Blue</button>
      <button className="yellow w-24 bg-yellow-500 px-4 py-1 rounded-md" onClick={()=>setColor("#FACC15")&setText("black")}>Yellow</button>
      <button className="black w-24 bg-stone-800 px-4 py-1 rounded-md" onClick={()=>setColor("#292524")&setText("white")}>Black</button>
      <button className="white w-24 bg-white text-black px-4 py-1 rounded-md" onClick={()=>setColor("#F8FAFC")&setText("black") }>White</button>
      </div>
      </div>

    </div>
  )
}

export default App
