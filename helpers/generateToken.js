const jsonwebtoken = require('jsonwebtoken')

module.exports = (data, secretKey, options) => {
  const payload = { ...data }

  return jsonwebtoken.sign(payload, secretKey, options)
}
