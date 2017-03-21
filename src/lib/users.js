import userData from '../models/users';
import achievements from './achievements';

export default {

  list: () => {
    const users = userData;
    
    users.forEach((user) => {
      const achievement = achievements.get(user.achievementId);
      user.achievement = achievement;
    })
    
    return users;
  },
  get: (id) => {
    const user =  userData[id];

    if (user && user.achievementId) {
      user.achievement = achievements.get(user.achievementId);
    }

    return user;
  }
};