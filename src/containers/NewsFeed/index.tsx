import * as React from 'react';
import Container from 'src/components/Container';
import Post from 'src/components/Post';

export default class NewsFeed extends React.Component {

    public render() {
        return (
            <Container>
                <div style={{margin:'0 auto'}}>
                    <Post image={'https://placedog.net/500/400'}/>
                </div>
            </Container>
        )
    }
}