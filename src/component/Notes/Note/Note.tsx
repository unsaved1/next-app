'use client'

import {INotesProps} from "./Note.props";
import {ChangeEvent, Dispatch, SetStateAction, useContext, useEffect, useState} from "react";
import styles from './Note.module.css';
import cn from "classnames";
import { NotesContext } from "../Notes.context";

const Note = ({title, text, ...props}:INotesProps) => {
    const [noteTitle, setTitle] = useState(title);
    const [noteText, setText] = useState(text);
    const [isEdit, setIsEdit] = useState(false);

    const {forceDispatch} = useContext(NotesContext);

    const onHandleChange = (e: ChangeEvent<HTMLInputElement>, type: "title" | "text", setState: Dispatch<SetStateAction<string>>) => {
        const value = e.target.value;
        if (isEdit) {
            setState(value);
        } else {
            e.target.blur();
        }
    };

    return (
        <div className={styles.note}>
            <input
                className={cn(styles.title, {
                    [styles.titleEdited]: isEdit,
                })}
                readOnly={!isEdit}
                value={noteTitle}
                onChange={(e) => onHandleChange(e, 'title', setTitle)}
            />
            <input
                className={cn(styles.text, {
                    [styles.textEdited]: isEdit,
                })}
                readOnly={!isEdit}
                value={noteText}
                onChange={(e) => onHandleChange(e, 'text', setText)}
            />

            <div className={styles.actions}>
                <button
                    className={cn(styles.button, styles.edit)}
                    onClick={() => {setIsEdit(true)}}
                >
                    edit
                </button>

                <button
                    className={cn(styles.button, styles.save)}
                    onClick={() => {setIsEdit(false)}}
                >
                    save
                </button>
            </div>
        </div>
    )
};
export default  Note;