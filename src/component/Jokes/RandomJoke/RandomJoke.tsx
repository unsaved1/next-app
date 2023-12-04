'use client'

import { useEffect, useState } from "react";
import dataService from "@/services/dataService";

import { IJokeData } from "../Joke/Joke.props";
import { IRandomJokeProps } from "./RandomJoke.props";

import Joke from "../Joke";

import Spinner from "@/component/base/Spinner";

import styles from './RandomJoke.module.css';


const RandomJoke = ({category, ...props}:IRandomJokeProps) => {
    const {getRandomJoke} = dataService();    
    const [joke, setJoke] = useState<IJokeData>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        updateJoke(category);
    }, [])   


    function updateJoke(category: string) {
        getRandomJoke(category).then(res => {
            setJoke(res[0]);
            setLoading(false);
        })
    }
    
    return (
        <section {...props} className={styles.randomJoke}>
            <div className={styles.joke}>
                {!loading && joke 
                    ? <Joke data={joke}/>
                    : <Spinner/> 
                }
            </div>
            <button
                className={styles.btn} 
                onClick={() => {
                    setLoading(true);
                    updateJoke(category);
                }}
            >
                    get random joke
            </button>
        </section>
    )
};

export default RandomJoke;