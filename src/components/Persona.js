import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import getPersonas from '../helpers/getPersonas'

const Persona = () => {

    const [person, setPerson] = useState({})

    let {id} = useParams();

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        getPersonas(url).then(
            res => setPerson(res)
        ).catch(
            err => console.log(err)
        )
    }, [id]);

    return (
        <div>
            <table className="table">
                <tbody>

                <tr>
                    <td>Nombre</td>
                    <td>{person.name}</td>
                </tr>
                <tr>
                    <td>Ciudad</td>
                    <td>{person.address?.city}</td>
                </tr>
                <tr>
                    <td>Empresa</td>
                    <td>{person.company?.bs}</td>
                </tr>
                <tr>
                    <td>Correo</td>
                    <td>{person.email}</td>
                </tr>
                <tr>
                    <td>Sitio Web</td>
                    <td>{person.website}</td>
                </tr>

                </tbody>

            </table>

        </div>

    )
}

export default Persona
