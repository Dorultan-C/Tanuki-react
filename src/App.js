
import './App.css';

function App() {
  const welcomeMessage = <h1>Hello Mr.</h1>
  const name = <h1>Christian</h1>;
  return (
    <div className="App"> {welcomeMessage} {name}
     <User age={31} email='lala.com' />
     <Job salary='£120.000' position='Software engineer' company='Google' />
     <Passion flower='rose' color='indigo' cars='tesla' />
     </div>
    
  );
}

const Passion = (props) => {
  return (
    <div className='passion'>
      <p> {props.flower} </p>
      <p> {props.color} </p>
      <p> {props.cars} </p>
    </div>
  )
};
const Job = (props) => {
  return (
    <div>
       <h2> {props.salary} </h2>
       <h2> {props.position} </h2>
       <h2> {props.company} </h2>
    </div>
  )
};

const User = (props) => {
  return (
   <div>
    <h1> {props.name} </h1>
    <h1> {props.age} </h1>
    <h1> {props.email} </h1>
   </div>
  )
};

export default App;
