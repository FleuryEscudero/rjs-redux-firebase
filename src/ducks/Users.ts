import { Dispatch } from 'redux';
import {IServices} from '../services/index'


export interface ILogin {
    email:string,
    password: string,
}
export interface IRegister {
    email:string,
    password: string,
}




export default function reducer(state = {}/* , action */) {
    return state
}

export const login = ({email, password}:ILogin) =>
 async (dispatch:Dispatch, getState: ()=> any, {auth}:IServices) => 
     await auth.signInWithEmailAndPassword(email, password)
    
export const register = ({email, password}:IRegister) =>
async (dispatch:Dispatch, getState: ()=> any, {auth}:IServices) => {
    const user =  await auth.createUserWithEmailAndPassword(email, password)

    // tslint:disable-next-line:no-console
    console.log({user})}