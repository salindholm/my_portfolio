import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const CvCard = ({ experience }) => {
  return (
    <Card>
      <Image src={experience.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{experience.name}</Card.Header>
        <Card.Description>{experience.description}</Card.Description>
      </Card.Content>
      <Card.Content>
            <a href={experience.linkedin}>
            <Icon name="linkedin" id={`linkedinIcon-${experience.id}`} />
          </a>
        </Card.Content>
    </Card>
  );
};

export default CvCard;