import Todo from "./components/Todo";

const App = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title={"test1"} />
      <Todo title={"test2"} />
      <Todo title={"test3"} />
    </div>
  );
};

export default App;
