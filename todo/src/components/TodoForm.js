import React from "react"


function TodoForm(props){
    const [text, setText] = React.useState("");

    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    function addItem(event){
        event.preventDefault();
        if (text) {
            props.onAddItem(text);
            setText("");
        }

}
    return (
        <form>
            <input className="input" onChange={handleChange} type="text" value={text}></input>
            <button className="inputbtn" onClick={addItem}>Add</button>
            
        </form>
    )

}

export default TodoForm;

