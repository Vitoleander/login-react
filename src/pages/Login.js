import {
    StyledFormArea, 
    StyledFormButton, 
    Avatar, 
    StyledTitle, 
    colors, 
    ButtonGroup, 
    ExtraText,
    TextLink,
    CopyrightText
} from './../components/Styles';

import Logo from './../assets/logo.png';
import {Formik, Form} from 'formik';
import { TextInput } from './../components/FormLib';
import * as Yup from 'yup';
import {FiMail, FiLock} from 'react-icons/fi';

const Login = () => {
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.white} size={30}>
                    Login Here
                </StyledTitle>

                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}

                    validationSchema={
                        Yup.object({
                            email: Yup.string()
                            .email("Invalid email")
                            .required("Required"),
                            password: Yup.string()
                            .min(8, "Password is too short")
                            .max(15, "Password is  too long")
                            .required("Required"),
                        })
                    }

                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values);
                    }}>
                
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput 
                                name="email"
                                type="text"
                                label="Email Adress"
                                placeholder="Email..."
                                icon={<FiMail/>}
                            />

                            <TextInput 
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="******"
                                icon={<FiLock/>}
                            />

                            <ButtonGroup>
                                <StyledFormButton onClick={event =>  window.location.href='/dashboard'} type="submit">
                                    Login
                                </StyledFormButton>

                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>

                <ExtraText>
                    New here? 
                    <TextLink to="/signup">
                        Signup Here
                    </TextLink>
                </ExtraText>
                
            </StyledFormArea>

            <CopyrightText>
                All rights reserved &copy; 2022
            </CopyrightText>
        </div>
    )
}

export default Login;
