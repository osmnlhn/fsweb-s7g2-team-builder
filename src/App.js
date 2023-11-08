
import './App.css';
import { useState } from 'react';
import Form from "./components/Form";



function App() {
  const [memberlist, setMemberlist] = useState([]);

  const [memberToUptate,setMemberToUptate]=useState();

  const addMember=(memberData)=> {setMemberlist([...memberlist,memberData]);};
 
  const uptateMember=(memberData)=>{
  setMemberlist(
    memberlist.map((member)=>{
      if (memberData.id===member.id){
        return memberData;
      }else {
        return member;
      }
    })
  )
}

  return (
    <div className="App">
      {memberlist.map((member)=>(
      <div className='member-card'>
      <div>Name : {member.name}</div>
      <div>Email:{member.email}</div>
      <div>Role:{member.role}</div>
      <div ><button onClick={()=> setMemberToUptate(member)}>Edit</button></div>
      </div>
    
      ))}
      <Form  addMember={addMember} updateMember={uptateMember} memberToUptate={memberToUptate}/>
    </div>
  );
}

export default App;
