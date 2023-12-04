import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IJokeData } from "./Joke/Joke.props";

export interface IJokes extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {}
export type IAllJokeData = Array<IJokeData>
