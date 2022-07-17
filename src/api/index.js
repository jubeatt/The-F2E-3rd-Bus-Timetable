import { setAuth } from '../utils'

// API url
const BIG_DATA_ENDPOINT = 'https://api.bigdatacloud.net/data/reverse-geocode-client'
const PTX_ENDPOINT = 'https://ptx.transportdata.tw/MOTC/v2/Bus'

// methos
export const getAddress = async (lat, lng) => {
  const response = await fetch(
    `${BIG_DATA_ENDPOINT}?latitude=${lat}&longitude=${lng}&localityLanguage=zh`
  )
  const address = await response.json()
  return address
}
export const getNearbyStation = async (city, lat, lng, distance) => {
  const query = `$spatialFilter=nearby(${lat}, ${lng}, ${distance})&$format=JSON`
  const response = await fetch(`${PTX_ENDPOINT}/Station/City/${city}?${query}`, {
    headers: setAuth()
  })
  const stations = response.json()
  return stations
}

export const getRoutes = async (cityName) => {
  const response = await fetch(`${PTX_ENDPOINT}/Route/City/${cityName}?$format=JSON`, {
    headers: setAuth()
  })
  const routes = await response.json()
  return routes
}

// 有停 xx 站牌的公車資訊
export const getStation = async (cityName, stationName) => {
  const query = `$filter=StationName/Zh_tw eq '${stationName}'&$sformat=JSON`
  const response = await fetch(`${PTX_ENDPOINT}/Station/City/${cityName}?${query}`, {
    headers: setAuth()
  })
  const station = await response.json()
  return station
}

// 取得 xx 路線公車的資訊（起始站 & 終點站）
export const getRouteInfo = async (cityName, routeUID) => {
  const query = `$filter=RouteUID eq '${routeUID}'&$format=JSON`
  const response = await fetch(`${PTX_ENDPOINT}/Route/City/${cityName}?${query}`, {
    headers: setAuth()
  })
  const routeInfo = await response.json()
  return routeInfo
}
