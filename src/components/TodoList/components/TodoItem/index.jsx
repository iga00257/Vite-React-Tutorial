import classNames from 'classnames/bind';
import { useState } from 'react';

// style
import styles from './style.module.scss'

const cx = classNames.bind(styles);

const TodoItem = (props) => {
    // 
    const {todo, setTodoList} = props
    const [todoName, setTodoName] = useState(todo.name)
    const [isEditMode, setIsEditMode] = useState(false)
    return (
        <div className={cx('todo-list-item')}>
            <input type="checkbox" name="todo" id="todo" onChange={() =>
                setTodoList((prevList) => prevList.map((item) => {
                    if (item.id === todo.id) {
                        return { ...item, done: !item.done }
                    }
                    return item
                }))
            } />
            {
                isEditMode ? (
                    <input onChange={(event) => setTodoName(event.target.value)} value={todoName}></input>
                ) :
                    <p className={cx('todo-list-item-text', { done: todo.done })}>{todoName}</p>
            }
            <div className={cx('todo-list-item-action')}>
                <button
                    className={cx('todo-list-item-button', 'edit')}
                    onClick={() => {
                        setIsEditMode(!isEditMode)
                        isEditMode && setTodoList((prevList) => {
                            return prevList.map((item) => {
                                if (item.id === todo.id) {
                                    item.name = todoName
                                }
                                return item
                            })
                        }
                        )
                    }
                    }>
                    {isEditMode ? "編輯完成" : "編輯"}
                </button>
                <button
                    className={cx('todo-list-item-button', 'delete')}
                    onClick={() => {
                        setTodoList((prevList) => prevList.filter((item) => item.id !== todo.id))
                    }
                    }>
                    delete
                </button>
            </div>
        </div>
    );
}
export default TodoItem