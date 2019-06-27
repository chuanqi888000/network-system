

const Mock = require('mockjs');


const Random = Mock.Random;
const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
 
    return {
        articles: articles
    }
}

const imgList = function(){
    let articles = [];
    for (let i = 0; i < 3; i++) {
        
        let thumbnail_pic_s = Random.dataImage('300x120', 'mock的图片'); // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
 
        articles.push(thumbnail_pic_s)
    }
 
    return articles
}

const iconList = Mock.mock({
    'data|1-10': [{
        'id|+1': 1,
        'elementName':Random.cname(),
        'url':''
    }]
})
// const iconList = function() {
//     let articles = [];
//     for (let i = 0; i < Random.range(1,10).length; i++) {
//         let thumbnail_pic_s = Random.cname()
//         articles.push(thumbnail_pic_s)
//     }
 
//     return articles
// } 

const indexList = function() {
    let num = Random.string('number', 1, 3);
    let articles = [];
    for (let i = 0; i < num.length; i++) {
        let newArticleObject = {
            adress: Random.cparagraph(1,3), //  Random.cparagraph( min, max )断落
            date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
            phone:'020-' + Random.string('number', 8),
            title:Random.csentence(4,12),
        }
        articles.push(newArticleObject)
    }
 
    return articles
}

const classList = function(){
    let resData = {
        resultList: []
    };
    for (let i = 0; i < 10; i++) {
        
        let name ={
            name:Random.cname(), 
            city:Random.province(),
            adress:Random.county(true)
        } ;
        
        resData.resultList.push(name)
    }
 
    return {
        resData:resData
    }
}

const courseList = function(){
    let resData = {
        resultList: []
    };
    for (let i = 0; i < 10; i++) {
        
        let name ={
            name:Random.cname(),   
        } ;
        
        resData.resultList.push(name)
    }
 
    return {
        resData:resData
    }
}

Mock.mock('/news/index', 'post', produceNewsData);

Mock.mock('/index/imgList', 'post', imgList);

Mock.mock('/index/iconList', 'post', iconList);

Mock.mock('/index/indexList', 'post', indexList);

Mock.mock('/index/courseList', 'post', courseList);

Mock.mock('/index/classList', 'post', classList);