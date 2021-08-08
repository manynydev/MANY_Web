import React, {useRef} from 'react';
import {
    MainContainer,
    IphoneScreen,
    TextBaseGothic,
    NavigationButton
} from "../components";
import {SnapList, SnapItem, useDragToScroll} from "react-snaplist-carousel";
import {useHistory} from "react-router-dom";


const Offers = (props) => {
    const location = useHistory().location;
    const snapList = useRef(null);
    useDragToScroll({ref: snapList, disable: false});

    function createofferSnapItems() {
        let offers = ['Time','Expertise','Cultural Exchange','Community','Knowledge Networks','Housing','Stipends','Visa Assistance','Transportation','Insurance','Other'];
        let offerSnapItems = [];
        offers.forEach((offer) => {
            const offerText = <TextBaseGothic style={{
                color: 'white',
                fontWeight: 'regular',
                fontSize: '18px',
            }}>{offer}
            </TextBaseGothic>
            offerSnapItems.push(
                <SnapItem margin={{top: '10px', bottom: '10px'}} height="80px" snapAlign="center">
                    <NavigationButton displayComponent={offerText} path={'./whatExchange'} navProps={{...location?.navProps,offer:offer.toLowerCase()}}/>
                </SnapItem>)
        })
        return offerSnapItems;
    }

    const offerSnapItems = createofferSnapItems();
    return (
        <MainContainer>
            <IphoneScreen style={{width:'279px',backgroundColor: '#161616'}}>
                <div style={{marginLeft: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <SnapList width='120px' height='538px' direction="vertical" ref={snapList}>
                        {offerSnapItems}
                    </SnapList>
                </div>
            </IphoneScreen>
        </MainContainer>
    )
}


export default Offers;
