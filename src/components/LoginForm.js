import React from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends React.Component {

  onEmailChange = (text) => {
    this.props.emailChanged(text)
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input 
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
          />
        </CardSection>

        <CardSection>
          <Input 
            secureTextEntry
            label="password"
            placeholder="password"
          />
        </CardSection>

        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  };
};

export default connect(null, { emailChanged })(LoginForm);