'use client';
import React from "react";
import styles from "./list.module.css";
import Image from 'next/image';

const ListMiddle = () => {
    return (
        <div className={styles.list}>
            <div className={styles.item}>
                <div className={styles.header}>
                    <div className={styles.img}>
                        <Image
                            src="/assets/inhaler.svg"
                            alt=''
                            width={125}
                            height={105}
                            sizes="100%"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                    <div className={styles.numb}>
                        1
                    </div>
                </div>
                <div className={styles.name}>
                    Ингаляционный<br/>
                    <b> антихолинергик</b>
                </div>
                <div className={styles.desc}>
                    Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов1
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.header}>
                    <div className={styles.img}>
                        <Image
                            src="/assets/inhaler.svg"
                            alt=''
                            width={125}
                            height={105}
                            sizes="100%"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                    <div className={styles.numb}>
                        2
                    </div>
                </div>
                <div className={styles.name}>
                    Ингаляционный<br/>
                    <b> β2-агонист</b>
                </div>
                <div className={styles.desc}>
                    Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.header}>
                    <div className={styles.img}>
                        <Image
                            src="/assets/inhaler.svg"
                            alt=''
                            width={125}
                            height={105}
                            sizes="100%"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                    <div className={styles.numb}>
                        3
                    </div>
                </div>
                <div className={styles.name}>
                    Ингаляционный <br/>
                    <b> глюкокортикостероид </b>
                    (ИГКС)
                </div>
                <div className={styles.desc}>
                    Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность дыхательных путей
                </div>
            </div>
        </div>
    );
};
export default ListMiddle;
