import React from 'react';
import {IphoneFrame, MainContainer} from "../components/index";

export default class Platform extends React.Component {

    render() {
        return (
            <MainContainer flexDirection={'row'}>
                {/*TODO Make iframes undraggable*/}
                <div style={{zIndex:0,display:'flex',gap:80,flexDirection:'row',position:'fixed'}}>
                <IphoneFrame/>
                <IphoneFrame/>
                </div>
                <div style={{overflow:'hidden',display:'flex',gap:169,marginTop:4,flexDirection:'row',position:'fixed'}}>
                <iframe
                    style={{scrolling:'no', height: '540px', width: '306px', border: 'none', overflow: 'hidden'}}
                    src={'http://localhost:3000/home'}/>
                <iframe
                    style={{scrolling:'no', height: '540px', width: '306px', border: 'none', overflow: 'hidden'}}
                    src={'http://localhost:3000/matching'}/>
                </div>
            </MainContainer>
        )
    }

}

