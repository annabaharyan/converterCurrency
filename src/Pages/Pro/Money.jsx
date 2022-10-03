import React,{useState,useEffect} from 'react';
import {InitialPagesMoney} from './initialPageMoney'
import './pro.css'
import {Link} from 'react-router-dom'

const Money = () => {
    const [pages,setPages]= useState(InitialPagesMoney);
    const [status,setStatus]= useState(false);
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
        <div className='proContainer'>
            <div className='rinok'>Рынок наличной валюты</div>
           <ul className='proUl'>
            {pages.map((page)=>(
                <li key={page.id} onClick={()=>changeColor(page.id) }className={page.status?'active':''}><Link to={`${page.link}`}className={page.status?'active':''}>{page.name}</Link></li>
            ))}
           </ul>
          
        </div>
    );
}

export default Money;
