import React, { useCallback, useEffect, useRef, useState } from "react";

const Note = () => {
    const noteTextAreaElement = useRef(null);
    const [notes, setNote ] = useState([]);
    const [, updateState] = React.useState({});
    const forceUpdate = useCallback(() => updateState({}), []);
    let storedNotes = localStorage.getItem("note")

    useEffect(() => {
        if (typeof storedNotes == "string") {
            setNote(JSON.parse(storedNotes));
        }
    }, []);

    useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const saveToLocalStorage = () => {
        let newNote = notes
        if (noteTextAreaElement.current?.value) {

            newNote.push({
                note: noteTextAreaElement.current?.value,
                date: new Date()
            })
            localStorage.setItem("notes", JSON.stringify(newNote))
        }
        forceUpdate()
    }
    const deleteFromStorage = (index) => {
        let newNote = []
        for (let i = 0; i < notes.length; i++) {
            const element = notes[i];
            if (i !== index) {
                newNote.push(element)
            }
        }
        setNote(newNote)
        forceUpdate()
    }
    const NotesTemplate = () => {
        return <>
            {notes.map((note, index) => {
                return <div key={+index} className="d-flex mt-3 mb-3">
                    <div className="d-inline-flex ">
                        <div className='mx-3'>{note.note}</div>
                        <button className='btn btn-sm btn-danger' onClick={() => deleteFromStorage(index)}>Delete</button>
                    </div>
                </div>
            })}
        </>
    }
    return <>
        <h5>User Notes</h5>
        <section className='card p-4'>
            <div className="p-3">
                <div className="mb-6">
                    <label htmlFor="city_search" className="block mb-2 text-sm font-medium text-gray-900">Type Your Note</label>
                    <textarea
                        id="city_search"
                        name='city_search'
                        ref={noteTextAreaElement}
                        placeholder='Enter city...'
                        className="form-control p-3" ></textarea>
                    <button className=" btn btn-primary btn-md mt-3" onClick={saveToLocalStorage} >Save</button>
                </div>
                <div>
                    <NotesTemplate />
                </div>
            </div>
        </section>
    </>
}

export default Note