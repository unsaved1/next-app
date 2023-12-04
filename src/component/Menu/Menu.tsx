import { Suspense } from 'react';

import Jokes from "../Jokes";

import styles from './Menu.module.css';
import Loading from '@/component/base/Spinner';

const Menu = () => {
    return (
        <section className={styles.menu}>
            <h2>Menu</h2>
                <Suspense fallback={<Loading/>}>
                    <Jokes className={styles.links}/>
                </Suspense>
        </section>
    )
};

export default Menu;

