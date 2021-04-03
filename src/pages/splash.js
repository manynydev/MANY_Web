import React from "react";
import {NavigationButton, IphoneScreen, ManyLogo, IphoneFrame, MainContainer} from "../components/index";
import {forwardButtonIcon} from '../assets/icons/index'


export default class Splash extends React.Component {

    render() {
        return (
            <MainContainer>
                <IphoneFrame/>
                <IphoneScreen>
                    <div style={{marginTop:'210px',marginLeft:'68px'}}>
                        <NavigationButton height='60px' width='170px' path={'/home'} displayComponent=<ManyLogo/>/>
                    </div>
                </IphoneScreen>
            </MainContainer>
        )
    }
}

