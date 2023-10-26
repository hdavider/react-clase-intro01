//Primera forma
// function Header({titulo, contenido}) {
//segunda forma
function Header(props) {
    const {titulo, contenido} = props
return (
    <div>
        {contenido && (
            <div>
                <h1>{titulo}</h1>
                <p>{contenido}</p>
            </div>
        )}
{/*      <h1>{props.titulo}</h1>
     <p>{props.contenido}</p> */}
    </div>
    );
}

export {Header};