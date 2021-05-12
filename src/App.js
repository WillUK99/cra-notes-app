import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid"
import { NoteList } from "./components/note-list.component"
import { SearchBox } from "./components/search-box.component"
import { Header } from "./components/header.component"

const App = () => {
  const [notes, setNotes] = useState([])
  const [searchText, setSearchText] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("cra-notes-app-data"))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cra-notes-app-data", JSON.stringify(notes))
  }, [notes])

  const addNewNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }



  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container" >
        <Header handleThemeToggle={setDarkMode} />
        <SearchBox handleSearch={setSearchText} />
        <NoteList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNewNote}
          handleDelete={deleteNote} />
      </div>
    </div>
  )
}

export default App;