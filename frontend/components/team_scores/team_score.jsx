import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import TeamScoreItem from "./team_score_item";

class TeamScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      finalScore: null,
      gameType: null,
      started: false,
      teamName: "",
    };
    this.teamsCreate = this.teamsCreate.bind(this);
    this.update = this.update.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  teamsCreate(e) {
    e.preventDefault();
    console.log(this.state.teamName);
    if (this.state.teamName.length > 0) {
      this.setState({ 
        teams: [...this.state.teams, this.state.teamName],
        teamName: ""
      })
    } 
  }

  startGame(e) {
    e.preventDefault();
    if (this.state.teams && (this.state.finalScore && this.state.gameType)) {
      this.setState({started: true})
    }
  }

  update(property) {
    return (e) =>
      this.setState({
        [property]: e.target.value,
      });
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    const { teams, finalScore, gameType, teamName } = this.state;

    const teamDisplay = () =>
      teams.map((team) => (
        <TeamScoreItem
          finalScore={finalScore}
          team={team}
          color={this.getRandomColor}
          key={team}
        />
      ));

    return (
      <div className="team-board-show">
        <div className="index-teams-redirect">
          <Link to="/">Back to Scores Index</Link>
        </div>
        {this.state.started ? (
          <h1 className="team-game-header">{gameType}</h1>
        ) : (
          <h1 className="create-team-header">Create Your Teams</h1>
        )}
        {!this.state.started ? (
          <div className="teams-container row">
            <div className="team-name-form col-md-8">
              <Form onSubmit={this.teamsCreate}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Team Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter team name"
                    value={teamName}
                    onChange={this.update("teamName")}
                  />
                  <Form.Text className="text-muted">
                    The single most important decision you'll ever make
                  </Form.Text>
                </Form.Group>

                <Button variant="success" type="submit">
                  Create Team
                </Button>
              </Form>
              <Form onSubmit={this.startGame} style={{ marginTop: "10px" }}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Game Type</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="What game are you playing?"
                    value={gameType}
                    onChange={this.update("gameType")}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Final Score</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Game goes up to"
                    value={finalScore}
                    onChange={this.update("finalScore")}
                  />
                </Form.Group>

                <Button variant="success" type="submit">
                  Let's Play!
                </Button>
              </Form>
            </div>
            <div className="team-list col-md-3">
              <Card>
                <Card.Header>Teams</Card.Header>
                <ListGroup variant="flush">
                  {teams.length > 0
                    ? teams.map((team) => (
                        <ListGroup.Item key={team}>{team}</ListGroup.Item>
                      ))
                    : ""}
                </ListGroup>
              </Card>
              {/* <h3>Teams</h3>
            <ul>
              {teams.length > 0 ? teams.map((team) => <li>{team}</li>) : null}
            </ul> */}
            </div>
          </div>
        ) : null}

        <div className="team-board-display">
          {this.state.started ? teamDisplay() : ""}
        </div>
      </div>
    );
  }
}

export default TeamScore;
