

const Person = (props) => {
  return (
    <div>
      <span>Nombre: {props.name} </span> 
      <span>Apellidos: {props.surname} </span> 
      <span>Edad: {props.age}</span> 
    </div>
  );
}

export default Person;