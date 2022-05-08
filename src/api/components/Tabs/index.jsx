import React,{ useState } from "react"
import "./style.less"

/**
 * tabs视图结构
 * tabs viewing construction
 * 
 * 使用结构：
 * Using construction
 * <Tabs>
 *     <Tab lable="detial">
 *         <div>
 *             <h3>detail infor</h3>
 *         </div>
 *     </Tab>
 *     <Tab label="Comments">
 *         <div>Comments info</div>
 *     </Tab>
 * </Tabs
 * 
 * 
 * 渲染结构：
 * RenderConstruction
 * <ul>
 *    <li>detail</li>
 *    <li>Comments</li>
 * </ul>
 * <div>Detail info</div>
 * <div>Comments info</div>
 * 
 */

 

const Tabs = (props) =>{

    const [ currentIndex,setCurrentIndex ] = useState(0)

    function tabClickHandle(index){
       setCurrentIndex(index)
    }

    function titleClass(index){
        return index === currentIndex ? 'Tab_title active' : 'Tab_title'
    }

    return(
        <div>
            <ul className="Tab_title_wrap">
                {
                    React.Children.map(props.children,(element,index) =>{
                        return <li onClick={ () =>tabClickHandle(index) } className={ titleClass(index) } key={index}>{ element.props.label }</li>
                    })
                }
            </ul>
            <div>
                {
                    React.Children.map(props.children,(element,index) =>{
                        return (
                            <div>
                                { currentIndex === index ? element.props.children : '' }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tabs