import { IAllJokeData, IJokes } from "./Jokes.props";
import dataService from "@/services/dataService";

import Joke from "./Joke";

import styles from './Jokes.module.css';
import cn from 'classnames';

const Jokes = async ({className, ...props}: IJokes) => {
    const {getAllJokes} = dataService();
    const jokes:IAllJokeData = await getAllJokes();

    const content = jokes 
                        ? jokes.map(item => {
                            return (
                                <Joke key={item.id} data={item}/>
                            )
                        })
                        : <span>error</span>

    return (
        <ul className={cn(styles.jokes, className)} {...props}>
            <div className={styles.wrapper}>
                {content}
            </div>
        </ul>
    )
};

export default Jokes