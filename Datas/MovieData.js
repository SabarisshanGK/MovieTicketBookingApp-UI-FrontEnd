const viduthalai = require('../assets/viduthalai.jpg');

const Movies = [
  {
    key: 1,
    name: 'Viduthalai : Part-1',
    pic: viduthalai,
    backgroundPic: require('../assets/v2.jpg'),
    latestmovie: 'yes',
    favouritemovies: 'no',
    genre: [{ category: 'Action' }, { category: 'Drama' }],
    desc: 'Viduthalai , marketed as Viduthalai Part 1, is a 2023 Tamil-language period police procedural crime thriller film written and directed by Vetrimaaran. Produced by Elred Kumar under the banners of RS Infotainment. It is adapted from short story Thunaivan written by Jeyamohan. The film stars Soori and Vijay Sethupathi. It was presented by RS Infotainment. Viduthalai: Part 1 was released worldwide theatrically on 31st March 2023 where it received critical acclaim from critics.',
    languages: [
      { name: 'English' },
      { name: 'Tamil' },
      { name: 'Telugu' },
      { name: 'Kannada' },
      { name: 'Malayalam' },
    ],
    cast: [
      { name: 'Soori', castPic: require('../assets/soori.jpg') },
      { name: 'Prakash Raj', castPic: require('../assets/PrakashRaj.jpg') },
      {
        name: 'Vijay Sethupathi',
        castPic: require('../assets/VijaySethupathi.jpg'),
      },
      { name: 'Gautham Vasudev Menon', castPic: require('../assets/GVM.jpg') },
      { name: 'Kishore', castPic: require('../assets/Kishore.jpg') },
      { name: 'Chetan', castPic: require('../assets/Chetan.jpg') },
      { name: 'Bhavani Sre', castPic: require('../assets/Bavani.jpg') },
      { name: 'Rajiv Menon', castPic: require('../assets/RajivMenon.jpg') },
    ],
  },
  {
    key: 2,
    name: 'Pathuthala',
    pic: require('../assets/pathuthala.jpg'),
    backgroundPic: require('../assets/p1.jpg'),
    latestmovie: 'yes',
    favouritemovies: 'no',
    genre: [
      { category: 'Action' },
      { category: 'Romance' },
      { category: 'Adventure' },
    ],
    desc: 'The movie was directed by Obeli N. Krishna. The film has obtain a “UA” certificate via the Central Board of Film Certification, Here we provided the Pathu Thala film OTT Platform, digital rights for streaming online and Pathu Thala film OTT release date, Pathu Thala and Satellite rights to a Television Channel. Pathu Thala Film is a Tamil movie planned to release in Null Language in India, and the movie was bankrolled by K.E. Gnanavelraja.',
    languages: [
      { name: 'English' },
      { name: 'Tamil' },
      { name: 'Telugu' },
      { name: 'Kannada' },
      { name: 'Malayalam' },
    ],
    cast: [
      { name: 'Simbu', castPic: require('../assets/simbu.jpg') },
      {
        name: 'Priya Bhavani Shankar',
        castPic: require('../assets/Priya.jpg'),
      },
      {
        name: 'Arya',
        castPic: require('../assets/Arya.jpg'),
      },
      {
        name: 'Gautham Karthik',
        castPic: require('../assets/GauthamKarthick.jpg'),
      },
      { name: 'Kalaiyarasan', castPic: require('../assets/kalai.jpg') },

      { name: 'Redin Kingsley', castPic: require('../assets/kingsley.jpg') },
      { name: 'Gautham Vasudev Menon', castPic: require('../assets/GVM.jpg') },
    ],
  },
  {
    key: 3,
    name: 'Thunivu',
    pic: require('../assets/thunivu.jpg'),
    backgroundPic: require('../assets/t1.jpg'),
    latestmovie: 'no',
    favouritemovies: 'yes',
    genre: [
      { category: 'Action' },
      { category: 'Comedy' },
      { category: 'Adventure' },
      { category: 'Drama' },
    ],
    desc: 'Thunivu is an out-and-out Ajith Kumar show — he enters with a bang, shakes a leg often, sends goons flying, and moonwalks through this cakewalk of a film that doesn’t demand too much from him. And, he actually moonwalks in a scene. Ajith plays a private mercenary who is only called as Dark Devil. When Radha (Veera) and his gang take control of a private bank in Chennai, Dark Devil, along with Kanmani (Manju Warrier) and their gang, double-cross them and strike a deal. Outside the bank, the Police Commissioner (Samuthirakani) takes over the case. A bank heist story with multiple surprises, letdowns, lots of bullet-spewing action, heroic triumphs and redemptions, begins. This, of course, does mean that, like in most commercial star vehicles, the hero gets a plot armour right at the beginning and it’s always important to explain yourself to a man you are about to kill. Thankfully, it’s easy to look beyond all that for Vinoth’s screenplay is racy and taut, or at least for the most part. He withholds information and peppers enough surprises to keep you hooked.',
    languages: [
      { name: 'English' },
      { name: 'Tamil' },
      { name: 'Telugu' },
      { name: 'Kannada' },
      { name: 'Malayalam' },
    ],
    cast: [
      { name: 'Ajith Kumar', castPic: require('../assets/Ajith.jpg') },
      {
        name: 'Manju Warrior',
        castPic: require('../assets/Manju.jpg'),
      },
      {
        name: 'G.M.Sundar',
        castPic: require('../assets/GMSundar.jpg'),
      },
      {
        name: 'John Kokken',
        castPic: require('../assets/Kokken.jpg'),
      },
      { name: 'Pavani Reddy', castPic: require('../assets/Pavani.jpg') },

      { name: 'Veera', castPic: require('../assets/Veera.jpg') },
      {
        name: 'Mahanadi Shankar',
        castPic: require('../assets/MahanadiShankar.jpg'),
      },
    ],
  },
  {
    key: 4,
    name: 'Ponniyin Selvan Part-1',
    pic: require('../assets/ps1.jpg'),
    backgroundPic: require('../assets/sp1.jpg'),
    latestmovie: 'no',
    favouritemovies: 'yes',
    genre: [
      { category: 'Action' },
      { category: 'Romance' },
      { category: 'Adventure' },
      { category: 'Comedy' },
      { category: 'Drama' },
    ],
    desc: "This story can unravel through many avenues, but writer Kalki — and filmmaker Mani Ratnam now — choose to narrate it through the eyes of Vanthiyathevan (Karthi). His only connection to the story is being Aditha Karikalan's friend, but he is the primary gaze through which the film unfolds. When Vanthiyathevan learns something new, he looks wide-eyed. Just like us. Travelling all over delivering important messages, he sets off in all earnestness, but also has fun along the way. Vanthiyathevan is us, the audience, peering curiously into a film that packs in valour, greed, honesty and treachery in equal measure.",
    languages: [
      { name: 'English' },
      { name: 'Tamil' },
      { name: 'Telugu' },
      { name: 'Kannada' },
      { name: 'Malayalam' },
    ],
    cast: [
      { name: 'Vikram', castPic: require('../assets/Vikram.jpg') },
      {
        name: 'Karthi',
        castPic: require('../assets/Karthi.jpg'),
      },
      {
        name: 'Jayam Ravi',
        castPic: require('../assets/JayamRavi.jpg'),
      },
      {
        name: 'Aiswarya Roy',
        castPic: require('../assets/aiswaryaroy.jpg'),
      },
      { name: 'Aiswarya Lakshmi', castPic: require('../assets/lakshmi.jpg') },

      { name: 'Trisha Krishnan', castPic: require('../assets/trisa.jpg') },
      { name: 'Sara Arjun', castPic: require('../assets/Sara.jpg') },
      { name: 'Sobhita Dhulipala', castPic: require('../assets/Sobhita.jpg') },
    ],
  },
];

export default Movies;
