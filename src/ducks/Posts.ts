import { Dispatch } from 'redux';
import { IServices } from '../services/index';

const START = 'posts/fetch-start'
const SUCCESS = 'posts/fetch-sucess'
const ERROR = 'posts/fetch-error'


const fetchStart = () => ({
    type: START,
})
const fetchSuccess = payload => ({
    payload,
    type: SUCCESS,
})
const fetchError = error => ({
    error,
    type: ERROR,
})

const initialState = {
    data: {},
    fetched: false,
    fetching: false,
}


export default function reducer(state = initialState, action) {
    switch (action.type){
        case START:
            return {
                ...state,
                fetching: true,
            }
        case SUCCESS:
            return {
                ...state,
                data: action.payload,
                fetched: true,
                fetching: false
            }
        case ERROR:
            return {
                ...state,
                error: action.error,
                fetching: false
            }
        default:
            return state
    }
    return state
}


export const fetchPosts = () =>
    async (dispatch: Dispatch, getState: () => any, { firestore }: IServices) => {
        dispatch(fetchStart())
        try {
            const snaps = await firestore.collection('posts').get()
            const posts = {}
            snaps.forEach(x => posts[x.id] = x.data())
            dispatch(fetchSuccess(posts))
        } catch (e) {
            dispatch(fetchError(e))
        }

    }
