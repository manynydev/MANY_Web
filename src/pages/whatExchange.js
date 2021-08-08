import React, {useEffect} from 'react';
import {
    MainContainer,
    TextHeaderCush,
    IphoneScreen,
    TextBaseCush,
    LeftBlackButton, ManyHomeButton, RightBlackButton, NavButtonsContainer, NavigationButton, TextBaseManySans
} from "../components";
import {useHistory} from "react-router-dom";

function WhatExchange(props) {
    let history = useHistory();
    const title = <TextBaseManySans color={'#919191'} underline={true} fontSize='16px'> select title </TextBaseManySans>
    const describe = <TextBaseManySans color={'#919191'} underline={true} fontSize='16px'> describe </TextBaseManySans>
    const activities = <TextBaseManySans color={'#919191'} underline={true}
                                         fontSize='16px'> activities </TextBaseManySans>
    const selectOffers = <TextBaseManySans color={'#919191'} underline={true} fontSize='16px'> select
        offers </TextBaseManySans>


    return (
        <MainContainer>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>What is the exchange?</TextHeaderCush>
                </div>

                <TextBaseCush fontWeight='normal' style={{margin: '15px', top: '50px'}} fontSize='18px'> The group needs
                    to
                    engage</TextBaseCush>

                <div style={{top: '82px', left: '2px', position: 'absolute'}}>
                    <NavigationButton width={'129px'} displayComponent={title} path={'/whatDurationMonths'}
                                      height={'16px'}/>
                </div>
                <TextBaseCush fontWeight='normal' style={{margin: '15px', top: '70px', left: '107px'}}
                              fontSize='18px'> to </TextBaseCush>

                <div style={{top: '82px', left: '135px', position: 'absolute'}}>
                    <NavigationButton width={'80px'} displayComponent={describe} path={'/whatDurationMonths'}
                                      height={'16px'}/>
                </div>

                <div style={{top: '100px', left: '17px', position: 'absolute'}}>
                    <NavigationButton width={'80px'} displayComponent={activities} path={'/whatDurationMonths'}
                                      height={'16px'}/>
                </div>

                <TextBaseCush fontWeight='normal' style={{margin: '15px', top: '88px', left: '85px'}}
                              fontSize='18px'>.</TextBaseCush>

                <TextBaseCush fontWeight='normal' style={{margin: '15px', top: '88px',left:'90px'}}
                              fontSize='18px'>The group offers</TextBaseCush>

                <div style={{top: '119px', position: 'absolute'}}>
                    <NavigationButton width={'139px'} displayComponent={selectOffers} path={'/whatDurationMonths'}
                                      height={'16px'}/>
                </div>

                <TextBaseCush fontWeight='normal' style={{margin: '15px', top: '108px', left: '110px'}}
                              fontSize='18px'>.</TextBaseCush>


                <NavButtonsContainer>
                    <LeftBlackButton goBack={true} navProps={history.location.navProps} path={'/whereGroup'}/>
                    <ManyHomeButton path={'/home'}/>
                    <RightBlackButton navProps={props.navProps} path={'/whatDuration'}/>
                </NavButtonsContainer>
            </IphoneScreen>
        </MainContainer>
    )
}

export default WhatExchange;

