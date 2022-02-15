const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li key={number}>{number}</li>);

function ListItems(props) {
  return (
    <div>
      <p>{props.myATributo}</p>
      <ul>{listItems}</ul>
    </div>
  );
}

export default ListItems;