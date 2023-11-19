// Bank.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { accaoDeposito, accaoLevantamento } from './bankactions';
import { ModalContainer, ModalContent } from '../exercicio2/styles';


const Bank = () => {
    const [valorInput, setValorInput] = useState('');
    const dispatch = useDispatch();
    const total2 = useSelector((state) => state.banking.total);
    const erro = useSelector((state) => state.banking.error);

    const atualiza = (event) => {
        const novoValor = Math.max(0, event.target.value);
        setValorInput(novoValor);
    };

    const depositos = () => {
        dispatch(accaoDeposito(100));
    };

    const levantamento = () => {
        dispatch(accaoLevantamento(50));
    };

    const depositosManuais = () => {
        dispatch(accaoDeposito(Number(valorInput)));
    };
    const levantamentosManuais = () => {
        dispatch(accaoLevantamento(Number(valorInput)));
    };



    return (
        <ModalContainer>
            <ModalContent>
                <div>

                    <h1>Saldo: {total2} €</h1>
                    <input className="input-field" type="number" value={valorInput} onChange={atualiza} placeholder='introduza o montante que pretende depositar ou levantar' />
                    <button className="add-button" onClick={depositosManuais}>Depositar</button>
                    <button className="add-button" onClick={levantamentosManuais}>Levantar</button>
                    <button onClick={depositos}>Depositar 100 €</button>
                    <button onClick={levantamento}>Levantar 50 €</button>
                    {erro && typeof erro === 'string' && <h1> {erro}</h1>}

                </div>
            </ModalContent>
        </ModalContainer>
    );
};

export default Bank;