import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
const API_URL = import.meta.env.VITE_API_URL;


export default function ViewUser() {
  
  const [user, setUser] = useState({
     name:"",
     username:"",
     email:""
  })

  const {id} = useParams()

  useEffect(()=>{
    loadUsers()
  
  }, [])
   const loadUsers = async()=>{
    //const result = await axios.get(`http://localhost:8082/user/${id}`)
    const result = await axios.get(`${API_URL}/user/${id}`);
    setUser(result.data)}
  return (
     <div className='container'>
          <div className='row'>
             <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                   <h2 className='text-center m-4'>User details</h2>
                    <div className='card'>
                      <div className='card-header'>
                        Details of user id: <u> {user.id}</u>
                        <ul className='list-group list-group-flush'>
                          <li className='list-group-item'>
                            <b>Name: </b> {user.name}
                          </li>
                          <li className='list-group-item'>
                            <b>UserName: </b> {user.username}
                          </li>
                          <li className='list-group-item'>
                            <b>Email: </b> {user.email}
                          </li>
                        </ul>
                      </div>
                    </div>
                      <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
              </div>
           </div>
        </div>
  )
}
