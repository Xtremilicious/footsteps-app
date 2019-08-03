import React, { Component } from "react"
import { Row, Col } from "antd"

import styles from "../styles/add.module.css"

export class addPath extends Component {
  state = {
    title: "",
    description: "",
    icon:
      "https://www.gatsbyjs.org/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png",
  }

  handleInputChange = e => {
    const target = e.target
    this.setState({
      [target.name]: target.value,
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Create a new Path</h1>
        <Row>
          <Col xs={24} lg={12}>
            <div className={styles.input_label}>Title</div>
            <input
              className={styles.input}
              name="tile"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Intro to Gatsby"
            />

            <div className={styles.input_label}>Description</div>
            <textarea
              className={styles.input}
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Gatsby is a free and open source framework based on React"
            />
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.icon_container}>
              <img src={this.state.icon} alt="" />
            </div>

            <div className={styles.icon_input_container}>
              <div className={styles.input_label}>Icon URL</div>
              <input
                className={styles.input}
                name="icon"
                value={this.state.icon}
                onChange={this.handleInputChange}
                placeholder="Icon URL"
              />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default addPath
