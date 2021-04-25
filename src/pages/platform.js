import React from 'react';
import {IphoneFrame, MainContainer} from "../components/index";

export default class Platform extends React.Component {

    render() {
        return (
            <MainContainer flexDirection={'row'}>
                {/*TODO Make iframes undraggable*/}
                <div style={{display:'flex',gap:80,flexDirection:'row',position:'fixed'}}>
                <IphoneFrame/>
                <IphoneFrame/>
                </div>
                <div style={{zIndex:0,overflow: 'hidden', display:'flex',gap:174,marginTop:3,marginRight:5,flexDirection:'row',position:'fixed'}}>
                <iframe
                    style={{scrolling:'no', height: '535px', width: '300px', border: 'none', overflow: 'hidden'}}
                    src={'http://localhost:3000/home'}/>
                <iframe
                    style={{scrolling:'no', height: '535px', width: '300px', border: 'none', overflow: 'hidden'}}
                    src={'http://localhost:3000/matching'}/>
                </div>
            </MainContainer>
        )
    }

}

