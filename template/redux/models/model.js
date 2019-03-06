

export default {
    name: 'exam',
    data: {
        name: '凌云'
    },
    sync: {
        update(state, payload) {
            return {
                ...state,
                ...payload
            };
        }
    },
    async: {
        test(dispatch, getState, payload) {
            setTimeout(() => {
                alert(getState()['exam'].name);
            }, 3000);
        }
    }
}