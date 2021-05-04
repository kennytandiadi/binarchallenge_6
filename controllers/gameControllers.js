
const { user_game: user_gameModel } = require('../models/');

/**
 * List of Brand
 * @http_method GET
 * @param {*} req {params: page, limit }
 * @param {*} res 
 * @param {*} next 
 * @return Json
 */
const index = async (req, res, next) => {
  const page = req.query.page || 1
  const limit = req.query.limit || 10
  const offset = page > 1 ? Math.ceil(limit / (page - 1)): 0;

  const data = await user_gameModel.findAll({ limit, offset });

  return res.json({
    status: 200,
    message: 'Ok',
    data
  })
}


/**
 * Get User_Game by ID
 * @http_method GET
 * @param {*} req [Params =  page, limit ]
 * @param {*} res 
 * @param {*} next 
 * @return Json
 */
const retrieve = async (req, res, next) => {
  const { id } = req.params;

  const data = await user_gameModel.findOne({ where: { id } });

  return res.json({
    status: 200,
    message: 'Ok',
    data
  })
}

/**
 * Insert User_Game
 * @http_method POST
 * @param {*} req { body: id, user_name, user_password }
 * @param {*} res 
 * @param {*} next 
 * @return Json
 */
const store = (req, res, next) => {
  const { id, user_name, user_password } = req.body;
  const requestData = { id, id, user_name, user_password }

  user_gameModel
    .create(requestData)
    .then((data) => {
      return res.json({
        status: 201,
        message: 'Ok',
        data
      })
    })
    .catch((e) => {
      return next(e)
    })
    
}

/**
 * Update User_Game
 * @http_method PUT
 * @param {*} req { body: id, user_name, user_password }
 * @param {*} res 
 * @param {*} next 
 * @return Json
 */
const update = (req, res, next) => {
  const { id } = req.params;
  const { user_name, user_password } = req.body;
  const requestData = { user_name, user_password };

  user_gameModel
    .update(requestData, { where: { id } })
    .then((data) => {
      return res.json({
        status: 201,
        message: 'Ok',
        data
      })
    })
    .catch((e) => {
      return next(e)
    })
}

/**
 * Remove User_Game
 * @http_method PUT
 * @param {*} req { params: id }
 * @param {*} res 
 * @param {*} next 
 * @return Json
 */
const remove = (req, res, next) => {
  const { id } = req.params
  user_gameModel
    .destroy({ where:  { id } })
    .then(() => {
      return res.json({
        status: 200,
        message: 'Ok',
        data: null
      })
    })
}


module.exports = {
  index,
  retrieve,
  store,
  update,
  remove
}
