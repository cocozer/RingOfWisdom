export default async function getMobsData() {
  const creaturesUrl = "https://eldenring.fanapis.com/api/creatures";
  const bossesUrl = "https://eldenring.fanapis.com/api/bosses";

  try {
    const responseCreatures = await fetch(creaturesUrl);
    const creaturesData = await responseCreatures.json();

    const responseBosses = await fetch(bossesUrl);
    const bossesData = await responseBosses.json();

    creaturesData.data.forEach(creature => {
      creature.boss = 0; // les créatures ne sont pas des boss
    });

    bossesData.data.forEach(boss => {
      boss.boss = 1; // les boss sont identifiés
    });

    // Fusion des données des créatures et des boss
    const allMobsData = creaturesData.data.concat(bossesData.data);
    console.log(allMobsData);
    return allMobsData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}