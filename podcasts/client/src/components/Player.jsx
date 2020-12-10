import React, {useState} from "react";
import * as Icons from "react-bootstrap-icons";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import ReactAudioPlayer from 'react-audio-player';


function Player(props) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  const { title, description, url } = props.audio;
  return (
    <>
      <button
        className="btn btn-primary  btn-round float-right  m-1"
        variant="primary"
        onClick={handleShow}
        data-toggle="modal"
        data-target="#exampleModal"
        type="button"
      >
        <Icons.Play />
        Play
      </button>
      <React.Fragment>
        <Modal show={show} onHide={handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {description}
            <div>
              <ReactAudioPlayer
              src={require("./../assets/audios/Audio01.mp3")}
              controls
            />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleShow}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    </>
  );
}

export default connect((r_state, ownProps) => {
  return {
    audio: r_state.audioList.filter((a) => a._id === ownProps.audioId)[0],
  };
}, null)(Player);
