import * as React from 'react';
import {Link} from 'react-router-dom';
import  {InjectedFormProps, reduxForm} from 'redux-form';

import Button from './Button';
import Center from './Center';
import Input from './Input';

class LoginForm extends React.Component <InjectedFormProps> {

    public render() {

        const {handleSubmit } = this.props 

        return (
            <form onSubmit={handleSubmit}>
                <Input placeholder='Correo Electronico' label='Correo Electronico'/>
                <Input placeholder='Contraseña' type='password' label='Contraseña'/>
                <Button block={true}>Enviar</Button>
                <Center>
                    <Link to='/register'>Resgistrarse</Link>
                </Center>
            </form>
        )
    }
}

export default reduxForm({
    form:'login',
})(LoginForm);