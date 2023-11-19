import { useState, useEffect } from "react";
import TodoList2 from "./TodoList2";
import { ModalContainer, ModalContent, InputField, AddButton, ConfirmButton, CancelButton, EditInput, XptoButton, XzptoButton, XzptoyButton } from './styles';

function Todoex2() {

    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [items, setItems] = useState(saveit());
    const [filter, setFilter] = useState("all");
    const [filteredItems, setFilteredItems] = useState([...items]);
    const [editedItemId, setEditedItemId] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [sucessMessage, setSucessMessage] = useState("");


    useEffect(() => {
        document.title = `Total:.${filter === 'all' ? items.length : filteredItems.length}`;
    },);


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
        <ModalContainer>
            <ModalContent>
                <h1> Lista de tarefas </h1>
                <InputField className="input-field" type="text" value={inputValue} onChange={AtualizaEstadoInput} />
                <AddButton className="add-button" onClick={JustDoIt}>Adicionar</AddButton>

                {editedItemId !== null && (
                    <div>
                        <EditInput className="edit-input" type="text" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} />
                        <ConfirmButton className="confirm-button" onClick={confirmEdit}>
                            Confirmar
                        </ConfirmButton>
                        <CancelButton className="cancel-button" onClick={() => {
                            setInputValue2('');
                            setEditedItemId(null);
                        }}>
                            Cancelar
                        </CancelButton>



                    </div>
                )}
                <div className="btnstuff">
                    <XptoButton type="button" className="xpto" onClick={() => filterstuff("all")}>
                        Todas
                    </XptoButton>
                    <XzptoButton type="button" className="xzpto" onClick={() => filterstuff("active")}>
                        Ativas
                    </XzptoButton>
                    <XzptoyButton type="button" className="xzptoy" onClick={() => filterstuff("completed")}>
                        Completas
                    </XzptoyButton>
                </div>
                <p>Total de Tarefas: {filter === 'all' ? items.length : filteredItems.length}</p>
                <TodoList2
                    items={filter === 'all' ? items : filteredItems}
                    Remove={Remove}
                    updateName={updateName}
                    toggleCheckbox={toggleCheckbox}
                    editar={editar}
                />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {sucessMessage && <p className="sucess-message">{sucessMessage}</p>}

            </ModalContent>

        </ModalContainer>
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

export default Todoex2;
