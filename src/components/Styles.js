import styled from 'styled-components';
import background from "./../assets/bg.jpg";

import {Link} from 'react-router-dom';

export const colors = {
    white: "#ffffff",
    green: "#778478",
    pink: "#c09c9b",
    darkg: "#627d67",
    red: "#dc2626"
}

//Styled components
export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover;
    background-attachment:fixed;
`;

//Home
export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.white};
    padding: 5px;
    margin-bottom: 20px;
`;

 export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.white};
    padding: 5px;
    margin-bottom: 25px;
`;

export const StyledContainerHome = styled.div`
    background-color: ${props => props.bg || colors.green};
    text-align: center;
    padding: 130px 55px 130px;
    opacity: 0.85;
`;

export const Avatar = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;
`;

export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.pink};
    border-radius: 25px;
    color: ${colors.white}; 
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.white};
        color: ${colors.green};
        cursor: pointer;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`;

export const StyledTextInput = styled.input`
    width: 280px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.white};
    background-color: ${colors.pink};
    border: 0;
    outline: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `background-color: ${colors.red}; color: ${colors.white};`}

    &:focus {
        background-color: ${colors.white};
        color: ${colors.green};
    }
`;

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
    color: ${colors.white};
`;

export const StyledFormArea = styled.div`
    background-color: ${props => props.bg || colors.green};
    text-align: center;
    padding: 45px 55px;
`;

export const StyledFormButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 2px solid ${colors.pink};
    border-radius: 25px;
    color: ${colors.white}; 
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.pink};
        color: ${colors.green};
        cursor: pointer;
}
`;

export const ErrorMsg = styled.div`
    font-size: 11px;
    color: ${colors.red};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: left;
`;

export const ExtraText = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => (props.color? props.color : colors.white)};
    padding: 2px;
    margin-top: 10px;
`;

export const  TextLink = styled(Link)`
    text-decoration: none;
    color: ${colors.pink};
    transition: ease-in-out 0.3s;

    &:hover {
        text-decoration: underline;
        letter-spacing: 2px;
        font-weight: bold;
    }
`;

export const StyledIcon = styled.p`
    color: ${colors.darkg};
    position: absolute;
    font-size: 21px;
    top: 35px;
    ${(props) => props.right && `right: 15px; `}
    ${(props) => !props.right && `left: 15px; `}
`

export const CopyrightText = styled.p`
    padding: 5px;
    margin: 20px;
    text-align: center;
    color: ${colors.white};
`;