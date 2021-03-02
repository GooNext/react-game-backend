const router = require('express').Router();
const StatisticModel = require('../models/statistic.model');

router.route('/').post(async (req:any, res:any, next:any) => {
        const gameState = req.body.gameState
        const ellapsedTime = req.body.ellapsedTime
        const cells = req.body.cells
        const autoplay = req.body.autoplay
        const fieldWidth = req.body.fieldWidth
        const fieldHeight = req.body.fieldHeight
        const minesCount = req.body.minesCount
    
        const newStats = new StatisticModel({
            gameState,
            ellapsedTime,
            cells,
            autoplay,
            fieldWidth,
            fieldHeight,
            minesCount,
        });
    
        newStats.save()
            .then(() => res.json('Stat added'))
            .catch((err: String) => res.status(400).json(err))
});

router.route('/').get(async (req:any, res:any, next:any) => {
    StatisticModel.find()
        .then((stat: any) => res.json(stat))
        .catch((err: String) => res.status(400).json(err))
});

module.exports = router;