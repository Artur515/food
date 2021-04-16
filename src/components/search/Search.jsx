import {useState} from "react";
import {Button, Input} from "semantic-ui-react";

const Search = ({cb = Function.prototype}) => {
    const [value, setValue] = useState('')

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        cb(value)
    }

    return (
        <div>
            <Input
                fluid icon='search'
                placeholder='Search...'
                onKeyDown={handleKey}
                onChange={(e) => setValue(e.target.value)}
                value={value}/>
            <Button onClick={handleSubmit} basic style={{marginTop:'10px'}} >Search</Button>
        </div>

    )
}

export default Search