import {Link} from "react-router-dom";
import {Button, Card, Image} from "semantic-ui-react";

const Meal = (props) => {
    const {strMeal, idMeal, strMealThumb} = props
    return (
        <Card>
            <Image src={strMealThumb} />
            <Card.Content>
                <Card.Header>{strMeal}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Link to={`/meal/${idMeal}`}>
                    <Button content='Watch recipe' basic/>
                </Link>
            </Card.Content>
        </Card>
    )
}
export default Meal
