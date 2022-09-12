import { Request, Response } from "express";
import { NewScheduleService } from "../../services/schedule/NewScheduleService";

class NewScheduleController{
    async handle( request: Request, reponse: Response ){
        const { haircut_id, customer } = request.body
        const user_id = request.user_id

        const newSchedule = new NewScheduleService()

        const schedule = await newSchedule.execute({
            user_id, 
            haircut_id, 
            customer
        })

        return reponse.json(schedule)
    }
}

export { NewScheduleController }