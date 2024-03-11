import styles from "./page.module.css";
import Header from "@/app/components/header/header";
import ListTop from "@/app/components/list-top/list";
import ListBottom from "@/app/components/list-bottom/list";
import ListMiddle from "@/app/components/list-middle/list";
import React from "react";


export default function Home() {
  return (
    <main className={styles.main}>
        <Header title='ХОБЛ: мифы и реальность'/>
        <div className={styles.container}>
            <ListTop />
        </div>
        <Header title='Терапия ХОБЛ: что в фокусе?'/>
        <div className={styles.container} >
            <div className={styles.banner}>
                Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
            </div>
            <div className={styles.text}>Приоритетные направления фармакотерапевтической стратегии при ХОБЛ<sup>1</sup>:</div>
            <ListMiddle/>
            <ListBottom/>
        </div>
    </main>
  );
}
