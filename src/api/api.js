import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://boiling-refuge-66454.herokuapp.com/'
})

export const getImages = () => {
  return instance.get(`images`)
  .then(response => {
      return response.data
  })
}
