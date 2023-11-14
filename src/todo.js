import { useState } from "react";
import TodoList from "./TodoList";


function Todo() {

    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [items, setItems] = useState(saveit());
    const [filter, setFilter] = useState("all");
    const [filteredItems, setFilteredItems] = useState([...items]);
    const [editedItemId, setEditedItemId] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [sucessMessage, setSucessMessage] = useState("");


    const AtualizaEstadoInput = (e) => {
        setInputValue(e.target.value);

    };

    const Remove = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        localStorage.setItem('items', JSON.stringify(updatedItems));
        const mensagem = setErrorMessage;
        mensagem("Tarefa removida com sucesso !");
        temporizador(mensagem);
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
        setInputValue("");



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
            const mensagem = setSucessMessage;
            mensagem("Tarefa adicionada com sucesso !");
            temporizador(mensagem);

        }
    }
    const filterstuff = (stuff) => {
        let newFilteredItems = [...items];
        if (stuff === "active") {
            newFilteredItems = items.filter(item => !item.checked);
        } else if (stuff === "completed") {
            newFilteredItems = items.filter(item => item.checked);
        } else if (stuff === "all") {
            newFilteredItems = items;
        }
        setFilter(stuff);
        setFilteredItems(newFilteredItems);
    }
    const editar = (id, name) => {

        setEditedItemId(id);
        const editedItem = items.filter(item => item.id === id)[0];
        setInputValue2(editedItem ? editedItem.name : '');


        console.log(name);
        console.log(inputValue2);
    };

    const confirmEdit = () => {
        if (inputValue2.length > 0) {
            const updatedItems = items.map((item) =>
                item.id === editedItemId ? { ...item, name: inputValue2 } : item
            );
            setItems(updatedItems);
            localStorage.setItem("items", JSON.stringify(updatedItems));
            setEditedItemId(null);
            setInputValue2('');
        } else {
            setErrorMessage("O campo não pode estar vazio.");
        }


    };



    return (
        <div className="modal-container">
            <div className="modal">
                <h1> Lista de tarefas </h1>
                <input className="input-field" type="text" value={inputValue} onChange={AtualizaEstadoInput} />
                <button className="add-button" onClick={JustDoIt}>Adicionar</button>

                {editedItemId !== null && (
                    <div>
                        <input
                            className="edit-input"
                            type="text"
                            value={inputValue2}
                            onChange={(e) => setInputValue2(e.target.value)}

                        />
                        <button className="confirm-button" onClick={confirmEdit}>
                            Confirmar
                        </button>
                        <button className="cancel-button" onClick={() => {
                            setInputValue2('');
                            setEditedItemId(null);
                        }}>
                            Cancelar
                        </button>



                    </div>
                )}
                <div className="btnstuff">
                    <button type="button" className="xpto" onClick={() => filterstuff("all")}>
                        Todas
                    </button>
                    <button type="button" className="xzpto" onClick={() => filterstuff("active")}>
                        Ativas
                    </button>
                    <button type="button" className="xzptoy" onClick={() => filterstuff("completed")}>
                        Completas
                    </button>
                </div>
                <p>Total de Tarefas: {filter === 'all' ? items.length : filteredItems.length}</p>
                <TodoList
                    items={filter === 'all' ? items : filteredItems}
                    Remove={Remove}
                    updateName={updateName}
                    toggleCheckbox={toggleCheckbox}
                    editar={editar}
                />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {sucessMessage && <p className="sucess-message">{sucessMessage}</p>}

            </div>

        </div >
    );
}

function saveit() {
    const savedItems = JSON.parse(localStorage.getItem('items')) || [];
    return savedItems;
}

function temporizador(mensagem) {
    setTimeout(() => {
        mensagem("");
    }, 5000);
};

export default Todo;
