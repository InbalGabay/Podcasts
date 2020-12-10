import React from "react";
import { connect } from "react-redux";
import RecorderAudio from "./RecorderAudio";
import SingleAudio from "./SingleAudio";

function AudioList(props) {
  return (
    <div className="fluid-container">
      <div className="col-md-12 ml-auto mr-auto text-center">
        <h2 className="title mt-5">Our little team.</h2>
        <h4 className="description m-2">
          This is the paragraph where you can write more details about your
          product. Keep you user engaged by providing meaningful information.
        </h4>
        <div className="row">
          {props.audioList.map((audio) => (
            <SingleAudio key={audio._id} audioId={audio._id} />
          ))}
        </div>
        <RecorderAudio isUpdateMode={false} />
      </div>
    </div>
  );
}

export default connect((r_state) => {
  return {
    audioList: r_state.audioList,
  };
}, null)(AudioList);
