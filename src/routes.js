import { Router } from "express"
import { v4 } from "uuid"

import User from "./app/models/User"

const routes = new Router()

routes.get("/", async (req, res) => {
  // const user = await User.create({
  //   id: v4(),
  //   name: "Selma",
  //   email: "selmateste@gmail.com",
  //   password_hash: "123456",
  // })

  return res.json()
})

export default routes
