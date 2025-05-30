import React from 'react'
import { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import TablaSor from './TablaSor'
import { Table } from 'react-bootstrap'

function Tabla() {
    const {szavak} = useContext(ApiContext)
    
  return (
    <>
    <Table responsive className='w-80%'>
  <thead>
    <tr className="d-flex justify-content-evenly flex-nowrap">
      <th >ANGOL</th>
      <th >MAGYAR</th>
      <th >visszajelzés</th>
    </tr>
  </thead>
  <tbody>
    {szavak.map((elem)=>{
        return <TablaSor key={elem.id} elem={elem} p/>
    })}
  </tbody>
</Table>
    </>
  )
}

export default Tabla