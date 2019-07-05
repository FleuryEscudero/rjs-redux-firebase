import {faHeart, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as React from 'react'

const styles = {
    footer: {
        display: 'flex',
        marginBottom: '-15px',
        marginLeft: '-15px',
        width: 'calc(100% + 30px)'
    },
    icons: {
        cursor: 'pointer',
        flex: 1,
        padding: '10px 15px',
        textAlign: 'center'
    }as React.CSSProperties
}

export default class Footer extends React.Component {
    public render() {
        return (
            <div style={styles.footer}>
                <div style={styles.icons}>
                    <FontAwesomeIcon icon={faHeart} size="2x"/>
                </div>
                <div style={styles.icons}>
                    <FontAwesomeIcon icon={faPaperPlane} size="2x"/>
                </div>
            </div>
        )
    }
}