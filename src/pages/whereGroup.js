import React, {useState, useEffect} from "react";
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
import {Input, Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";


function WhereGroup(props) {
    const [selectedCheck, selectCheck] = useState(0);
    let history = useHistory();

    useEffect(() => {
        selectCheck(history.location.navProps?.selectedCheck)
    }, [history.location.navProps])

    function getSelectedItem() {
        switch (selectedCheck) {
            case 1:
                return 95
            case 2:
                return 125
            default:
                return 65
        }
    }

    return (
        <MainContainer>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>Where is the group?</TextHeaderCush>
                </div>
                <img style={{position: 'absolute', left: 32, height: 20, top: getSelectedItem(props)}}
                     src={require('../assets/icons/check_black.png').default} alt={'Check'}/>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        top: '10px',
                        left: '15px',
                        gap: '5px'
                    }}>
                    <Button onClick={() => {
                        selectCheck(0)
                    }} style={{width: 155, height: 25}}><TextBaseManySans fontSize='20px'>__ Located
                        in</TextBaseManySans></Button>
                    <Button onClick={() => {
                        selectCheck(1)
                    }} style={{width: 195, height: 25}}><TextBaseManySans fontSize='20px'>__ Traveling
                        from</TextBaseManySans></Button>
                    <Button onClick={() => {
                        selectCheck(2)
                    }} style={{width: 175, height: 25}}><TextBaseManySans fontSize='20px'>__ Sharing
                        from</TextBaseManySans></Button>
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
                    <LeftBlackButton navProps={{...history.location.navProps, selectedCheck: selectedCheck}}
                                     path={'/whoGroup'}/>
                    <ManyHomeButton path={'/home'}/>
                    <RightBlackButton navProps={{...history.location.navProps, selectedCheck: selectedCheck}}
                                      path={'/whatExchange'}/>
                </NavButtonsContainer>
            </IphoneScreen>
        </MainContainer>
    )
}

export default WhereGroup;
