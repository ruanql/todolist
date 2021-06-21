import React, {FC, ChangeEvent, useState} from 'react';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import './App.css';
import TodoTask from './Components/TodoTask';
import {ITask} from './interfaces';
import { BsLink45Deg, BsPlusSquare } from "react-icons/bs";
import Form from 'react-bootstrap/Form'
import { Button, FormControl, InputGroup } from 'react-bootstrap';


const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task"){
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete;
    }));

  };

  return (
    <div className="App">
      <div className="title-app">
          <h1>Todo-List e Url shorter</h1>
        </div>
      <div className="header" >
        <div className="inputContainer">
          <input type="text" placeholder="Tarefa" name="task" value={task} onChange={handleChange} />
          <input type="number" placeholder="DeadLine" value={deadline} name="deadline" onChange={handleChange} />
        </div>
        <button onClick={addTask}><BsPlusSquare /> Tarefa </button>
      </div>
      <div className="todoList">
      <div className="title">
        <h1>Tarefas a fazer</h1>
      </div>
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
      <div className="shorter" >
        <div className="home">
          <div className="title">
            <h1>URL Shorter</h1>
          </div>
          <Form inline>
          <InputGroup className="mb-2 mr-sm-2">
            <InputGroup.Prepend>
              <InputGroup.Text><BsLink45Deg /></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="inlineFormInputGroupUsername2" placeholder="Link" />
            <Button type="submit" className="mb-2">
            Enviar
            </Button>
          </InputGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default App;
