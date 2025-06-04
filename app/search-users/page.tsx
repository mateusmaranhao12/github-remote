'use client'
import styles from "./styles.module.scss"
import RepositoryCard from "../components/RepositoryCard";
import UserProfile from "../components/UserProfile";
import NotFoundImage from '../assets/not-found.webp'
import Image from "next/image";
import { useState } from "react";
import { GitHubProfileType } from "../types/GitHubProfileType";
import { GitHubReposType } from "../types/GitHubReposType";
import LoadingComponent from "../components/LoadingComponent";

export default function Home() {

    const [searchInput, setSearchInput] = useState('')
    const [user, setUser] = useState<GitHubProfileType | null>(null)
    const [repos, setRepos] = useState<GitHubReposType[]>([])
    const [loading, setLoading] = useState(false)

    async function handleSearchUser() {
        if (!searchInput) {
            setUser(null)
            return
        }
        try {
            setLoading(true)
            const response = await fetch(
                `https://api.github.com/users/${searchInput}`
            )
            const data: GitHubProfileType = await response.json()
            setUser(data)
            const responseRepos = await fetch(`https://api.github.com/users/${data.login}/repos`)
            const dataRepos: GitHubReposType[] = await responseRepos.json()
            setRepos(dataRepos.slice(0, 6))
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles['main--search']}>
                    <input
                        type="text"
                        placeholder="Nome de usuário"
                        value={searchInput}
                        onChange={(event) => setSearchInput(event.target.value)}
                    />
                    <button className="btn--green" onClick={handleSearchUser}>Buscar</button>
                </div>
                <div className={styles['main--body']}>

                    {loading ?
                        <LoadingComponent />
                        :
                        user?.name ? (
                            <div>
                                <UserProfile profile={user} />
                                <div>
                                    <div className={styles['container-projects']}>
                                        {repos.map((repo) => (
                                            <RepositoryCard repo={repo} key={repo.id} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="not-found">
                                <Image src={NotFoundImage} alt="not found" width={600} height={450} />
                                <h3>Nenhum usuário encontrado</h3>
                            </div>
                        )

                    }

                </div>
            </main>
        </div>
    );
}
