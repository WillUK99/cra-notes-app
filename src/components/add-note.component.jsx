import React, {useState} from "react"


export const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState("");

    const charLimit = 200

    const handleChange = (event) => {
        if(charLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value)
        }
    }
    
    const handleSaveClick = () => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText("")
        }   
    }

    return (
        <div className="note new">
            <textarea 
            cols="10" 
            rows="8" 
            placeholder="Add new note here..."
            value={noteText}
            onChange={handleChange}
            autoFocus
            />
            
            <div className="note-footer">
                <small>{charLimit - noteText.length} remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>                                                  
    )           
}