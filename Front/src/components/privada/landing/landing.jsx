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

   <div className='muestreo'>

     <h2>MUESTREO Y ANÁLISIS DE MUESTRAS</h2>
     <p>¿Qué vamos a analizar?</p>
      <div>
        <h3>01.</h3><h3>Conductividad</h3>
        <p>Se mide para asegurarse de que haya suficiente oxígeno para que los organismos acuáticos respiren. Niveles bajos afectan negativamente a la vida acuática.</p>
        <h3>02.</h3><h3>pH</h3>
        <p>La medida de sales y minerales disueltos en el agua. Valores altos pueden indicar contaminantes o nutrientes en exceso, lo que afecta la calidad del agua.</p>
        <h3>03.</h3><h3>Oxígeno</h3>
        <p>Influye en la biología de especies acuáticas y en las reacciones químicas en el agua. Cambios en la temperatura pueden afectar la distribución y el crecimiento de organismos.</p>
        <h3>04.</h3><h3>Temperatura</h3>
        <p>Indica si el agua es ácida o alcalina. Importante para la supervivencia de muchos organismos acuáticos, ya que tienen rangos específicos de pH en los que pueden vivir.</p>
      
      
      </div>
   </div>
   </>
  )
}

export default Landing
