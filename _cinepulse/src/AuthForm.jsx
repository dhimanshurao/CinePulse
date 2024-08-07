import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    dob: '',
    mobile: ''
  });
  const [errors, setErrors] = useState({});

  const validateFullName = (name) => {
    if (!name) {
      return 'Full Name is required';
    }
    return '';
  };

  const validateUsername = (name) => {
    if (!name) {
      return 'Username is required';
    }
    const regex = /^[a-zA-Z0-9_]{3,15}$/;
    if (!regex.test(name)) {
      return 'Username must be 3-15 characters long and can only contain letters, numbers, and underscores';
    }
    return '';
  };

  const validatePassword = (pass) => {
    if (!pass) {
      return 'Password is required';
    }
    if (pass.length < 6) {
      return 'Password must be at least 6 characters';
    }
    return '';
  };

  const validateConfirmPassword = (pass) => {
    if (pass !== formValues.password) {
      return 'Passwords do not match';
    }
    return '';
  };

  const validateDOB = (dob) => {
    if (!dob) {
      return 'Date of Birth is required';
    }
    return '';
  };

  const validateMobile = (mobile) => {
    if (!mobile) {
      return 'Mobile number is required';
    }
    const regex = /^[0-9]{10}$/;
    if (!regex.test(mobile)) {
      return 'Mobile number must be 10 digits';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    let error = '';
    switch (name) {
      case 'fullName':
        error = validateFullName(value);
        break;
      case 'username':
        error = validateUsername(value);
        break;
      case 'password':
        error = validatePassword(value);
        break;
      case 'confirmPassword':
        error = validateConfirmPassword(value);
        break;
      case 'dob':
        error = validateDOB(value);
        break;
      case 'mobile':
        error = validateMobile(value);
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullNameError = validateFullName(formValues.fullName);
    const usernameError = validateUsername(formValues.username);
    const passwordError = validatePassword(formValues.password);
    const confirmPasswordError = validateConfirmPassword(formValues.confirmPassword);
    const dobError = validateDOB(formValues.dob);
    const mobileError = validateMobile(formValues.mobile);

    if (fullNameError || usernameError || passwordError || confirmPasswordError || dobError || mobileError) {
      setErrors({
        fullName: fullNameError,
        username: usernameError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
        dob: dobError,
        mobile: mobileError,
      });
      return;
    }

    // Form submission logic
    console.log('Form submitted:', formValues);
    alert('Form submitted successfully!');
  };

  return (
    <div className="auth-form">
      <div className="toggle-buttons">
        <button className={`toggle-button ${!isSignUp ? 'active' : ''}`} onClick={() => setIsSignUp(false)}>
          Sign In
        </button>
        <button className={`toggle-button ${isSignUp ? 'active' : ''}`} onClick={() => setIsSignUp(true)}>
          Sign Up
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formValues.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <div className="error">{errors.fullName}</div>}
          </>
        )}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formValues.username}
          onChange={handleChange}
        />
        {errors.username && <div className="error">{errors.username}</div>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}
        {isSignUp && (
          <>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              value={formValues.dob}
              onChange={handleChange}
            />
            {errors.dob && <div className="error">{errors.dob}</div>}
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formValues.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <div className="error">{errors.mobile}</div>}
          </>
        )}
        <button type="submit" className="auth-button">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <div className="extra-options">
        {!isSignUp && <a href="/forgot-password">Forgot Password?</a>}
        <a href="/about">About Us</a>
      </div>
    </div>
  );
};

export default AuthForm;
