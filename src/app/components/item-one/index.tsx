'use client';
import React, { useState} from "react";
import Modal from "@/app/components/modal/modal";
import CustomButton from "@/app/components/UI/customButton/CustomButton";
import styles from "./item-one.module.css";
import Hand from "@/app/components/icons/hand";
import Image from 'next/image';


const itemOne = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openModal, setOpenModal] = useState<boolean>(false);

    const onOpenModal = () => {
        setOpenModal(true)
    }

    const onCloseModal = () => {
        setOpenModal(false)
    }

    return (
        <div className={styles.item}>
            <CustomButton classStyle={styles.open} onClick={onOpenModal}>
                <Hand />
            </CustomButton>
            <div className={styles.content}>
                <div className={styles.icon}>
                    <Image
                        src="/assets/item-one.svg"
                        width={80}
                        height={80}
                        alt=""
                    />
                </div>
                <div className={styles.title}>
                    <p>ХОБЛ болеют <b>преимущественно мужчины?</b></p>
                </div>
                <div className={styles.text}>
                    <p>
                        В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ,<br/> диагностированной до 55 лет, было выявлено преобладание...
                    </p>
                </div>
            </div>
            <Modal isModal={openModal} onCloseModal={onCloseModal}>
                <div className={styles.desc}>
                    <p>В десятилетнем исследовании <b>«Генетическая эпидемиология ХОБЛ» (COPDGene)</b> среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено <b>преобладание женщин (66%)</b>, а в возрасте 60-64 лет количество женщин и мужчин.</p>
                    <p>Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что дыхательные пути курящих женщин имеют более <b>высокий процент площади стенок</b>, но меньшую площадь просвета, внутренний диаметр и толщину дыхательных путей по сравнению с курящими мужчинами.</p>
                </div>
                <Image
                    src="/assets/diagrame.png"
                    alt=''
                    width={1211}
                    height={389}
                    sizes="100%"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </Modal>
        </div>
    );
};
export default itemOne;
