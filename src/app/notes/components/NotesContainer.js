import { connect } from 'react-redux';
import Notes from './Notes';
import { loadNotes } from '../state';
import { addNote, deleteNote, updateNote } from '../state/actions';

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadNotes: () => {
      dispatch(loadNotes());
    },
    addNote: (note) => {
      dispatch(addNote(note));
    },
    deleteNote: (noteId) => {
      dispatch(deleteNote(noteId));
    },
    updateNote: (note) => {
      dispatch(updateNote(note));
    },
    toggleTheme: ownProps.toggleTheme,
    isDarkMode: ownProps.theme,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
