import React, { useEffect, useState } from "react";

import styles from "@/styles/Check.module.css";

export const CheckComponent = () => {
    const [innerState, setInnerState] = useState("checkTicketClosed");

    useEffect(() => innerState === "checkTicketClosed" && setInnerState("checkTicket"), []);

    return (
        <div className={styles.check}>
            <div className={styles.output}>
                <div></div>
            </div>
            <div className={styles.checkTicketInner}>
                <div className={styles[innerState]}>
                    <div className={styles.checkTicketContent}>
                        <div className={styles.price}>
                            <h3>Стоимость покупок</h3>
                            <h1>820<span>,95</span> ₽</h1>
                        </div>
                        <h1 className={styles.info}>Приложите или прокатайте карту</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}