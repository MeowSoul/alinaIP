import React from 'react';
import styles from './buttonShadows.module.css'
interface ButtonShadowsProps {
    text:string
}

const ButtonShadows:React.FC<ButtonShadowsProps> = ({text}) => {
    return (
        <div className={styles.main}>
            {text}
        </div>
    );
};

export default ButtonShadows;