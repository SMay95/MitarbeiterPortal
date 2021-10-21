import express from 'express';
import { indexPage, viewMitarbeiterEintrag, addEintrag2G } from '../controllers';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/corona2G/:uID', viewMitarbeiterEintrag);
indexRouter.post('/corona2G', addEintrag2G);
export default indexRouter;