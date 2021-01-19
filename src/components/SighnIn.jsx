import React from 'react';

import { Formik } from 'formik';

import * as yup from 'yup';
import SignInForm from './SignInForm';
import useSignIn from '../hooks/useSignIn';

const initialValues = {
  username: '',
  password: ''
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

  const onSubmit = async (values) => {
    console.log('Form submited with values: ', values);
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log('AData', data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;