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
    const allCreaturesData = creaturesData.data.concat(bossesData.data);
    return allCreaturesData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCreatureDetails() {
  if (this.$route.query.data) {
    const data = JSON.parse(this.$route.query.data);
    // eslint-disable-next-line vue/no-mutating-props
    this.recipe = data;
  }
}