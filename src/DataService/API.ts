import axios from 'axios'

const { REACT_APP_API_BASEURL } = process.env

export const getApi = (url: string) => {
  axios.get(`${REACT_APP_API_BASEURL}/${url}`)
  .then(response => response.data)
  .catch(error => error)
}

export const postApi = (url: string,  data: []) => {
  axios.post(url, data)
  .then((response) => {
    return response;
  })
  .catch((error) => {
    return error;
  });
}
