import React from "react";


const SnapItemContainer = (props) => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {props.children}
        </div>
    )
}

export default SnapItemContainer