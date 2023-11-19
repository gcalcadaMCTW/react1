export const accaoDeposito = (qtd) => {
    return {
        type: 'DEPOSITO',
        qtd: qtd,
    };
};

export const accaoLevantamento = (qtd) => {
    return {
        type: 'LEVANTAMENTO',
        qtd: qtd,
    };
};