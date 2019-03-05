

export default {
    name: 'newNode',
    data: {
        language: {},
        context: {}
    },
    sync: {
        update: (state, payload) => {

            return {
                ...state,
                ...payload
            }
        }
    },
    async: {}
};