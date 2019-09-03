import React from "react";
import "./BookCard.css";

import { Card, Button, Image } from "semantic-ui-react";

interface IBookCardProps {
  title: string;
  category: string;
  description: string;
  author: string;
  onClick: () => void;
  bookCover: string;
}

/*const BookCard: React.FC<IBookCardProps> = function(props): React.ReactElement {
}*/

export const BookCard: React.FC<IBookCardProps> = (
  props
): React.ReactElement => {
  return (
    <Card>
      <div className="bookSummary">
        <Card.Header>
          <p>
            <strong>{props.title}</strong>
            <br />
            {props.author}
          </p>
        </Card.Header>

        <Card.Description className="blue">
          {props.description}
        </Card.Description>
        <br />
        <Card.Meta>
          <span className="bookCategory">Category: {props.category}</span>
        </Card.Meta>
      </div>
      <Image className="bookCover" src={props.bookCover} />
      <Card.Meta>
        {
          <Button
            className="discoverMoreButton"
            inverted={true}
            color="blue"
            onClick={props.onClick}
          >
            Discover more...
          </Button>
        }
      </Card.Meta>
    </Card>
  );
};
