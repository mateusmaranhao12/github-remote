import Link from "next/link";
import RepositoryCard from "./components/RepositoryCard";
import UserProfile from "./components/UserProfile";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <UserProfile />
        <div>

          <Link href="/search-users">
            <button className="btn--green">Encontrar usuários</button>
          </Link>

          <div className={styles['container-projects']}>
            <RepositoryCard />
            <RepositoryCard />
            <RepositoryCard />
            <RepositoryCard />
            <RepositoryCard />
            <RepositoryCard />
          </div>

        </div>
      </main>
    </div>
  );
}
