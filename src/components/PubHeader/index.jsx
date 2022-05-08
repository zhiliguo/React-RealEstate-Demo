import React from "react"
import "./style.less"
import { withRouter } from "react-router-dom"

const PubHeader = (props) =>{

    function backHandle(){
        /**
         * Back to previous page two methods
         * 
         * use router to help back to previous page  
         * history.pushState()
         * props.history.go(-1)
        */
        //use H5
        window.history.back();
    }

    return(
        <div id="common-header">
            <span className="back-icon" onClick={ backHandle }>
                <i className="icon-chevron-left"></i>
            </span>
            <h1>{ props.title }</h1>
        </div>
    )
}

export default withRouter(PubHeader)