import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IRandomJokeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    category: string;
}