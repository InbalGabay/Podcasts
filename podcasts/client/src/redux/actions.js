export const INITIAL_DATA = 'INITIAL_DATA';
export const SAVE_AUDIO = 'SAVE_AUDIO';
export const UPDATE_AUDIO = 'UPDATE_AUDIO';
export const DELETE_AUDIO = 'DELETE_AUDIO';

export function initialDataAction(data){
  return{
    type:INITIAL_DATA,
    payload:data
  };
}

export function saveAudioAction(data){
  return{
    type:SAVE_AUDIO,
    payload:data.audio
  };
}

export function updateAudioAction(data){
  return{
    type:UPDATE_AUDIO,
    payload:data.updateAudio
  };
}

export function deleteAudioAction(data) {
  return {
    type: DELETE_AUDIO,
    payload: data
  }
}