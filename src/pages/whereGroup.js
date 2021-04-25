import React from 'react';
import {
    IphoneFrame,
    MainContainer,
    TextHeaderCush,
    IphoneScreen,
    LeftBlackButton,
    RightBlackButton,
    ManyHomeButton,
    TextBaseManySans,
    NavButtonsContainer
} from "../components/index";
import {Input} from "@material-ui/core";
import {useLocation} from "react-router-dom";

function WhereGroup() {
    const location = useLocation();
    const [navProps, setNavProps] = React.useState(location.navProps);

    return (
        <MainContainer>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>Where is the group?</TextHeaderCush>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        top: '10px',
                        left: '45px',
                        gap: '5px'
                    }}>
                    <TextBaseManySans fontSize='20px'>Located in</TextBaseManySans>
                    <TextBaseManySans fontSize='20px'>Traveling from</TextBaseManySans>
                    <TextBaseManySans fontSize='20px'>Sharing from</TextBaseManySans>
                </div>
                <div
                    style={{display: 'flex', flexDirection: 'column', position: 'relative', top: '20px', left: '20px'}}>
                    <Input
                        placeholder='Country'
                        color='black'
                        disableUnderline={true}
                        style={{width: '90%', fontFamily: 'MANYSans', fontSize: 'large'}}
                    />
                    <Input
                        placeholder="City"
                        color='black'
                        disableUnderline={true}
                        style={{width: '90%', fontFamily: 'MANYSans', fontSize: 'large'}}
                    />
                    <Input
                        placeholder="Postal code"
                        color='black'
                        disableUnderline={true}
                        style={{width: '90%', fontFamily: 'MANYSans', fontSize: 'large'}}
                    />
                </div>
                <NavButtonsContainer>
                    <LeftBlackButton path={'/whoGroup'}/>
                    <ManyHomeButton path={'/home'}/>
                    <RightBlackButton path={'/whatExchange'}/>
                </NavButtonsContainer>
            </IphoneScreen>
        </MainContainer>
    )
}

export default WhereGroup;
