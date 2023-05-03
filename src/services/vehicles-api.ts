import axios from 'axios'
import { Vehicle } from '../types/vehicles-types'

function getVehicles() {
  return axios.get('/api/vehicles')
}

function postVehicle(data: Vehicle) {
  return axios.post('/api/vehicle', data)
}

export const VehiclesApi = () => ({
  getVehicles,
  postVehicle,
})