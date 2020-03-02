import React from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'antd';
import SignupForm from '../data-entry/SignupForm';
import LoginForm from '../data-entry/LoginForm';
import ForgottenPasswordForm from '../data-entry/ForgottenPasswordForm';

const StyledModal = styled(Modal)`

  .ant-modal-header {
    border-bottom: 0;

    h2 {
      text-align: center;
      font-size: 2rem;
      margin: 3rem 0 0;
    }

    h4 {
      text-align: center;
      font-size: 1rem;
    }
  }

  .ant-modal-footer {
    background-color: rgb(249, 249, 249);
    text-align: center;
    padding: 1.5rem 3.125rem;
  }

`


class AuthModals extends React.Component {
  state = { 
    loginVisible: false,
    signupVisible: false,
    passwordVisible: false
  };

  showLoginModal = () => {
    this.setState({
      loginVisible: true,
    });
  };

  showSignupModal = () => {
    this.setState({
      signupVisible: true,
    });
  };

  showPasswordModal = () => {
    this.setState({
      passwordVisible: true,
    });
  };

  handleSignupCancel = () => {
    this.setState({
      signupVisible: false,
    });
  };

  handleLoginCancel = () => {
    this.setState({
      loginVisible: false,
    });
  };

  handlePasswordCancel = () => {
    this.setState({
      passwordVisible: false,
    });
  };

  handleSwitchToLogin = () => {
    this.setState({
      signupVisible: false,
      passwordVisible: false,
      loginVisible: true
    });
  }

  handleSwitchToSignup = () => {
    this.setState({
      loginVisible: false,
      signupVisible: true
    });
  }

  handleSwitchToPassword = () => {
    this.setState({
      loginVisible: false,
      passwordVisible: true
    });
  }

  render() {
    return (
      <div>
        <Button type="link" className="theme-color" onClick={this.showSignupModal}>
          S'inscrire
        </Button>
        <StyledModal
          title={[
            <h2>Inscription</h2>
          ]}
          centered
          visible={this.state.signupVisible}
          onCancel={this.handleSignupCancel}
          footer={[
            <div>
              <span>Déjà un compte ? </span>
              <a onClick={this.handleSwitchToLogin}>Se connecter</a>
            </div>
          ]}
        >
          <SignupForm />
        </StyledModal>
        <Button className="btn-rounded" onClick={this.showLoginModal}>
          Se connecter
        </Button>
        <StyledModal
          title={[
            <h2>Connexion</h2>
          ]}
          centered
          visible={this.state.loginVisible}
          onCancel={this.handleLoginCancel}
          footer={[
            <div>
              <span>Pas encore de compte ? </span>
              <a onClick={this.handleSwitchToSignup}>Inscription</a>
            </div>
          ]}
        >
          <LoginForm />
          <a onClick={this.handleSwitchToPassword}>
            Mot de passe oublié ?
          </a>
        </StyledModal>
        <StyledModal
          title={[
            <>
              <h2>Mot de passe oublié</h2>
              <h4>Un email vous sera envoyé pour réinitialiser votre mot de passe</h4>
            </>
          ]}
          centered
          visible={this.state.passwordVisible}
          onCancel={this.handlePasswordCancel}
          footer={[
            <a onClick={this.handleSwitchToLogin}>Annuler</a>
          ]}
        >
          <ForgottenPasswordForm />
        </StyledModal>
      </div>
    );
  }
}

export default AuthModals