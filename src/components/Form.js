import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

const Form = ({addMember,updateMember,memberToUptate}) => {
    const [memberData,setMemberData] = useState({
        name: " ",
        email: " ",
        role: " ",

    });

    //const [isim, setIsim] = useState("");
    //const [email, setEmail] = useState("");
    //const [rol, setRol] = useState("");

    // console.log(isim, email, rol);

   
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (memberData.id){
            updateMember(memberData);
        }
        else{
            addMember({...memberData, id: Math.round(Math.random()*99999)});
        }
        
        setMemberData({
        name: " ",
        email: " ",
        role: " ",})
        //setIsim(e.target.isim.value);
       // setEmail(e.target.email.value);
        //setRol(e.target.rol.value);
        //console.log(isim, email, rol);
    }
    useEffect(()=> {
        if (memberToUptate){
            setMemberData(memberToUptate)
        }
    },[memberToUptate])

    return (
        
        <form onSubmit={handleSubmit}>
            <div>
         <label> User Name: 
        <input type="text" onChange={(e)=> {
            setMemberData({...memberData,name: e.target.value})
        }} 
        value={memberData.name}
        />
        </label>
        </div>
        <div>
        <label> User E-mail: 
        <input type="email" onChange={(e)=> {
            setMemberData({...memberData,email: e.target.value})
        }} 
        value={memberData.email}
        />
        </label></div>
        <div>
        <label> User Rol: 
        <input type="text" onChange={(e)=> {
            setMemberData({...memberData,role: e.target.value})
        }} 
        value={memberData.role}
        />
        </label></div>
        <button type='submit' disabled={!(memberData.name && memberData.email)}>{memberData.id ? "Update" : "Save"}</button>
        </form>
    )
}

export default Form
