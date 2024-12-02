import { useState , useEffect,useRef} from 'react'
import './App.css'
import { useCallback } from 'react';


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  /*useRef hook*/ 
  const passwordRef = useRef(null);   /*Use for showing user that valus is selected basicalyy highlights and manipulates*/


/**password generate method add all dependencies in callback  1st method*/
const passwordGenerator =useCallback(()=>{
  
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numberAllowed) str+="0123456789";
  if(charAllowed) str+="!@#$%^&*()";
   
  for(let i=1;i<=length;i++){
    const chars=Math.floor(Math.random()*str.length+1);
    pass+=str.charAt(chars);
  }
  setPassword(pass);
},[length,numberAllowed,charAllowed,setPassword])


/*callback memorises for reusibilty  2nd in serial */
const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select()
  /*passwordRef.current?.setSelectionRange(0,3)   for first 3 characters*/
  passwordRef.current?.setSelectionRange(0,101) 
window.navigator.clipboard.writeText(password)
},[password])


/*useeffect reruns when the state of dependencies are changed*/
useEffect(()=>{passwordGenerator();},[length , numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'> </div>
        <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly ref={passwordRef}/>
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-4 py-0.5 shrink-0'>copy</button>
</div>
<div className='flex text-sm gap-x-2'>
  <div className='flex items-center gap-x-1'>
    <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
    <label>Length:{length}</label>
    </div> 
  <div className='flex items-center gap-x-1'>
    <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=> setNumberAllowed((prev)=>!prev)}
      />
      <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="charInput">Include Special Characters</label>
    </div>
  
    
  
  </div>
  
    </>
  )
}

export default App
