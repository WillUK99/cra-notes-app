import React from "react";
import { Note } from "./note.component";
import { AddNote } from "./add-note.component";

export const NoteList = ({ notes, handleAddNote, handleDelete }) => {
  return (
    <div className="notes">
      {notes.map((note) => (
        <Note 
        id={note.id} 
        text={note.text} 
        date={note.date} 
        handleDelete={handleDelete}/>
      ))}

      <AddNote handleAddNote={handleAddNote}/>
    </div>
  );
};

export default NoteList;
