import { ReactNode } from "react";
import styles from './layout.module.css';

const RandomJokeLayout = ({children}:{children: ReactNode}) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
};

export default RandomJokeLayout;