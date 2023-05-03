export type Coordinates = {
  latitude: number,
  longitude: number,
}
export type Vehicle = {
  identifier: string,
  license_plate: string,
  tracker_serial_number: string,
  coordinates: Coordinates
}

export type Vehicles = Array<Vehicle>

export type ResponseApi = {
  "data": {vehicles: Vehicles},
  "status": number,
}