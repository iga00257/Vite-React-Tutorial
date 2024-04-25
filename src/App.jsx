import TodoListComponent from "./components/TodoList";
import "./App.css";

const todoListData = [
  {
    id: 1,
    name: "學習 Component",
    done: false,
  },
  {
    id: 2,
    name: "學習 useState",
    done: false,
  },
  {
    id: 3,
    name: "學習 useEffect",
    done: false,
  },
  {
    id: 4,
    name: "學習 Props",
    done: false,
  },
  {
    id: 5,
    name: "學習 next.js",
    done: false,
  },
  {
    id: 6,
    name: "學習 Typescript",
    done: false,
  },
  {
    id: 7,
    name: "學習 Node.JS",
    done: false,
  },
  {
    id: 8,
    name: "學習 RestAPI",
    done: false,
  },
];

function App() {
  return <TodoListComponent />;
}

export default App;
