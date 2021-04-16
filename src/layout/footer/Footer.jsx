import {Container, Segment} from "semantic-ui-react";
import style from './style.module.css'

const Footer = () => {
    return (
        <Segment color='teal' inverted vertical style={{padding: '3em 0em',}}>
            <Container>
                <div className={style.text}>Footer</div>
            </Container>
        </Segment>

    )
}

export default Footer