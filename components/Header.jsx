import reactImg from './assets/react-core-concepts.png'


export default function Header() {
    return (
      <header>
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {reactDescription[genRandomInt(2)]} React concepts you will need for almost any app you are
            going to build!
          </p>
      </header>
    );
  }