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
      <div className="mt-[100px]">
          {destinations}
      </div>
    </div>
  );
}

export default App;
