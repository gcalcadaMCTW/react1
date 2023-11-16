import styled from 'styled-components';

export const StyledUl = styled.ul`
margin: 10px 0px;
padding: 0;
list-style: none;
`;

export const StyledLi = styled.li`
display: flex;
align-items: center;
margin: 10px 0;
  }
  
`;
export const TaskSpan = styled.span`
  flex: 1;
`;

export const BaseButton2 = styled.button`
display: inline-block;
margin-left: 10px;
color: white;
border: none;
padding: 5px 10px;
border-radius: 5px;
cursor: pointer;
`;
export const EditButton = styled(BaseButton2)`
background-color: green;
`;
export const DeleteButton = styled(BaseButton2)`
background-color: red;
`;
export const UpdateButton = styled(BaseButton2)`
background-color: CornflowerBlue;
`;
export const Checkbox = styled.input`
transform: scale(1.9);
margin-right: 10px;
`;

export const ModalContainer = styled.div`
  position: flex;
  width: auto;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 20px black;
  text-align: center;
`;
export const InputField = styled.input`
  width: 100%;
  padding: 10px 0;
  margin: 10px 0;
  border-radius: 5px;
`;

export const AddButton = styled.button`
  width: 100%;
  background-color: red;
  color: white;
  border: none;
  padding: 10px 0;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 25px;
  cursor: pointer;
`;

export const BaseButtonConfirmCancel = styled.button`
  width: auto;
  padding: 10px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`;

export const ConfirmButton = styled(BaseButtonConfirmCancel)`
  background-color: CornflowerBlue;
  color: white;
`;

export const CancelButton = styled(BaseButtonConfirmCancel)`
  background-color: red;
  color: white;
`;

export const EditInput = styled.input`
width: auto;
padding: 8px;
margin-right: 10px;
border: 1px solid #ccc;
border-radius: 4px;
`;

export const StyledButton = styled.button`
  width: 31%;
  background-color: red;
  color: white;
  border: none;
  padding: 10px 0;
  margin-top: 5px;
  margin-right: 2%;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

export const XptoButton = styled(StyledButton)`
  background-color: black;
`;

export const XzptoButton = styled(StyledButton)`
  background-color: CornflowerBlue;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

export const XzptoyButton = styled(StyledButton)`
  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

