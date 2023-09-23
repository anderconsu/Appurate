// import React from 'react'
import './landing.css'

const Landing = () => {
  return (
    <> 
   <h3 className="landing">¡APRENDAMOS MÁS SOBRE NUESTRO ECOSISTEMA!</h3>
   <p>Contaminación en la Ría de Bilbao y su Impacto en el Ecosistema</p>

   <div className="problema">
     <h2>PROBLEMA</h2>
     <p>La Ría de Bilbao se contamina con sustancias dañinas.</p>
      <div>
        <h2>ORIGEN DE LA CONTAMINACIÓN</h2>
        <div className="industrias">
          <img src="./static/landing/industria.png" alt="industria" className="industria"/>
          <p>Industrias y ciudades liberan desechos en el agua.</p>
        </div>
      </div>
      <div>
        <h2>IMPACTO</h2>
          <div className="impacto">
            <p>Pone en grave riesgo la vida acuática y el equilibrio del ecosistema.</p>
            <img src="./static/landing/mundoMano.png" alt="mundo manos" className="mundoMano"/>
          </div>
      </div>
   </div>
   </>
  )
}

export default Landing
