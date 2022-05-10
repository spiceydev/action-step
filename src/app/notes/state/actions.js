import {
  loadNotesRequest,
  addNoteRequest,
  deleteNoteRequest,
  updateNoteRequest,
} from './service';

const ns = 'notes/';
export const LOAD_NOTES = `${ns}LOAD_NOTES`;
export const LOAD_NOTES_SUCCESS = `${ns}LOAD_NOTES_SUCCESS`;

export const ADD_NOTE = `${ns}ADD_NOTE`;
export const ADD_NOTES_SUCCESS = `${ns}ADD_NOTES_SUCCESS`;

export const DELETE_NOTE = `${ns}DELETE_NOTE`;
export const DELETE_NOTES_SUCCESS = `${ns}DELETE_NOTES_SUCCESS`;

export const UPDATE_NOTE = `${ns}UPDATE_NOTE`;
export const UPDATE_NOTES_SUCCESS = `${ns}UPDATE_NOTES_SUCCESS`;

export function loadNotes() {
  return {
    type: LOAD_NOTES,
    noteOperation: {
      request: loadNotesRequest(),
      success: loadNotesSuccess,
    },
  };
}

function loadNotesSuccess(notes) {
  return {
    type: LOAD_NOTES_SUCCESS,
    notes,
  };
}

export function addNote(note) {
  return {
    type: ADD_NOTE,
    noteOperation: {
      request: addNoteRequest(note),
      success: addNoteSuccess,
    },
  };
}

function addNoteSuccess(note) {
  return {
    type: ADD_NOTES_SUCCESS,
    note,
  };
}

export function deleteNote(noteId) {
  return {
    type: DELETE_NOTE,
    noteOperation: {
      request: deleteNoteRequest(noteId),
      success: deleteNoteSuccess,
    },
  };
}

function deleteNoteSuccess(notes) {
  return {
    type: DELETE_NOTES_SUCCESS,
    notes,
  };
}

export function updateNote(note) {
  return {
    type: UPDATE_NOTE,
    noteOperation: {
      request: updateNoteRequest(note),
      success: updateNoteSuccess,
    },
  };
}

function updateNoteSuccess(note) {
  return {
    type: UPDATE_NOTES_SUCCESS,
    note,
  };
}
