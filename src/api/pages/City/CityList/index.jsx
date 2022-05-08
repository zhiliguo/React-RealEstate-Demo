import React from "react"
import "./style.less"

//when choose the city back to top page automatically
import { withRouter } from "react-router-dom"

const CityList = (props) => {

    function clickCityHandle(city){
        props.onEvent(city)
        props.history.push("/") // push back to top 
    }

    //click event parameter transfer
    return (
        <div className="city-list-container">
            <h3>Hot City</h3>
            <ul className="clear-fix">
                <li onClick={ () => clickCityHandle('北京') }><span>北京</span></li>
                <li onClick={ () => clickCityHandle('上海') }><span>上海</span></li>
                <li onClick={ () => clickCityHandle('深圳') }><span>深圳</span></li>
                <li onClick={ () => clickCityHandle('广州') }><span>广州</span></li>
                <li onClick={ () => clickCityHandle('沈阳') }><span>沈阳</span></li>
                <li onClick={ () => clickCityHandle('天津') }><span>天津</span></li>
                <li onClick={ () => clickCityHandle('杭州') }><span>杭州</span></li>
                <li onClick={ () => clickCityHandle('西安') }><span>西安</span></li>
                <li onClick={ () => clickCityHandle('青岛') }><span>青岛</span></li>
                <li onClick={ () => clickCityHandle('南京') }><span>南京</span></li>
                <li onClick={ () => clickCityHandle('郑州') }><span>郑州</span></li>
                <li onClick={ () => clickCityHandle('成都') }><span>成都</span></li>
                <li onClick={ () => clickCityHandle('呼和浩特') }><span>呼和浩特</span></li>
            </ul>
        </div>
    )
}

//use router back to top
export default withRouter(CityList)