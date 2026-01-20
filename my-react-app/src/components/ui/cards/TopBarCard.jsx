import styles from "./TopBarCard.module.css";

export default function TopBarCard({ title, children, variant, className = '' }){
    return ( 
        <div className={`card ${styles.card} ${variant} ${className} `}>
           <h3 className={`${styles.title}`}>{title}</h3>
            {children}
        </div>
    )
}