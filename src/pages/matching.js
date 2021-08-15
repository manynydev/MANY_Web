import React, {useRef,useState} from 'react';
import {
    MainContainer,
    IphoneScreen,
    ManyHomeButton, SnapItemContainer, Profile
} from "../components";
import {
    SnapItem, SnapList, useDragToScroll, useScroll,
} from 'react-snaplist-carousel';
import { ButtonBase } from '@material-ui/core';


const topUsers = [
    {
        id:0,
        profile: require("../assets/topUsers/39.3.png").default
    },
    {
        id:1,
        profile: require("../assets/topUsers/22.png").default
    },
    {
        id:2,
        profile: require("../assets/topUsers/40.png").default
    },
    {
        id:3,
        profile: require("../assets/topUsers/46.2.png").default,
        zIndex: 5
    },
    {
        id:4,
        profile: require("../assets/topUsers/49.1.png").default,
    },
    {
        id:5,
        profile: require("../assets/topUsers/61.png").default,
        zIndex: 5
    },
]

const bottomUsers = {
    0: [
        {profile: require("../assets/bottomUsers/14.png").default},
        {profile: require("../assets/bottomUsers/16.png").default},
        {profile: require("../assets/bottomUsers/37.png").default},
        {profile: require("../assets/bottomUsers/47.2.png").default},
        ],
    1:[
        {profile: require("../assets/bottomUsers/21.1.png").default},
        {profile: require("../assets/bottomUsers/21.2.png").default},
        {profile: require("../assets/bottomUsers/23.1.png").default},
        {profile: require("../assets/bottomUsers/23.2.png").default},
        {profile: require("../assets/bottomUsers/55.1.png").default},
        {profile: require("../assets/bottomUsers/55.2.png").default}
    ],
    2:[
        {profile: require("../assets/bottomUsers/15.png").default},
        {profile: require("../assets/bottomUsers/17.1.png").default},
        {profile: require("../assets/bottomUsers/17.2.png").default},
        {profile: require("../assets/bottomUsers/18.png").default},
        {profile: require("../assets/bottomUsers/19.png").default},
        {profile: require("../assets/bottomUsers/20.png").default},
        {profile: require("../assets/bottomUsers/38.1.png").default},
        {profile: require("../assets/bottomUsers/38.2.png").default},
        {profile: require("../assets/bottomUsers/38.3.png").default},
    ],
    3:[
        {profile: require("../assets/bottomUsers/28.png").default},
        {profile: require("../assets/bottomUsers/29.png").default},
        {profile: require("../assets/bottomUsers/31.png").default},
        {profile: require("../assets/bottomUsers/64.1.png").default},
        {profile: require("../assets/bottomUsers/64.2.png").default},
        {profile: require("../assets/bottomUsers/64.3.png").default},
        {profile: require("../assets/bottomUsers/69.1.png").default},
        {profile: require("../assets/bottomUsers/70.1.png").default},
        {profile: require("../assets/bottomUsers/70.2.png").default}
    ],
    4:[
        {profile: require("../assets/bottomUsers/51.1.png").default},
        {profile: require("../assets/bottomUsers/51.2.png").default},
        {profile: require("../assets/bottomUsers/51.3.png").default},
        {profile: require("../assets/bottomUsers/51.4.png").default},
    ],
    5:[
        {profile: require("../assets/bottomUsers/56.1.png").default},
        {profile: require("../assets/bottomUsers/56.2.png").default},
        {profile: require("../assets/bottomUsers/56.3.png").default},
        {profile: require("../assets/bottomUsers/56.4.png").default},
        {profile: require("../assets/bottomUsers/57.1.png").default},
        {profile: require("../assets/bottomUsers/57.2.png").default},
        {profile: require("../assets/bottomUsers/57.3.png").default},
        {profile: require("../assets/bottomUsers/57.4.png").default},
        {profile: require("../assets/bottomUsers/57.5.png").default},
        {profile: require("../assets/bottomUsers/58.1.png").default},
        {profile: require("../assets/bottomUsers/58.2.png").default},
        {profile: require("../assets/bottomUsers/58.3.png").default},
        {profile: require("../assets/bottomUsers/58.4.png").default},
        {profile: require("../assets/bottomUsers/58.5.png").default},
        {profile: require("../assets/bottomUsers/59.1.png").default},
        {profile: require("../assets/bottomUsers/59.2.png").default},
        {profile: require("../assets/bottomUsers/59.3.png").default},
        {profile: require("../assets/bottomUsers/59.4.png").default},
        {profile: require("../assets/bottomUsers/59.5.png").default},
        {profile: require("../assets/bottomUsers/60.1.png").default},
        {profile: require("../assets/bottomUsers/60.2.png").default},
        {profile: require("../assets/bottomUsers/60.3.png").default},
    ],
}

const createBottomUsers = (activeUserId) => {
    let activeUsersBottomMatches = bottomUsers[activeUserId];
    let bottomUsersSnapItems = []
    activeUsersBottomMatches.forEach((match => {
        bottomUsersSnapItems.push(
            <SnapItem margin={14} width="96%" height="100%" snapAlign="center">
                <SnapItemContainer>
                    <Profile src={match.profile}/>
                </SnapItemContainer>
            </SnapItem>
        )
    }))
    return bottomUsersSnapItems;
}

const Matching = () => {

    let [activeUserId,setActiveUserId] = useState(0);
    let [topUserZIndex,setTopUserZIndex] = useState(2);

    const snapList = useRef(null);
    useDragToScroll({ref: snapList, disable: false});

    const snapList1 = useRef(null);
    useDragToScroll({ref: snapList1, disable: false});

    const goToTopUser = useScroll({ref: snapList});
    const goToBottomUser = useScroll({ref: snapList1});

    React.useEffect(() => {
        goToTopUser(0, {animationEnabled: false});
        goToBottomUser(0, {animationEnabled: false});
    }, []);


    const handleClick = (userId,zIndex) => {
        setActiveUserId(userId);
        setTopUserZIndex(zIndex ? zIndex : 2);
    }

    const createTopUsers = (topUsers) => {
        let topUsersSnapItems = []
        topUsers.forEach((user => {
            topUsersSnapItems.push(
                <SnapItem width="100%" height="100%" snapAlign="center">
                    <SnapItemContainer>
                        <ButtonBase disableRipple={true} style={{cursor:'initial'}} onClick={() => {handleClick(user.id,user?.zIndex)}}>
                        <Profile src={user.profile}/>
                        </ButtonBase>
                    </SnapItemContainer>
                </SnapItem>
            )
        }))
        return topUsersSnapItems;
    }

    let topUsersSnapItems = createTopUsers(topUsers);
    let bottomUsersSnapItems = createBottomUsers(activeUserId);

    return (
        <MainContainer>
            <IphoneScreen>
                <div style={{zIndex: topUserZIndex, position: 'fixed',width:260,top:0,overflow:'hidden'}}>
                    <SnapList ref={snapList} direction="horizontal"
                              width='100%' width={260}>
                        {topUsersSnapItems}
                    </SnapList>
                </div>
                <div style={{zIndex: 3, position: 'fixed' ,width:260, marginTop: 135,overflow:'hidden'}}>
                    <SnapList ref={snapList1} direction="horizontal"
                              width='100%' width={260}>
                        {bottomUsersSnapItems}
                    </SnapList>
                </div>
                <div style={{zIndex:4,display: 'flex', flexDirection: 'row', position: 'relative', top: 405,left:90, gap: '30px'}}>
                    <ManyHomeButton path={'/home'}/>
                </div>
            </IphoneScreen>
        </MainContainer>
    )
}

export default Matching;
