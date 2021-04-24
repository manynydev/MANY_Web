import React from 'react';
import './App.css';
import {Platform,Home, Splash, WhoGroup, WhatDuration,WhatDurationMonths,Matching,WhereGroup,WhatMore,WhatExchange,WhatGlyph} from './pages/index.js'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Splash/>
                    </Route>
                    <Route path="/platform">
                        <Platform/>
                    </Route>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/whoGroup">
                        <WhoGroup/>
                    </Route>
                    <Route path="/whereGroup">
                        <WhereGroup/>
                    </Route>
                    <Route path="/whatExchange">
                        <WhatExchange/>
                    </Route>
                    <Route path="/whatDuration">
                        <WhatDuration/>
                    </Route>
                    <Route path="/whatDurationMonths">
                        <WhatDurationMonths/>
                    </Route>
                    <Route path="/whatGlyph">
                        <WhatGlyph/>
                    </Route>
                    <Route path="/whatMore">
                        <WhatMore/>
                    </Route>
                    <Route path="/matching">
                        <Matching/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}


export default App;
