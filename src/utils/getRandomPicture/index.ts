import zero from "assets/0.jpg";
import one from "assets/1.jpg";
import two from "assets/2.jpg";
import three from "assets/3.jpg";
import four from "assets/4.jpg";
import five from "assets/5.jpg";
import six from "assets/6.jpg";
import seven from "assets/7.jpg";
import eight from "assets/8.jpg";
import nine from "assets/9.jpg";

export const getRandomPicture = () => {
  const number = Math.floor(Math.random() * 9);
  switch (number) {
    case 0:
      return zero;
    case 1:
      return one;
    case 2:
      return two;
    case 3:
      return three;
    case 4:
      return four;
    case 5:
      return five;
    case 6:
      return six;
    case 7:
      return seven;
    case 8:
      return eight;
    case 9:
      return nine;
  }
};
