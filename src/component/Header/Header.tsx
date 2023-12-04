import Links from "../base/Links";
import { IHeaderProps } from "./Header.props";
import styles from './Header.module.css';
import Link from "next/link";

const Header = (props: IHeaderProps) => {
    return (
        <header {...props} 
            className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <Link href='/' className={styles.logo}></Link>
                    <nav>
                        <Links>
                            <Link href='/admin'>admin</Link>
                            <Link href='/profile'>profile</Link>
                            <Link href='/reviews'>reviews</Link>
                            <Link href='/products'>products</Link>
                            <Link href='/randomJoke'>randomJoke</Link>
                        </Links>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;