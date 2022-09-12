import { Request, Response } from "express";
import { UserDetailService } from "../../services/user/DetailUserService";

class DetailUserController{
    async handle( request: Request, response: Response ){

        const user_id = request.user_id

        const userDatailService = new UserDetailService();

        const detailUSer = await userDatailService.execute(user_id)

        return response.json(detailUSer)
    }
}

export { DetailUserController }