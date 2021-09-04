import React from 'react';
import './App.css';
import {RootExplore,RootAbout,RootVideo,RootHome,Platform,Home,RootAboutVideo,Splash,Jobs,Offers, WhoGroup, WhatDuration,WhatDurationMonths,Matching,WhereGroup,WhatMore,WhatExchange,WhatGlyph} from './pages/index.js'
import {Route,useLocation,Switch} from "react-router-dom";
import { useTransition, animated } from 'react-spring'

function App(props) {
    const location = useLocation()


    const siteTransitions = useTransition(location, {
        config:{ friction: 25 },
        key:location.pathname,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const platformTransitions = useTransition(location, {
        key: location.pathname,
        from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)'   },
        leave: { opacity: 0, transform: 'translate3d(0,100%,0)'},
    })

    const JSXSiteTransitions = siteTransitions((style, item, t, key) =>
        <animated.div key={key} style={style}>
            <Switch location={item}>
                <Route exact path="/">
                    <RootHome/>
                </Route>
                <Route exact path="/aboutVideo">
                    <RootAboutVideo/>
                </Route>
                <Route exact path="/video">
                    <RootVideo/>
                </Route>
                <Route exact path="/about">
                    <RootAbout/>
                </Route>
                <Route exact path="/explore">
                    <RootExplore/>
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
                <Route exact path="/rootHome">
                    <RootHome/>
                </Route>
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
                <Route exact path="/jobs">
                    <Jobs/>
                </Route>
                <Route exact path="/offers">
                    <Offers/>
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
}


export default App;
