import axios from 'axios'

const baseUrl = 'http://localhost:56123'

function getData (_this, url, settingState) {
  axios
  .get(`${baseUrl}${url}`)
  .then(response => {
    _this.setState({
      [settingState]: response.data
    })
  })
}

function postData (_this, url, settingState) {
  axios
  .get(`${baseUrl}${url}`)
  .then(response => {
    _this.setState({
      [settingState]: response.data
    })
  })
}

function putData (_this, url, dataItems, settingState) {
  axios
  .put(`${baseUrl}${url}`,
    {dataItems})
  .then(response => {
    _this.setState({
      [settingState]: response.data
    })
  }).catch(function (error) {
    console.log(error)
  })
}

export {getData, postData, putData}
