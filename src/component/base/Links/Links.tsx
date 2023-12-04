import { ILinksProps } from "./Links.porps";

import styles from './Links.module.css';
import cn from 'classnames';

const Links = (props: ILinksProps) => {
    const {direction = 'horizontal', children, className} = props;

    return (
        <div className={cn(styles.links, className, {
            [styles.horizontal]: direction === 'horizontal',
            [styles.vertical]: direction === 'vertical',
        })}>
            {children}
        </div>
    )
};

export default Links;