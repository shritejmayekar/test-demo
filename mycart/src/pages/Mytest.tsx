import React, { useState } from 'react'

 const  MyTest = () => {
    interface myData{
        name:string,
        number?:number
    }
    const initalData = {
        name:'',
        number:undefined
    }
    const [data,setData] = useState<myData>(initalData)
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'50%',alignItems:'center',alignSelf:'center'}}>
            <input placeholder='name' type='text' value={data.name || ''} onChange={(e)=>{setData({...data,name:e.target.value})}}/> 
            <input placeholder='number' type='number' value={data.number || ''} onChange={(e)=>{setData({...data,number:parseInt(e.target.value)})}}/> 
            <button onClick={()=>{setData(initalData)}}>Add</button>

        </div>
    )
}
export default MyTest