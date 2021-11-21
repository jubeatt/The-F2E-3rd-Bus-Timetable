import JsSHA from 'jssha'

export default function () {
  var AppID = '52f117fdeda74faebcdbca17612a6a51'
  var AppKey = 'dX_2vorXE_ZHBIM6mSl7h4bxN9c'

  var GMTString = new Date().toGMTString()
  var ShaObj = new JsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)
  var HMAC = ShaObj.getHMAC('B64')
  var Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`
  return { Authorization: Authorization, 'X-Date': GMTString, 'Accept-Encoding': 'gzip' }
}
