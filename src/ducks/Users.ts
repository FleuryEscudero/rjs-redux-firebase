import { Dispatch } from 'redux';
import { IServices } from '../services/index'


export interface ILogin {
    email: string,
    password: string,
}
export interface IRegister {
    email: string,
    password: string,
}




export default function reducer(state = {}/* , action */) {
    return state
}

export const login = ({ email, password }: ILogin) =>
    async (dispatch: Dispatch, getState: () => any, { auth }: IServices) =>
        await auth.signInWithEmailAndPassword(email, password)

export const register = ({ email, password }: IRegister) =>
    async (dispatch: Dispatch, getState: () => any, { auth, firestore }: IServices) => {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password)
        const { user } = userCredential;
        const id = user ? user.uid : undefined
        const doc = firestore.collection('users').doc(id)
        await doc.set({ role: 'user' })
    }