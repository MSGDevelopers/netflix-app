import React from "react";
import "./Results.css";
import { Card, Icon, Image } from "semantic-ui-react";

function Results({show}) {

  return (
    <div className={(show ? '' : 'hide-card')} id="results-container">
      <Card>
        <Image
          src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/9ada75bf-aba2-4259-b1ca-16d33469a46f/14.jpg"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Star Wars: Darth Plagueis</Card.Header>
          <Card.Meta>
            <span className="date">July 4th, 2020</span>
          </Card.Meta>
          <Card.Description>
            The return of Darth Plagueis is imminent...
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://www.netflix.com" target="_blank">
            Play on Netflix <Icon name="play circle" />
          </a>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Results;
