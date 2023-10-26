import "./ListStore.css";
import ButtonSubmit from "./ButtonSubmit";
function ItemStore(props) {
  const { element } = props;
  return (
    <div className="container">
      <h2>Titulo: {element.title}</h2>
      <p>Precio: {element.price}$</p>
      <p>{element.description}</p>
      <strong>{element.category}</strong>
      <br />
      <img src={element.image} className="pequena" alt="" />
      <ButtonSubmit />
    </div>
  );
}

export { ItemStore };

