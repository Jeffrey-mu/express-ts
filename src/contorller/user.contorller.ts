import type { Request, Response } from 'express'
import logger from '../utils/logger'
import { getUser } from '../servive/user.service'
import { SuccessResult, ErrorResult } from '../model/resultModel'
export async function getHandler(req: Request, res: Response) {
  try {
    const password = req.query.password
    console.log(password)

    const user = await getUser({ password })
    res.send(new SuccessResult(user))
  } catch (e) {
    res.status(406).send(new ErrorResult(e.message))
    logger.error(e.message)
  }
}
