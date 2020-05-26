import React from "react";
// import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import $ from "jquery";
import "bootstrap";

class TeamScoreItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      color: "",
    };

    this.updateScore = this.updateScore.bind(this);
  }

  componentDidMount() {
    this.setState({ color: this.props.color() });
  }

  updateScore(e) {
    let points = parseInt(e.target.value, 10)
    let oldScore = parseInt(this.state.score, 10)
    let newScore = oldScore + points
    this.setState({
      score: newScore
    });
  }

  render() {
    const { finalScore, team } = this.props;

    const showModal = () => {
      const teamId = "#staticBackdrop" + team.split(" ").join("")
        $(teamId).modal("show");
    };

    return (
      <div
        className="team-score-index-item"
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          borderRadius: "5px",
          boxShadow: "0px 0px 3px lightgray",
        }}
      >
        <Card
          style={{
            width: "18rem",
            background: "rgba(255, 255, 255, 0.8)",
            borderRadius: "5px",
            boxShadow: "0px 0px 3px lightgray",
          }}
        >
          <Card.Body
            style={{
              textAlign: "center",
              color: this.state.color,
            }}
          >
            <Card.Title style={{ fontSize: "50px" }}>{team}</Card.Title>
            <h1 style={{ fontSize: "70px" }}>{this.state.score}</h1>
          </Card.Body>
          <Card.Body style={{ margin: "auto", paddingTop: "0px" }}>
            <Button
              variant="success"
              type="submit"
              onClick={(e) => this.updateScore(e)}
              value={1}
              style={{
                backgroundColor: this.state.color,
                borderColor: this.state.color,
              }}
            >
              +1
            </Button>{" "}
            <Button
              variant="success"
              type="submit"
              onClick={(e) => this.updateScore(e)}
              value={3}
              style={{
                backgroundColor: this.state.color,
                borderColor: this.state.color,
              }}
            >
              +3
            </Button>{" "}
            <Button
              variant="success"
              type="submit"
              onClick={(e) => this.updateScore(e)}
              value={5}
              style={{
                backgroundColor: this.state.color,
                borderColor: this.state.color,
              }}
            >
              +5
            </Button>{" "}
            <Button
              variant="success"
              type="submit"
              onClick={(e) => this.updateScore(e)}
              value={10}
              style={{
                backgroundColor: this.state.color,
                borderColor: this.state.color,
              }}
            >
              +10
            </Button>{" "}
            <Button
              variant="success"
              type="submit"
              onClick={(e) => this.updateScore(e)}
              value={25}
              style={{
                backgroundColor: this.state.color,
                borderColor: this.state.color,
              }}
            >
              +25
            </Button>
          </Card.Body>
          <Card.Body style={{ margin: "auto", paddingTop: "0px" }}>
            <Button
              variant="success"
              type="submit"
              onClick={(e) => this.updateScore(e)}
              value={-1}
              style={{
                backgroundColor: this.state.color,
                borderColor: this.state.color,
              }}
            >
              -1
            </Button>{" "}
            <Button
              variant="success"
              type="submit"
              onClick={(e) => this.updateScore(e)}
              value={-3}
              style={{
                backgroundColor: this.state.color,
                borderColor: this.state.color,
              }}
            >
              -3
            </Button>{" "}
            <Button
              variant="success"
              type="submit"
              onClick={(e) => this.updateScore(e)}
              value={-5}
              style={{
                backgroundColor: this.state.color,
                borderColor: this.state.color,
              }}
            >
              -5
            </Button>{" "}
            <Button
              variant="success"
              type="submit"
              onClick={(e) => this.updateScore(e)}
              value={-10}
              style={{
                backgroundColor: this.state.color,
                borderColor: this.state.color,
              }}
            >
              -10
            </Button>{" "}
            <Button
              variant="success"
              type="submit"
              onClick={(e) => this.updateScore(e)}
              value={-25}
              style={{
                backgroundColor: this.state.color,
                borderColor: this.state.color,
              }}
            >
              -25
            </Button>
          </Card.Body>
        </Card>
        <div
          className="modal fade"
          id={"staticBackdrop" + team.split(" ").join("")}
          data-backdrop="static"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="staticBackdropLabel"
          aria-modal="true"
        >
          <div className="modal-dialog" role="document" style={{color: this.state.color}}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  {team} wins!
                </h5>
                {/* <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button> */}
              </div>
              <div className="modal-body">Play another or call it a day!</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  // onClick={(e) => this.handleCancel(e)}
                  onClick={console.log("modal modal modal")}
                >
                  Edit Scores
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  // onClick={(e) => this.handleDelete(e)}
                  onClick={console.log("modal modal modal")}
                >
                  End Game
                </button>
              </div>
            </div>
          </div>
        </div>

        {this.state.score >= parseInt(finalScore) ? showModal() : null}
      </div>
    );
  }
}

export default TeamScoreItem;
