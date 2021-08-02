import React, { useEffect, useState } from 'react'
import getPersonas from '../helpers/getPersonas';
import {Link} from 'react-router-dom'

const Home = () => {

    useEffect( () => {

        getPersonas('https://jsonplaceholder.typicode.com/users').then(
          res => setUsers(res)
        ).catch(
          err => console.log(err)
        )        
    
      }, []);
    
      const [users, setUsers] = useState([]);

    return (
        <div >
        <h1>Practica React con Axios</h1>
  
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Información</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map( (user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td><Link to={`/persona/${user.id}`} className="btn btn-success">Ver+</Link></td>
                </tr>
              ))
            }
          </tbody>
        </table>
  
  
  
      </div>
    )
}

export default Home
