import React, { FC} from 'react';
import styles from "./header.module.css";

interface HeaderProps {
    title: string,
}

const Header: FC<HeaderProps> = ({title}) => {
    return (
        <div className={styles.header}>
            <h2>{title}</h2>
        </div>
    )
};

export default Header;