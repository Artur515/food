import React, {useState, useEffect} from "react";
import {useLocation, useHistory} from 'react-router-dom'
import {getAllCategories} from "../../api/api";
import PreLoader from "../../components/loader/PreLoader";
import CategoryList from "../../components/categoryList/CategoryList";
import style from './style.module.css'
import Search from "../../components/search/Search";
import {Segment} from "semantic-ui-react";

const Home = () => {
    const [catalog, setCatalog] = useState([])
    const [filterCatalog, setFilterCatalog] = useState([])
    const {pathname, search} = useLocation()
    const {push} = useHistory()


    const handleSearch = (str) => {
        setFilterCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
        push({pathname, search: `?search=${str}`})
    }


    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
            setFilterCatalog(search ? data.categories.filter(item =>
                item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())) : data.categories
            )
        })
    }, [search])
    return (
        <div className={style.catalog}>
            <Segment><Search cb={handleSearch}/></Segment>
            {!catalog.length ? <PreLoader/> : <CategoryList catalog={filterCatalog}/>}
        </div>
    )
}

export default Home