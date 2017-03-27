import achievements from './achievements';
import userData from '../data/users';

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