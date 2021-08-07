import React,{useState} from 'react';
import {
    MainContainer,
    TextHeaderCush,
    IphoneScreen,
    LeftBlackButton,
    RightBlackButton,
    ManyHomeButton,
    TextBaseManySans,
    NavButtonsContainer
} from "../components/index";
import {Input,Button} from "@material-ui/core";
import {useLocation} from "react-router-dom";



function WhereGroup() {
    const location = useLocation();
    const [navProps, setNavProps] = useState(location.navProps);
    const [selectedCheck, selectCheck] = useState(0);

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
                        left: '15px',
                        gap: '5px'
                    }}>
                    <Button style={{width:155,height:25}}><TextBaseManySans fontSize='20px'>__ Located in</TextBaseManySans></Button>
                    <Button style={{width:195,height:25}}><TextBaseManySans fontSize='20px'>__ Traveling from</TextBaseManySans></Button>
                    <Button style={{width:175,height:25}}><TextBaseManySans fontSize='20px'>__ Sharing from</TextBaseManySans></Button>
                </div>
                <div
                    style={{display: 'flex', flexDirection: 'column', position: 'relative', top: '20px', left: '25px'}}>
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
                    <LeftBlackButton goBack={true} path={'/whoGroup'}/>
                    <ManyHomeButton path={'/home'}/>
                    <RightBlackButton path={'/whatExchange'}/>
                </NavButtonsContainer>
            </IphoneScreen>
        </MainContainer>
    )
}

export default WhereGroup;
