import React, { Component } from "react"
import { Row, Col, Form, Icon, Input, Button } from "antd"
import firebase from "firebase/app"
import "firebase/auth"

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

import styles from "../styles/login.module.css"

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => true,
  },
}

export class login extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={24} lg={14}>
            <img
              className={styles.image}
              src={require("../images/signin.png")}
              alt=""
            />
          </Col>
          <Col xs={24} lg={10}>
            <div className={styles.container}>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default login
