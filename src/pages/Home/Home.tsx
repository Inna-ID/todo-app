import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import { Todo } from '../../types/todo';
import TodoList from '../../components/TodoList/TodoList';
import './Home.scss';

const Home: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="home">
            <Container>
                <TodoList
                    todos={todos}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                />
            </Container>
        </div>
    );
};

export default Home;
