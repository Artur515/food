import {Image, Segment, Table} from "semantic-ui-react";
import style from './style.module.css'

const IdMeal = (props) => {
    console.log(props)
    return (<>
            <div>
                <Segment className={style.media}>
                    <Image src={props.recipe.strMealThumb}/>
                    <div style={{paddingLeft: '15px'}}>
                        <h1>{props.recipe.strMeal}</h1>
                        <h4>{props.recipe.strCategory}</h4>
                        {props.recipe.strArea ? <h5>{props.recipe.strArea}</h5> : null}
                        <p>{props.recipe.strInstructions}</p>
                    </div>
                </Segment>
            </div>
            <Segment>
                <Table stackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Ingredient</Table.HeaderCell>
                            <Table.HeaderCell>Measure</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {Object.keys(props.recipe).map(key => {
                            if (key.includes('Ingredient') && props.recipe[key]) {
                                return (
                                    <Table.Row key={key}>
                                        <Table.Cell>{props.recipe[key]}</Table.Cell>
                                        <Table.Cell>{props.recipe[`strMeasure${key.slice(13)}`]}</Table.Cell>
                                    </Table.Row>
                                )
                            }
                            return null
                        })}
                    </Table.Body>
                </Table>
            </Segment>
            <Segment>
                <h5>Video Recipe</h5>
                {props.recipe.strYoutube ?
                    <iframe title={props.recipe.strId}
                            src={`https://www.youtube.com/embed/${props.recipe.strYoutube.slice(-11)}`}
                            width="600"
                            height="400" allowFullScreen
                            frameBorder="0"
                    /> : null}
            </Segment>
        </>

    )
}

export default IdMeal