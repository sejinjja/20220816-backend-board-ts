import express from 'express';
// import test from './test'
const router = express.Router();

/* GET home page. */
router.get('/', function (req: express.Request, res: express.Response) {
  res.send('test')
});

export default router
