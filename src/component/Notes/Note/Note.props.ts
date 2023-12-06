import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface INotesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    title: string,
    text: string
}