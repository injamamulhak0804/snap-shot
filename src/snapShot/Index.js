import React, { useEffect, useState } from 'react'
import './Index.css'
import Header from './Header'
import Btn from './Btn'
import ImgContainer from './ImgContainer'
import Img from './IImg.json'
import Search from './Search'

const Index = () => {

    const [value, setValue] = useState('')
    const [search, setSearch] = useState([])
    const [current, setCurrent] = useState('1')
    const [searchResult, setsearchResult] = useState(false)


    const handleClick = (e) => {
        setsearchResult(false)
        const ClickedBtn = e.target.dataset.itemtype
        const activeBtn = e.target.innerText;
        setCurrent(activeBtn)
        const filterImg = Img.filter((item, index) => {
            return (item.type.toLowerCase()).includes(ClickedBtn.toLowerCase())
        })
        setSearch(filterImg)
    }


    useEffect(() => {
        const searchCar = Img.filter((item, index) => {
            return (item.type.toLowerCase()).includes(value.toLowerCase())
        })
        setSearch(searchCar)
        setCurrent('')
    }, [value])
    
    const handleChange = (e) => {
        setValue(e.target.value)
        search.length <= 1 ? setsearchResult(true) : setsearchResult(false)
    }

    return (
        <>
            <div className="wrapper">
                <Header />
                <Search
                    setValue={setValue}
                    value={value}
                    handleChange={handleChange}
                />
                <Btn
                    handleClick={handleClick}
                    current={current}
                    setCurrent={setCurrent}
                />
                <ImgContainer
                    Img={search}
                    searchResult={searchResult}
                />
            </div>
        </>
    )
}

export default Index