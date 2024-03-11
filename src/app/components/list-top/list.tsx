'use client';
import React from "react";
import styles from "./list.module.css";
import ItemOne from "@/app/components/item-one";
import ItemTwo from "@/app/components/item-two";

const List = () => {
    return (
        <div className={styles.list}>
            <ItemOne/>
            <ItemTwo/>
        </div>
    );
};
export default List;
