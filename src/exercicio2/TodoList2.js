
import React from 'react';
import { StyledUl, StyledLi, EditButton, DeleteButton, UpdateButton, Checkbox, TaskSpan } from './styles';
import PropTypes from 'prop-types';

const TodoList2 = (props) => {

    const items = props.items;
    const remover = props.Remove;
    const darupdate = props.updateName;
    const toggleCheckbox = props.toggleCheckbox;
    const editar = props.editar;

    return (
        <StyledUl>
            {items.map((item) => (
                <StyledLi key={item.id} >
                    <Checkbox className="checkbox" type="checkbox" checked={item.checked} onChange={() => toggleCheckbox(item.id)} />
                    <TaskSpan className='task'>{item.name}</TaskSpan>
                    <EditButton className="button-edit" onClick={() => editar(item.id)}>Edit</EditButton>
                    <DeleteButton className="button-delete" onClick={() => remover(item.id)}>Remove</DeleteButton>
                    <UpdateButton className="button-update" onClick={() => darupdate(item.name)}>Update</UpdateButton>
                </StyledLi>
            ))}
        </StyledUl>
    );


}

TodoList2.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            checked: PropTypes.bool.isRequired,
        })
    ).isRequired,
};




export default TodoList2;