
import React from 'react';


const TodoList = (props) => {

    const items = props.items;
    const remover = props.Remove;
    const darupdate = props.updateName;
    const toggleCheckbox = props.toggleCheckbox;
    const editar = props.editar;

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id} >
                    <input className="checkbox" type="checkbox" checked={item.checked} onChange={() => toggleCheckbox(item.id)} />
                    <span className='task'>{item.name}</span>
                    <button className="button-edit" onClick={() => editar(item.id)}>Edit</button>
                    <button className="button-delete" onClick={() => remover(item.id)}>Remove</button>
                    <button className="button-update" onClick={() => darupdate(item.name)}>Update</button>
                </li>
            ))}
        </ul>
    );


}



export default TodoList;