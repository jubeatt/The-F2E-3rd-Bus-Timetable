import JsSHA from 'jssha'

export function setAuth() {
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

export const getLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        resolve({ lat, lng })
      },
      (error) => {
        reject(error.message)
      }
    )
  })
}

export const calCulateDistance = (lat1, lon1, lat2, lon2, unit) => {
  if (lat1 === lat2 && lon1 === lon2) {
    return 0
  } else {
    var radlat1 = (Math.PI * lat1) / 180
    var radlat2 = (Math.PI * lat2) / 180
    var theta = lon1 - lon2
    var radtheta = (Math.PI * theta) / 180
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
    if (dist > 1) {
      dist = 1
    }
    dist = Math.acos(dist)
    dist = (dist * 180) / Math.PI
    dist = dist * 60 * 1.1515
    if (unit === 'K') {
      dist = dist * 1.609344
    }
    if (unit === 'N') {
      dist = dist * 0.8684
    }
    return dist
  }
}
