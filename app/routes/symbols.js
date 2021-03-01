const express = require('express');
const router = express.Router();

//middlewares
const createSymbol = require('../middlewares/symbol/create');
const getSymbolsOfUser = require('../middlewares/symbol/getSymbolsOfUser');

router.post('/:userId',
  createSymbol,
  (req, res) => res.json(req.symbol)
);

router.get('/:userId',
  getSymbolsOfUser,
  (req, res) =>res.json(req.symbols)
);

module.exports = router;
