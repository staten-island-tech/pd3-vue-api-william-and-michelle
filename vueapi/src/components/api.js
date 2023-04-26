const URL = [`https://data.cityofnewyork.us/resource/25th-nujf.json`]

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
