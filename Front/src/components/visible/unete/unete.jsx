import './unete.css'

const Unete = () => {
  return (
    <div className="uneteGeneral">
        <div className="uneteCabecera">Únete
            <p className="uneteTexto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus provident! Qui vitae, omnis veniam dolore eveniet delectus, obcaecati soluta harum incidunt cum excepturi vel enim, quaerat nihil! Commodi, optio!</p>
        </div>
        <div className="uneteLlamar">
            <button className="llamar" type="submit">Llamar</button>
        </div>
        <div className="uneteFormulario">Formulario de contacto
        <input type="text" className="colegio" placeholder="Colegio" />
        <input type="text" className="provincia" placeholder="provincia"/>
        <input type="text" className="telefono" placeholder="Teléfono"/>
        <input type="text" className="observaciones" placeholder="Observaciones"/>
        
        </div>
    </div>
  )
}

export default Unete
