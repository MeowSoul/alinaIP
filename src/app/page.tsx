import React from 'react';
import styles from './page.module.css'
import Header from "@/app/сomponents/header/Header";
import Poster from "@/app/сomponents/poster/Poster";

const Page = () => {
    return (
        <div className={styles.main}>
            <Header/>
            <div className={styles.posterBlock}>
                <Poster/>
            </div>

        </div>
    );
};

export default Page;