import styles from './Menu.module.css';
import Jokes from "../Jokes";

const Menu = () => {
    return (
        <section className={styles.menu}>
            <h2>Menu</h2>
                <Jokes/>
        </section>
    )
};

export default Menu;

