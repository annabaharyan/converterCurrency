import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import { Icon } from '@mui/material';
import logo from './logo.png'
import './header.css'
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import {initialHeaderUl} from './initialHeaderUl'

const icons=[PlaceIcon,SearchIcon,PersonIcon]

const Header = () => {
  const [pages,setPages]= useState(initialHeaderUl);
  const [status,setStatus]= useState('false');
 
  function changeColor(id){
    return  pages.map(res=>{
        if(res.id===id){
         
          status?setStatus(false):setStatus(true)
            res.status=true
             
        }else{
            status?setStatus(false):setStatus(true)
            res.status=false
        }
        return res
    })

   }

  useEffect(() => {
    setPages(pages)
  }, [status]);

  return (

    <>
    <div className='headerContainer'>
    <nav className='headerNav'>
         
        <div>
            <Link to={`${pages[0].link}`}>
                <img src={logo} alt="logo" className='logo' />
                
            </Link>
      </div>
       <ul className='headerUl'>
         {pages.map((page)=>(
        
            <li key={page.id} onClick={()=>changeColor(page.id) }><Link to={`${page.link}`}className={page.status?'active':''}>{page.name}</Link></li>
         ))}
       </ul>

       <ul className='ulIcons'>
         {icons.map((Icon,index)=>(
           
            <li key={index}>{<Icon className='icons'/>}</li>
         ))}
       </ul>
    </nav>
      
    </div>
  
    </>
  )
};
export default Header;

                    
            
                    
                    



