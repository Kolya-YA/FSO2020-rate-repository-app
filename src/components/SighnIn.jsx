import React from 'react';

import { Formik } from 'formik';

import * as yup from 'yup';
import SignInForm from './SignInForm';

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
  const onSubmit = values => {

    console.log('Form submited with values: ', values);
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