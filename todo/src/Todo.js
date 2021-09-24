import React, { useEffect } from "react"
import List from './components/List'
import Item from './components/Item'
import TodoForm from './components/TodoForm'
import './Todo.css'

const Saved_Items = "savedItems"


function Todo(){

    const [items, setItems] = React.useState([]);

    useEffect(()=>{
        let savedItems = JSON.parse(localStorage.getItem(Saved_Items))
        if (savedItems){
            setItems(savedItems);
        }
    },[])

    useEffect(() =>{
        localStorage.setItem(Saved_Items, JSON.stringify(items))
    }, [items])

    
    
    function onAddItem(text){

        let item = new Item(text);

        setItems([...items, item])
    }
    
    function onItemDeleted(item){

        let filteredItems = items.filter(it=>it.id != item.id)

        setItems(filteredItems)
    }

    function onDone(item){

        let updatedItems = items.map(it=>{
            if(it.id === item.id){
                it.done = !it.done;
            }
            return it;
        })

        setItems(updatedItems);
    }


    return (<div className="container">
                <h1>Todo</h1>
                <TodoForm onAddItem={onAddItem}></TodoForm>

                <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
           </div>)

}


export default Todo