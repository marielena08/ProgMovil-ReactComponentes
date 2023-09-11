function Formulario (){
    return(<>
    <form>
          <h3 className="titulo">FORMULARIO</h3>
          <h4 className="titulo">Marielena Nuñez Romero</h4>
          <label for="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombre" placeholder="Escribe tu nombre"/>

          <label for="apellidos">Apellidos</label>
          <input type="text" name="apellidos" id="apellidos" placeholder="Apellidos"/>

          <label for="email">Correo</label>
          <input type="email" name="correo" id="email" placeholder="Correo" required />

          <input type="submit" name="enviar" value="ENVIAR"/> <br></br>
          <input type="button" name="cancelar" value="CANCELAR"/>
        </form>
    </>)
}

export default Formulario