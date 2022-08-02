import React, { Component } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import "./addnotes.css";
import { addNotes } from "../Store/Actions";
class AddNotes extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: "" };
  }

  componentDidMount() {
    return {};
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes !== this.state.notes) {
    }
  }

  render() {
    return (
      <div className="addnotes">
        <div className="notesContainer">
          <div className="notesinput">
            <label>Add Notes: </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></input>
          </div>
          <div className="savebtn">
            <button onClick={(e) => handleNotes(e)}>Save Notes</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notesData: state.notes.notesDate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNotesDispatch: () => dispatch(addNotes()),
  };
};

export default connect(mapStateToProps)(mapDispatchToProps)(AddNotes);
