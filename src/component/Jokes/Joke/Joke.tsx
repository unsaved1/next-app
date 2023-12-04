'use client'

import { IJoke } from "./Joke.props";

import styles from './Joke.module.css';
import cn from 'classnames';

const Joke = ({data, className, ...props}:IJoke) => {
    const {setup, punchline} = data;
    return (
        <div className={cn(styles.joke, className)} {...props}>
            <span className={styles.setup}>{setup}</span>
            <span className={styles.punchline}>{punchline}</span>
        </div>
    )
};

export default Joke;