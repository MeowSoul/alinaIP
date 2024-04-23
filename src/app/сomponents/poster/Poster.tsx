import React from 'react';
import styles from './poster.module.css'

const backgroundImage = "/img/poster.jpg"

const Poster = () => {
    return (
        <div style={{backgroundImage:`url(${backgroundImage})`}} className={styles.main}>
            <img src="/img/line.png" alt="line" className={styles.line}/>
        </div>
    );
};

export default Poster;