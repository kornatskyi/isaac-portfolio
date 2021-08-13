import React, {useEffect} from 'react'
import { addRule } from '../../utils/utilFunctions'; 


export default function Contacts(props) {
      //Change nav links color
  useEffect(() => {
    addRule('.nav-link:after', {
      'border-color': 'black !important'
    })
    addRule('.nav-link', {
      'color': 'black !important'
    })
}, []);
    return (
        <div>
            Contacts
        </div>
    )
}
