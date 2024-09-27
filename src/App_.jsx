import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from 'framer-motion'
import './App.css'
import { Categories } from './components/Categories';
import { Menus } from './components/Menus';
import {data} from './utils'
import { useEffect } from 'react';

function App() {
  const [selectedCateg,setSelectedCateg]=useState('all')
  const [menus,setMenus] = useState(data)

  console.log('App:',selectedCateg,typeof selectedCateg);

  useEffect(()=>{
    if(selectedCateg=='all'){
      setMenus(data)
      return
    }
    let newArr=data.filter(obj=>obj.category==selectedCateg)
    setMenus(newArr)
  },[selectedCateg])
  
  return (
    <div className='container shadow'>
    <div className="sticky bg-light shadow rounded p-3">
       <motion.h1 className='text-center'
        initial={{opacity:0, scale:0.5}}
        animate={{x: [50,150,0],opacity:1,scale:1}}
        transition={{duration:2,delay:0.3}}
       >Our Menu
     </motion.h1>
     <Categories selectedCateg={selectedCateg} setSelectedCateg={setSelectedCateg}/>

    </div>
    
     <Menus menus={menus}/>
    </div>
  )
}

export default App
