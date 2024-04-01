const championsList = [
  {
    name: 'Aatrox',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Aatrox.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    id: 1,
    role: 'Top',
    open: true,
  },
  {
    name: 'Ahri',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Ahri.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    id: 2,
    role: 'Mid',
    open: true,
  },
  {
    name: 'Akali',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Akali.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    id: 3,
    role: 'Mid',
    open: true,
  },
  {
    name: 'Akshan',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Akshan.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_0.jpg',
    id: 4,
    role: 'ADC',
    open: true,
  },
  {
    name: 'Alistar',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Alistar.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
    id: 5,
    role: 'Support',
    open: true,
  },
  {
    name: 'Amumu',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Amumu.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
    id: 6,
    role: 'Jungle',
    open: true,
  },
  {
    name: 'Anivia',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Anivia.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg',
    id: 7,
    role: 'Mid',
    open: true,
  },
  {
    name: 'Annie',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Annie.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg',
    id: 8,
    role: 'Mid',
    open: true,
  },
  {
    name: 'Aphelios',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Aphelios.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg',
    id: 9,
    role: 'ADC',
    open: true,
  },
  {
    name: 'Ashe',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Ashe.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg',
    id: 10,
    role: 'ADC',
    open: true,
  },
  {
    name: 'Aurelion Sol',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/AurelionSol.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg',
    id: 11,
    role: 'Mid',
    open: true,
  },
  {
    name: 'Azir',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Azir.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg',
    id: 12,
    role: 'Mid',
    open: true,
  },
  {
    name: 'Bard',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Bard.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
    id: 13,
    role: 'Support',
    open: true,
  },
  {
    name: "Bel'veth",
    img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_0.jpg',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_0.jpg',
    id: 14,
    role: 'Jungle',
    open: true,
  },
  {
    name: 'Blitzcrank',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Blitzcrank.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg',
    id: 15,
    role: 'Support',
    open: true,
  },
  {
    name: 'Brand',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Brand.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg',
    id: 16,
    role: 'Support',
    open: true,
  },
  {
    name: 'Braum',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Braum.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg',
    id: 17,
    role: 'Support',
    open: true,
  },
  {
    name: 'Caitlyn',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Caitlyn.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg',
    id: 18,
    role: 'ADC',
    open: true,
  },
  {
    name: 'Camille',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Camille.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg',
    id: 19,
    role: 'Top',
    open: true,
  },
  {
    name: 'Cassiopeia',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Cassiopeia.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg',
    id: 20,
    role: 'Mid',
    open: true,
  },
  {
    name: "Cho'Gath",
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Chogath.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg',
    id: 21,
    role: 'Top',
    open: true,
  },
  {
    name: 'Corki',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Corki.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg',
    id: 22,
    role: 'Mid',
    open: true,
  },
  {
    name: 'Darius',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Darius.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg',
    id: 23,
    role: 'Top',
    open: true,
  },
  {
    name: 'Diana',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Diana.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg',
    id: 24,
    role: 'Mid',
    open: true,
  },
  {
    name: 'Dr. Mundo',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/DrMundo.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg',
    id: 25,
    role: 'Top',
    open: true,
  },
  {
    name: 'Draven',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Draven.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg',
    id: 26,
    role: 'ADC',
    open: true,
  },
  {
    name: 'Ekko',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Ekko.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg',
    id: 27,
    role: 'Mid',
    open: true,
  },
  {
    name: 'Elise',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Elise.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg',
    id: 28,
    role: 'Jungle',
    open: true,
  },
  {
    name: 'Evelynn',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Evelynn.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg',
    id: 29,
    role: 'Jungle',
    open: true,
  },
  {
    name: 'Ezreal',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Ezreal.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg',
    id: 30,
    role: 'ADC',
    open: true,
  },
  {
    name: 'Fiddlesticks',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Fiddlesticks.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_0.jpg',
    id: 31,
    role: 'Support',
    open: true,
  },
  {
    name: 'Fiora',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Fiora.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg',
    id: 32,
    role: 'Top',
    open: true,
  },
  {
    name: 'Fizz',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Fizz.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg',
    id: 33,
    role: 'Mid',
    open: true,
  },
  {
    name: 'Galio',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Galio.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Galio_0.jpg',
    id: 34,
    role: 'Mid',
    open: true,
  },
  {
    name: 'Gangplank',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Gangplank.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg',
    id: 35,
    role: 'Top',
    open: true,
  },
  {
    name: 'Garen',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Garen.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg',
    id: 36,
    role: 'Top',
    open: true,
  },
  {
    name: 'Gnar',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Gnar.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg',
    id: 37,
    role: 'Top',
    open: true,
  },
  {
    name: 'Gragas',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Gragas.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg',
    id: 38,
    role: 'Jungle',
    open: true,
  },
  {
    name: 'Graves',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Graves.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg',
    id: 39,
    role: 'Jungle',
    open: true,
  },
  {
    name: 'Gwen',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Gwen.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gwen_0.jpg',
    id: 40,
    role: 'Top',
    open: true,
  },
  {
    name: 'Hecarim',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Hecarim.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hecarim_0.jpg',
    id: 41,
    role: 'Jungle',
    open: true,
  },
  {
    name: 'Heimerdinger',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Heimerdinger.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg',
    id: 42,
    role: 'Mid',
    open: true,
  },
  {
    name: 'Illaoi',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Illaoi.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Illaoi_0.jpg',
    id: 43,
    role: 'Top',
    open: true,
  },
  {
    name: 'Irelia',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Irelia.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg',
    id: 44,
    role: 'Top',
    open: true,
  },
  {
    name: 'Ivern',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Ivern.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg',
    id: 45,
    role: 'Jungle',
    open: true,
  },
  {
    name: 'Janna',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Janna.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg',
    id: 46,
    role: 'Support',
    open: true,
  },
  {
    name: 'Jarvan IV',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/JarvanIV.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg',
    id: 47,
    role: 'Jungle',
    open: true,
  },
  {
    name: 'Jax',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Jax.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg',
    id: 48,
    role: 'Top',
    open: true,
  },
  {
    name: 'Jayce',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Jayce.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jayce_0.jpg',
    id: 49,
    role: 'Top',
    open: true,
  },
  {
    name: 'Jhin',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Jhin.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg',
    id: 50,
    role: 'ADC',
    open: true,
  },
  {
    name: 'Jinx',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Jinx.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg',
    id: 51,
    role: 'ADC',
    open: true,
  },
  {
    name: "Kai'Sa",
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Kaisa.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg',
    id: 52,
    role: 'ADC',
    open: true,
  },
  {
    name: 'Kalista',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Kalista.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kalista_0.jpg',
    id: 53,
    role: 'ADC',
    open: true,
  },
  {
    name: 'Karma',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Karma.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_0.jpg',
    id: 54,
    role: 'Support',
    open: true,
  },
  {
    name: 'Karthus',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Karthus.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_0.jpg',
    id: 55,
    role: 'Mid',
    open: true,
  },
  {
    name: 'Kassadin',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Kassadin.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg',
    id: 56,
    role: 'Mid',
    open: true,
  },
  {
    name: 'Katarina',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Katarina.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg',
    id: 57,
    role: 'Mid',
    open: true,
  },
  {
    name: 'Kayle',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Kayle.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_0.jpg',
    id: 58,
    role: 'Top',
    open: true,
  },
  {
    name: 'Kayn',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Kayn.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg',
    id: 59,
    role: 'Jungle',
    open: true,
  },
  {
    name: 'Kennen',
    img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Kennen.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg',
    id: 60,
    role: 'Top',
    open: true,
  },
];

export default championsList;
