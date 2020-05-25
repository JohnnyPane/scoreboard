import { connect } from "react-redux";

import TeamScore from "./team_score";

const mapStateToProps = (state) => ({
  player_one: state.entities.users[state.session.id].username,
});


export default connect(mapStateToProps, null)(TeamScore);
