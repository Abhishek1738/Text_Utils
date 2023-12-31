import React from 'react'

export default function Alert(props) {
  const cap=(word)=>{
    const l=word.toLowerCase();
    return l.charAt(0).toUpperCase()+l.slice(1);
  }
  return (

(props.alert) && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
<strong>{cap(props.alert.type)}</strong>:{props.alert.msg}

</div>

  )
}
