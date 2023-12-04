import Link from "next/link";
import Links from "../base/Links";
import { IFooterProps } from "./Footer.props";

import styles from './Footer.module.css';

const Footer = (props: IFooterProps) => {
    return (
        <footer {...props} className={styles.footer}>
            <div className="container">
                <div className={styles.wrapper}>
                    <Links>
                        <Link href='/'>home</Link>
                        <Link href='/admin'>admin</Link>
                        <Link href='/profile'>profile</Link>
                        <Link href='/reviews'>reviews</Link>
                        <Link href='/products'>products</Link>
                    </Links>
                </div>
            </div>
        </footer>
    );
};

export default Footer;