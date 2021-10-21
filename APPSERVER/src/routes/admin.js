import express from 'express';
const indexRouter = express.Router();
import {viewAbfrage2G} from '../controllers';

indexRouter.get('/view2G',viewAbfrage2G);

export default indexRouter;