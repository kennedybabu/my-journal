import Nav from "./components/Nav";
import data from "./data"
import Card from "./components/Card";

function App() {
  let destinations = data.map((place, index)=> {
    return <Card place={place} key={index}/>
  })

  return (
    <div>
      <Nav />
      <div className="my-[64px]">
          {destinations}
      </div>
    </div>
  );
}

export default App;
