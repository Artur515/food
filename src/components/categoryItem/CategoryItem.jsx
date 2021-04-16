import {Item, Segment, Button} from "semantic-ui-react";
import {Link} from "react-router-dom";


const CategoryItem = (props) => {
    const {strCategory, strCategoryDescription, strCategoryThumb} = props


    return (
        <Segment>
            <Item.Group>
                <Item>
                    <Item.Image size='medium' src={strCategoryThumb}/>
                    <Item.Content>
                        <Item.Header>{strCategory}</Item.Header>
                        <Item.Description >
                            <p>{strCategoryDescription}</p>
                            <Link to={`/category/${strCategory}`}>
                                <Button content='Watch category' basic/>
                            </Link>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
    )

}

export default CategoryItem

