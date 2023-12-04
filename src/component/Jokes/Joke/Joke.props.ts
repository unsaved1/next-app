import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface IJoke extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: IJokeData
}

export interface IJokeData {
    id: number,
    punchline: string,
    setup: string,
    type: string
}