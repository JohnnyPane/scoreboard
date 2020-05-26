import React from 'react';
import { withRouter } from 'react-router-dom';
import $ from "jquery"; 
import "bootstrap";

class ScoreIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      score: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
    this.stopHover = this.stopHover.bind(this);
    this.removeHoverId = this.removeHoverId.bind(this);
    this.modalEnter = this.modalEnter.bind(this);
    this.modalExit = this.modalExit.bind(this);
  }

  handleDelete(e) {
    e.stopPropagation();
    const scoreId = this.props.score.id;
    this.props.destroyScore(scoreId);
    $(".score-index-item").removeClass("noHover");
  }

  handleCancel(e) {
    e.stopPropagation();
    const scoreId = this.props.score.id;
    this.setState({
      loaded: false,
    });
    $("#noHover").attr("id", scoreId);
  }

  handleClick() {
    const scoreId = this.props.score.id;
    this.props.history.push(`/scores/${scoreId}`);
  }

  removeHoverId() {
    const scoreId = "#" + this.props.score.id;
    $(scoreId).removeAttr("id", "noHover");
  }

  stopHover() {
    const scoreId = "#" + this.props.score.id;
    $(scoreId).attr("id", "noHover");
    console.log("stopped");
  }

  modalEnter() {
    $(".modal").mouseover(function () {
      $(".score-index-item")
        .addClass("score-index-modal")
        .removeClass("score-index-item");
    });
  }

  modalExit() {
    console.log("modalll")
    $(".modal").mouseleave(function () {
      $(".score-index-modal")
        .addClass("score-index-item")
        .removeClass("score-index-modal");
    });
  }

  deleteClick(e) {
    e.stopPropagation();
    const modalId = "#staticBackdrop" + this.props.score.id;
    $(modalId).modal("show");
    this.setState({
      loaded: true,
    });
    this.stopHover();
  }

  // showModal() {
  //   if (this.state.loaded) {
  //     $("#staticBackdrop").modal("show");
  //   }
  // };

  render() {
    const {
      game_type,
      player_one,
      player_two,
      final_score,
      player_one_score,
      player_two_score,
    } = this.props.score;

    //   const showModal = function() {
    //     $("#staticBackdrop").modal("show");
    //     //  e.stopImmediatePropagation();
    // };

    return (
      <div
        className="score-index-item"
        id={this.props.score.id}
        onClick={this.handleClick}
      >
        <li>
          <h4>Game Type: {game_type}</h4>
          <p>
            {player_one} vs. {player_two}
          </p>
          <p>
            {player_one}: {player_one_score}
          </p>
          <p>
            {player_two}: {player_two_score}
          </p>
          <p>final score: {final_score}</p>
        </li>
        <div className="delete-button-wrapper">
          <button
            className="delete-button"
            // onClick={(e) => {
            //   if (
            //     window.confirm("Are you sure you wish to delete this item?")
            //   ) {
            //     this.handleDelete(e);
            //   } else {
            //     this.handleCancel(e);
            //   }
            // }}
            onClick={(e) => this.deleteClick(e)}
          >
            Delete Score
          </button>
        </div>
        <div
          className="modal fade"
          id={"staticBackdrop" + this.props.score.id}
          data-backdrop="static"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="staticBackdropLabel"
          aria-modal="true"
          onMouseEnter={this.modalEnter}
          onMouseLeave={this.modalExit}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Delete Score
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
              <div className="modal-body">Are you sure you want to delete?</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={(e) => this.handleCancel(e)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={(e) => this.handleDelete(e)}
                >
                  Delete!
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* {this.state.loaded ? showModal() : null} */}
      </div>
    );
  }
}

export default withRouter(ScoreIndexItem);