import React from "react";
import { connect } from "react-redux";
const History = ({ undo, redo }) => {
  return (
    <div id="history-control">
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>redo</button>
    </div>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    undo: () => {
      dispatch({ type: "UNDO" });
    },
    redo: () => {
      dispatch({ type: "REDO" });
    },
  };
};
export default connect(null, mapDispatchToProps)(History);
