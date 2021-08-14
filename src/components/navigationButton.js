import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import styled from "styled-components";
import {StylesProvider} from "@material-ui/core/styles";

const StyledButton = styled(Button)`
  height: ${props => props.height ? props.height : '30px'};
  width: ${props => props.width ? props.width : '90px'};
  max-width: ${props => props.width ? props.width : '90px'};
  &:hover {
    border: ${props => props.hoverBorder? '1px solid black' :''};
    cursor: initial;
  }

  z-index: 1;
`;

const NavigationButton = (props) => {
    const history = useHistory();
    const handleClick = () => {
            history.push({
                pathname: props.path,
                navProps: props.navProps,
            });
    }

    return (
        <StylesProvider injectFirst>
            <StyledButton hoverBorder={props.hoverBorder} height={props.height}
                          width={props.width} onClick={handleClick}>
                {props.displayComponent}
            </StyledButton>
        </StylesProvider>
    );
};

export default NavigationButton

