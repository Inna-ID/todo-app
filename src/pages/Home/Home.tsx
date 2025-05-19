import React from 'react';
import Container from '../../components/Container/Container';
import { useTodos } from '../../hooks/useTodos';
import AddTodo from '../../components/AddTodo/AddTodo';
import TodoList from '../../components/TodoList/TodoList';
import './Home.scss';

const Home: React.FC = () => {
    const { todos, addTodo, toggleTodo, removeTodo } = useTodos();

    return (
        <div className="home">
            <Container>
                <AddTodo onAdd={addTodo} />
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
