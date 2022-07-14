import styles from '../styles/Category.module.scss';

export default function Category({text , imgSrs }) {
    return(
        <div className={styles.categoryWrap}>
            <h3>{text}</h3>
            <img className={styles.categoryImg} src={imgSrs} alt='error'/>
        </div>
    )
}