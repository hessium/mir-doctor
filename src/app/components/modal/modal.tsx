'use client';

import React, {FC, } from 'react';
import styles from "./modal.module.css";
import Close from "@/app/components/icons/close";
import CustomButton from "@/app/components/UI/customButton/CustomButton";

interface ModalProps {
    children?: React.ReactNode,
    isModal: boolean,
    onCloseModal?: () => void,
}

const Modal: FC<ModalProps> = ({children, isModal, onCloseModal}) => {

    const activeModal: string = isModal ? `${styles.active}` : "";

    const onClose = () => {
        if (onCloseModal) {
            onCloseModal()
        }
    }

    return (
        <div className={`${styles.modal} ${activeModal}`}>
           <div className={styles.wrapper}>
               <CustomButton classStyle={styles.close} onClick={onClose}>
                   <Close />
               </CustomButton>
               <div className={styles.content}>
                   {children}
               </div>
           </div>
        </div>
    )
}
export default Modal;
