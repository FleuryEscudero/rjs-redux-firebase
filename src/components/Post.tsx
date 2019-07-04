
import * as React from 'react'
import Footer from './Footer';

const style = {
    backgroundColor:  '#fff',
    border: '1px solid #ddd',
    padding: '15px  15px',
}
interface IPostProps {
    image: string
}


export default class Post extends React.Component <IPostProps> {
    public render (){
         const {image} = this.props
        return (
            <div style ={style}>
                <img src={image}/>
                <Footer/>
            </div>
        )
    }
}