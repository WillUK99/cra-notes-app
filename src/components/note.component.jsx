import React from "react";
import {MdDeleteForever} from "react-icons/md";

 export const Note = ({id, text, date, handleDelete}) => {
    
    const deleteNote = () => {
        handleDelete(id)
    }

    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever 
                className="note-delete" 
                size="1.3rem"
                onClick={deleteNote}
                /> 
            </div>
        </div>
    )
}

