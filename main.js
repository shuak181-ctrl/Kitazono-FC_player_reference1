// ===============================
// 選手データ（ここに30人分のデータを追加していきます）
// ===============================
const players = [
  {
    id: 1,
    number: 10,
    name: "櫻井 啓汰",
    kana: "SAKURAI Keita",
    role: "player",
    position: "DF",
    grade: "3年",
    image: "images/sakurai.jpg", // 仮
    images: [
      "images/sakurai.jpg",
      "images/sakurai3.JPG",      // 3枚目：シュート瞬間の写真
      "images/sakurai4.JPG",      // 4枚目：シュート瞬間の写真
      "images/sakurai1.JPG",     // 1枚目：プロフィール写真
      "images/sakurai2.JPG"     // 2枚目：プレイ中の写真
    ],
    height: "180 cm",
    weight: "60 kg",
    history: "桜川SC - 九曜FC",
    comment: "攻守ともに活躍しチームを支えて、試合が続いている限り全力を尽くします！"
  },
  {
    id: 2,
    number: "55",
    name: "単 洪峻",
    kana: "SEN Koson",
    role: "player (retired)",
    position: "MF",
    grade: "3年",
    image: "images/sen1.JPG", // 仮
    images: [
      "images/sen1.JPG",     // 1枚目：プロフィール写真
      "images/sen.JPG",     // 2枚目：プレイ中の写真
      "images/sen2.JPG",      // 3枚目：シュート瞬間の写真
      "images/sen3.JPG",
      "images/sen4.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "170 cm",
    weight: "60 kg",
    history: "上板橋第三中サッカー部",
    comment: "準備中"
  },
  {
    id: 3,
    number: "54",
    name: "東野 詠樹",
    kana: "TONO Eiju",
    role: "player (retired)",
    position: "DF",
    grade: "3年",
    image: "images/tono.JPG", // 仮
    images: [
      "images/tono.JPG",
      "images/tono1.JPG",     // 1枚目：プロフィール写真
      "images/tono2.JPG",     // 2枚目：プレイ中の写真
      "images/tono4.JPG",      // 3枚目：シュート瞬間の写真
      "images/tono3.JPG"
    ],
    height: "172 cm",
    weight: "62 kg",
    history: "FC神谷 - 赤羽岩淵中サッカー部",
    comment: "準備中"
  },
  {
    id: 4,
    number: "50",
    name: "松澤 朝陽",
    kana: "MATSUZAWA Asahi",
    role: "player (retired)",
    position: "FW",
    grade: "3年",
    image: "images/matsuzawa4.JPG", // 仮
    images: [
      "images/matsuzawa4.JPG",
      "images/matsuzawa10.JPG",     // 1枚目：プロフィール写真
      "images/matsuzawa2.JPG",     // 2枚目：プレイ中の写真
      "images/matsuzawa.JPG",
      "images/matsuzawa5.JPG"      // 3枚目：シュート瞬間の写真
    ],
    height: "172 cm",
    weight: "58 kg",
    history: "アマネセルCF - 東綾瀬中サッカー部",
    comment: "準備中"
  },
  {
    id: 5,
    number: "53",
    name: "佐伯 温久",
    kana: "SAEKI Haruhisa",
    role: "former captain (retired)",
    position: "GK",
    grade: "3年",
    image: "images/saeki.JPG", // 仮
    images: [
      "images/saeki.JPG",
      "images/saeki1.JPG",     // 1枚目：プロフィール写真
      "images/saeki2.JPG",     // 2枚目：プレイ中の写真
      "images/saeki3.JPG",      // 3枚目：シュート瞬間の写真
      "images/saeki4.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "163 cm",
    weight: "47 kg",
    history: "池袋FC - 西池袋中サッカー部",
    comment: "準備中"
  },
  {
    id: 6,
    number: "52",
    name: "渡邉 晃成",
    kana: "WATANABE Kosei",
    role: "player (retired)",
    position: "DF",
    grade: "3年",
    image: "images/kosei4.JPG", // 仮
    images: [
      "images/kosei4.JPG",
      "images/kosei.JPG",     // 1枚目：プロフィール写真
      "images/kosei2.JPG",     // 2枚目：プレイ中の写真
      "images/kosei3.JPG",      // 3枚目：シュート瞬間の写真
      "images/kosei1.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "174 cm",
    weight: "61 kg",
    history: "ジャイールFC - ラルゴFC",
    comment: "準備中"
  },
  {
    id: 7,
    number: "51",
    name: "鈴木 瑶",
    kana: "SUZUKI Yoh",
    role: "player (retired)",
    position: "MF",
    grade: "3年",
    image: "images/suzuki.JPG", // 仮
    images: [
      "images/suzuki.JPG",
      "images/suzuki1.JPG",     // 1枚目：プロフィール写真
      "images/suzuki5.JPG",     // 2枚目：プレイ中の写真
      "images/suzuki3.JPG",      // 3枚目：シュート瞬間の写真
      "images/suzuki4.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "165 cm",
    weight: "55 kg",
    history: "上板橋第三中サッカー部",
    comment: "準備中"
  },
  {
    id: 8,
    number: "57",
    name: "原澤 和貴",
    kana: "HARASAWA Kazuki",
    role: "player (retired)",
    position: "MF",
    grade: "3年",
    image: "images/harasawa3.JPG", // 仮
    images: [
      "images/harasawa3.JPG",
      "images/harasawa2.JPG",     // 1枚目：プロフィール写真
      "images/harasawa4.JPG",     // 2枚目：プレイ中の写真
      "images/harasawa.JPG",      // 3枚目：シュート瞬間の写真
      "images/harasawa5.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "174 cm",
    weight: "59 kg",
    history: "金町SC - 常盤中サッカー部",
    comment: "準備中"
  },
  {
    id: 9,
    number: "58",
    name: "寺岡 優真",
    kana: "TERAOKA Yuuma",
    role: "player (retired)",
    position: "MF",
    grade: "3年",
    image: "images/teraoka5.JPG", // 仮
    images: [
      "images/teraoka5.JPG",     // 1枚目：プロフィール写真
      "images/teraoka2.JPG",     // 2枚目：プレイ中の写真
      "images/teraoka1.JPG",      // 3枚目：シュート瞬間の写真
      "images/teraoka3.JPG",      // 4枚目：シュート瞬間の写真
      "images/teraoka6.JPG"      // 5枚目：シュート瞬間の写真
    ],
    height: "163 cm",
    weight: "54 kg",
    history: "ブルーファイターズサッカークラブ - ヴェルディSSレスチ",
    comment: "準備中"
  },
  {
    id: 10,
    number: "9",
    name: "岡 楓貴",
    kana: "OKA Fuki",
    role: "player",
    position: "FW",
    grade: "2年",
    image: "images/oka.jpg", // 仮
    images: [
      "images/oka.jpg",
      "images/oka1.JPG",     // 1枚目：プロフィール写真
      "images/oka5.JPG",     // 2枚目：プレイ中の写真
      "images/oka3.JPG",      // 3枚目：シュート瞬間の写真
      "images/oka6.JPG"
    ],
    height: "178 cm",
    weight: "67 kg",
    history: "青葉中サッカー部",
    comment: "母国の為にガンバリマス。"
  },
  {
    id: 11,
    number: "19",
    name: "渡邊 大賀",
    kana: "WATANABE Taiga",
    role: "player",
    position: "FW",
    grade: "2年",
    image: "images/watanabe.jpg", // 仮
    images: [
      "images/watanabe.jpg",
      "images/watanabe1.JPG",     // 1枚目：プロフィール写真
      "images/watanabe2.JPG",     // 2枚目：プレイ中の写真
      "images/watanabe3.JPG",      // 3枚目：シュート瞬間の写真
      "images/watanabe4.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "174 cm",
    weight: "56 kg",
    history: "-",
    comment: "イライラしてるなら俺に当たってもいいんだよ。\n当たらないの？偉いじゃん。"
  },
  {
    id: 12,
    number: "15",
    name: "小川 貴幸",
    kana: "OGAWA Takayuki",
    role: "player",
    position: "MF",
    grade: "2年",
    image: "images/ogawa.jpg", // 仮
    images: [
      "images/ogawa.jpg",
      "images/ogawa1.JPG",     // 1枚目：プロフィール写真
      "images/ogawa2.JPG",     // 2枚目：プレイ中の写真
      "images/ogawa3.JPG",      // 3枚目：シュート瞬間の写真
      "images/ogawa5.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "170 cm",
    weight: "53 kg",
    history: "板橋第二中サッカー部",
    comment: "アメリカNo.1ドリブラーです。"
  },
  {
    id: 13,
    number: 7,
    name: "北原 拓馬",
    kana: "KITAHARA Takuma",
    role: "captain",
    position: "MF",
    grade: "2年",
    image: "images/kitahara.jpg", // 仮
    images: [
      "images/kitahara.jpg",
      "images/kitahara1.JPG",     // 1枚目：プロフィール写真
      "images/kitahara2.JPG",     // 2枚目：プレイ中の写真
      "images/kitahara3.JPG",     // 3枚目：シュート瞬間の写真
      "images/kitahara8.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "173 cm",
    weight: "66 kg",
    history: "三菱養和SC巣鴨ジュニア - 三菱養和SC巣鴨ジュニアユース",
    comment: "特になし！"
  },
  {
    id: 14,
    number: "23",
    name: "辻岡 洸大郎",
    kana: "TSUJIOKA Kotaro",
    role: "player",
    position: "FW",
    grade: "2年",
    image: "images/tsujioka.jpg", // 仮
    images: [
      "images/tsujioka.jpg",
      "images/tsujioka1.JPG",     // 1枚目：プロフィール写真
      "images/tsujioka2.JPG",     // 2枚目：プレイ中の写真
      "images/tsujioka3.JPG",      // 3枚目：シュート瞬間の写真
      "images/tsujioka4.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "171 cm",
    weight: "60 kg",
    history: "-",
    comment: "ダイエット目的で入部しました。"
  },
  {
    id: 15,
    number: "17",
    name: "水澤 勇人",
    kana: "MIZUSAWA Hayato",
    role: "部長",
    position: "DF",
    grade: "2年",
    image: "images/mizusawa.jpg", // 仮
    images: [
      "images/mizusawa.jpg",
      "images/mizusawa1.JPG",     // 1枚目：プロフィール写真
      "images/mizusawa2.JPG",     // 2枚目：プレイ中の写真
      "images/mizusawa3.JPG",      // 3枚目：シュート瞬間の写真
      "images/mizusawa4.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "183 cm",
    weight: "59 kg",
    history: "高島平サッカークラブ - 九曜FC",
    comment: "北園サッカー部のビジュアル担当（笑）水澤勇人です。"
  },
  {
    id: 16,
    number: "8",
    name: "内田 遥也",
    kana: "UCHIDA Haruya",
    role: "player",
    position: "MF",
    grade: "2年",
    image: "images/uchida.jpg", // 仮
    images: [
      "images/uchida.jpg",
      "images/uchida8.JPG",     // 1枚目：プロフィール写真
      "images/uchida7.JPG",     // 2枚目：プレイ中の写真
      "images/uchida3.JPG",      // 3枚目：シュート瞬間の写真
      "images/uchida2.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "170 cm",
    weight: "58 kg",
    history: "Grow - 足立第七中サッカー部",
    comment: "ほ、ほぎー。"
  },
  {
    id: 17,
    number: "11",
    name: "近田 莉仁",
    kana: "CHIKADA Rito",
    role: "player",
    position: "MF",
    grade: "2年",
    image: "images/chikada.jpg", // 仮
    images: [
      "images/chikada.jpg",
      "images/chikada1.JPG",     // 1枚目：プロフィール写真
      "images/chikada2.JPG",     // 2枚目：プレイ中の写真
      "images/chikada3.JPG",      // 3枚目：シュート瞬間の写真
      "images/chikada4.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "170 cm",
    weight: "58 kg",
    history: "Fcjrooots - Weiss.blau.Mitaka",
    comment: "東大目指してがんばります。"
  },
  {
    id: 18,
    number: "4",
    name: "児玉 昊大",
    kana: "KODAMA Kouta",
    role: "player",
    position: "DF",
    grade: "2年",
    image: "images/kodama.jpg", // 仮
    images: [
      "images/kodama.jpg",
      "images/kodama5.JPG",     // 1枚目：プロフィール写真
      "images/kodama2.JPG",     // 2枚目：プレイ中の写真
      "images/kodama3.JPG",      // 3枚目：シュート瞬間の写真
      "images/kodama1.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "177 cm",
    weight: "59 kg",
    history: "FC北前野 - Rio Football Club",
    comment: "好みのタイプは男。"
  },
  {
    id: 19,
    number: 1,
    name: "松尾 風介",
    kana: "MATSUO Fusuke",
    role: "player",
    position: "GK",
    grade: "2年",
    image: "images/matsuo.jpg", // 仮
    images: [
      "images/matsuo.jpg",
      "images/matsuo1.JPG",     // 1枚目：プロフィール写真
      "images/matsuo4.JPG",     // 2枚目：プレイ中の写真
      "images/matsuo3.JPG",
      "images/matsuo5.JPG"      // 3枚目：シュート瞬間の写真
    ],
    height: "178 cm",
    weight: "55 kg",
    history: "高島平サッカークラブ - 高島第三中サッカー部",
    comment: "虚言癖です。"
  },
  {
    id: 20,
    number: "3",
    name: "長田 優人",
    kana: "OSADA Masato",
    role: "player",
    position: "DF",
    grade: "2年",
    image: "images/osada.jpg", // 仮
    images: [
      "images/osada.jpg",
      "images/osada1.JPG",     // 1枚目：プロフィール写真
      "images/osada2.JPG",     // 2枚目：プレイ中の写真
      "images/osada3.JPG",      // 3枚目：シュート瞬間の写真
      "images/osada4.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "176 cm",
    weight: "59 kg",
    history: "プログレットFC - 赤塚第二中サッカー部",
    comment: "自認サッカー部のスピードスターです。"
  },
  {
    id: 21,
    number: "12",
    name: "秋元 孝太",
    kana: "AKIMOTO Kota",
    role: "player",
    position: "DF",
    grade: "1年",
    image: "images/akimoto.jpg", // 仮
    images: [
      "images/akimoto.jpg",
      "images/akimoto2.JPG",     // 1枚目：プロフィール写真
      "images/akimoto3.JPG",     // 2枚目：プレイ中の写真
      "images/akimoto1.JPG",      // 3枚目：シュート瞬間の写真
      "images/akimoto4.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "172 cm",
    weight: "60 kg",
    history: "滝一FC - 九曜FC",
    comment: "自分なりに頑張ります"
  },
  {
    id: 22,
    number: "13",
    name: "佐藤 郁",
    kana: "SATO Kaoru",
    role: "player",
    position: "GK",
    grade: "1年",
    image: "images/かおる.jpg", // 仮
    images: [
      "images/かおる.jpg",
      "images/kaoru1.JPG",     // 1枚目：プロフィール写真
      "images/kaoru2.JPG",     // 2枚目：プレイ中の写真
      "images/kaoru4.JPG",      // 3枚目：シュート瞬間の写真
      "images/kaoru3.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "179 cm",
    weight: "58 kg",
    history: "-",
    comment: "準備中"
  },
  {
    id: 23,
    number: "16",
    name: "天地 真輝",
    kana: "TENCHI Naoki",
    role: "player (injured)",
    position: "DF",
    grade: "1年",
    image: "images/tenchi.jpg", // 仮
    images: [
      "images/tenchi.jpg",
      "images/tenchi1.JPG",     // 1枚目：プロフィール写真
      "images/tenchi2.JPG",     // 2枚目：プレイ中の写真
      "images/tenchi3.JPG",      // 3枚目：シュート瞬間の写真
      "images/tenchi4.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "163 cm",
    weight: "48 kg",
    history: "浮間SC - 浮間中サッカー部",
    comment: "楽しくプレーします！"
  },
  {
    id: 24,
    number: "14",
    name: "大宮 清史郎",
    kana: "OMIYA Seishiro",
    role: "player",
    position: "FW",
    grade: "1年",
    image: "images/ohmiya.jpg", // 仮
    images: [
      "images/ohmiya.jpg",
      "images/omiya1.JPG",     // 1枚目：プロフィール写真
      "images/omiya2.JPG",     // 2枚目：プレイ中の写真
      "images/omiya3.JPG",      // 3枚目：シュート瞬間の写真
      "images/omiya4.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "165 cm",
    weight: "60 kg",
    history: "開四FC - PELADA FC",
    comment: "いっぱい走ります！"
  },
  {
    id: 25,
    number: "21",
    name: "曽田 凛太郎",
    kana: "SODA Rintaro",
    role: "player (injured)",
    position: "MF",
    grade: "1年",
    image: "images/soda.jpg", // 仮
    images: [
      "images/soda.jpg",
      "images/soda1.JPG",     // 1枚目：プロフィール写真
      "images/soda2.JPG",     // 2枚目：プレイ中の写真
      "images/soda3.JPG",      // 3枚目：シュート瞬間の写真
      "images/soda4.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "169 cm",
    weight: "55 kg",
    history: "BOA SPORTS CLUB - クリアソン新宿",
    comment: "点決めます！"
  },
  {
    id: 26,
    number: "22",
    name: "佐藤 瑛介",
    kana: "SATO Eisuke",
    role: "player",
    position: "DF",
    grade: "1年",
    image: "images/satoh.jpg", // 仮
    images: [
      "images/satoh.jpg",
      "images/satoh1.JPG",     // 1枚目：プロフィール写真
      "images/sato3.JPG",     // 2枚目：プレイ中の写真
      "images/sato4.JPG",      // 3枚目：シュート瞬間の写真
      "images/sato2.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "169 cm",
    weight: "53 kg",
    history: "FC赤羽 - 赤羽岩淵中サッカー部",
    comment: "闘います！"
  },
  {
    id: 27,
    number: "20",
    name: "田宮 大雅",
    kana: "TAMIYA Taiga",
    role: "player",
    position: "MF",
    grade: "1年",
    image: "images/tamiya.jpg", // 仮
    images: [
      "images/tamiya.jpg",
      "images/tamiya1.JPG",     // 1枚目：プロフィール写真
      "images/tamiya4.JPG",     // 2枚目：プレイ中の写真
      "images/tamiya3.JPG",      // 3枚目：シュート瞬間の写真
      "images/tamiya2.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "175 cm",
    weight: "55 kg",
    history: "tfa - 浮間中サッカー部",
    comment: "脱力プレイで頑張ります！"
  },
  {
    id: 28,
    number: "5",
    name: "中山 賢一",
    kana: "NAKAYAMA Kenichi",
    role: "player",
    position: "MF",
    grade: "1年",
    image: "images/nakayama.jpg", // 仮
    images: [
      "images/nakayama.jpg",
      "images/nakayama1.JPG",     // 1枚目：プロフィール写真
      "images/nakayama2.JPG",     // 2枚目：プレイ中の写真
      "images/nakayama3.JPG",      // 3枚目：シュート瞬間の写真
      "images/nakayama4.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "170 cm",
    weight: "52 kg",
    history: "南池袋FC - TU.SOLEIL.FC",
    comment: "点決めて飛びます！"
  },
  {
    id: 29,
    number: "18",
    name: "稲田 航",
    kana: "INADA Wataru",
    role: "player, right-side bench warming specialist",
    position: "MF",
    grade: "1年",
    image: "images/inada.jpg", // 仮
    images: [
      "images/inada.jpg",
      "images/inada4.JPG",     // 1枚目：プロフィール写真
      "images/inada3.JPG",     // 2枚目：プレイ中の写真
      "images/inada1.JPG",      // 3枚目：シュート瞬間の写真
      "images/inada2.JPG"      // 4枚目：シュート瞬間の写真
    ],
    height: "172 cm",
    weight: "56 kg",
    history: "BALOMPIE - 光が丘第一中サッカー部",
    comment: "敵味方関係なくぶち抜きます！"
  },
  {
    id: 101,
    number: "",
    name: "髙木 愛梨花",
    kana: "TAKAGI Erika",
    role: "MG",
    position: "MG",
    grade: "2年",
    image: "images/takagi1.jpg",
    images: [
      "images/takagi1.jpg",
      "images/takagi2.jpg",     // 1枚目：プロフィール写真
      "images/takagi3.png",
      "images/takagi4.png"
    ],
    height: "-",
    weight: "-",
    history: "-",
    comment: "選手たちが全力でプレーできるようにサポートします！"
  },
  {
    id: 102,
    number: "",
    name: "中山 美音",
    kana: "NAKAYAMA Mio",
    role: "MG",
    position: "MG",
    grade: "2年",
    image: "images/mio1.jpg",
    images: [
      "images/mio1.jpg",
      "images/mio2.jpg",
      "images/mio3.png",     // 1枚目：プロフィール写真
      "images/mio4.png"
    ],
    height: "-",
    weight: "-",
    history: "-",
    comment: "マネージャーとして選手たちのサポートをできるように頑張ります！"
  },
  {
    id: 103,
    number: "",
    name: "廣瀬 優月",
    kana: "HIROSE Yuzuki",
    role: "MG",
    position: "MG",
    grade: "2年",
    image: "images/hirose1.jpg",
    images: [
      "images/hirose1.jpg",
      "images/hirose2.jpg",
      "images/hirose3.png",     // 1枚目：プロフィール写真
      "images/hirose4.png"
    ],
    height: "-",
    weight: "-",
    history: "-",
    comment: "選手のみんなが最高のプレーをできるように、これからも全力でサポートしていきます！"
  },
  {
    id: 104,
    number: "",
    name: "兼子 碧彩",
    kana: "KANEKO Aoi",
    role: "MG",
    position: "MG",
    grade: "1年",
    image: "images/kaneko1.jpg",
    images: [
      "images/kaneko1.jpg",
      "images/kaneko2.jpg",
      "images/kaneko5.png",    // 1枚目：プロフィール写真
      "images/kaneko4.png"
    ],
    height: "-",
    weight: "-",
    history: "-",
    comment: "ワールドカップ見てサッカーを好きになりました！\nみんなのことをサポートします！"
  },
  {
    id: 105,
    number: "",
    name: "北澤 玲愛",
    kana: "KITAZAWA Reia",
    role: "MG",
    position: "MG",
    grade: "1年",
    image: "images/kitazawa1.jpg",
    images: [
      "images/kitazawa1.jpg",
      "images/kitazawa2.jpg",
      "images/kitazawa3.png",     // 1枚目：プロフィール写真
      "images/kitazawa4.png"
    ],
    height: "-",
    weight: "-",
    history: "-",
    comment: "選手のみんなの支えとなるよう懸命に頑張ります！"
  },
  {
    id: 106,
    number: "",
    name: "星野 こと菜",
    kana: "HOSHINO Kotona",
    role: "MG",
    position: "MG",
    grade: "1年",
    image: "images/hoshino1.jpg",
    images: [
      "images/hoshino1.jpg",
      "images/hoshino2.jpg",
      "images/hoshino3.png",     // 1枚目：プロフィール写真
      "images/hoshino4.png"
    ],
    height: "-",
    weight: "-",
    history: "-",
    comment: "選手のみんなのサポートを精一杯頑張ります！"
  },
  {
    id: 201,
    number: "",
    name: "常見 聡",
    kana: "TSUNEMI Satoshi",
    role: "顧問",
    position: "STAFF",
    image: "images/tsunemi1.JPG",
    images: [
      "images/tsunemi1.JPG",
      "images/tsunemi2.JPG",
      "images/tsunemi3.JPG"
    ],
    height: "-", 
    weight: "-",
    history: "-",
    comment: "準備中"
  },
  {
    id: 202,
    number: "",
    name: "早川 隆二",
    kana: "HAYAKAWA Ryuji",
    role: "顧問",
    position: "STAFF",
    image: "images/hayakawa1.jpg",
    images: [
      "images/hayakawa1.jpg",
      "images/hayakawa2.JPG",
      "images/hayakawa3.JPG"
    ],
    height: "-",
    weight: "-",
    history: "-",
    comment: "準備中"
  },
  {
    id: 203,
    number: "",
    name: "赤津 周",
    kana: "AKATSU Shu",
    role: "学生GKコーチ",
    position: "STAFF",
    image: "images/akatsu5.png",
    images: [
      "images/akatsu5.png",
      "images/akatsu1.JPG",
      "images/akatsu2.JPG",
      "images/akatsu3.png",     // 2枚目：プレイ中の写真
      "images/akatsu4.png"      // 3枚目：シュート瞬間の写真
    ],
    height: "173 cm",
    weight: "70 kg",
    history: "エスフォルソFC - 三菱養和SC巣鴨ジュニア - 三菱養和SC巣鴨ジュニアユース - 北園高校サッカー部\n  関東選抜少年サッカー大会東京u12選抜パープル\n東京都トレセン(2020-2023)",
    comment: "北園高校サッカー部に3年間在籍し、多くの方々の支えの元、選手としてサッカーを続けることができました。\nこれからは、指導する立場として選手たちがサッカーを楽しみながらも、上達を感じられる環境を作っていきたいと思います。"
  },
  {
    id: 203,
    number: "",
    name: "荒木 勇人",
    kana: "ARAKI Hayato",
    role: "学生GKコーチ",
    position: "STAFF",
    image: "images/araki.jpg",
    images: [
      "images/araki.jpg",
      "images/araki2.jpg",     // 1枚目：プロフィール写真
      "images/araki3.png",     // 2枚目：プレイ中の写真
      "images/araki4.png"      // 3枚目：シュート瞬間の写真
    ],
    height: "169 cm",
    weight: "55 kg",
    history: "光が丘KIDSC - 光が丘第三中サッカー部 - 北園高校サッカー部",
    comment: "北園高校サッカー部でプレーしていた時は、「目標」や「目的」を持って努力することを心掛けてきました。3年時には多くの人のサポートを受けて、北園高校サッカー部が長年追いかけてきた選手権東京都2次予選（都大会）出場という結果を残すことができました。\nGKスタッフとして選手にはどのようなGKになりたいのか共に考えることのできる存在になりたいと考えています。"
  }
];

// 要素の取得
const grid = document.getElementById("player-grid");
const modal = document.getElementById("player-modal");
const modalBody = document.getElementById("modal-body");
const closeModalBtn = document.getElementById("close-modal");
const sortButtons = document.querySelectorAll(".sort-btn");

// 【共通】背番号順に並べ替える関数（番号なしは後ろへ、数字は小さい順に）
function sortByNumber(data) {
  return [...data].sort((a, b) => {
    const numA = a.number !== "" && a.number !== undefined ? Number(a.number) : 999;
    const numB = b.number !== "" && b.number !== undefined ? Number(b.number) : 999;
    return numA - numB;
  });
}

// 1. 選手カードを描画する関数
function renderPlayers(dataToRender) {
  grid.innerHTML = "";

  if (dataToRender.length === 0) {
    grid.innerHTML = "<p style='grid-column: 1 / -1; text-align: center; padding: 40px;'>該当する選手がいません</p>";
    return;
  }

  dataToRender.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";
    
    card.innerHTML = `
      <img src="${player.image}" alt="${player.name}">
      <div class="player-info">
        <div class="name-row">
          <span class="player-number">${player.number}</span> 
          <span class="player-name">${player.name}</span>
        </div>
        <div class="sub-row">
          <span class="player-position">${player.position}</span>
          <span class="player-kana">${player.kana}</span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => openModal(player));
    grid.appendChild(card);
  });
}

// 2. モーダルを開く（矢印ボタン＆スライダー対応版）
function openModal(player) {
  const images = (player.images && player.images.length > 0) 
    ? player.images 
    : [player.image, player.image, player.image]; 

  const slidesHtml = images.map(img => `
    <div class="carousel-slide">
      <img src="${img}" alt="${player.name}">
    </div>
  `).join('');

  const dotsHtml = images.map((_, index) => `
    <span class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
  `).join('');

  modalBody.innerHTML = `
    <div class="modal-image-area">
      <div class="carousel-container">
        <!-- ★ 左右の半透明ボタンを追加 -->
        <button class="carousel-btn carousel-prev" id="carousel-prev">&#10094;</button>
        <button class="carousel-btn carousel-next" id="carousel-next">&#10095;</button>

        <div class="carousel-track" id="carousel-track">
          ${slidesHtml}
        </div>
        
        <div class="carousel-dots" id="carousel-dots">
          ${dotsHtml}
        </div>
      </div>
      
      <div class="player-info" style="border-top: 1px solid #ddd;">
        <div class="name-row">
          <span class="player-number">${player.number}</span>
          <span class="player-name">${player.name}</span>
        </div>
        <div class="sub-row">
          <span class="player-position">${player.position}</span>
          <span class="player-kana">${player.kana}</span>
        </div>
      </div>
    </div>
    <div class="modal-text-area">
      <div class="modal-title">Profile</div>
      
      ${player.role ? `
      <dl class="profile-item">
        <dt>Role</dt>
        <dd>${player.role}</dd>
      </dl>
      ` : ''}

      ${player.grade ? `
       <dl class="profile-item">
        <dt>Grade</dt>
        <dd>${player.grade}</dd>
       </dl>
      ` : ''}
      
      <dl class="profile-item">
        <dt>Height</dt>
        <dd>${player.height}</dd>
      </dl>
      <dl class="profile-item">
        <dt>Weight</dt>
        <dd>${player.weight}</dd>
      </dl>
      <dl class="profile-item">
        <dt>Career History</dt>
        <dd>${player.history}</dd>
      </dl>
      <dl class="profile-item">
        <dt>Comment</dt>
        <dd>${player.comment}</dd>
      </dl>
    </div>
  `;
  modal.classList.remove("hidden");

  // --- スライダーの連動処理 ---
  const track = document.getElementById('carousel-track');
  const dots = modalBody.querySelectorAll('.carousel-dot');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (track && dots.length > 0) {
    // 1枚目や最後の枚数に応じてボタンの表示・非表示を切り替える関数
    function updateButtonVisibility() {
      const currentIndex = Math.round(track.scrollLeft / track.clientWidth);

      // 1枚目のときは「前へ」ボタンを隠す
      if (currentIndex === 0) {
        prevBtn.classList.add('hidden-btn');
      } else {
        prevBtn.classList.remove('hidden-btn');
      }

      // 最後の枚数のときは「次へ」ボタンを隠す
      if (currentIndex === images.length - 1) {
        nextBtn.classList.add('hidden-btn');
      } else {
        nextBtn.classList.remove('hidden-btn');
      }
    }

    // スクロールしたとき
    track.addEventListener('scroll', () => {
      const index = Math.round(track.scrollLeft / track.clientWidth);
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      updateButtonVisibility();
    });

    // ドットクリックで移動
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        track.scrollTo({
          left: i * track.clientWidth,
          behavior: 'smooth'
        });
      });
    });

    // 「次へ」ボタン
    nextBtn.addEventListener('click', () => {
      const currentIndex = Math.round(track.scrollLeft / track.clientWidth);
      const nextIndex = currentIndex + 1;
      if (nextIndex < images.length) {
        track.scrollTo({
          left: nextIndex * track.clientWidth,
          behavior: 'smooth'
        });
      }
    });

    // 「前へ」ボタン
    prevBtn.addEventListener('click', () => {
      const currentIndex = Math.round(track.scrollLeft / track.clientWidth);
      const prevIndex = currentIndex - 1;
      if (prevIndex >= 0) {
        track.scrollTo({
          left: prevIndex * track.clientWidth,
          behavior: 'smooth'
        });
      }
    });

    // 最初にモーダルを開いたときのボタン状態をチェック
    updateButtonVisibility();
  }
}

// 3. モーダルを閉じる
function closeModal() {
  modal.classList.add("hidden");
}

closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// 4. ソート・絞り込みボタンの処理
sortButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    sortButtons.forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");

    const filterValue = e.target.getAttribute("data-filter");
    let filtered = [];

    // 1. まずデータを絞り込む
    if (filterValue === "ALL") {
      filtered = players;
    } else if (["GK", "DF", "MF", "FW", "MG"].includes(filterValue)) {
      filtered = players.filter(p => p.position === filterValue);
    } else if (filterValue === "STAFF") {
      filtered = players.filter(p => p.position === "STAFF" || ["顧問", "トレーナー", "学生GKコーチ", "コーチ"].includes(p.position));
    } else {
      filtered = players.filter(p => p.grade === filterValue);
    }

    // 2. ★ここで必ず「背番号順」に並べ替える処理を挟む！
    const sortedFiltered = sortByNumber(filtered);

    // 3. 並び替えたものを描画する
    renderPlayers(sortedFiltered);
  });
});


// 初期描画（ページを開いたときはALL状態なので、全体を背番号順で表示）
const initialSorted = sortByNumber(players);
renderPlayers(initialSorted);

// --- 集合写真のスライダー制御（右方向ループ対応版） ---
const groupTrack = document.getElementById('group-track');
const groupDots = document.querySelectorAll('.group-dot');
const groupPrevBtn = document.getElementById('group-prev');
const groupNextBtn = document.getElementById('group-next');

if (groupTrack) {
  const totalOriginalSlides = 4;

  // ★ページ読み込み直後に、強制的に「本物の1枚目（2番目のスライド）」の位置に瞬間移動させる
  window.addEventListener('load', () => {
    groupTrack.style.scrollBehavior = 'auto'; // アニメーション無効
    groupTrack.scrollLeft = groupTrack.clientWidth; // 1枚分右（本物の1枚目）に移動
    groupTrack.style.scrollBehavior = 'smooth'; // スムーズスクロールを戻す
  });

  // 現在の正しい写真の番号（0〜3）を取得してドットを光らせる関数
  function updateDots() {
    const rawIndex = Math.round(groupTrack.scrollLeft / groupTrack.clientWidth);
    let realIndex = rawIndex - 1; // クローン分を引く

    // クローン位置にいる瞬間の見た目を補正
    if (realIndex < 0) realIndex = totalOriginalSlides - 1;
    if (realIndex >= totalOriginalSlides) realIndex = 0;

    groupDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === realIndex);
    });
  }

  // スクロールしたときの監視 ＆ 端っこに達した瞬間の「瞬間ワープ（ループ処理）」
  groupTrack.addEventListener('scroll', () => {
    updateDots();

    const scrollLeft = groupTrack.scrollLeft;
    const clientWidth = groupTrack.clientWidth;
    const maxScroll = clientWidth * (groupTrack.children.length - 1);

    // 【右端のクローン（最後の1枚のコピー）に達した瞬間】無音で本物の1枚目にワープ
    if (scrollLeft >= maxScroll - 5) {
      groupTrack.style.scrollBehavior = 'auto'; // アニメーションを一時オフ
      groupTrack.scrollLeft = clientWidth;      // 本物の1枚目へ瞬間移動
      setTimeout(() => {
        groupTrack.style.scrollBehavior = 'smooth'; // アニメーションを戻す
      }, 50);
    }

    // 【左端のクローン（最初の4枚目のコピー）に達した瞬間】無音で本物の4枚目にワープ
    if (scrollLeft <= 5) {
      groupTrack.style.scrollBehavior = 'auto';
      groupTrack.scrollLeft = clientWidth * totalOriginalSlides; // 本物の4枚目へ瞬間移動
      setTimeout(() => {
        groupTrack.style.scrollBehavior = 'smooth';
      }, 50);
    }
  });

  // ドットクリックで移動
  groupDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      // クローンがあるため、クリックした番号 + 1 の位置へスクロール
      groupTrack.scrollTo({
        left: (i + 1) * groupTrack.clientWidth,
        behavior: 'smooth'
      });
    });
  });

  // 「次へ」ボタン（右へスライド）
  groupNextBtn.addEventListener('click', () => {
    groupTrack.scrollBy({
      left: groupTrack.clientWidth,
      behavior: 'smooth'
    });
  });

  // 「前へ」ボタン（左へスライド）
  groupPrevBtn.addEventListener('click', () => {
    groupTrack.scrollBy({
      left: -groupTrack.clientWidth,
      behavior: 'smooth'
    });
  });
}
// 取得したブログ記事データを保持する配列
let currentBlogPosts = [];

// ブログ記事一覧を取得して表示する関数
async function fetchBlogPosts() {
  const blogContainer = document.getElementById('blog-grid');
  if (!blogContainer) return;

  try {
    const response = await fetch('posts.json');
    if (!response.ok) throw new Error('Network response was not ok');
    
    currentBlogPosts = await response.json();

    blogContainer.innerHTML = currentBlogPosts.map(post => `
      <article class="blog-card" onclick="openBlogModal('${post.id}')">
        <img src="${post.image}" alt="${post.title}">
        <div class="blog-card-body">
          <div class="blog-meta">
            <span class="blog-date">${post.date}</span>
            <span class="blog-author">${post.author}</span>
          </div>
          <h3 class="blog-card-title">${post.title}</h3>
          <p class="blog-snippet">${post.content.substring(0, 80)}...</p>
        </div>
      </article>
    `).join('');

  } catch (error) {
    console.error('ブログ記事の取得に失敗しました:', error);
    blogContainer.innerHTML = '<p style="color:#aaa; text-align:center;">記事を読み込めませんでした。</p>';
  }
}

// モーダルを開いて記事全文を表示する関数
function openBlogModal(id) {
  const post = currentBlogPosts.find(p => String(p.id) === String(id));
  if (!post) return;

  const modal = document.getElementById('blog-modal');
  const modalBody = document.getElementById('blog-modal-body');

  modalBody.innerHTML = `
    <img class="blog-modal-img" src="${post.image}" alt="${post.title}">
    <div class="blog-modal-meta">
      <span>${post.date}</span>
      <span>${post.author}</span>
    </div>
    <h2 class="blog-modal-title">${post.title}</h2>
    <div class="blog-modal-text">${post.content}</div>
  `;

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // モーダル開閉時に背面スクロールを固定
}

// モーダルを閉じる関数
function closeBlogModal() {
  const modal = document.getElementById('blog-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // 背面スクロールを解除
  }
}

// 背景暗がり部分クリック または ESCキー押下で閉じる処理
window.addEventListener('click', (event) => {
  const modal = document.getElementById('blog-modal');
  if (event.target === modal) {
    closeBlogModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeBlogModal();
  }
});

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', fetchBlogPosts);
