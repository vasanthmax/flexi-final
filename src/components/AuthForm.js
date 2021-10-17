import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from './../util/auth.js';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { SignupAction } from '../action/signupAction';
import { SigninAction } from '../action/signinAction';
import { ForgotPassAction } from '../action/forgotpass';
import { ResetPassword } from '../action/resetpassword';
import { useHistory } from 'react-router-dom';
function AuthForm(props) {
  const auth = useAuth();
  const dispatch = useDispatch();
  const [pending, setPending] = useState(false);
  const { handleSubmit, register, errors, getValues } = useForm();
  const history = useHistory();
  const token = new URLSearchParams(window.location.search).get('token');

  const submitHandlersByType = {
    signin: ({ email, pass }) => {
      const authValues = {
        email: email,
        password: pass,
      };
      return dispatch(SigninAction(authValues, history));
    },
    signup: ({ name, email, pass }) => {
      const authValues = {
        name: name,
        email: email,
        password: pass,
      };
      return dispatch(SignupAction(authValues, history));
    },
    forgotpass: ({ email }) => {
      const authValues = {
        email: email,
      };
      return dispatch(ForgotPassAction(authValues)).then(() => {
        setPending(false);

        props.onFormAlert({
          type: 'success',
          message: 'Email has been sent Successfully',
        });
      });
    },
    changepass: ({ pass }) => {
      const authValues = {
        newPass: pass,
        resetLink: token,
      };
      return dispatch(ResetPassword(authValues, history)).then(() => {
        setPending(false);

        props.onFormAlert({
          type: 'success',
          message: 'Your Password has changed Successfully',
        });
      });
    },
  };

  // Handle form submission
  const onSubmit = ({ name, email, pass }) => {
    // Show pending indicator
    setPending(true);

    // Call submit handler for auth type
    submitHandlersByType[props.type]({
      name,
      email,
      pass,
    }).catch((error) => {
      setPending(false);
      console.log(error.response);
      // Show error alert message
      if (pass < 6) {
        props.onFormAlert({
          type: 'error',
          message: 'Password must be more than 6 char',
        });
      }
      if (error.response.status == 400) {
        props.onFormAlert({
          type: 'error',
          message: error.response.data.error,
        });
      } else if (error.response.status == 401) {
        props.onFormAlert({
          type: 'error',
          message: error.response.data.error,
        });
      } else {
        props.onFormAlert({
          type: 'error',
          message: error.message,
        });
      }
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container={true} spacing={2}>
        {['signup'].includes(props.type) && (
          <Grid item={true} xs={12}>
            <TextField
              variant='outlined'
              type='text'
              label='Name'
              name='name'
              error={errors.name ? true : false}
              helperText={errors.name && errors.name.message}
              fullWidth={true}
              inputRef={register({
                required: 'Please enter a name',
                validate: (value) => {
                  if (value.length > 3) {
                    return true;
                  } else {
                    return 'Name must be more than 3 characters';
                  }
                },
              })}
            />
          </Grid>
        )}
        {['signup', 'signin', 'forgotpass'].includes(props.type) && (
          <Grid item={true} xs={12}>
            <TextField
              variant='outlined'
              type='email'
              label='Email'
              name='email'
              placeholder='user@example.com'
              error={errors.email ? true : false}
              helperText={errors.email && errors.email.message}
              fullWidth={true}
              inputRef={register({
                required: 'Please enter your email',
              })}
            />
          </Grid>
        )}

        {['signup', 'signin', 'changepass'].includes(props.type) && (
          <Grid item={true} xs={12}>
            <TextField
              variant='outlined'
              type='password'
              label='Password'
              name='pass'
              error={errors.pass ? true : false}
              helperText={errors.pass && errors.pass.message}
              fullWidth={true}
              inputRef={register({
                required: 'Please enter a password',
              })}
            />
          </Grid>
        )}

        {['signup', 'changepass'].includes(props.type) && (
          <Grid item={true} xs={12}>
            <TextField
              variant='outlined'
              type='password'
              label='Confirm Password'
              name='confirmPass'
              error={errors.confirmPass ? true : false}
              helperText={errors.confirmPass && errors.confirmPass.message}
              fullWidth={true}
              inputRef={register({
                required: 'Please enter your password again',
                validate: (value) => {
                  if (value === getValues().pass) {
                    return true;
                  } else {
                    return "This doesn't match your password";
                  }
                },
              })}
            />
          </Grid>
        )}

        <Grid item={true} xs={12}>
          <Button
            variant='contained'
            color='primary'
            size='large'
            type='submit'
            disabled={pending}
            fullWidth={true}
          >
            {!pending && <span>{props.typeValues.buttonText}</span>}

            {pending && <CircularProgress size={28} />}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default AuthForm;
