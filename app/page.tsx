import Link from "next/link";
import RepositoryCard from "./components/RepositoryCard";
import UserProfile from "./components/UserProfile";
import styles from "./page.module.scss";
import { GitHubProfileType } from "./types/GitHubProfileType";
import { GitHubReposType } from "./types/GitHubReposType";

export default async function Home() {

  const response = await fetch(
    'https://api.github.com/users/mateusmaranhao12'
  )

  const data: GitHubProfileType = await response.json()

  const responseRepos = await fetch(`https://api.github.com/users/${data.login}/repos`)

  const dataRepos: GitHubReposType[] = await responseRepos.json()

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <UserProfile isMyProfile profile={data} />
        <div>

          <Link href="/search-users">
            <button className="btn--green">Encontrar usuários</button>
          </Link>

          <div className={styles['container-projects']}>
            {dataRepos.slice(0, 6).map((repo) => (
              <RepositoryCard repo={repo} key={repo.id} />
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
