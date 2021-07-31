import React, {useRef,useState} from 'react';
import {
    MainContainer,
    IphoneScreen,
    ManyHomeButton, SnapItemContainer
} from "../components";
import {
    SnapItem, SnapList, useDragToScroll, useScroll,
} from 'react-snaplist-carousel';


const topUsers = [
    {
        id:'0',
        profile: require("../assets/topUsers/39.3.png").default
    },
    {
        id:'1',
        profile: require("../assets/topUsers/22.png").default
    },
    {
        id:'2',
        profile: require("../assets/topUsers/40.png").default
    },
]

const bottomUsers = {
    0: [
        {profile: require("../assets/bottomUsers/14.png").default},
        {profile: require("../assets/bottomUsers/16.png").default},
        {profile: require("../assets/bottomUsers/37.png").default},
        {profile: require("../assets/bottomUsers/47.2.png").default},
        {profile: require("../assets/bottomUsers/95.png").default}
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
        {profile: require("../assets/bottomUsers/92.2.png").default},
        {profile: require("../assets/bottomUsers/93.1.png").default}
    ]
}



const createBottomUsers = (activeUserId) => {
    let activeUsersBottomMatches = bottomUsers[activeUserId];
    let bottomUsersSnapItems = []
    activeUsersBottomMatches.forEach((match => {
        bottomUsersSnapItems.push(
            <SnapItem margin={14} width="96%" height="100%" snapAlign="center">
              <SnapItemContainer>
                  <img style={{width: '100%'}} src={match.profile} alt={'Users profile'}/>
            </SnapItemContainer>
            </SnapItem>
        )
    }))
    return bottomUsersSnapItems;
}

const Matching = () => {

    let [activeUserId,setActiveUserId] = useState(0);

    const snapList = useRef(null);
    useDragToScroll({ref: snapList, disable: false});

    const snapList1 = useRef(null);
    useDragToScroll({ref: snapList1, disable: false});

    const goToTopUser = useScroll({ref: snapList});
    const goToBottomUser = useScroll({ref: snapList1});

    React.useEffect(() => {
        // scroll instantly on component did mount
        goToTopUser(0, {animationEnabled: false});
        goToBottomUser(1, {animationEnabled: false});
    }, []);

    const createTopUsers = (topUsers) => {
        let topUsersSnapItems = []
        topUsers.forEach((user => {
            topUsersSnapItems.push(
                <SnapItem margin={{left:'14px'}} width="100%" height="100%" snapAlign="center">
                    <SnapItemContainer>
                        <div onClick={()=>{setActiveUserId(user.id)} }>
                            <img style={{width: '100%' }} src={user.profile} alt={'Users profile'}/>
                        </div>
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
                <div style={{zIndex: 2, position: 'fixed',width:260,top:4,overflow:'hidden'}}>
                    <SnapList ref={snapList} direction="horizontal"
                              width='100%' height={300}>
                        {topUsersSnapItems}
                    </SnapList>
                </div>
                <div style={{zIndex: 3, position: 'fixed' ,width:260, marginTop: 160,overflow:'hidden'}}>
                    <SnapList ref={snapList1} direction="horizontal"
                              width='100%' height={246}>
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
