import {React,useState,useEffect} from 'react'
import axios from 'axios';

const Hooks = () => {
    const [docs, setDocs] = useState([])
        
    const addDoctor=()=>{
        setDocs([...docs,{id:4,fname:"Doctor",lname:"Strange",specialization:"Allrounder"}])
    }
    useEffect(()=>{
        console.log("use Effect called")
        axios.get('doctors.json')
        .then(res=>setDocs(res.data));
    },[])
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Specialization</th>
                </tr>
            </thead>
            <tbody>
        {docs.map(doc=>{
            return(<tr key={doc.id}>
                <td>{doc.id}</td>
                <td>{doc.fname}</td>
                <td>{doc.lname}</td>
                <td>{doc.specialization}</td>
            </tr>)
        })}
        </tbody>
        </table>
        <button onClick={addDoctor}>Add Doctor</button>
        </>
    )
}

export default Hooks
