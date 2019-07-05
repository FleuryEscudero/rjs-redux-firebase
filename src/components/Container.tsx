import * as React from 'react'

const style = (center: boolean) =>  ({
    alignItems: center ? 'center' : undefined,
    backgroundColor: '#eee',
    display: 'flex',
    flexDirection:'column',
    height: '100vh',
    justifyContent: center ? 'center' : undefined,
    padding: '10px  15px',
    width: 'calc (100vw- 30px )',
} as React.CSSProperties)

interface IContainerProps {
    center? : boolean
}

export default class Container extends React.Component <IContainerProps> {
    public render() {
        const {children,center= false} = this.props
        return (
            <div style={style(center)}>
                {children}
            </div>
        )
    }
}