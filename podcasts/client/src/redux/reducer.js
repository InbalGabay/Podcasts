import { INITIAL_DATA, SAVE_AUDIO, UPDATE_AUDIO, DELETE_AUDIO} from "./actions";

const initialState = {
  audioList: [],
};

export default function reducer(state = initialState, action) {
  console.log("in reducer -> reducer.js");
  console.log("state", state);
  switch (action.type) {
    case INITIAL_DATA:
      return { audioList: action.payload };

    case SAVE_AUDIO:
      return { audioList: state.audioList.concat(action.payload) };

    case UPDATE_AUDIO: {
      var updateAudioList = state.audioList.map((audio) => {
        if (audio._id === action.payload._id) {
          return action.payload;
        } else {
          return audio;
        }
      });
      return { audioList: updateAudioList };
    }

    case DELETE_AUDIO:
      return {
        audioList: state.audioList.filter(
          (audio) => audio._id !== action.payload
        ),
      };

    default:
      return state;
  }
}
