import constants from '../constants';

const defaultState = {
    link: {},
    isFetching: false,
};

const link = (state = defaultState, action) => {
    switch (action.type) {
        case constants.link.GENERATE_LINK:
            return {
                ...state,
                isFetching: true
            };
        case constants.link.LINK_GENERATED:
            return {
                ...state,
                isFetching: false,
                link: action.data
            };
        default:
            return state;
    }
};

export default link;
