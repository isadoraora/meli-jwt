const express = require("express")
const router = express.Router()
const controller = require("../controllers/alunasController")
const authMiddleware = require('../middlewares/auth')

router.get("/", controller.get)
//somente a rota / está exposta, as outras para termos retorno precisamos de um token válido
router.post("/", controller.post)
router.use(authMiddleware);
router.get("/nasceuSp", controller.getSp)
router.get("/:id", controller.getById)
router.get("/:id/books", controller.getBooks)
router.get("/:id/getAge", controller.getAge)
router.post("/:id/books", controller.postBooks)

module.exports = router
