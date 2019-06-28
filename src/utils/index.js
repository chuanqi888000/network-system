/**
 * 函数防抖 (只执行最后一次点击)
 * @param fn
 * @param delay
 * @returns {Function}
 * @constructor
 */
export const Debounce = (fn, t) => {
    let delay = t || 500;
    let timer;
    return function () {
        let args = arguments;
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, args);
        }, delay);
    }
};
/**
 * 函数节流
 * @param fn
 * @param interval
 * @returns {Function}
 * @constructor
 */
export const Throttle = (fn, t) => {
    let last;
    let timer;
    let interval = t || 500;
    return function () {
        let args = arguments;
        let now = +new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                last = now;
                fn.apply(this, args);
            }, interval);
        } else {
            last = now;
            fn.apply(this, args);
        }
    }
};
// 日期转换
// 只有年月日
export function formatDateTime(secs) {
    var t = new Date(secs)
    var year = t.getFullYear();
    var month = t.getMonth() + 1
    if (month < 10) {
      month = '0' + month
    }
    var date = t.getDate()
    if (date < 10) {
      date = '0' + date
    }
    var hour = t.getHours()
    if (hour < 10) {
      hour = '0' + hour
    }
    var minute = t.getMinutes()
    if (minute < 10) {
      minute = '0' + minute
    }
    var second = t.getSeconds()
    if (second < 10) {
      second = '0' + second
    }
    return year + '-' + month + '-' + date +'\xa0\xa0\xa0' + hour + ':' + minute + ':' + second
  }
  // 解析url参数
export function param2Obj(url) {
    const search = url.split('?')[1]
    if (!search) {
      return {}
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
  }
// 动态加载javascript
export function remoteLoad(url) {
    return createScript(url)
  
    function createScript(url) {
      var scriptElement = document.createElement('script')
      document.body.appendChild(scriptElement)
      var promise = new Promise((resolve, reject) => {
        scriptElement.addEventListener('load', e => {
          removeScript(scriptElement)
          resolve(e)
        }, false)
  
        scriptElement.addEventListener('error', e => {
          removeScript(scriptElement)
          reject(e)
        }, false)
      })
      scriptElement.src = url
      return promise
    }
  
    /**
     * 移除script标签
     * @param scriptElement script dom
     */
    function removeScript(scriptElement) {
      document.body.removeChild(scriptElement)
    }
  }

  // 手机号验证
export function isvalidPhone(str) {
  const reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
  return reg.test(str)
}

// 地理地位信息
export function getLocation(){
  return new Promise((resolve,reject) => {
    AMap.plugin('AMap.Geolocation', function() {
      var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：5s
          buttonPosition:'RB',    //定位按钮的停靠位置
          buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点

      });
      geolocation.getCurrentPosition(function(status,result){
          if(status=='complete'){
            resolve(result)
          }else{
            reject(result)
          }
      });
    });    
  })
}