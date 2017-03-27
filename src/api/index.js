import { Router as router } from 'express';
import { version } from '../../package.json';

import achievements from './achievements';
import scopeCheck from '../middleware/scopeCheck';
import users from './users';


export default () => {
  let api = router();

  api.use('/achievements', scopeCheck('read:achievements'), achievements());
  api.use('/users', scopeCheck('read:users read:achievements'), users());
  
  api.get('/', (req, res) => {
    res.json({ version });
  });

  return api;
}