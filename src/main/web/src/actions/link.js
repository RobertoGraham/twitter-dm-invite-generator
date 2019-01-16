import constants from "../constants/index";
import qs from 'qs';

const generateLink = (displayName, text) => {
    return {
        type: constants.link.GENERATE_LINK,
        displayName,
        text
    }
};

const linkGenerated = (data) => {
    return {
        type: constants.link.LINK_GENERATED,
        data,
    }
};


const fetchLink = (displayName, text) => {
    return dispatch => {
        dispatch(generateLink(displayName, text));
        return fetch(`generateDmInviteLink?${qs.stringify({displayName: displayName, text: text})}`)
            .then(response => {
                return response.json();
            })
            .then(data => dispatch(linkGenerated(data)))
    }
};

const shouldFetchStats = (state) => {
    const {link} = state;
    const {isFetching} = link;

    return !isFetching;
};

const fetchLinkIfNeeded = (displayName, text) => {
    return (dispatch, getState) => {
        if (shouldFetchStats(getState())) {
            return dispatch(fetchLink(displayName, text));
        }
    }
};

export default {
    fetchLinkIfNeeded: fetchLinkIfNeeded
};
