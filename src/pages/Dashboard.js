import { 
    StyledTitle, 
    StyledSubTitle, 
    Avatar, 
    StyledButton, 
    ButtonGroup,
    StyledFormArea,
    colors
} from "../components/Styles";

import Logo from "./../assets/logo.png";

const Dashboard = () => {
    return (
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                right: 570,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start"
            }}>
                <Avatar image={Logo} />
            </div>
            <StyledFormArea bg={colors.green}>
            <div>
                <StyledTitle size={45}>
                    Welcome, User
                </StyledTitle>

                <ButtonGroup>
                <StyledButton to="/">Logout</StyledButton>
                </ButtonGroup>
            </div>
            </StyledFormArea>

        </div>
    );
}

export default Dashboard;