import {createContext} from "react";
import {IAction} from "@/component/Notes/Notes.props";

export const NotesContext = createContext({
    data: [
        {
            title: '',
            text: '',
        }
    ],
    forceDispatch: (action:IAction) => {action}
});