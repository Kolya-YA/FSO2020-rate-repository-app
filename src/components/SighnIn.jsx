import React from 'react';
import { Platform } from 'react-native';

import { Formik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import SignInForm from './SignInForm';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const initialValues = {
  username: 'kalle',
  password: 'password'
};

const validationSchema = yup.object().shape({
  username: yup.string()
    .max(25, 'Username is too long')
    .required('Username is required'),
  password: yup.string()
    .max(20, 'Password is too long')
    .required('Password is required')
});


const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async ({ username, password }) => {
    try {
      const { data } = await signIn({ username, password });
      history.push('/');
      console.log('Auth data', data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Text>Your platform is: {Platform.OS}</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </>
  );
};

export default SignIn;