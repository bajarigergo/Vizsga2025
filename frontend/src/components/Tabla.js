import React from 'react'
import { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import TablaSor from './TablaSor'

function Tabla() {
    const {szavak} = useContext(ApiContext)
  return (
    <>
    <table className="table col-12">
  <thead>
    <tr>
      <th scope="col-4">ANGOL</th>
      <th scope="col-4">MAGYAR</th>
      <th scope="col-4">visszajelzés</th>
    </tr>
  </thead>
  <tbody>
    {szavak.map((elem)=>{
        return <TablaSor key={elem.id} elem={elem}/>
    })}
  </tbody>
</table>
    </>
  )
}

export default Tabla