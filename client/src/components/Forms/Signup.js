import React, { Fragment } from "react";
import { Formik, Field } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";

import { _inputField, ErrorPaper, LoadingButton } from "./formControls";

const styles = theme => {
    const {
        palette: { error }
    } = theme;
    return {
        errorPaper: {
            background: error.main,
            color: error.contrastText,
            padding: ".5rem 0",
            marginBottom: ".5rem"
        }
    };
};

const Login = ({ onSubmit, formError, classes }) => {
    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={{
                name: "",
                email: "",
                password: ""
            }}
            render={({ handleSubmit, dirty, ...props }) => {
                return (
                    <Fragment>
                        <ErrorPaper
                            error={formError}
                            classes={{
                                root: classes.errorPaper
                            }}
                        />
                        <form onSubmit={handleSubmit} noValidate>
                            <Field
                                name="name"
                                label="Name"
                                placeholder="John Doe"
                                type="text"
                                component={_inputField}
                            />
                            <Field
                                name="email"
                                label="Email"
                                placeholder="johndoe@email.com"
                                type="email"
                                component={_inputField}
                            />
                            <Field
                                name="password"
                                label="Password"
                                placeholder="I'll be our secret"
                                type="password"
                                component={_inputField}
                            />
                            <LoadingButton pristine={!dirty}>
                                Signup
                            </LoadingButton>
                        </form>
                    </Fragment>
                );
            }}
        />
    );
};

export default withStyles(styles)(Login);
