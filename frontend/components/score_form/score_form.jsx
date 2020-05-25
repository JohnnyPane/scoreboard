import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import ReactAutocomplete from 'react-autocomplete';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'
// import { Col } from "react-bootstrap";


class ScoreForm extends React.Component {
  constructor(props) {
    super(props);
    this.playerOne = { name: props.player_one };
    this.state = {
      game_type: "",
      player_two: "",
      final_score: "",
      teamGameType: "",
      teams: [],
      teamsFinalScore: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToScoreboard = this.navigateToScoreboard.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchOtherUsers();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/teamscoreboard");
  }

  navigateToScoreboard() {
    this.props.history.push("/");
  }

  update(property) {
    return (e) =>
      this.setState({
        [property]: e.target.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("score[game_type]", this.state.game_type);
    formData.append("score[player_one]", this.playerOne["name"]);
    formData.append("score[player_two]", this.state.player_two);
    formData.append("score[final_score]", this.state.final_score);
    this.props.createScore(formData).then(() => this.navigateToScoreboard());
  }

  render() {
    const {
      game_type,
      player_two,
      final_score,
      teams,
      teamGameType,
      teamsFinalScore,
    } = this.state;
    const { opponents } = this.props;

    if (opponents.length < 1) {
      return <div>Component is loading...</div>;
    }

    return (
      <div className="new-score-container">
        <Link to="/">Back to Scores Index</Link>
        <div className="new-score-form-container">
          {/* <div className="new-score-form">
            <h3 className="new-score-title">Create a Scoreboard!</h3>
            <br />
            <form onSubmit={this.handleSubmit}>
              <label className="score-field">Game Type: </label>
              <input
                type="text"
                placeholder="e.g. ping pong"
                value={game_type}
                onChange={this.update("game_type")}
                className="score-field"
              />

              <label className="score-field">Player One: </label>
              <input
                type="text"
                value={this.playerOne.name}
                onChange={this.update("player_one")}
                className="score-field"
              />

              <label className="score-field">Player Two: </label>
              <ReactAutocomplete
                items={opponents}
                inputProps={{ placeholder: "choose wisely..." }}
                shouldItemRender={(item, player_two) =>
                  item.username
                    .toLowerCase()
                    .indexOf(player_two.toLowerCase()) > -1
                }
                getItemValue={(item) => item.username}
                renderItem={(item, highlighted) => (
                  <div
                    key={item.email}
                    style={{
                      backgroundColor: highlighted ? "#eee" : "transparent",
                    }}
                  >
                    {item.username}
                  </div>
                )}
                value={this.state.player_two}
                onChange={(e) => this.setState({ player_two: e.target.value })}
                onSelect={(player_two) => this.setState({ player_two })}
              />

              <br />

              <label className="score-field">Game up to: </label>
              <input
                type="text"
                value={final_score}
                onChange={this.update("final_score")}
                className="score-field"
                placeholder="enter a number"
              />

              <div className="button-holder">
                <input
                  type="submit"
                  value="Create Score"
                  className="new-score-button"
                />
              </div>
            </form>
          </div> */}

          <Form onSubmit={this.handleSubmit} className="score-form">
            <Form.Row>
              <Form.Group className="col-md-6" controlId="formBasicEmail">
                <Form.Label>Game Type</Form.Label>
                <Form.Control
                  placeholder="e.g. ping pong"
                  value={game_type}
                  onChange={this.update("game_type")}
                />
                <Form.Text className="text-muted">
                  Data is kept based on game type - try and be consistent!
                </Form.Text>
              </Form.Group>

              <Form.Group className="col-md-6" controlId="formBasicPassword">
                <Form.Label>Game up to</Form.Label>
                <Form.Control
                  type="text"
                  value={final_score}
                  onChange={this.update("final_score")}
                  // className="score-field"
                  placeholder="enter a number"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group className="col-md-6" controlId="formBasicPassword">
                <Form.Label>Player One</Form.Label>
                <Form.Control
                  placeholder={this.playerOne.name}
                  type="text"
                  value={this.playerOne.name}
                  onChange={this.update("player_one")}
                />
              </Form.Group>

              <Form.Group className="col-md-6" controlId="formBasicPassword">
                <Form.Label>Player Two</Form.Label>
                <ReactAutocomplete
                  items={opponents}
                  inputProps={{
                    placeholder: "choose wisely...",
                    className: "form-control react-auto",
                  }}
                  shouldItemRender={(item, player_two) =>
                    item.username
                      .toLowerCase()
                      .indexOf(player_two.toLowerCase()) > -1
                  }
                  getItemValue={(item) => item.username}
                  renderItem={(item, highlighted) => (
                    <div
                      key={item.email}
                      style={{
                        backgroundColor: highlighted ? "#eee" : "transparent",
                        paddingLeft: "12px",
                      }}
                    >
                      {item.username}
                    </div>
                  )}
                  value={this.state.player_two}
                  onChange={(e) =>
                    this.setState({ player_two: e.target.value })
                  }
                  onSelect={(player_two) => this.setState({ player_two })}
                  wrapperStyle={{ display: "block" }}
                  menuStyle={{
                    padding: "5px 0",
                    borderRadius: "5px",
                    width: "100%",
                  }}
                />
                <Form.Text className="text-muted">
                  Search for another user or create a new opponent
                </Form.Text>
              </Form.Group>
            </Form.Row>

            <Button variant="success" type="submit">
              Create Scoreboard
            </Button>
          </Form>
        </div>

        <h2 className="teams-form-or">- OR -</h2>
        <div className="new-board-btn teams-score-btn">
          <button onClick={this.handleClick}>
            Start a Game with Multiple Teams!
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(ScoreForm);
