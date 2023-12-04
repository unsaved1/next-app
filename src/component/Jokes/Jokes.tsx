'use client'

import { useState, useEffect } from "react";

import { IJokes } from "@/services/dataInterfaces";
import dataService from "@/services/dataService";

import styles from './Jokes.module.css';

const Jokes = () => {
    const [jokes, setJokes] = useState<IJokes>();
    const {getData} = dataService();
    useEffect(() => {
        getData().then(res => {
            setJokes(res);
        });
    }, []);
    
    const content = jokes ? jokes.map(item => {
                            return (
                                <li className={styles.joke} key={item.id}>
                                    <span>{item.setup}</span>
                                    <span>{item.punchline}</span>
                                </li>
                            )
                        }) : <span>loading</span>;

    return (
        <ul className={styles.jokes}>
            <div className={styles.wrapper}>
                {content}
            </div>
        </ul>
    )
};

export default Jokes