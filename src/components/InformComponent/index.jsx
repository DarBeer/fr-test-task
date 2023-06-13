import React from "react";

import styles from "@/styles/Inform.module.css";

export const InformComponent = () => {
    return (
        <div className={styles.info}>
            <div><h5>27.01.2022</h5></div>
            <div><h5>10:20</h5></div>
            <div><h5>Касса #1</h5></div>
        </div>
    )
}