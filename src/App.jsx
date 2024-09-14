import { useState, Fragment} from 'react';
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import {EXAMPLES} from './data.js';

 function CoreConcept(props){
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
 }

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  

  function handleClick(selectedButton) {
    // selectButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = <div id="tab-content">
    <h3>
      {EXAMPLES[selectedTopic].title}
    </h3>
    <p >
      {EXAMPLES[selectedTopic].description}
    </p>
    <pre>
      <code>
        {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>
  }
  //to do get more familar with conidtional data 
  return (
    <>
      <Header/> 
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul> 
          {CORE_CONCEPTS.map(( conceptItem ) => <CoreConcept {...conceptItem} />)}
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={ selectedTopic === 'components' } onClick = { () => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={ selectedTopic === 'jsx' } onClick = { () => handleClick('jsx') }>JSX</TabButton>
            <TabButton isSelected={ selectedTopic === 'props' }onClick = { () => handleClick('props') }>Props</TabButton>
            <TabButton isSelected={ selectedTopic === 'state' }onClick = { () => handleClick('state') }>State</TabButton>
          </menu>
        {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
