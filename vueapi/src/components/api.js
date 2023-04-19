const URL = [
  `https://data.cityofnewyork.us/resource/25th-nujf.json?$query=SELECT%20%60brth_yr%60%2C%20%60gndr%60%2C%20%60ethcty%60%2C%20%60nm%60%2C%20%60cnt%60%2C%20%60rnk%60%0AORDER%20BY%0A%20%20%60brth_yr%60%20DESC%20NULL%20LAST%2C%0A%20%20%60gndr%60%20ASC%20NULL%20LAST%2C%0A%20%20%60ethcty%60%20ASC%20NULL%20LAST%2C%0A%20%20%60rnk%60%20ASC%20NULL%20LAST`
]

async function getData(URL) {
  try {
    const response = await fetch(URL)
    if (response.status < 200 || response.status > 299) {
      throw Error(response.status)
    } else {
      const data = await response.json() //makes the data into json object we can use
      console.log(data)
      document.getElementById('api-response')
    }
  } catch (error) {
    console.log(error)
  }
}
getData(URL)

export { URL }
