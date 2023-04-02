import { v4 as uuidv4 } from 'uuid';
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import works1 from "../Images/works1.png";
import works2 from "../Images/works2.png";
import works3 from "../Images/works3.jpg";
import works4 from "../Images/works4.png";


const projects = [
    {
        id: uuidv4(),
        title: '株式会社WEES',
        desc:
        '大阪のWEB制作会社。立ち上げの際にホームページのデザインからコーディング、修正まで行いました。',
        img: works1,
        url: "https://wees.jp/",
    },
    {
        id: uuidv4(),
        title: 'LAGUNANIGUEL',
        desc:
        '神戸の美容エステ専門店。キャンペーンに伴うランディングページのデザインからコーディングを行いました。',
        img: works3,
        url: "https://lagunaniguel-wellness.com/",
    },
    {
        id: uuidv4(),
        title: "WINNERS LAB",
        desc:
        'シミュレーションゴルフの専門店。新規立ち上げの際にホームページの制作を行いました。',
        img: works2,
        url: "https://winners-lab.com/",

    },
    {
      id: uuidv4(),
      title: 'i++',
      desc:
        'アパレル販売・通販サイトの構築',
      img: works4,
      url: "https://iplusplus.base.shop/",

    },
    {
        id: uuidv4(),
        title: 'その他',
        desc:
        'すべての作品はこちらから',
        img: reactImage,
    },
];

export default projects;