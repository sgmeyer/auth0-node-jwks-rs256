import achievementData from '../models/achievements';

export default {
  list: () => {
    return achievementData;
  },
  get: (id) => {
    var achievement =  achievementData[id];

    return achievement;
  }
};