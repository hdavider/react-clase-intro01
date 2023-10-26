const Condicional = (props) => {
    const {valor} = props
    if(valor){

    
    return (
        <div>
            <h2>Tareas realizadas</h2>
        </div>
    );

    } else{
        return <h2>No tenemos tareas</h2>;
    }
};

export {Condicional}