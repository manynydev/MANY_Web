import React from 'react';
import { MainContainer} from "../components/index";

export default class Platform extends React.Component {

    render() {
        return (
            <MainContainer flexDirection={'row'}>
                {/*TODO Make iframes undraggable*/}
                <iframe
                    style={{position: 'relative', minHeight: '720px', minWidth: '400px', border: 'none'}}
                    src={'http://localhost:3000/home'}></iframe>
                <span style={{width:150}}/>
                <iframe
                    style={{position: 'relative', minHeight: '720px', minWidth: '400px', border: 'none'}}
                    src={'http://localhost:3000/matching'}></iframe>
            </MainContainer>
        )
    }

}

