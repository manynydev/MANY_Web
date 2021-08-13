import React, {useEffect, useState} from 'react';
import {
    MainContainer,
    IphoneScreen
    , TextBaseManySans, RightWhiteButton
} from "../components";
import {useHistory} from "react-router-dom";
import {ButtonBase} from "@material-ui/core";


const Offers = (props) => {
    const location = useHistory().location;
    const [selectedOffers, setSelectedOffers] = useState([]);

    useEffect( () =>{
        if (location?.navProps?.offers){
            setSelectedOffers([...location.navProps.offers])
        }
    },[])

    function handleClick(offerTextData) {
        const selectedOffersCopy = [...selectedOffers];
        if (selectedOffersCopy.includes(offerTextData)) {
            const index = selectedOffers.indexOf(offerTextData);
            selectedOffersCopy.splice(index, 1);
            setSelectedOffers([...selectedOffersCopy]);
        } else {
            setSelectedOffers([...selectedOffers, offerTextData])
        }
    }

    function createOfferSnapItems() {
        let offers = ['Time', 'Expertise', 'Cultural Exchange', 'Community', 'Knowledge Networks', 'Housing', 'Stipends', 'Visa Assistance', 'Transportation', 'Insurance', 'Other'];
        let offerSnapItems = [];
        offers.forEach((offer) => {
            const offerText = <TextBaseManySans style={{
                color: 'white',
                fontWeight: 'regular',
                fontSize: '18px',
            }}>{offer}
            </TextBaseManySans>

            offerSnapItems.push(
                <ButtonBase style={{margin: 2}} onClick={() => handleClick(offer)}>
                    {offerText}
                    <img style={{
                        position: 'relative',
                        height: 15,
                        left: 8,
                        bottom: 3,
                        visibility: selectedOffers.includes(offerText.props.children) ? 'visible' : 'hidden'
                    }}
                         src={require('../assets/icons/check_white.png').default} alt={'Check'}/>
                </ButtonBase>
            )
        })
        return offerSnapItems
    }

    const offerSnapItems = createOfferSnapItems();
    return (
        <MainContainer>
            <IphoneScreen style={{backgroundColor: '#161616'}}>
                <div style={{
                    position: 'relative',
                    left: 25,
                    top: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}>
                    {offerSnapItems}
                </div>
                <div style={{position:'absolute', right: -10,bottom:15}}>
                    <RightWhiteButton navProps={{...location?.navProps, offers: selectedOffers}}
                                      path={'/whatExchange'}/>
                </div>
            </IphoneScreen>
        </MainContainer>
    )
}


export default Offers;
