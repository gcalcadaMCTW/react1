const initialState = {
    total: 1000,
    error: null,
};

const bankreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DEPOSITO':
            return {

                ...state,
                total: state.total + action.qtd,
                error: null,

            };

        case 'LEVANTAMENTO':
            if (state.total >= action.qtd) {
                return {
                    ...state,
                    total: state.total - action.qtd,
                    error: null,
                };
            } else {
                return {
                    ...state,
                    error: 'Levantamento não permitido. Saldo insuficiente.',
                };
            }
        default:
            return state;
    }
};

export default bankreducer;