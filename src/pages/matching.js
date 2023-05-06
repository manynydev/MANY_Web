import React, {useRef, useState} from 'react';
import {
    MainContainer,
    IphoneScreen,
    ManyHomeButton, SnapItemContainer, Profile
} from "../components";
import {
    SnapItem, SnapList, useDragToScroll, useScroll,
} from 'react-snaplist-carousel';
import {ButtonBase} from '@material-ui/core';
import {useSpring, animated} from 'react-spring'

const topUsers = [
    {
        id: 0,
        profile: require("../assets/top_lowres/39.1.png").default,
        paragraph: require("../assets/paragraphs_lowres/0039_para.png").default
    },
    // {
    //     id: 1,
    //     profile: require("../assets/top_lowres/39.2.png").default,
    //     paragraph: require("../assets/paragraphs_lowres/0039_para.png").default
    // },
    // {
    //     id: 2,
    //     profile: require("../assets/top_lowres/39.3.png").default,
    //     paragraph: require("../assets/paragraphs_lowres/0039_para.png").default
    // },
    {
        id: 3,
        profile: require("../assets/top_lowres/22.png").default,
        paragraph: require("../assets/paragraphs_lowres/0022_para.png").default,
        zIndex: 5
    },
    {
        id: 4,
        profile: require("../assets/top_lowres/40.png").default,
        paragraph: require("../assets/paragraphs_lowres/0040_para.png").default
    },
    {
        id: 5,
        profile: require("../assets/top_lowres/41.png").default,
        paragraph: require("../assets/paragraphs_lowres/0041_para.png").default,
    },
    {
        id: 6,
        profile: require("../assets/top_lowres/46.1.png").default,
        paragraph: require("../assets/paragraphs_lowres/0046_para.png").default,
        zIndex: 5
    },
    // {
    //     id: 7,
    //     profile: require("../assets/top_lowres/46.2.png").default,
    //     paragraph: require("../assets/paragraphs_lowres/0046_para.png").default,
    //     zIndex: 5
    // },
    {
        id: 8,
        profile: require("../assets/top_lowres/49.1.png").default,
        paragraph: require("../assets/paragraphs_lowres/0049_para.png").default,
        zIndex: 5
    },
    // {
    //     id: 9,
    //     profile: require("../assets/top_lowres/49.2.png").default,
    //     paragraph: require("../assets/paragraphs_lowres/0049_para.png").default,
    //     zIndex: 5
    // },
    // {
    //     id: 10,
    //     profile: require("../assets/top_lowres/50.1.png").default,
    //     paragraph: require("../assets/paragraphs_lowres/0050_para.png").default,
    //     zIndex: 5
    // },
    // {
    //     id: 11,
    //     profile: require("../assets/top_lowres/50.2.png").default,
    //     paragraph: require("../assets/paragraphs_lowres/0050_para.png").default,
    //     zIndex: 5
    // },
    {
        id: 12,
        profile: require("../assets/top_lowres/61.png").default,
        zIndex: 5,
        right: 20
    },
    {
        id: 13,
        profile: require("../assets/top_lowres/67.png").default,
        zIndex: 5,
        right: 20
    },
    {
        id: 14,
        profile: require("../assets/top_lowres/73.1.png").default,
        zIndex: 5,
        right: 20
    },
    // {
    //     id: 15,
    //     profile: require("../assets/top_lowres/73.2.png").default,
    //     zIndex: 5
    // },
    {
        id: 16,
        profile: require("../assets/top_lowres/74.png").default,
        zIndex: 5,
        right: 20
    },
    {
        id: 17,
        profile: require("../assets/top_lowres/77.png").default,
        zIndex: 5,
        right: 20
    },
    {
        id: 18,
        profile: require("../assets/top_lowres/78.2.png").default,
        zIndex: 5,
        right: 20
    },
    {
        id: 19,
        profile: require("../assets/top_lowres/80.png").default,
        zIndex: 5,
        right: 20
    },
    {
        id: 20,
        profile: require("../assets/top_lowres/81.png").default,
        zIndex: 5,
        right: 20
    },
    {
        id: 21,
        profile: require("../assets/top_lowres/85.1.png").default,
        zIndex: 5,
        right: 20
    },
    {
        id: 22,
        profile: require("../assets/top_lowres/86.1.png").default,
        zIndex: 5,
        right: 20
    },
    {
        id: 23,
        profile: require("../assets/top_lowres/88.1.png").default,
        zIndex: 5,
        right: 20
    },
    {
        id: 24,
        profile: require("../assets/top_lowres/89.png").default,
        zIndex: 5,
        right: 20
    },
]

const bottomUsers = {
    0: [
        {
            profile: require("../assets/bott_lowres/14.png").default,
            paragraph: require("../assets/paragraphs_lowres/0014_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/16.png").default,
            paragraph: require("../assets/paragraphs_lowres/0016_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/37.png").default,
            paragraph: require("../assets/paragraphs_lowres/0037_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/47.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0047_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/95.png").default,
            paragraph: require("../assets/paragraphs_lowres/0095_para.png").default
        },
    ],
    // 1: [
    //     {
    //         profile: require("../assets/bott_lowres/14.png").default,
    //         paragraph: require("../assets/paragraphs_lowres/0014_para.png").default
    //     }
    // ],
    // 2: [
    //     {
    //         profile: require("../assets/bott_lowres/14.png").default,
    //         paragraph: require("../assets/paragraphs_lowres/0014_para.png").default
    //     },
    //     {
    //         profile: require("../assets/bott_lowres/16.png").default,
    //         paragraph: require("../assets/paragraphs_lowres/0016_para.png").default
    //     },
    //     {
    //         profile: require("../assets/bott_lowres/37.png").default,
    //         paragraph: require("../assets/paragraphs_lowres/0037_para.png").default
    //     },
    //     {
    //         profile: require("../assets/bott_lowres/47.1.png").default,
    //         paragraph: require("../assets/paragraphs_lowres/0047_para.png").default
    //     }
    //     ,
    //     {
    //         profile: require("../assets/bott_lowres/47.2.png").default,
    //         paragraph: require("../assets/paragraphs_lowres/0047_para.png").default
    //     }
    // ],
    3:[
        {
            profile: require("../assets/bott_lowres/21.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0021_para.png").default
        },
        // {
        //     profile: require("../assets/bott_lowres/21.2.png").default,
        //     paragraph: require("../assets/paragraphs_lowres/0021_para.png").default
        // },
        {
            profile: require("../assets/bott_lowres/23.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0023_para.png").default
        },
        // {
        //     profile: require("../assets/bott_lowres/23.2.png").default,
        //     paragraph: require("../assets/paragraphs_lowres/0023_para.png").default
        // },
        {
            profile: require("../assets/bott_lowres/55.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0055_para.png").default
        },
        // {
        //     profile: require("../assets/bott_lowres/55.2.png").default,
        //     paragraph: require("../assets/paragraphs_lowres/0055_para.png").default
        // }
    ],
    4:[
        {
            profile: require("../assets/bott_lowres/15.png").default,
            paragraph: require("../assets/paragraphs_lowres/0015_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/17.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0017_para.png").default
        },
        // {
        //     profile: require("../assets/bott_lowres/17.2.png").default,
        //     paragraph: require("../assets/paragraphs_lowres/0017_para.png").default
        // },
        {
            profile: require("../assets/bott_lowres/18.png").default,
            paragraph: require("../assets/paragraphs_lowres/0018_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/19.png").default,
            paragraph: require("../assets/paragraphs_lowres/0019_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/20.png").default,
            paragraph: require("../assets/paragraphs_lowres/0020_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/38.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0038_para.png").default
        },
        // {
        //     profile: require("../assets/bott_lowres/38.2.png").default,
        //     paragraph: require("../assets/paragraphs_lowres/0038_para.png").default
        // },
        {
            profile: require("../assets/bott_lowres/92.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0092_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/93.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0093_para.png").default
        },
    ],
    5:[
        {
            profile: require("../assets/bott_lowres/14.png").default,
            paragraph: require("../assets/paragraphs_lowres/0014_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/16.png").default,
            paragraph: require("../assets/paragraphs_lowres/0016_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/37.png").default,
            paragraph: require("../assets/paragraphs_lowres/0037_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/47.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0047_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/95.png").default,
            paragraph: require("../assets/paragraphs_lowres/0095_para.png").default
        },
    ],
    6:[
        {
            profile: require("../assets/bott_lowres/28.png").default,
            paragraph: require("../assets/paragraphs_lowres/0028_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/29.png").default,
            paragraph: require("../assets/paragraphs_lowres/0029_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/31.png").default,
            paragraph: require("../assets/paragraphs_lowres/0031_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/64.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0064_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/69.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0069_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/70.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0070_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/94.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0094_para.png").default
        },
    ],
    // 7:[
    //     {
    //         profile: require("../assets/bott_lowres/28.png").default,
    //         paragraph: require("../assets/paragraphs_lowres/0028_para.png").default
    //     },
    //     {
    //         profile: require("../assets/bott_lowres/29.png").default,
    //         paragraph: require("../assets/paragraphs_lowres/0029_para.png").default
    //     },
    //     {
    //         profile: require("../assets/bott_lowres/31.png").default,
    //         paragraph: require("../assets/paragraphs_lowres/0031_para.png").default
    //     },
    //     {
    //         profile: require("../assets/bott_lowres/64.1.png").default,
    //         paragraph: require("../assets/paragraphs_lowres/0064_para.png").default
    //     },
    //     {
    //         profile: require("../assets/bott_lowres/64.2.png").default,
    //         paragraph: require("../assets/paragraphs_lowres/0064_para.png").default
    //     },
    //     {
    //         profile: require("../assets/bott_lowres/64.3.png").default,
    //         paragraph: require("../assets/paragraphs_lowres/0064_para.png").default
    //     },
    //     {
    //         profile: require("../assets/bott_lowres/69.1.png").default,
    //         paragraph: require("../assets/paragraphs_lowres/0069_para.png").default
    //     },
    //     {
    //         profile: require("../assets/bott_lowres/69.2.png").default,
    //         paragraph: require("../assets/paragraphs_lowres/0069_para.png").default
    //     },
    //     {
    //         profile: require("../assets/bott_lowres/70.1.png").default,
    //         paragraph: require("../assets/paragraphs_lowres/0070_para.png").default
    //     },
    //     {
    //         profile: require("../assets/bott_lowres/70.2.png").default,
    //         paragraph: require("../assets/paragraphs_lowres/0070_para.png").default
    //     }
    // ],
    8:[
        {
            profile: require("../assets/bott_lowres/51.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0050_para.png").default
        },
    ],
    12:[
        {
            profile: require("../assets/bott_lowres/56.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0056_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/57.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0057_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/58.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0058_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/59.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0059_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/60.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0060_para.png").default
        },
    ],
    13:[
        {
            profile: require("../assets/bott_lowres/66.png").default,
            paragraph: require("../assets/paragraphs_lowres/0066_para.png").default
        },
    ],
    14:[
        {
            profile: require("../assets/bott_lowres/2.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0002_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/3.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0003_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/4.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0004_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/5.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0005_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/6.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0006_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/94.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0094_para.png").default
        },
    ],
    16:[
        {
            profile: require("../assets/bott_lowres/2.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0002_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/3.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0003_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/4.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0004_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/5.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0005_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/6.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0006_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/94.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0094_para.png").default
        },
    ],
    17:[
        {
            profile: require("../assets/bott_lowres/7.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0007_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/8.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0008_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/12.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0012_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/44.png").default,
            paragraph: require("../assets/paragraphs_lowres/0044_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/45.png").default,
            paragraph: require("../assets/paragraphs_lowres/0045_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/52.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0052_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/82.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0082_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/90.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0090_para.png").default
        },
    ],
    18:[
        {
            profile: require("../assets/bott_lowres/14.png").default,
            paragraph: require("../assets/paragraphs_lowres/0014_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/16.png").default,
            paragraph: require("../assets/paragraphs_lowres/0016_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/31.png").default,
            paragraph: require("../assets/paragraphs_lowres/0031_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/47.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0047_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/92.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0092_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/93.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0093_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/95.png").default,
            paragraph: require("../assets/paragraphs_lowres/0095_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/96.png").default,
            paragraph: require("../assets/paragraphs_lowres/0096_para.png").default
        },
    ],
    19:[
        {
            profile: require("../assets/bott_lowres/9.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0009_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/13.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0013_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/24.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0024_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/25.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0025_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/26.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0026_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/27.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0027_para.png").default
        },
    ],
    20:[
        {
            profile: require("../assets/bott_lowres/10.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0010_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/11.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0011_para.png").default
        },
    ],
    21:[
        {
            profile: require("../assets/bott_lowres/24.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0024_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/25.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0025_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/26.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0026_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/27.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0027_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/84.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0084_para.png").default
        },
    ],
    22:[
        {
            profile: require("../assets/bott_lowres/24.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0024_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/25.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0025_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/26.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0026_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/27.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0027_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/84.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0084_para.png").default
        },
    ],
    23:[
        {
            profile: require("../assets/bott_lowres/7.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0007_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/8.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0008_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/44.png").default,
            paragraph: require("../assets/paragraphs_lowres/0044_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/54.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0054_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/82.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0082_para.png").default
        },
    ],
    24:[
        {
            profile: require("../assets/bott_lowres/32.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0032_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/33.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0033_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/34.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0034_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/35.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0035_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/36.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0036_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/83.1.png").default,
            paragraph: require("../assets/paragraphs_lowres/0083_para.png").default
        },
        {
            profile: require("../assets/bott_lowres/62.png").default,
            paragraph: require("../assets/paragraphs_lowres/0062_para.png").default
        },
    ],
}

const Matching = () => {

    let [activeUserId, setActiveUserId] = useState(0);
    let [topUserZIndex, setTopUserZIndex] = useState(2);
    // let [bottomUserClicked, setBottomUserClicked] = useState(false);

    // const profileAnimationProps = useSpring(
    //     {
    //         opacity: bottomUserClicked ? 0 : 1,
    //     }
    // )
    //
    // const paragraphAnimationProps = useSpring(
    //     {
    //         opacity: bottomUserClicked ? 1 : 0,
    //     }
    // )

    const snapList = useRef(null);
    useDragToScroll(
        {
            ref: snapList, disable:
                false
        }
    );
    const snapListVertical = useRef(null);
    useDragToScroll(
        {
            ref: snapListVertical, disable:
                false
        }
    );
    const snapList1 = useRef(null);
    useDragToScroll(
        {
            ref: snapList1, disable:
                false
        }
    );
    const goToProfilesVertical = useScroll(
        {
            ref: snapListVertical
        }
    );
    const goToProfilesTop = useScroll(
        {
            ref: snapList
        }
    );

    const handleClick = (userId, zIndex) => {
        setActiveUserId(userId);
        // setTopUserZIndex(zIndex ? zIndex : 2);
    }
    const createTopUsers = (topUsers) => {
        let topUsersSnapItems = []
        topUsers.forEach((user => {
            topUsersSnapItems.push(
                <SnapItem width={'275'} height={'675'}
                          snapAlign="center">
                    <ButtonBase disableRipple={true} style={{
                        cursor: 'initial',
                        zIndex: user?.zIndex,
                        height: 675,
                        width: 278,
                        position: 'relative',
                        right: user?.right ?? 150
                    }}
                                onClick={() => {
                                    handleClick(user.id, user?.zIndex)
                                }}>
                        <img draggable='false' style={{
                            objectFit: 'contain',
                            height: 450,
                            bottom: 130,
                            // left: 2,
                            position: 'relative',
                            imageRendering: '-webkit-optimize-contrast'
                        }}
                             src={user.paragraph} alt={"paragraph"}/>
                        <div style={{position: 'relative', top: 205, left: 10, objectFit: 'contain'}}>
                            <Profile src={user.profile}/>
                        </div>
                    </ButtonBase>
                </SnapItem>
            )
        }));
        return topUsersSnapItems;
    }
    const createBottomUsers = (activeUserId) => {
        let activeUsersBottomMatches = bottomUsers[activeUserId];
        let bottomUsersSnapItems = [];
        activeUsersBottomMatches.forEach((match => {
            bottomUsersSnapItems.push(
                <SnapItem height={675} width="100%" snapAlign="center">
                    <div style={{objectFit: 'contain', height: 675}}>
                        <div style={{position: 'relative', top: -40, right: 10}}>
                            <Profile src={match.profile}/>
                        </div>
                        <img draggable='false' style={{
                            objectFit: 'contain',
                            height: 450,
                            position: 'relative',
                            top: -10,
                            imageRendering: '-webkit-optimize-contrast'
                        }}
                             src={match.paragraph} alt={"paragraph"}/>
                    </div>
                </SnapItem>
            )
        }));
        return bottomUsersSnapItems;
    }
    let topUsersSnapItems = createTopUsers(topUsers);
    let bottomUsersSnapItems = createBottomUsers(activeUserId);
    React.useEffect(() => {
        goToProfilesVertical(1, {animationEnabled: true});
    }, []);

    return (
        <MainContainer style={{backgroundColor: '#f8f8f8'}}>
            <SnapList direction="vertical" width={"100%"} scrollPadding={{top: 0}} ref={snapListVertical}>
                <SnapItem snapAlign={"center"} height={0}/>
                <SnapItem height={1350} snapAlign="center">
                    <div>
                        <div style={{position: 'relative', width: 275, height: 675, top: 55}}>
                            <SnapList ref={snapList} direction="horizontal" height={675} width={275}>
                                {topUsersSnapItems}
                            </SnapList>
                        </div>
                        <div style={{position: 'relative', width: 275, bottom: 58}}>
                            <SnapList ref={snapList1} direction="horizontal"
                                      width={275} height={675}>
                                {bottomUsersSnapItems}
                            </SnapList>
                        </div>
                    </div>
                    <div style={{
                        zIndex: 100,
                        right: 185,
                        top: 865,
                        height: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        position: 'relative',
                    }}>
                        <ManyHomeButton path={'/home'}/>
                    </div>
                </SnapItem>
                <SnapItem snapAlign={"center"} height={0}/>
            </SnapList>
        </MainContainer>
    )
}

export default Matching;
