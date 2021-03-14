import React, {useEffect} from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";


function App() {
    const [todos, setTodos] = React.useState(() => {
        const stringTodos = localStorage.getItem('todos');
        const parseTodos = JSON.parse(stringTodos);
        if (Array.isArray(parseTodos)) {
            return parseTodos;
        } else {
            return [];
        }
    });

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        }));
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function addTodo(title) {
        setTodos(todos.concat([
                {
                    title,
                    id: Date.now(),
                    completed: false
                }
            ])
        )

    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    return (
        <Context.Provider value={{removeTodo: removeTodo}}>
            <div className='wrapper'>
                <p className="titleTextStyle">Smart Shopping List</p>

                {todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo}/>
                ) : (
                    <p>Please add item for your list!</p>
                )}
                <AddTodo onCreate={addTodo}/>
            </div>

        </Context.Provider>
    )
}


export default App;
