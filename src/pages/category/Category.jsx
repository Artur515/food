import {useHistory, useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import {filterByCategory} from "../../api/api";
import PreLoader from "../../components/loader/PreLoader";
import MealsList from "../../components/mealsList/MealsList";
import {Button} from "semantic-ui-react";


const Category = () => {
    const [meals, setMeals] = useState([])
    const {name} = useParams()
    const {goBack} = useHistory()

    useEffect(() => {
        filterByCategory(name).then(data => setMeals(data.meals))
    }, [name])
    return (
        <>
            <Button content='go back' basic onClick={goBack}/>
            {!meals.length ? <PreLoader/> : <MealsList meals={meals}/>}
        </>
    )
}

export default Category