import * as React from 'react';

interface IIntroProps {
    text?: string
}

interface IIntroState {
    text : string,
    data : number
}
export default class Into extends React.Component < IIntroProps,
IIntroState > {

    public state = {
        data: 15,
        text: "Soy un texto del estado"
    }

    public render() {
        const {text} = this.props
        const t = text
            ? text
            : this.state.text
        return (
            <p onClick={this.handleClick} className="App-intro">
                <span>{t}
                </span>
            </p>
        )
    }
    private handleClick = () => {
        this.setState({text: "Me actualice"})
    }
}