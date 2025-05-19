import { Todo } from '../../types/todo';
import './TodoItem.scss';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

const TodoItem = ({ todo, onToggle, onRemove }: TodoItemProps) => {
    return (
        <li className={`list__item list-item list-item--${todo.completed}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                className="list-item__checkbox"
            />
            <span className="list-item__text">{todo.title}</span>
            <button
                className="list-item__button list-item__button--remove"
                onClick={() => onRemove(todo.id)}
            >
                X
            </button>
        </li>
    );
};

export default TodoItem;
