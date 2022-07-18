import Nav from "./components/Nav";
import data from "./data"
import Card from "./components/Card";

function App() {
  let destinations = data.map((place)=> {
    return <Card place={place}/>
  })

  return (
    <div>
      <Nav />
      {destinations}
    </div>
  );
}

export default App;
