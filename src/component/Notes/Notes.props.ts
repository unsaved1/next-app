import {DetailedHTMLProps, HTMLAttributes} from "react";
export interface IForceDispatch<T> {
    forceDispatch: (action: T) => void
}

export interface IAction {
    type: 'ADD' | 'REMOVE' | 'INITIAL' | 'SAVE',
    payload: INoteData,
}

export interface INotesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface INotesState extends IForceDispatch<IAction>{
    data: Array<INoteData>;
}

export interface INoteData {
    title: string,
    text: string,
    id?: number
}

