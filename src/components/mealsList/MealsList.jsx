import Meal from "../meal/Meal";
import style from './style.module.css'

const MealsList = ({meals}) => {
    return (
        <div className={style.main}>
            {meals.map(meal => (
                <Meal key={meal.idMeal} {...meal} />
            ))}
        </div>
    )
}

export default MealsList