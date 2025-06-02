import { useState } from "react";
import styles from "./accordion.module.scss";

export default function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.accordion}>
            <div className={styles.accordionHeader} onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <span>{isOpen ? "▼" : "▲"}</span>
            </div>
            {isOpen && <div className={styles.accordionContent}>{content}</div>}
        </div>
    );
}
