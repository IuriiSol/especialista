import classes from './AboutUs.module.css'
import img1 from "../../assets/about/1.svg"
import img2 from "../../assets/about/2.svg"
import img3 from "../../assets/about/3.svg"
import img4 from "../../assets/about/4.svg"

const AboutUs = (props) => {
    return (
      <div className={classes.wrapper}>
        <h2 className={classes.title}>О проекте</h2>
        <div className={classes.textWrapper}>
          <div className={classes.paragraph}>
            <img className={classes.aboutImg} src={img1} alt="aboutImage" />
            <p className={classes.text}>
              Сайт создан с целью собрать максимально полный список всех русскоговорящих специалистов, которые предлагают свои услуги на территории Португалии. На данный момент, количество профилей на сайте равно - <span className={classes.quantity}>{props.props.length}</span>. Присоединяйтесь и Вы.
            </p>
          </div>
          <div className={classes.paragraph}>
            <img className={classes.aboutImg} src={img2} alt="aboutImage" /> 
            <p className={classes.text}>
              Мы предлагаем более 20 категорий и удобный поиск по ним.
            </p>
          </div>
          <div className={classes.paragraph}>
            <img className={classes.aboutImg} src={img3} alt="aboutImage" />    
            <p className={classes.text}>
              Для специалистов - это возможность заявить о себе и дополнительная реклама. Просто расскажите о своей услуге и мы поможем найти Вам клиентов. Разместить объявление на ESPECIALISTA очень просто, а главное бесплатно.
            </p>
          </div>
          <div className={classes.paragraph}>
            <img className={classes.aboutImg} src={img4} alt="aboutImage" />            
            <p className={classes.text}>
              В свою очередь, пользователям мы предлагаем постоянно обновляемую коллекцию электронных визиток. Мы сэкономим ваше время, избавив от необходимости ходить по социальным сетям в поиске нужного специалиста. 
            </p>
          </div>

        </div>
      </div>
    )
  }
  
  export default AboutUs