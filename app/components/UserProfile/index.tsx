import Image from "next/image";
import ProfileImage from "../../assets/profile.jpg";
import styles from './styles.module.scss'

export default function UserProfile() {
  return (
    <div className={styles.container}>
      <div className={styles['container--avatar']}>
        <Image src={ProfileImage} alt="avatar" width={249} height={249} />
        <div>Meu perfil</div>
      </div>

      <h1>Mateus Maranhão</h1>
      <span>mateusmaranhao12</span>
      <p>
        Computer Science Student at Unit in Aracaju - SE, Full-Stack Developer
      </p>

      <div className={styles['items-container']}>
        <span>@DEV2DEV</span>
        <span>Presidente Prudente</span>
        <span>mateusnmaranhao@gmail.com</span>
        <span>https://www.instagram.com/mateusnmaranhao/</span>
      </div>
    </div>
  );
}
