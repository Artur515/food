import CategoryItem from "../categoryItem/CategoryItem";
import style from './style.module.css'


const CategoryList = ({catalog = []}) => {
    return (
        <div className={style.card}>
            {catalog.map(el => {
                return <CategoryItem key={el.idCategory} {...el}/>
            })}
        </div>
    )
}

export default CategoryList