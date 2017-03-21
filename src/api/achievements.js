import { Router as router } from 'express';
import achievements from '../lib/achievements';

export default () => {
  let achievementsApi = router();

  achievementsApi.get('/', (req, res) => {
    const allAchievements = achievements.list();
    res.json(allAchievements);
  });

  achievementsApi.get('/:id', (req, res) => {
    const achievementId = req.params.id;
    const achievement = achievements.get(achievementId);

    if (!achievement) {
      res.status(404).send( {
        "error": "Achievement not found"
      });
    }

    res.json(achievement);
  });

  return achievementsApi;
}