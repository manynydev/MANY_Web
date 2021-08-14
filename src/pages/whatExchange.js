import React, {useEffect, useState} from 'react';
import {
    MainContainer,
    TextHeaderCush,
    IphoneScreen,
    TextBaseCush,
    LeftBlackButton, ManyHomeButton, RightBlackButton, NavButtonsContainer, NavigationButton, TextBaseManySans
} from "../components";
import {useHistory} from "react-router-dom";
import Input from '@material-ui/core/Input';
import {withStyles} from "@material-ui/core";
import {sharedStore} from "../components/hooks";

const StyledInput = withStyles({
    root: {
        fontFamily: 'ManySans, sans-serif',
        fontSize: '15px',
       
    },
    underline: {
        '&:before': {
            marginBottom: 5,
            borderBottomColor:'#111111'
        },
        '&:after': {
            borderBottomColor: 'black', marginBottom: 5
        }
    }
})(Input);


function WhatExchange() {

    const {title, offers} = sharedStore.getState();
    const [activities, setActivities] = useState(sharedStore.getState().activities)

    const jobTitle = title ? <TextBaseManySans color={'#111111'} underline={true}
                                               fontSize='15px'> {title} </TextBaseManySans> : <TextBaseManySans color={'#919191'} underline={true}
                                       fontSize='15px'> {'select title'} </TextBaseManySans>
    const offerTitles = offers.length > 0 ? formatSelectedOffers(offers) :
        <NavigationButton width={'select offers'.length}
                          displayComponent={<TextBaseManySans color={'#919191'} underline={true}
                                                              fontSize='15px'> {'select offers'} </TextBaseManySans>}
                          path={'/offers'}
                          height={'16px'}/>


    function formatSelectedOffers(selectedOffers) {
        if (selectedOffers.length <= 0) {
            return 'select offers'
        }
        return selectedOffers.map((offer) => {
            const text = <TextBaseManySans color={'#111111'} underline={true}
                                           fontSize='15px'> {(offer + ',').toLowerCase()} </TextBaseManySans>
            return <NavigationButton width={offer.length-10}
                                     displayComponent={text} path={'/offers'}
                                     height={'16px'}/>
        })
    }

    return (
        <MainContainer>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>What is the exchange?</TextHeaderCush>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    top: '50px',
                    position: 'absolute',
                    flexWrap: "wrap",
                    left: '5px',
                    margin: '15px'
                }}>
                    <TextBaseCush fontWeight='normal' style={{position: 'relative'}} fontSize='16px'> The group needs
                        to
                        engage
                    </TextBaseCush>
                    <div style={{position: 'relative', right: '7px', bottom: '5px'}}>
                        <NavigationButton width={jobTitle.props.children.length}
                                          displayComponent={jobTitle} path={'/jobs'}
                                          height={'16px'}/>
                    </div>
                    <TextBaseCush fontWeight='normal' style={{position: 'relative', bottom: '1px', right: '10px'}}
                                  fontSize='16px'> to </TextBaseCush>

                    <div style={{position: 'relative', right: '0px', bottom: '6px'}}>
                        <StyledInput onChange={(event) => {
                            setActivities(event.target.value);
                            sharedStore.dispatch({type: 'activities', value: event.target.value})
                        }} value={activities} inputProps={{ spellCheck: 'false' }} style={{width: 150}} placeholder={'describe activities'}
                                     multiline={true}/>
                    </div>
                    <TextBaseCush fontWeight='normal' style={{position: 'relative', bottom: '-1px', right: '2px'}}
                                  fontSize='16px'>.</TextBaseCush>
                    <TextBaseCush fontWeight='normal' style={{position: 'relative', bottom: '5px'}}
                                  fontSize='16px'>The group offers</TextBaseCush>

                    <div style={{position: 'relative', bottom: '8px', right: '5px', overflowWrap: 'break-word'}}>
                        {offerTitles}
                    </div>

                    <TextBaseCush fontWeight='normal' style={{position: 'relative', right: '12px', bottom: '3px'}}
                                  fontSize='16px'>.</TextBaseCush>
                </div>


                <NavButtonsContainer>
                    <LeftBlackButton path={'/whereGroup'}/>
                    <ManyHomeButton path={'/home'}/>
                    <RightBlackButton path={'/whatDuration'}/>
                </NavButtonsContainer>
            </IphoneScreen>
        </MainContainer>
    )
}

export default WhatExchange;

