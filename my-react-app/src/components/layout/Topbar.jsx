import TopBarCard from "../ui/cards/TopBarCard"
import styles from "./Topbar.module.css";


export default function Topbar(){
    return (
        <aside className={styles.container}>
            <TopBarCard title='Aktiv tid' className="red">
                <p>3h 15min</p>
            </TopBarCard>
            <TopBarCard title='Energiprognos' className="yellow">
                <p>Gla som sjutton</p>
            </TopBarCard>
            <TopBarCard title='Nästa rast' className="red">
                <p>om 45min</p>
            </TopBarCard>
            <TopBarCard title='Nuvarande mode' className="red">
                <p>Deep work</p>
            </TopBarCard>
        </aside>
    )
}