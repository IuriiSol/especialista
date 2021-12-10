import { Link } from 'react-router-dom'
import classes from "./Categories.module.css";
import { Sauna, BabySitter, Beauty, Cafe, CarRepair, Cleaning, ClothingRepair, PastryChef, ElectronicRepair, Ferms, Guide, HandMade, HomeRepair, Imobiliario, Insurance, IT, Medicine, Other, Photographer, Translator, Sport, Tattoo, Teacher, Transportation } from '../../assets/catImg/catImg'


const Categories = () => {
  return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Категории</h1>
        <div className={classes.categoryWrapper}>
            <div className={classes.catItemWrap}>
                <Link to={location => ({ ...location, pathname: "/carRepair" })} >
                    <div className={classes.category__item}>
                        <img src={CarRepair} alt="Ремонт авто" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>авто-ремонт</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to={location => ({ ...location, pathname: "/beauty" })} >
                    <div className={classes.category__item}>
                        <img src={Beauty} alt="Beauty" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>beauty</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to={location => ({ ...location, pathname: "/it" })} >
                    <div className={classes.category__item}>
                        <img src={IT} alt="Интернет технологии" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>сфера IT</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/imobiliario">
                    <div className={classes.category__item}>
                        <img src={Imobiliario} alt="Риелтор" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>Риелторы</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/medicine">
                    <div className={classes.category__item}>
                        <img src={Medicine} alt="Медицина" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>Здоровье</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/photographer">
                    <div className={classes.category__item}>
                        <img src={Photographer} alt="Photographer" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>Фото/Видео</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/tattoo">
                    <div className={classes.category__item}>
                        <img src={Tattoo} alt="Tattoo" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>Tattoo</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/insurance">
                    <div className={classes.category__item}>
                        <img src={Insurance} alt="Страховые агенты" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>Страховые агенты</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/electronicRepair">
                    <div className={classes.category__item}>
                        <img src={ElectronicRepair} alt="Ремонт техники" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>Ремонт техники</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/babySitter">
                    <div className={classes.category__item}>
                        <img src={BabySitter} alt="Baby-sitter" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>Babysitter</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/sauna">
                    <div className={classes.category__item}>
                        <img src={Sauna} alt="Sauna" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>Сауна, баня</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/transportation">
                    <div className={classes.category__item}>
                        <img src={Transportation} alt="Перевозки" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>ПЕРЕВОЗЧИКИ</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/cafe">
                    <div className={classes.category__item}>
                        <img src={Cafe} alt="Рестораны, кафе" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>Рестораны, кафе, бары</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/сlothingRepair">
                    <div className={classes.category__item}>
                        <img src={ClothingRepair} alt="Ремонт одежды" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>Ремонт одежды</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/сleaning">
                    <div className={classes.category__item}>
                        <img src={Cleaning} alt="Cleaning(Уборка)" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>Cleaning (Уборка)</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/homeRepair">
                    <div className={classes.category__item}>
                        <img src={HomeRepair} alt="Ремонт по дому" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>Ремонт по дому</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/pastryChef">
                    <div className={classes.category__item}>
                        <img src={PastryChef} alt="Кондитер, повар" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>Кондитеры, повары</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/guide">
                    <div className={classes.category__item}>
                        <img src={Guide} alt="Гид, Экскурсовод" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>Гиды, Экскурсоводы</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/teacher">
                    <div className={classes.category__item}>
                        <img src={Teacher} alt="Репетитор" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>Репетитор</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/ferms">
                    <div className={classes.category__item}>
                        <img src={Ferms} alt="Фермы" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>домашняя продукция</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/translator">
                    <div className={classes.category__item}>
                        <img src={Translator} alt="Переводчики" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>Переводчики</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/sport">
                    <div className={classes.category__item}>
                        <img src={Sport} alt="Спорт" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>Спорт</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/handmade">
                    <div className={classes.category__item}>
                        <img src={HandMade} alt="Handmade" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>Handmade</span>
                    </div>
                </Link>
            </div>
            <div className={classes.catItemWrap}>
                <Link to="/other">
                    <div className={classes.category__item}>
                        <img src={Other} alt="Other" className={classes.category__item_image} />
                        <span className={classes.category__item_name}>Разное</span>
                    </div>
                </Link>
            </div>
            
        </div>
      </div>
  )
}

export default Categories