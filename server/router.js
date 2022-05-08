const express = require("express");
const router = express.Router();
const homehot = require("./data/home/homehot")
const url = require("url")
const searchData = require("./data/search")
const Mock = require("mockjs")
const detailsData = require("./data/details");
const { resolveNaptr } = require("dns");
const commentData = require("./data/comment")
const orderCommentData = require("./data/order")

const Random = Mock.Random;

/**
 * Home page hot products
 */
router.get("/home/hot1", (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName
    res.send({
        status: 200,
        result: homehot.hot1,
        city: cityName
    })
})

router.get("/home/hot2", (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName
    console.log(cityName)
    res.send({
        status: 200,
        result: homehot.hot2,
        city: cityName
    })
})

/**
 * Searching page
 */
router.get("/search", (req, res) => {
    const search = url.parse(req.url, true).query.search;
    let data = Mock.mock({
        hasMore: true,
        'data|5': [{
            "id|+1":Random.integer(),
            title: Random.csentence(5, 8),
            houseType: "17/19层| 4室1厅 - 273.97 ㎡",
            price: "<h3>130000</h3>",
            rentType: Random.cword(2),
            img: Random.image('800x600', Random.color(), '#FFF', 'png', Random.cword(5))
        }]
    })
    res.send({
        status: 200,
        result: data
    })
})

/**
 * Detail page
 */
router.get("/details",(req,res) =>{
    const id = url.parse(req.url,true).query.id;
    console.log(id);
    res.send(detailsData)
})

router.post("/login",(req,res) =>{
    const { username,password } = req.body;
    if(username && password){
        res.send({
            status:200,
            token:"enjy23rsdfe3fsveq.23r23sfdvfv.asdfqf4ag34ghdfjtkjhq",
            nick:username
        })
    }else{
        res.send({
            status:400,
            msg:'User Name/Password incorrect'
        })
    }
})

router.get("/comment",(req,res) =>{
    const id = url.parse(req.url).query.id;
    console.log(id);
    res.send({
        status:200,
        result:commentData
    })
})

/**
 * lbs service
 */
// detail of cities
router.get('/lbs/location', function (req, res, next) {
    let lat = req.query.latitude
    let lng = req.query.longitude

// get map api info of the cities
    request.get({
        uri: 'https://apis.map.qq.com/ws/geocoder/v1/',
        json: true,
        qs: {
            location: `${lat},${lng}`,
            key: '24EBZ-QOT3V-RN3P2-ULHSA-D6KIH-FEFB4'
        }
    }, (err, response, data) => {
        if (response.statusCode === 200) {
            res.send(data)
        } else {
            res.send({
                msg:"Request Failure"
            })
        }
    })
})


/**
 * Order Comments
 */
router.get("/order/comment",(req,res) =>{
    const username = url.parse(req.url,true).query.username;
    console.log(username);
    res.send({
        status:200,
        result:orderCommentData
    })
})


/**
 * Comments
 */
router.post("/order/submit/comment",(req,res) =>{
    const { username,id,content } = req.body;
    console.log(username,id,content);
    res.send({
        msg:"Comments Successful",
        status:200
    })
})

module.exports = router;