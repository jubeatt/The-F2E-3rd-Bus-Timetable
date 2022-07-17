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
  const query = `$spatialFilter=nearby(${lat}%2C${lng}%2C%20${distance})&$format=JSON`
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
