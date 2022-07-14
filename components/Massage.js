import styles from '../styles/Massage.module.scss';

export default function Massage({danTex}) {
    return(
        <div className={styles.danderWrap}>
            {danTex}
        </div>
    )
}

