
import './App.css';
import Mensaje from './Mensaje';
const Descripcion = ()=>{
  return <p>Esta es la app del curso</p>
}
function App() {
  return (
    <div className="App">
      <Mensaje color="red" message="estamos trabajando"/>
      <Mensaje color="green" message="en un curso"/>
      <Mensaje color="yellow" message="de react"/>
      <Descripcion/>
    </div>
  );
}

export default App;
