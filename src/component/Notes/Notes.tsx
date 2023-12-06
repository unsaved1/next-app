'use client'
import {useReducer, useEffect} from "react";
import {NotesContext} from "./Notes.context";

import {IAction, INotesState} from "@/component/Notes/Notes.props";
import Note from "./Note";

import styles from './Notes.module.css';

function reducer(state: INotesState, action: IAction) {
    const {type, payload} = action;
    const notesData = state.data;

    switch (type) {
        case "ADD":
            payload.id = (notesData[notesData.length-1].id || 0) + 1;
            
            const allData = [...notesData, payload];
            localStorage.setItem('notes', JSON.stringify(allData));

            return {
                ...state,
                data: allData,
            };
        case "INITIAL":
            const updatedData = localStorage.getItem('notes');
            const arr = updatedData ? JSON.parse(updatedData) : [{title: "Title", text: "Your text", id: 0}]
            return {
                ...state,
                data: arr 
            }
        default:
            return state;
    }
}

const Notes = () => {
    const [notes, dispatch] = useReducer(reducer, {
        data: [{title: "Title", text: "Your text", id: 0}],
        forceDispatch: forceDispatchNotes
    });

    function forceDispatchNotes(action: IAction): void {
        dispatch(action);
    }

    useEffect(() => {
        forceDispatchNotes({type: 'INITIAL', payload: {title: '', text: '', id: 0}})
    }, [])

    
    
    const content = notes.data.map(note => {
        return (
            <Note key={note.id} title={note.title} text={note.text}/>
        )
    });
        
    const {Provider} = NotesContext;

    return (
        <Provider value={notes}>
            <div className={styles.notes}>
                
                {content}

                <button 
                    className={styles.add}
                    onClick={() => forceDispatchNotes({type: 'ADD', payload: {title:"Title", text: "Your text"}})}
                >
                    <span></span>
                    <span></span>
                </button>
            </div>
        </Provider>
    )
};

export default  Notes;

