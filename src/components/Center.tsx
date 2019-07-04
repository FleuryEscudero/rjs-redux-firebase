import * as React from 'react'

const style = {
    justifyContent:'center',
    textAlign: 'center',
    width: '100px',
} as React.CSSProperties

export default class Center extends React.Component {
    public render (){
        
        return (
            <div {...this.props} style = {style} />
        )
    }
}