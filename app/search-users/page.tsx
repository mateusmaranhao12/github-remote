import styles from "./styles.module.scss"
import RepositoryCard from "../components/RepositoryCard";
import UserProfile from "../components/UserProfile";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles['main--search']}>
                    <input type="text" placeholder="Nome de usuário" />
                    <button className="btn--green">Buscar</button>
                </div>
                <div className={styles['main--body']}>
                    <UserProfile />
                    <div>
                        <div className={styles['container-projects']}>
                            <RepositoryCard />
                            <RepositoryCard />
                            <RepositoryCard />
                            <RepositoryCard />
                            <RepositoryCard />
                            <RepositoryCard />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
