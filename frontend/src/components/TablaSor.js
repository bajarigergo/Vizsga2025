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
    <tr >
      <td className='col-4' >{elem.angol}</td>
      <td className='col-4' ><input type="text" className="form-control" onInput={eldontes} id='inputValasz' /></td>
      <td className='col-4 '>{eredmeny}</td>
    </tr>
  )
}

export default TablaSor