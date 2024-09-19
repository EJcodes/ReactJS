import { useState } from 'react';
import { EXAMPLES } from '../data.jsx';
import TabButton from './TabButton.jsx';


export default function Examples() {

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

    return(
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
    )
} 