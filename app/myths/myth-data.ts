export type MythSystem = {
  index: string;
  slug: string;
  region: string;
  title: string;
  subtitle: string;
  symbol: string;
  framing: string;
  books: string[];
};

export const mythSystems: MythSystem[] = [
  {
    index: "01",
    slug: "greek",
    region: "AEGEAN / MEDITERRANEAN",
    title: "希腊神话",
    subtitle: "HELLENIC TRADITIONS",
    symbol: "Ω",
    framing: "诗歌、戏剧与地方祭仪保存着彼此并不完全一致的版本。",
    books: ["赫西俄德《神谱》", "《伊利亚特》与《奥德赛》", "《荷马颂歌》", "阿波罗多洛斯《书库》"],
  },
  {
    index: "02",
    slug: "norse",
    region: "SCANDINAVIA / NORTH ATLANTIC",
    title: "北欧神话",
    subtitle: "NORSE TRADITIONS",
    symbol: "ᛉ",
    framing: "主要书面材料在中世纪冰岛记录，保存了更早的诗歌与口述传统。",
    books: ["《诗体埃达》", "斯诺里《散文埃达》", "《沃尔松格萨迦》", "《海姆斯克林格拉》"],
  },
  {
    index: "03",
    slug: "egyptian",
    region: "NILE VALLEY",
    title: "埃及神话",
    subtitle: "ANCIENT EGYPTIAN TRADITIONS",
    symbol: "☥",
    framing: "拉每一次归来，都重新把玛特从失序中建立起来；沿太阳船的昼夜航程，诸神与杜阿特逐步显现。",
    books: ["《金字塔文》", "《棺材文》", "《阿姆杜阿特书》", "《门之书》"],
  },
  {
    index: "04",
    slug: "mesopotamian",
    region: "TIGRIS / EUPHRATES",
    title: "两河神话",
    subtitle: "MESOPOTAMIAN TRADITIONS",
    symbol: "✹",
    framing: "苏美尔、阿卡德、巴比伦与亚述传统在泥板中彼此转译和重组。",
    books: ["《吉尔伽美什史诗》", "《埃努玛·埃利什》", "《阿特拉哈西斯》", "《伊南娜下冥界》"],
  },
  {
    index: "05",
    slug: "celtic",
    region: "IRELAND / WALES / CELTIC LANDS",
    title: "凯尔特诸传统",
    subtitle: "IRISH / WELSH TRADITIONS",
    symbol: "✣",
    framing: "“凯尔特”不是统一神谱；现存叙事以中世纪爱尔兰与威尔士文本最丰富。",
    books: ["《夺牛长征记》", "《马比诺吉昂》", "《爱尔兰侵略之书》", "《马格图瑞德之战》"],
  },
  {
    index: "06",
    slug: "chinese",
    region: "CHINA / EAST ASIA",
    title: "中国古代神话",
    subtitle: "SINITIC MYTHIC TRADITIONS",
    symbol: "山",
    framing: "材料散见于地理、诗歌、思想与志怪文本，后世又持续与宗教和地方传统汇流。",
    books: ["《山海经》", "《楚辞》", "《淮南子》", "干宝《搜神记》"],
  },
];
