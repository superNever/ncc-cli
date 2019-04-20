

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
        },
        /**
         * 特定层级合并赋值, 可以传一级结构也可以二级结构，也可以同时传
         * @param {*} state 
         * @param {*} searchParams 
         */
        handleParamsByKey(state, searchParams) {
            let key = Object.keys(searchParams)
            let value = Object.values(searchParams)
            let params
            let tempState = state
            let tostring = Object.prototype.toString
            key.forEach((v, k)=> {
                let ckey = key[k]
                if (tostring.call(tempState[ckey])  === '[object Object]') {
                    params = Object.assign({}, state[ckey], {...value[k]})
                    tempState = {
                        ...tempState,
                        [ckey]: params
                    }
                }  else {
                    tempState = {
                        ...tempState,
                        [ckey]: searchParams[ckey]
                    }
                }
            })
            return {
                ...state,
                ...tempState
            }
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