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
    const describeActivities = <TextBaseManySans color={'#919191'} underline={true} fontSize='16px'> describe
        activities </TextBaseManySans>
    const selectOffers = <TextBaseManySans color={'#919191'} underline={true} fontSize='16px'> select offers </TextBaseManySans>


    return (
        <MainContainer>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>What is the exchange?</TextHeaderCush>
                </div>

                <TextBaseCush fontWeight='normal' style={{margin: '15px', top: '50px'}} fontSize='18px'> The group needs
                    to
                    engage</TextBaseCush>

                <div style={{top: '90px',left:'2px', position: 'absolute'}}>
                    <NavigationButton width={'129px'} displayComponent={title} path={'/whatDurationMonths'}
                                      height={'16px'}/>
                </div>
                <TextBaseCush fontWeight='normal' style={{margin: '15px', top: '77px', left: '107px'}}
                              fontSize='18px'> to </TextBaseCush>
                <div style={{top: '115px', position: 'absolute'}}>
                    <NavigationButton width={'190px'} displayComponent={describeActivities} path={'/whatDurationMonths'}
                                      height={'16px'}/>
                </div>
                <TextBaseCush fontWeight='normal' style={{margin: '15px', top: '103px', left: '160px'}}
                              fontSize='18px'>.</TextBaseCush>
                <TextBaseCush fontWeight='normal' style={{margin: '15px', top: '127px'}}
                              fontSize='18px'>The group offers</TextBaseCush>
                <div style={{top: '145px',left:'130px', position: 'absolute'}}>
                    <NavigationButton width={'139px'} displayComponent={selectOffers} path={'/whatDurationMonths'}
                                      height={'16px'}/>
                </div>




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

