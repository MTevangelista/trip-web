import express from 'express'
import PlacesController from '../controllers/PlacesController'

const route = express.Router()
const placesController = new PlacesController()

route.get('/', placesController.getAllByFilters)
route.post('/', placesController.create)

export default route