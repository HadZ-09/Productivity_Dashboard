import { useState,useEffect } from "react"
import './todo.css'
function ToDo(){

    const [items, setItem] = useState(() => {
        const savedItems = localStorage.getItem("todo_list");
        return savedItems ? JSON.parse(savedItems) : [];
    });

    // let display
    // if (items.length===0)
    //     display="No Entries"
    // else
    //     display=" "
    useEffect(() => {
        localStorage.setItem("todo_list", JSON.stringify(items));
    }, [items]);
    function handleAdd(){
        if(document.querySelector('.input').value.trim()!="")
        {
        let newItem=document.querySelector('.input')   
        setItem([...items,newItem.value])
        document.querySelector('.input').value=""

        }
    else{
        alert("Enter Valid To-Do")
        
    }
    }
    function handleDelete(index)
    {

        let newTodo=items.filter((_,i)=>index!==i)
        setItem(newTodo)

    }
    function handleDown(index)
    {
        [items[index],items[index+1]]=[items[index+1],items[index]]
        setItem([...items])

    }
    function handleUp(index)
    {
        [items[index],items[index-1]]=[items[index-1],items[index]]
        setItem([...items])

    }
    return(
        <>   
        <div className="TODO">
        <h1 className="ToDo">Todo</h1>
        <div>
        <input className="input" placeholder="Enter To-Do"></input>
        <button className="inputButton" onClick={handleAdd}>Add</button>
        </div>
        {items.length === 0 ? (
        <p className="empty-message">No Entries</p>
      ) : (
        <ul>
        {
        
            items.map((item,index)=>(
            
            
            <li key={index}>
               
                
                <input type="checkbox" className="checkbox"></input> 
                 {/* <span className="todo-text">{display}</span> */}
                <span className="todo-text">{item}</span>
            <span>
            <button className="delete" onClick={()=>handleDelete(index)}> 
                Delete
            </button>
            
                <button className="arrow-btn"onClick={()=>handleUp(index)}>
                ⬆
            </button>
            <button className="arrow-btn"onClick={()=>handleDown(index)}>
                ⬇
            </button>
            
            </span>
            </li>
            
            

            ))
        }
        </ul>
        )}
        </div>
        </>

    )
}
export default ToDo