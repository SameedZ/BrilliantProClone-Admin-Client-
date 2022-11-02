import {
    SET_BREADCRUMB_ITEMS
} from './actionTypes';

const initialState={
    title : "Dashboard",
    breadcrumbItems : [
        { title : "HiTask", link : "#" },
        { title : "Dashboard", link : "#" },
        { title : "Dashboard", link : "#" },
    ],
}

const layout = (state=initialState,action) => {
    switch(action.type){
        case SET_BREADCRUMB_ITEMS:
            return {
              ...state,
              title: action.payload.title,
              breadcrumbItems: action.payload.items
            };

        default:
            state = {...state};
            break;
    }
    return state;
}

export default layout;