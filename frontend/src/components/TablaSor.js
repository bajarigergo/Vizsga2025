import React, { useState } from 'react'

function TablaSor({elem}) {

    const [eredmeny, setEredmeny] = useState("")
    function eldontes( e ){
        if ( e.target.value === elem.magyar) {
            console.log('válasz: '+ e.target.value);
            setEredmeny('✔')
        }else{
            setEredmeny('❌')
        }
    }
  return (
    <tr className="d-flex justify-content-evenly flex-nowrap">
      <td className='order-1 p-2 ' >{elem.angol}</td>
      <td className='order-2 p-2' ><input type="text" className="form-control" onInput={eldontes} id='inputValasz' /></td>
      <td className='order-3 p-2'>{eredmeny}</td>
    </tr>
  )
}

export default TablaSor