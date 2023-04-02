import { v4 as uuidv4 } from 'uuid';
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";


const projects = [
  {
    id: uuidv4(),
    title: 'U Tracker',
    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: reactImage,
  },
  {
    id: uuidv4(),
    title: 'Green CTG',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: jsImage,
  },
  {
    id: uuidv4(),
    title: 'Coin Tracker',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: firebaseImage,
  },
  {
    id: uuidv4(),
    title: "Cavin's Portfolio",
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: firebaseImage,
  },
  {
    id: uuidv4(),
    title: 'Tracking Soft',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: reactImage,
  },
];

export default projects;