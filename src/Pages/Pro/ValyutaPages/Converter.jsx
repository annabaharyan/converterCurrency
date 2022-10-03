import React,{useState,useEffect} from 'react'
import { changeApi1, getApi, getChangeingAmount1, getChangeingAmount2, getState, getVal1,getVal2 } from '../../../Fetches/ApiSlice'
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import '../pro.css'
import { initialCurrency1, initialCurrency2 } from './initialCurrency';
import {useDispatch,useSelector} from 'react-redux'



let currentDate = new Date().toJSON().slice(0, 10)


export default function Converter() {
  
 const[val1Color,setVal1Color]=useState(false)
 const[val2Color,setVal2Color]=useState(false)
 const [valuta1,setValuta1]=useState(initialCurrency1())
 const [valuta2,setValuta2]=useState(initialCurrency2())
 const [myCur1,setmyCur1]=useState('RUB')
 const [myCur2,setmyCur2]=useState('USD')
 const [inp1,setinp1]=useState()
 const [inp2,setinp2]=useState()




 const myRes=useSelector(getState)

 const dispatch=useDispatch()
 useEffect(() => {
  dispatch(getApi())
}, []);

console.log(myRes);


      const changeColor1=(id,status)=>{
        return  valuta1.map(res=>{
          if(res.id===id){
            val1Color?setVal1Color(false):setVal1Color(true)
              res.status=true
              
          }else{
            val1Color?setVal1Color(false):setVal1Color(true)
            res.status=false
          }
          
          return res
      })}


      const changeColor2=(id,status)=>{
      
        return  valuta2.map(res=>{
          if(res.id===id){
            val2Color?setVal2Color(false):setVal2Color(true)
              res.status=true
              
          }else{
            val2Color?setVal2Color(false):setVal2Color(true)
            res.status=false
          }
          
          return res
      })}


  useEffect(() => {
    setValuta1(valuta1)
   
  }, [val1Color]);


  useEffect(() => {
    setValuta2(valuta2)
  }, [val2Color]);

  useEffect(()=>{
    dispatch(changeApi1(myCur1,myCur2,inp1))
    
   },[inp1,myCur1,myCur2])
   
  return (
    <>
    <div className="conatinerConvert">
      <div className="col">
        <div className="row">
             <p>У меня есть</p>
             <div className='button-row'>
                {valuta1.map(val1=>(
                  <button key={val1.id} className={val1.status?'myButton buttonActive':"myButton"} 
                   onClick={()=>[
                    setmyCur1(val1.valuta),
                   
                    changeColor1(val1.id,val1.status)]}>
                    {val1.valuta}
                  </button>
                ))}
             </div>
          </div>
          <div className="row">
            <input type="number" 
            value={`${inp1}`} 
           
            className='countOfMoney' onChange={e=>setinp1(e.target.value)}/>
          </div>
        <div className="row ">
          <input type="date" className='date' defaultValue={`${currentDate}`}/>
        </div>
      </div>

      
      <div className="col col-arrow ">
        <MultipleStopIcon sx={{width:'100%'}}/>
      </div>

      
      <div className="col">
        <div className="row">
            <p>Хочу приобрести</p>
            <div className='button-row'>
            {valuta2.map(val2=>(
              <button key={val2.id} className={val2.status?'myButton buttonActive':"myButton"}
               onClick={()=>[
                setmyCur2(val2.valuta),
               
                changeColor2(val2.id,val2.status)]}>
                {val2.valuta}
              </button>
            ))}
            </div>
        </div>
      <div className="row">
          <input type="number"
          value={`${myRes}`} 
          className='countOfMoney'
           onChange={e=>setinp2(e.target.value)} />
        
      </div>
      </div>
      
</div>

</>
  )
}
