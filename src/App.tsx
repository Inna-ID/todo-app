import { useState } from 'react';
import { Todo } from './types/todo';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import './App.scss';

const App = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (title: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTodos((prev) => [newTodo, ...prev]);
    };

    const toggleTodo = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <div className="app">
            <Header />
            <Home />
            <AddTodo onAdd={addTodo} />
            <TodoList
                todos={todos}
                onToggle={toggleTodo}
                onRemove={removeTodo}
            />
        </div>
    );
};

export default App;
