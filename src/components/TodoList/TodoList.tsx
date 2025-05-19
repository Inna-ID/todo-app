import { Todo } from '../../types/todo';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

const TodoList = ({ todos, onToggle, onRemove }: TodoListProps) => {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            ))}
        </ul>
    );
};

export default TodoList;
