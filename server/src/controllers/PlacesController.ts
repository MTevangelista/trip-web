import { Request, Response } from 'express'

const repository = require('../repositories/placesRepository')

export default class PlacesController {
    async index(req: Request, res: Response) {
        const filters = req.query

        if (!filters.week_day || !filters.place || !filters.time) {
            res.status(400).json({
                error: 'Missing filters to search places'
            })
        }

        try {
            let places = await repository.getAll(filters)
            return res.json(places)
        } catch (e) {
            console.log(e);
            return res.status(400).json({
                error: 'Unexpected error while listing all places'
            })
        }
    }

    async create(req: Request, res: Response) {
        const { name, avatar, place, address, whatsapp, bio, schedule } = req.body

        try {
            await repository.create(
                name,
                avatar,
                place,
                address,
                whatsapp,
                bio,
                schedule
            )
            return res.status(201).send()
        } catch (e) {
            return res.status(400).json({
                error: 'Unexpected error while creating a new place'
            })
        }
    }
}