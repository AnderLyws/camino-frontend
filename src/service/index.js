import axios from 'axios'

const REACT_APP_API = `http://localhost:8888/`;

const API = axios.create({
    baseURL: REACT_APP_API,
    headers: {
        'Content-Type': 'application/json'
    },
})

const getDevices = () =>
    API.get(`devices`)
        .then(res => {
            if (res.status !== 200) throw res
            return res.data
        })
        .catch(error => {
            console.error(error.response)
            return error.response.data
        })

const updateDeviceStatus = (name, status) =>
    API.patch(`devices/${name}?active=${status}`)
        .then(res => {
            return res;
        })
        .catch(error => {
            console.error(error.response)
            return error.response.data;
        })

export { getDevices, updateDeviceStatus }