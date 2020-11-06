import React, { Component } from "react";
import CvCard from "./CvCard";
import axios from "axios";
import { Container, Grid } from "semantic-ui-react";

class CvComponent extends Component {
  state = {
    experiences: [],
  };

  componentDidMount() {
    axios.get("./data/cv.json").then((response) => {
      this.setState({ experiences: response.data });
    });
  }

  render() {
    const { experiences } = this.state;

    let experienceList = experiences.map((experience) => {
      return (
        <div id={`cv-${experience.id}`} key={experience.id}>
          <CvCard experience={experience} />
        </div>
      );
    });

    return (
      <Container>
      <h1 id="cv-header">My CV</h1>
      <Grid centered columns={3}>{experienceList}</Grid>
    </Container>
    );
  }
}

export default CvComponent;