import {useParams, useHistory} from 'react-router-dom'
import {useEffect, useState} from "react";
import {getMealById} from "../../api/api";
import {Button} from "semantic-ui-react";
import PreLoader from "../loader/PreLoader";
import IdMeal from "../idMeal/IdMeal";

const Recipe = () => {
    const [recipe, setRecipe] = useState({})
    const {id} = useParams()
    const {goBack} = useHistory()

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]))
    }, [id])

    return (
        <>

            {!recipe.idMeal ? <PreLoader/> : (
                <IdMeal recipe={recipe}/>
            )}
            <Button content='go back' basic onClick={goBack} style={{marginBottom:'10px'}}/>
        </>
    )
}

export default Recipe