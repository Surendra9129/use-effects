import React, { useEffect, useState } from "react";

const Form=()=>{
  const[text,setText]=useState();
  const [data,setData]=useState([]);
  useEffect(()=>{
    recData()
  },[])

  const handlechange=(e)=>{
    // console.log(e.target.value);
    const {name,value}=e.target;
    setText({...text,[name]:value});
  }

  const recData=()=>{
      fetch('http://localhost:3001/users')
      .then((res)=>{
        return res.json();
      })
      .then((res)=>{
        setData(res)
        // setText('')
        // console.log(res);
      })
  }

  const handlefinal=(e)=>{
    e.preventDefault();
   const payload={
     name:text.username,
     age:text.age,
     address:text.address,
     department:text.department,
     salary:text.salary,
     marital_status:text.marital_status
   }
   fetch('http://localhost:3001/users',{
     method:"POST",
     body:JSON.stringify(payload),
     headers:{
       'content-type':"application/json"
     }
   })
  //  console.log(payload);
  
  }
  console.log(data)
  return(
    <>
    <h1>Details Form</h1>
    <form onSubmit={handlefinal}>
    <input type="text" name="username" id=""  placeholder="enter your name" onChange={handlechange}/> <br />
     <input type="Number" name="age" id="" placeholder="enter your your age" onChange={handlechange}/><br />
     <input type="text" name="address" id="" placeholder="enter your address" onChange={handlechange}/><br />
     <input type="text" name="department" id="" placeholder="enter your department" onChange={handlechange}/><br />
     <input type="text" name="salary" id="" placeholder="enter your salary" onChange={handlechange}/><br />
     <input type="text" name="marital_status" id="" placeholder="enter marital-status" onChange={handlechange}/><br />
     <input type="file"/><br />
     <input type="submit" name="" id="" />
    </form>
   

    {data.map((e,i)=>{
    return <>
      <h4>1. name:{e.name}</h4>
     <h4>2. age:{e.age}</h4>
     <h4>3. address:{e.address}</h4>
     <h4>4. department:{e.department}</h4>
     <h4>5. salary:{e.salary}</h4>
     <h4>6. marital_status:{e.marital_status}</h4>
     </>
  
   })}
      
    </>
  )
}



export {Form};
  