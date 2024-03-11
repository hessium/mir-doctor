'use client';

import React, {FC, useState} from "react";
import Modal from "@/app/components/modal/modal";
import CustomButton from "@/app/components/UI/customButton/CustomButton";
import styles from "./item-two.module.css";
import Hand from "@/app/components/icons/hand";
import Image from 'next/image';
import Diseases from "@/app/components/diseases/diseases";


const itemTwo  = () => {

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
                        src="/assets/item-two.svg"
                        width={80}
                        height={80}
                        alt=""
                    />
                </div>
                <div className={styles.title}>
                    <p><b>Опасно</b> не наличие заболевания, а обострения?</p>
                </div>
                <div className={styles.text}>
                    <p>
                        Большинство пациентов с ХОБЛ столкнется с обострениями:<br/> как минимум одно среднетяжелое или тяжелое обострение случится в течение...
                    </p>
                </div>
            </div>
            <Modal isModal={openModal} onCloseModal={onCloseModal}>
                <div className={styles.desc}>
                    <p><b>Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно<br/> среднетяжелое или тяжелое обострение случится в течение 3 лет у 77% пациентов<sup>1</sup>.</b></p>
                    <p>В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов.<sup>2</sup> Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте миокарда и некоторых злокачественных опухолях.</p>
                </div>
                <h3 className={styles.subtitle}>Пятилетняя выживаемость пациентов</h3>
                <Diseases />
            </Modal>
        </div>
    );
};
export default itemTwo;
