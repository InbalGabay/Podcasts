import React, { Component } from "react";
import ReactRecord from "react-record";
import { Button } from "react-bootstrap";

export default class Recorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      
    };
  }

  onData = (recordedBlob) => {
    console.log("chunk of data is: ", recordedBlob);
    console.log(`on data: ${this.blobURL}`);
  };

  onSave = (blobObject) => {
    this.props.setBlobURL(blobObject.blobURL);
  };

  onStop = (blobObject) => {
    console.log("blobObject is: ", blobObject);
    console.log(`on stop: ${this.blobURL}`);
  };

  onStart = () => {
    console.log(`on start: ${this.blobURL}`);
  };
  render() {
    return (
      <ReactRecord
        record={this.state.isRecording}
        onStop={this.onStop}
        onStart={this.onStart}
        onSave={this.onSave}
        onData={this.onData}
      >
        <div>
          
          <audio
            //todo: to take the duration
            ref={(c) => {
              this.audioSource = c;
            }}
            controls="controls"
            src={this.state.blobURL}
          >
            <track kind="captions" />
          </audio>
        </div>
        <button
          onClick={() => {
            this.setState({ isRecording: !this.state.isRecording });
          }}
          type="button"
        >
          Start
        </button>
        <button
          onClick={() => {
            this.setState({ isRecording: !this.state.isRecording });
          }}
          type="button"
        >
          Stop
        </button>
      </ReactRecord>
    );
  }
}
