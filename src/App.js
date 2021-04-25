import React from 'react';
import './App.css';
import {RootHome,Platform,Home, Splash, WhoGroup, WhatDuration,WhatDurationMonths,Matching,WhereGroup,WhatMore,WhatExchange,WhatGlyph} from './pages/index.js'
import {BrowserRouter as Router,Route,useLocation,Switch} from "react-router-dom";
import { useTransition, animated } from 'react-spring'

function App() {
    const location = useLocation()
    const siteTransitions = useTransition(location, {
        key:location.pathname,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    const platformTransitions = useTransition(location, {
        key: location.pathname,
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })

    const JSXSiteTransitions = siteTransitions((style, item, t, key) =>
        <animated.div key={key} style={style}>
            <Switch location={item}>
                <Route exact path="/">
                    <RootHome/>
                </Route>
                <Route exact path="/platformSplash">
                    <Splash/>
                </Route>
                <Route exact path="/platform">
                    <Platform/>
                </Route>
            </Switch>
        </animated.div>
    );

    const JSXPlatformTransitions = platformTransitions((style, item, t, key) => (
        <animated.div key={key} style={style}>
            <Switch location={item}>
                <Route exact path="/home">
                    <Home/>
                </Route>
                <Route exact path="/whoGroup">
                    <WhoGroup/>
                </Route>
                <Route exact path="/whereGroup">
                    <WhereGroup/>
                </Route>
                <Route exact path="/whatExchange">
                    <WhatExchange/>
                </Route>
                <Route exact path="/whatDuration">
                    <WhatDuration/>
                </Route>
                <Route exact path="/whatDurationMonths">
                    <WhatDurationMonths/>
                </Route>
                <Route exact path="/whatGlyph">
                    <WhatGlyph/>
                </Route>
                <Route exact path="/whatMore">
                    <WhatMore/>
                </Route>
                <Route exact path="/matching">
                    <Matching/>
                </Route>
            </Switch>
        </animated.div>
    ));

    return (<div>{JSXPlatformTransitions} {JSXSiteTransitions}</div>);



    // return platformTransitions((style, item, t, key) => (
    //     <animated.div key={key} style={style}>
    //         <Switch location={item}>
    //             <Route exact path="/">
    //                 <RootHome/>
    //             </Route>
    //             <Route exact path="/platformSplash">
    //                 <Splash/>
    //             </Route>
    //             <Route exact path="/platform">
    //                 <Platform/>
    //             </Route>
    //             <Route exact path="/home">
    //                 <Home/>
    //             </Route>
    //             <Route exact path="/whoGroup">
    //                 <WhoGroup/>
    //             </Route>
    //             <Route exact path="/whereGroup">
    //                 <WhereGroup/>
    //             </Route>
    //             <Route exact path="/whatExchange">
    //                 <WhatExchange/>
    //             </Route>
    //             <Route exact path="/whatDuration">
    //                 <WhatDuration/>
    //             </Route>
    //             <Route exact path="/whatDurationMonths">
    //                 <WhatDurationMonths/>
    //             </Route>
    //             <Route exact path="/whatGlyph">
    //                 <WhatGlyph/>
    //             </Route>
    //             <Route exact path="/whatMore">
    //                 <WhatMore/>
    //             </Route>
    //             <Route exact path="/matching">
    //                 <Matching/>
    //             </Route>
    //         </Switch>
    //     </animated.div>
    // )
    //
    // );


}


export default App;
