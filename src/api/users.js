import { Router as router } from 'express';
import users from '../lib/users';

export default () => {
  var userApi = router();
  userApi.get('/', (req, res) => {
    const allUsers = users.list();
    res.json(allUsers);
  });

  userApi.get('/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.get(userId);

    if (!user) {
      res.status(404).send( {
        "error": "User not found"
      });
    }

    res.json(user);
  });

  return userApi;
}