import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/notes'

const getAll = () => {
  return axios.get(baseUrl)
}

const getSingle = (id) => {
    return axios.get(`${baseUrl}/${id}`)
  }

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.patch(`${baseUrl}/${id}`, newObject)
}

const deleteSingle = id => {
    return axios.delete(`${baseUrl}/${id}`)
}


export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  deleteSingle: deleteSingle,
  getSingle: getSingle

}