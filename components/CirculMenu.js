import styles from '../styles/CirculMenu.module.scss';
import img1 from "../public/circul/1.svg";
import img2 from "../public/circul/2.svg";
import img3 from "../public/circul/3.svg";
import img4 from "../public/circul/4.svg";
import img5 from "../public/circul/5.svg";
import img6 from "../public/circul/6.svg";
import img7 from "../public/circul/7.svg";
import img8 from "../public/circul/8.svg";
import adultImg from "../public/circul/main.svg";
import Circuls from './Circuls';


export default function CirculMenu() {
   

    return(
        <div className={styles.circulMenu}>
            <div className={styles.circulMenu__main}>
                <img src={adultImg.src}/>
                <div className={styles.circulMenu__main__shadow}></div>
                <h3>Взрослый</h3>
                <Circuls  imgSrs={img1.src} imgX={100+'px'} imgY={-150+'px'} text={'Сколиоз'} textX={-70+'px'} textY={-70+'px'}/>
                <Circuls  imgSrs={img2.src} imgX={292+'px'} imgY={-82+'px'} text={'Ограниченная способность поднимать руки и переносить предметы'} textX={150+'px'} textY={30+'px'} align={'left'}/>
                <Circuls  imgSrs={img3.src} imgX={352+'px'} imgY={110+'px'} text={'Нарушения жевания и глотания'} textX={150+'px'} textY={30+'px'} align={'left'}/>
                <Circuls  imgSrs={img4.src} imgX={292+'px'} imgY={302+'px'} text={'Дыхательная недостаточность/ респираторная дисфункция'} textX={150+'px'} textY={30+'px'} align={'left'}/>
                <Circuls  imgSrs={img5.src} imgX={100+'px'} imgY={370+'px'} text={'Неспособность бегать, изменение походки'} textX={-60+'px'} textY={150+'px'} />
                <Circuls  imgSrs={img6.src} imgX={-80+'px'} imgY={302+'px'} text={'Контрактура суставов'} textX={-300+'px'} textY={50+'px'} align={'right'}/>
                <Circuls  imgSrs={img7.src} imgX={-160+'px'} imgY={110+'px'} text={'Вывих бедра'} textX={-300+'px'} textY={50+'px'} align={'right'}/>
                <Circuls  imgSrs={img8.src} imgX={-80+'px'} imgY={-70+'px'} text={'Утомляемость'} textX={-300+'px'} textY={50+'px'} align={'right'}/>
            </div>
        </div>
    )
    
}


