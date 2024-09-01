import {MainGoal} from "../MainGoal.jsx";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";

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

  function handleClick(selectedButton) {
    // selectButton => 'components', 'jsx', 'props', 'state'
    console.log(selectedButton);
  }
  return (
    <div>
      <Header/> 
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        <Coreconcept 
          title={CORE_CONCEPTS[0].title} 
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
        />
        <Coreconcept 
          title={CORE_CONCEPTS[1].title}
          description={CORE_CONCEPTS[1].description}
          image={CORE_CONCEPTS[1].image}
        />
        <Coreconcept 
          title={CORE_CONCEPTS[2].title}
          description={CORE_CONCEPTS[2].description}
          image={CORE_CONCEPTS[2].image}
        />
        <Coreconcept 
          title={CORE_CONCEPTS[3].title}
          description={CORE_CONCEPTS[3].description}
          image={CORE_CONCEPTS[3].image}
        />
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick = { () => handleClick('components')}>Components</TabButton>
            <TabButton onClick = { () => handleClick('JSX') }>JSX</TabButton>
            <TabButton onClick = { () => handleClick('Props') }>Props</TabButton>
            <TabButton onClick = { () => handleClick('State') }>State</TabButton>
          </menu>
        </section>
      </main>
      Dynamic Content
    </div>
  );
}

export default App;
