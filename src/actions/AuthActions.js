/* eslint-disable no-console */
import authService from '../networking/services/auth.service';

const prefix = 'Auth';

export const TYPES = {
  CREATE_USER_REQUEST: `${prefix}/CREATE_USER_REQUEST`,
  CREATE_USER_ERROR: `${prefix}/CREATE_USER_ERROR`,
  CREATE_USER_SUCCESS: `${prefix}/CREATE_USER_SUCCESS`,
  LOGIN_REQUEST: `${prefix}/LOGIN_REQUEST`,
  LOGIN_ERROR: `${prefix}/LOGIN_ERROR`,
  LOGIN_SUCCESS: `${prefix}/LOGIN_SUCCESS`,
  LOGOUT_REQUEST: `${prefix}/LOGOUT_REQUEST`,
  LOGOUT_SUCCESS: `${prefix}/LOGOUT_SUCCESS`,
  VERIFY_EMAIL_REQUEST: `${prefix}/VERIFY_EMAIL_REQUEST`,
  VERIFY_EMAIL_ERROR: `${prefix}/VERIFY_EMAIL_ERROR`,
  VERIFY_EMAIL_SUCCESS: `${prefix}/VERIFY_EMAIL_SUCCESS`,
  CLEAR_AUTH_STORE: `${prefix}/CLEAR_AUTH_STORE`,
  SET_USER_PROFILE_REQUEST: `${prefix}/SET_USER_PROFILE_REQUEST`,
  SET_USER_PROFILE_SUCCESS: `${prefix}/SET_USER_PROFILE_SUCCESS`,
  SET_USER_PROFILE_ERROR: `${prefix}/SET_USER_PROFILE_ERROR`,
  SEND_PASSWORD_RESET_EMAIL_REQUEST: `${prefix}/SEND_PASSWORD_RESET_EMAIL_REQUEST`,
  SEND_PASSWORD_RESET_EMAIL_SUCCESS: `${prefix}/SEND_PASSWORD_RESET_EMAIL_SUCCESS`,
  SEND_PASSWORD_RESET_EMAIL_ERROR: `${prefix}/SEND_PASSWORD_RESET_EMAIL_ERROR`,
  CONFIRM_PASSWORD_RESET_REQUEST: `${prefix}/CONFIRM_PASSWORD_RESET_REQUEST`,
  CONFIRM_PASSWORD_RESET_SUCCESS: `${prefix}/CONFIRM_PASSWORD_RESET_SUCCESS`,
  CONFIRM_PASSWORD_RESET_ERROR: `${prefix}/CONFIRM_PASSWORD_RESET_ERROR`,
};

// ===================================

const createUserRequest = () => ({
  type: TYPES.CREATE_USER_REQUEST,
  payload: null,
});

const createUserSuccess = (result) => ({
  type: TYPES.CREATE_USER_SUCCESS,
  payload: result,
});

const createUserError = (error) => ({
  type: TYPES.CREATE_USER_ERROR,
  payload: error,
});

// ===================================

const loginRequest = () => ({
  type: TYPES.LOGIN_REQUEST,
  payload: null,
});

const loginSuccess = (result) => ({
  type: TYPES.LOGIN_SUCCESS,
  payload: result,
});

const loginError = (error) => ({
  type: TYPES.LOGIN_ERROR,
  payload: error,
});

export const logoutRequest = () => ({
  type: TYPES.LOGOUT_REQUEST,
  payload: null,
});

export const logoutSuccess = () => ({
  type: TYPES.LOGOUT_SUCCESS,
  payload: null,
});

// ===================================

const sendVerificationEmailRequest = () => ({
  type: TYPES.VERIFY_EMAIL_REQUEST,
  payload: null,
});

const sendVerificationEmailSuccess = () => ({
  type: TYPES.VERIFY_EMAIL_SUCCESS,
  payload: null,
});

const sendVerificationEmailError = (error) => ({
  type: TYPES.VERIFY_EMAIL_ERROR,
  payload: error,
});

// ===================================

export const clearStore = () => ({
  type: TYPES.CLEAR_AUTH_STORE,
  payload: null,
});

export const setUserProfileRequest = () => ({
  type: TYPES.SET_USER_PROFILE_REQUEST,
  payload: null,
});

export const setUserProfileSuccess = (result) => ({
  type: TYPES.SET_USER_PROFILE_SUCCESS,
  payload: result,
});

export const setUserProfileError = (error) => ({
  type: TYPES.SET_USER_PROFILE_ERROR,
  payload: error,
});

// ======================================================================

export const sendPasswordResetEmailRequest = () => ({
  type: TYPES.SEND_PASSWORD_RESET_EMAIL_REQUEST,
  payload: null,
});

export const sendPasswordResetEmailSuccess = (result) => ({
  type: TYPES.SEND_PASSWORD_RESET_EMAIL_SUCCESS,
  payload: result,
});

export const sendPasswordResetEmailError = (error) => ({
  type: TYPES.SEND_PASSWORD_RESET_EMAIL_ERROR,
  payload: error,
});

// ======================================================================

export const confirmPasswordResetRequest = () => ({
  type: TYPES.CONFIRM_PASSWORD_RESET_REQUEST,
  payload: null,
});

export const confirmPasswordResetSuccess = (result) => ({
  type: TYPES.CONFIRM_PASSWORD_RESET_SUCCESS,
  payload: result,
});

export const confirmPasswordResetError = (error) => ({
  type: TYPES.CONFIRM_PASSWORD_RESET_ERROR,
  payload: error,
});

// ======================================================================
// Send verification email after create user or after login if the user is not verified

export const sendEmailVerificataionCall = (dispatch, payload, currentUser) => {
  if (!currentUser.emailVerified) {
    dispatch(sendVerificationEmailRequest());

    authService
      .resendVerificationEmail({ email: payload.email }, payload.reCaptchaVerification)
      .then(() => {
        dispatch(sendVerificationEmailSuccess());
      })
      .catch((error) => {
        const message = 'Resend verification email has failed';
        dispatch(sendVerificationEmailError(error?.message || message));
        // console.log('error on sendEmailVerificataionCall', error);
      });
  }
};

// ======================================================================
// Login user

export const loginWithEmailAndPasswordCall = (dispatch, payload) => {
  dispatch(loginRequest());
  authService
    .login({ email: payload.email, password: payload.password }, payload.reCaptchaVerification)
    .then((data) => {
      // Note: idToken is equal to accessToken
      const newData = {
        ...data,
        accessToken: data?.idToken, // This is necessary because the BE is mixing the names
      };
      dispatch(loginSuccess(newData));
    })
    .catch((error) => {
      const message = 'Login has failed';
      dispatch(loginError(error?.message || message));
      // console.log('error on loginWithEmailAndPassword', error);
    });
};

// ======================================================================
// Create user

export const createUserWithEmailAndPasswordCall = (dispatch, payload) => {
  dispatch(createUserRequest());
  authService
    .register(
      {
        email: payload.email,
        password: payload.password,
        // name: '',
        // organization: '',
      },
      payload.reCaptchaVerification,
    )
    .then((data) => {
      dispatch(createUserSuccess(data));

      // Since the BE is not sending the email verification we have to handle it in the FE,
      // so, we need to login the user after the registration to send the email verification
      // and that's because in the login response we get the firebase user data necessary
      // to call the sendEmailVerificataionCall action

      // signInWithEmailAndPassword(payload.auth, payload.email, payload.password)
      //   .then((signinData) => {
      //     dispatch(loginSuccess(signinData?.user));
      //     // sendEmailVerificataionCall(dispatch, signinData?.user);
      //   })
      //   .catch((error) => {
      //     // console.log('error on internal signInWithEmailAndPassword', error);
      //   });
    })
    .catch((error) => {
      const message = typeof error === 'string' ? error : 'Create user has failed';
      dispatch(createUserError(error?.message || message));
      // console.log('error on createUserWithEmailAndPasswordCall', error);
    });
};

// ======================================================================

// ======================================================================
// Send password reset email

export const sendForgotPasswordEmailCall = (dispatch, payload, currentUser) => {
  dispatch(sendPasswordResetEmailRequest());
  authService
    .resetPassword(
      {
        email: payload?.email,
        urlToRedirect: payload?.urlToRedirect || `${process.env.REACT_APP_BASE_URL}/`,
      },
      payload?.reCaptchaVerification,
      currentUser,
    )
    .then((data) => {
      // console.log('sendPasswordResetEmailSuccess data ', data);
      dispatch(sendPasswordResetEmailSuccess(data));
    })
    .catch((error) => {
      const message = 'Send reset password email has failed';
      dispatch(sendPasswordResetEmailError(error || message));
      // console.log('sendForgotPasswordEmailCall', error);
    });
};
