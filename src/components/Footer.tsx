import { faHeart,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react'

const styles =  {
    display:'flex', 
    marginBottom:'-15px',
    marginLeft:'-15px',
    width:'calc(100% + 30px)'
}

const iconStyles = {
    cursor:'pointer', 
    flex:1 , 
    padding:'10px 15px', 
    textAlign:'center'
} as React.CSSProperties

export default class Footer extends React.Component {
 public render (){
     return (
        <div style={styles}>
                    <div style={iconStyles}>
                        <FontAwesomeIcon icon={faHeart} size="2x"/>
                    </div>
                    <div style={iconStyles}>
                        <FontAwesomeIcon icon={faPaperPlane} size="2x"/>
                    </div>
                </div>
     )
 }
}