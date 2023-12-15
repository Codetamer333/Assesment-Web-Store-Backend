const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const orderSchema = new mongoose.Schema(
 
)



module.exports = mongoose.model('Order', orderSchema)