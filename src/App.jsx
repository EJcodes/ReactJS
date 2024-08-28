import {MainGoal} from "../MainGoal.jsx";
import componentsImg from "./assets/components.png";

const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescription[genRandomInt(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
    </header>
  );
}
 function Coreconcept(props){
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
 }

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        <Coreconcept 
          title="Components" 
          description="The core UI building block."
          image={componentsImg}
        />
        <Coreconcept 
          title="Components" 
          description="The core UI building block."
          image={componentsImg}
        />
        <Coreconcept 
          title="Components" 
          description="The core UI building block."
          image={componentsImg}
        />
        <Coreconcept 
          title="Components" 
          description="The core UI building block."
          image={componentsImg}
        />
        </ul>
        </section>
      </main>
      <MainGoal/>
    </div>
  );
}

export default App;
