import React, { useState, useEffect } from 'react';
import { Row, Card, CardTitle, Label, FormGroup, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Formik, Form, Field } from 'formik';
import { NotificationManager } from '../../components/common/react-notifications';

import { loginUser } from '../../redux/actions';
import { Colxx } from '../../components/common/CustomBootstrap';
import IntlMessages from '../../helpers/IntlMessages';
import logo from '../../assets/logos/white.svg'
import './Loggin.css';
import { FiUser } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";


const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your password';
  } else if (value.length < 4) {
    error = 'Value must be longer than 3 characters';
  }
  return error;
};

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};

const Login = ({ history, loading, error, loginUserAction }) => {
  const [email] = useState('demo@gogo.com');
  const [password] = useState('gogo123');
  const [visib, setVisib] = useState(true);

  useEffect(() => {
    if (error) {
      NotificationManager.warning(error, 'Login Error', 3000, null, null, '');
    }
  }, [error]);

  const onUserLogin = (values) => {
    if (!loading) {
      if (values.email !== '' && values.password !== '') {
        loginUserAction(values, history);
      }
    }
  };

  const initialValues = { email, password };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="6" className="mx-auto my-auto">
        <Card className="auth-card form-content">
          <div className="form-side">
            <NavLink to="/" className="white">
              <img src={logo} style={{width: '90px'}} />
            </NavLink>
            <CardTitle className="text-center text-muted mt-3 mb-5 form text">
              Log in to your account to continue
            </CardTitle>

            <Formik initialValues={initialValues} onSubmit={onUserLogin}>
              {({ errors, touched }) => (
                <Form className="av-tooltip tooltip-label-bottom text-left">
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      <IntlMessages id="Enter your email" />
                    </Label>
                    <FiUser className='simple-icon-user person' />
                    <input
                      type="email"
                      className="form-control first mb-5"
                      name="email"
                      validate={validateEmail}
                    />

                    {errors.email && touched.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                  </FormGroup>
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      <IntlMessages id="Enter your password" />
                    </Label>
                    <FiLock className='simple-icon-lock lock' />

                    <input
                      className="form-control second"
                      type={ visib ? 'password' : 'text'}
                      name="password"
                      validate={validatePassword}
                    />
                    {visib ? <FiEyeOff className='simple-icon-eye eye' onClick={() => setVisib(false)} /> : <FiEye className='simple-icon-eye eye' onClick={() => setVisib(true)} />}

                    {errors.password && touched.password && (
                      <div className="invalid-feedback d-block">
                        {errors.password}
                      </div>
                    )}
                  </FormGroup>
                    <button
                      id='butt'
                      className={`mt-4 btn btn-primary btn-shadow btn-multiple-state ${
                        loading ? 'show-spinner' : ''
                      }`}
                      size="lg"
                    >
                      <span className="spinner d-inline-block">
                        <span className="bounce1" />
                        <span className="bounce2" />
                        <span className="bounce3" />
                      </span>
                      <span className="label">
                        <IntlMessages id="Log In" />
                      </span>
                    </button>
                </Form>
              )}
            </Formik>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};
const mapStateToProps = ({ authUser }) => {
  const { loading, error } = authUser;
  return { loading, error };
};

export default connect(mapStateToProps, {
  loginUserAction: loginUser,
})(Login);
