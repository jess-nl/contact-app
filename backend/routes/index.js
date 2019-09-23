let express = require('express');
let router = express.Router();

let cors = require("cors");
let app = express();
app.use(cors());
router.options('*', cors())

/* GET homepage. */

router.get('/', cors(), function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
