  import reactImage from"./assets/react-core-concepts.png";
  function Header(){
  return <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  }
  function Task2(props)
  {
    return(
      <header id="user">
        <h2>
          {props.firstName} {props.lastName }
        </h2>
        <p>{props.title}</p>
      </header>
    )
  }
  function App() {
  return (
    <div>
    <Header/>
    <Task2 firstName="Stoyan" lastName="Kanev" title="Student" />

<Task2 firstName="Stoyan" lastName="Kanev" title="Student"/>
<Task2 firstName="Stoyan" lastName="Kanev" title="Student"/>

      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
