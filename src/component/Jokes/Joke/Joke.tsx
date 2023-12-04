'use client'

import { IJoke } from "./Joke.props";

import styles from './Joke.module.css';
import cn from 'classnames';

const Joke = ({data, className, ...props}:IJoke) => {
    const {setup, id} = data;
    return (
        <div className={cn(styles.joke, className)} {...props}>
            <span>{setup}</span>
            <span>{id}</span>
        </div>
    )
};

export default Joke;