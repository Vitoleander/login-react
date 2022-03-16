import {
    StyledTextInput, 
    StyledFormArea, 
    StyledFormButton, 
    StyledLabel, 
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

import {FiMail, FiLock, FiUser, FiCalendar} from 'react-icons/fi';

const Signup = () => {
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.white} size={30}>
                    Signup here
                </StyledTitle>

                <Formik
                    initialValues={{
                        name: "",
                        dateOfBirth: "",
                        email: "",
                        password: "",
                        repeatPassword: "",
                    }}

                    validationSchema={
                        Yup.object({
                            name: Yup.string()
                            .required("Required"),
                            dateOfBirth: Yup.date()
                            .required("Required"),
                            email: Yup.string()
                            .email("Invalid email")
                            .required("Required"),
                            password: Yup.string()
                            .min(8, "Password is too short")
                            .max(15, "Password is  too long")
                            .required("Required"),
                            repeatPassword: Yup.string()
                            .required("Required")
                            .oneOf([Yup.ref("password")], "Password must match")
                        })
                    }

                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values);
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput 
                                name="name"
                                type="text"
                                label="Full Name"
                                placeholder="Your Name Please..."
                                icon={<FiUser/>}
                            />

                            <TextInput 
                                name="dateOfBirth"
                                type="date"
                                label="Tell us your birthday"
                                icon={<FiCalendar/>}
                            />

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

                            <TextInput
                                name="repeatPassword"
                                type="password"
                                label="Repeate your Password"
                                placeholder="******"
                                icon={<FiLock/>}
                            />

                            <ButtonGroup>
                                <StyledFormButton type="submit">
                                    Signup
                                </StyledFormButton>

                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>

                <ExtraText>
                    Already our friend? <TextLink to="/login">Login Here</TextLink>
                </ExtraText>
            </StyledFormArea>

            <CopyrightText>
                All rights reserved &copy; 2022
            </CopyrightText>
        </div>
    )
}

export default Signup;