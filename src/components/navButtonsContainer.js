import React from "react";

// TODO: Adjust button spacing for safari users
// const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

const NavButtonContainer = (props) => {
    return(
        <div style={{display: 'flex', flexDirection: 'row', position: 'absolute',width:'308px',top:'490px', gap: '60px'}}>
            {props.children}
        </div>
        )
}

export default NavButtonContainer;
