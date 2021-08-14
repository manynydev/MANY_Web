import React, {useState} from "react";
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
import {sharedStore} from "../components/hooks";


function WhereGroup() {
    const {initAction,initCountry,initCity,initPostalCode} = sharedStore.getState();
    const [selectedAction, selectAction] = useState(initAction);
    const [country, setCountry] = useState(initCountry);
    const [city, setCity] = useState(initCity);
    const [postalCode, setPostalCode] = useState(initPostalCode);

    function getSelectedGroupAction() {
        switch (selectedAction) {
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
                <img style={{position: 'absolute', left: 32, height: 20, top: getSelectedGroupAction()}}
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
                        selectAction(0);
                        sharedStore.dispatch({type: 'groupAction', value: 0})
                    }} style={{width: 155, height: 25}}><TextBaseManySans fontSize='20px'>__ Located
                        in</TextBaseManySans></Button>
                    <Button onClick={() => {
                        selectAction(1)
                        sharedStore.dispatch({type: 'groupAction', value: 1})
                    }} style={{width: 195, height: 25}}><TextBaseManySans fontSize='20px'>__ Traveling
                        from</TextBaseManySans></Button>
                    <Button onClick={() => {
                        selectAction(2)
                        sharedStore.dispatch({type: 'groupAction', value: 2})
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
                        value={country}
                        onChange={(event) => {
                            setCountry(event.target.value);
                            sharedStore.dispatch({type: 'country', value: event.target.value})
                        }}
                    />
                    <Input
                        placeholder="City"
                        color='black'
                        disableUnderline={true}
                        style={{width: '90%', fontFamily: 'MANYSans', fontSize: 'large'}}
                        value={city}
                        onChange={(event) => {
                            setCity(event.target.value);
                            sharedStore.dispatch({type: 'city', value: event.target.value})
                        }}
                    />
                    <Input
                        placeholder="Postal code"
                        color='black'
                        disableUnderline={true}
                        style={{width: '90%', fontFamily: 'MANYSans', fontSize: 'large'}}
                        value={postalCode}
                        onChange={(event) =>
                        {   setPostalCode(event.target.value);
                            sharedStore.dispatch({type: 'postalCode', value: event.target.value})}}
                    />
                </div>
                <NavButtonsContainer>
                    <LeftBlackButton
                        path={'/whoGroup'}/>
                    <ManyHomeButton path={'/home'}/>
                    <RightBlackButton
                        path={'/whatExchange'}/>
                </NavButtonsContainer>
            </IphoneScreen>
        </MainContainer>
    )
}

export default WhereGroup;
