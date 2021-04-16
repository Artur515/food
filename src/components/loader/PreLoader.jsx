import {Dimmer, Image, Segment, Loader} from "semantic-ui-react";

const PreLoader = () => {
    return (
        <Segment>
            <Dimmer active inverted>
                <Loader size='large'>Loading</Loader>
            </Dimmer>
            <Image src='/images/wireframe/paragraph.png'/>
        </Segment>
    )
}

export default PreLoader