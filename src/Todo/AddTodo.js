import React, {useState} from "react";
import PropTypes from "prop-types"
import "./Todo.css"


function AddTodo({onCreate}) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if (value.trim()) {
            onCreate('Купить ' + value)
            setValue('')
        }
    }

    return (
        <form className="formAddStyle" onSubmit={submitHandler}>
            <input value={value} onChange={event =>
                setValue(event.target.value)}
                   className="inputAddStyle"
            />
            <button type={"submit"} className="buttonAddStyle">
                Add item
            </button>
        </form>
    )

}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired

}
export default AddTodo