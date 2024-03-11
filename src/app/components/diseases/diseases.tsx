import React from "react";
import styles from "./diseases.module.css";
import Image from 'next/image';

const Diseases = () => {
    return (
        <div className={styles.list}>
            <div className={styles.item}>
                <div className={styles.img}>
                    <Image
                        src="/assets/heart.svg"

                        alt="Wonderland logo"
                        height={48}
                        width={153}
                        priority sizes="100%"
                        style={{ height: '100%', width: 'auto' }}
                    />
                </div>
                <div className={styles.numb}>
                    45,5%
                </div>
                <div className={styles.text}>
                    пациентов с <b>сердечной недостаточностью<sup>1</sup></b>
                </div>
                <div className={styles.subtext}>
                    Популяционное когортное исследование (N=385)
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.img}>
                    <Image
                        src="/assets/human.svg"
                        alt="Wonderland logo"
                        height={48}
                        width={153}
                        priority sizes="100%"
                        style={{ height: '100%', width: 'auto' }}
                    />
                </div>
                <div className={styles.numb}>
                    45,5%
                </div>
                <div className={styles.text}>
                    пациентов с <b>сердечной недостаточностью<sup>1</sup></b>
                </div>
                <div className={styles.subtext}>
                    Популяционное когортное исследование (N=385)
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.img}>
                <Image
                    src="/assets/bubble.svg"
                    alt="Wonderland logo"
                    height={48}
                    width={153}
                    priority sizes="100%"
                    style={{ height: '100%', width: 'auto' }}
                />
                </div>
                <div className={styles.numb}>
                    45,5%
                </div>
                <div className={styles.text}>
                    пациентов с <b>сердечной недостаточностью<sup>1</sup></b>
                </div>
                <div className={styles.subtext}>
                    Популяционное когортное исследование (N=385)
                </div>
            </div>
        </div>
    );
};
export default Diseases;
