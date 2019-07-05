import * as React from 'react'

const style = {
    img: {
        borderRadius: '50%',
        padding: "10px 15px",
    }
}

export default class ProfileImg extends React.Component {

    public render() {

        return (
            <div >
               <img style ={style.img} src='https://randomuser.me/api/portraits/men/22.jpg'/>
                
            </div>
        )
    }
}