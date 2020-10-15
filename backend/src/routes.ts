import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

// MVC
// Model -> Representa uma tabela na bd, representa uma entidade na aplicação, dados
// View -> Como visualizamos as coisas no frontend
// Controllers -> onde fica a logica das nossas rotas
// padrão do controller -> index, show, create, update e delete

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'),OrphanagesController.create);

export default routes;