import * as React from 'react';
import {Link} from 'react-router-dom';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Center from '../../components/Center';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Title from '../../components/Title';

export default class Login extends React.Component {
    public render() {
        return (
            <Container center ={true}>

                <Card>
                    <Title>Iniciar Sesión</Title>
                    <Input placeholder='Correo Electronico' label='Correo Electronico'/>
                    <Input placeholder='Contraseña' type='password' label='Contraseña'/>
                    <Button block={true}>Enviar</Button>
                    <Center>
                        <Link to='/register'>Resgistrarse</Link>
                    </Center>
                </Card>
            </Container>
        )
    }
}