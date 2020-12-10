import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import { deleteAudio } from "../services/Audio.service";
import { deleteAudioAction } from "../redux/actions";
import { connect } from "react-redux";

function DeleteAudio(props) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  const DeleteAudio = () => {
    deleteAudio(props.updateAudioListAfterDelete, props.audioId);
  };

  return (
    <>
      <button
        className="btn btn-outline-info"
        onClick={handleShow}
        data-toggle="modal"
        data-target="#exampleModal"
        type="button"
      >
        <Icons.Trash />
      </button>
      <Modal show={show} onHide={handleShow} style={{ textAlign: "center" }}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="container">
              <Icons.Trash />
              <h3> Are you sure?</h3>
              <p>
                Do you really want to delete these record? This process cannot
                be undone.
              </p>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              handleShow();
              DeleteAudio();
            }}
          >
            OK
          </Button>
          <Button variant="primary" onClick={handleShow}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default connect(undefined, (dispatch) => {
  return {
    updateAudioListAfterDelete: (data) => {
      dispatch(deleteAudioAction(data));
    },
  };
})(DeleteAudio);
