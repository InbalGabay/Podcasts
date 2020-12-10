import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import { connect } from "react-redux";
import { saveAudioAction, updateAudioAction } from "../redux/actions";
import * as Icons from "react-bootstrap-icons";
import Record from "./Record";
import * as Yup from "yup";
import { saveAudio, updateAudio } from "../services/Audio.service";

function RecorderAudio(props) {
  const [showModal, setShowModal] = useState(false);
  const [blobURL, setBlobURL] = useState(null);
  const isUpdateMode = props.isUpdateMode;

  const RecorderAudioSchema = Yup.object().shape({
    title: Yup.string()
      .min(7, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    description: Yup.string().min(10, "Too Short!").max(250, "Too Long!"),
  });

  const handleSubmit = (values) => {
    var audioDetails = values;
    audioDetails._id = props.audio._id;
  
    if (!isUpdateMode) {
      audioDetails.url = blobURL;
    }
   
    isUpdateMode
      ? updateAudio(props.dispatchUpdateAudio, audioDetails)
      : saveAudio(props.dispatchNewAudio, audioDetails);
  };

  return (
    <>
      <button
        className="btn btn-outline-info"
        onClick={() => {
          setShowModal(!showModal);
        }}
        type="button"
      >
        {isUpdateMode ? <Icons.Pencil /> : <Icons.Mic />}
      </button>
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(!showModal);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>new recorder</Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={{
            title: props.audio ? props.audio.title : "",
            description: props.audio ? props.audio.description : "",
            img: props.audio ? props.audio.img : "",
          }}
          validationSchema={RecorderAudioSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, values, handleChange }) => (
            <Form>
              <Modal.Body>
                <div className="input-group form-group m-2">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <Icons.Mic />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={values.title}
                    placeholder="Enter title..."
                    onChange={handleChange("title")}
                    aria-describedby="titleHelp"
                  />
                  <small id="titleHelp" className="form-text text-muted">
                    {errors.title ? <div>{errors.title}</div> : null}
                  </small>
                </div>
                <div className="input-group  m-2">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <Icons.Mic />
                    </span>
                  </div>
                  <input
                    type="textarea"
                    className="form-control"
                    name="description"
                    placeholder="Enter Audio description..."
                    value={values.description}
                    onChange={handleChange("description")}
                  />
                  <small id="titleHelp" className="form-text text-muted">
                    {errors.description ? (
                      <div>{errors.description}</div>
                    ) : null}
                  </small>
                </div>
                <div className="input-group m-2">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="now-ui-icons text_caps-small"></i>
                    </span>
                  </div>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                      onChange={handleChange("img")}
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile01"
                    >
                      {values.img ? values.img : "Choose image file"}
                    </label>
                  </div>
                </div>
                {blobURL}
                <Record setBlobURL={setBlobURL} />
              </Modal.Body>
              <Modal.Footer>
                <Button
                  type="submit"
                  variant="primary"
                  onClick={() => {
                    setShowModal(!showModal);
                  }}
                >
                  {isUpdateMode ? "Update" : "Add new recorder"}
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default connect(
  (r_state, ownProps) => {
    return {
      audio: r_state.audioList.filter((a) => a._id === ownProps.audioId)[0],
    };
  },
  (dispatch) => {
    return {
      dispatchNewAudio: (data) => {
        dispatch(saveAudioAction(data));
      },
      dispatchUpdateAudio: (data) => {
        dispatch(updateAudioAction(data));
      },
    };
  }
)(RecorderAudio);
