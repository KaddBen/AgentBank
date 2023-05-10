import React from 'react'
import "./Error.css"
function Error() {
  return (
    <div className='error'>
<span>Erreur</span> <span>404</span>
<div>
  La page que recherchez n'existe pas...
</div>
<a href="/">
  Retour a l'acceuil
</a>
   </div>
  )
}

export default Error