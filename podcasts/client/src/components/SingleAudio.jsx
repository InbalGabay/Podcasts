import React from "react";
import RecorderAudio from "./RecorderAudio";
import Moment from "moment";
import * as Icons from "react-bootstrap-icons";
import { connect } from "react-redux";
import srcImg from "./../assets/images/img01.jpg";
import Player from "./Player";
import DeleteAudio from "./DeleteAudio";

function SingleAudio(props) {
  const { _id, title, description, img, createDate, duration } = props.audio;
  // console.log(_id);
  const millisToMinutesAndSeconds = (millis) => {
    var hours = Math.floor(millis / 3600000) % 24;
    var minutes = Math.floor(millis / 60000) % 60;
    var seconds = ((millis % 60000) / 1000).toFixed(0);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var time =
      hours === "00"
        ? minutes + ":" + seconds
        : hours + ":" + minutes + ":" + seconds;
    return time;
  };

  return (
    <div className="col-xl-6 col-lg-5 ml-auto mb-4">
      <div className="card card-profile">
        <div className="row">
          <div className="col-md-5">
            <div className="card-image">
              {/* src={`${process.env.PUBLIC_URL}/assets/images/uc-white.png`}  */}

              <img alt="audio pic" className="img" src={srcImg} />
            </div>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <div
                className="btn-group float-right"
                role="group"
                aria-label="Basic example"
              >
                <RecorderAudio isUpdateMode={true} audioId={_id} />
                <DeleteAudio audioId={_id} />
              </div>
              <h3 className="card-title">{title}</h3>
              <h6 className="category text-primary">
                {Moment(createDate).format("DD-MM-YYYY")}
              </h6>
              <p className="card-description">{description}</p>
              <button
                className="btn btn-primary btn-round btn-ico float-left m-1"
                type="button"
              >
                <Icons.Heart />
              </button>
              <button
                className="btn btn-primary btn-icon btn-round float-left  m-1"
                type="button"
              >
                <Icons.Share />
              </button>
              <div className="float-right">
                <span style={{ fontSize: 22, color: "blue" }}>
                  {millisToMinutesAndSeconds(duration)}
                </span>
                {<Player audioId={_id} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect((r_state, ownProps) => {
  return {
    audio: r_state.audioList.filter((a) => a._id === ownProps.audioId)[0],
  };
}, null)(SingleAudio);
