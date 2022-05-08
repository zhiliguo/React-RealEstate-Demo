import axios from "../utils/request"

/**
 * 路径地址
 */
const base = {
    baseUrl:"http://localhost:5577",
    cityUrl:"/api/aj/getcitycode",
    homehot1:"/api/home/hot1",
    homehot2:"/api/home/hot2",
    search:"/api/search",
    details:"/api/details",
    login:"/api/login",
    comment:"/api/comment",
    comentOrder:"/api/order/comment",
    submitComment:"/api/order/submit/comment"
}


/**
 * Request methods
 */
const api = {
    /**
     * get home page hot products
     */
    getHomtHot1(params){
        return axios.get(base.baseUrl + base.homehot1,{
            params
        })
    },
    getHomtHot2(params){
        return axios.get(base.baseUrl + base.homehot2,{
            params
        })
    },
    /**
     * City list
     */
    getCityLists(){
        return axios.get(base.cityUrl)
    },
    /**
     * search
     */
    search(params){
        return axios.get(base.baseUrl + base.search,{
            params
        })
    },
    /**
     * detail 
     */
    details(params){
        return axios.get(base.baseUrl + base.details,{
            params
        })
    },
    /**
     * login
     */
    login(params){
        return axios.post(base.baseUrl + base.login,params)
    },
    /**
     * Product comments
     */
    comment(params){
        return axios.get(base.baseUrl + base.comment,{
            params
        })
    },
    /**
     * comments
     */
    comentOrder(params){
        return axios.get(base.baseUrl + base.comentOrder,{
            params
        })
    },
    /**
     * summit comments
     */
    submitComment(params){
        return axios.post(base.baseUrl + base.submitComment,params)
    }
}

export default api;