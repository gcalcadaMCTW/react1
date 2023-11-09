import { useState } from "react";
import TodoList from "./TodoList";


function Todo() {

    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState(() => {
        const savedItems = JSON.parse(localStorage.getItem('items')) || [];
        return savedItems;
    });
    const [filter, setFilter] = useState("all");
    const AtualizaEstadoInput = (e) => {
        setInputValue(e.target.value);
    };

    const Remove = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        localStorage.setItem('items', JSON.stringify(updatedItems));
    }

    const updateName = (name) => {
        const updatedItems = items.map(item => {
            if (item.name === name) {
                if (inputValue !== '') {
                    item.name = inputValue;
                }
            }
            return item;
        });
        setItems(updatedItems);
        localStorage.setItem('items', JSON.stringify(updatedItems));
    }
    const toggleCheckbox = (id) => {
        const updatedItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, checked: !item.checked };

            }
            return item;

        });

        setItems(updatedItems);


        localStorage.setItem('items', JSON.stringify(updatedItems));

    };

    const JustDoIt = () => {
        if (inputValue !== '') {
            const newItem = {
                id: Date.now(),
                name: inputValue,
                checked: false,
            };

            const updatedItems = [...items, newItem];
            setItems(updatedItems);
            localStorage.setItem('items', JSON.stringify(updatedItems));
            setInputValue('');
        }
    }
    const filterstuff = (filter) => {
        const updatedItems = items.map(item => {
            if (filter === "all") {
                item.hide = false;
            } else if (filter === "active") {
                item.hide = item.checked;
            } else if (filter === "completed") {
                item.hide = !item.checked;
            }
            return item;
        });

        setFilter(filter);
        setItems(updatedItems);
    };

    return (
        <div className="modal-container">
            <div className="modal">
                <h1> What needs to be done? </h1>
                <input className="input-field" type="text" value={inputValue} onChange={AtualizaEstadoInput} />
                <button className="add-button" onClick={JustDoIt}>ADD</button>
                <div className="btnstuff">
                    <button type="button" className="xpto" onClick={() => filterstuff("all")}>
                        Mostra todas
                    </button>
                    <button type="button" className="xzpto" onClick={() => filterstuff("active")}>
                        Mostra Tarefas Ativas
                    </button>
                    <button type="button" className="xzptoy" onClick={() => filterstuff("completed")}>
                        Mostra Tarefas Completas
                    </button>
                </div>
                <TodoList items={items} Remove={Remove} updateName={updateName} toggleCheckbox={toggleCheckbox} />
            </div>
        </div >
    );
}

export default Todo;
