import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'; 
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class  SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSumbit = event => {
    event.preventDefalut();

    this.setState({email: '', password: ''})
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({[name]: value})
  }
  
  render() {
    return(
      <div className="sign-in">
        <h2>
          I already have an account
        </h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSumbit}>
          <FormInput label="email" handleChange={this.handleChange} name="email" value={this.state.email} required />
          <FormInput label="password" handleChange={this.handleChange} name="password" type="password" value={this.state.password} required />
          <div class="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;