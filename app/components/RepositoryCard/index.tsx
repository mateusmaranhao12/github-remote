import { GitHubReposType } from '@/app/types/GitHubReposType'
import styles from './style.module.scss'

interface IProps {
    repo: GitHubReposType
}

export default function RepositoryCard({repo}: IProps) {
    return (
        <div className={styles.container}>
            <h3>{repo.name}</h3>
            <p>
                {repo.description}
            </p>
        </div>
    )
}