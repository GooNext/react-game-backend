import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const statsSchema = new Schema({
    gameState: {type: String, required: true},
    ellapsedTime: {type: String, required: true},
    cells: {type: String, required: true},
    autoplay: {type: Boolean, required: true},
    fieldWidth: {type: String, required: true},
    fieldHeight: {type: String, required: true},
    minesCount: {type: String, required: true},
},
    {timestamps: true}
)

const Statistic = mongoose.model('Statistic', statsSchema)

module.exports = Statistic