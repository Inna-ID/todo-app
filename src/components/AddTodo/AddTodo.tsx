import React, { useState } from 'react';
import './AddTodo.scss';

interface AddTodoProps {
    onAdd: (title: string) => void;
}

const AddTodo = ({ onAdd }: AddTodoProps) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd(title.trim());
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Добавить задачу"
                className="todo-form__input"
            />
            <button type="submit" className="todo-form__button">
                Добавить
            </button>
        </form>
    );
};

export default AddTodo;
