import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const API_URL = import.meta.env.VITE_API_URL;


export default function Home() {
  const [user, setUser] = useState([])

  useEffect(() => {
     loadUsers()
  }, [])

  const loadUsers = async () => {
   // const result = await axios.get("http://localhost:8082/getAll")
    const result = await axios.get(`${API_URL}/getAll`);
    setUser(result.data)
  }

  const deleteUsers = async (id) => {
   // await axios.delete(`http://localhost:8082/user/${id}`)
    await axios.delete(`${API_URL}/user/${id}`);
    loadUsers() // Reloads the table after deleting
  }

  return (
    <div className='container' style={{ backgroundColor: "lightblue", padding: "15px" }}>
        <div className='py-4'>
            <table className="table border-1 shadow">
  <thead className='border-3'>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {
    user.map((user, index) => (
        <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <Link className='btn btn-primary m-2' to={`/viewuser/${user.id}`}>View</Link>
                <Link className='btn btn-outline-primary m-2' to={`/edituser/${user.id}`}>Edit</Link>
                <button className='btn btn-danger m-2' onClick={() => deleteUsers(user.id)}>Delete</button>
            </td>
        </tr>
    ))
}
  </tbody>
</table>
        </div>
    </div>
  )
}