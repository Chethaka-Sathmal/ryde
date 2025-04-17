// Import all images
import noResult from "../assets/images/no-result.png";
import message from "../assets/images/message.png";
import adaptiveIcon from "../assets/images/adaptive-icon.png";
import splash from "../assets/images/splash.png";
import favicon from "../assets/images/favicon.png";
import getStarted from "../assets/images/get-started.png";
import partialReactLogo from "../assets/images/partial-react-logo.png";
import onboarding1 from "../assets/images/onboarding1.png";
import onboarding2 from "../assets/images/onboarding2.png";
import onboarding3 from "../assets/images/onboarding3.png";
import signupCar from "../assets/images/signup-car.png";
import check from "../assets/images/check.png";

// Import all icons
import iconClose from "../assets/icons/close.png";
import iconMarker from "../assets/icons/marker.png";
import iconChat from "../assets/icons/chat.png";
import iconEyeCross from "../assets/icons/eyecross.png";
import iconGoogle from "../assets/icons/google.png";
import iconStar from "../assets/icons/star.png";
import iconTo from "../assets/icons/to.png";
import iconProfile from "../assets/icons/profile.png";
import iconArrowUp from "../assets/icons/arrow-up.png";
import iconSearch from "../assets/icons/search.png";
import iconPoint from "../assets/icons/point.png";
import iconList from "../assets/icons/list.png";
import iconArrowDown from "../assets/icons/arrow-down.png";
import iconTarget from "../assets/icons/target.png";
import iconBackArrow from "../assets/icons/back-arrow.png";
import iconPerson from "../assets/icons/person.png";
import iconHome from "../assets/icons/home.png";
import iconDollar from "../assets/icons/dollar.png";
import iconOut from "../assets/icons/out.png";
import iconMap from "../assets/icons/map.png";
import iconLock from "../assets/icons/lock.png";
import iconPin from "../assets/icons/pin.png";
import iconSelectedMarker from "../assets/icons/selected-marker.png";
import iconCheck from "../assets/icons/check.png";
import iconEmail from "../assets/icons/email.png";

// Export images object
export const images = {
  noResult,
  message,
  adaptiveIcon,
  splash,
  favicon,
  getStarted,
  partialReactLogo,
  onboarding1,
  onboarding2,
  onboarding3,
  signupCar,
  check,
} as const;

// Export icons object
export const icons = {
  close: iconClose,
  marker: iconMarker,
  chat: iconChat,
  eyeCross: iconEyeCross,
  google: iconGoogle,
  star: iconStar,
  to: iconTo,
  profile: iconProfile,
  arrowUp: iconArrowUp,
  search: iconSearch,
  point: iconPoint,
  list: iconList,
  arrowDown: iconArrowDown,
  target: iconTarget,
  backArrow: iconBackArrow,
  person: iconPerson,
  home: iconHome,
  dollar: iconDollar,
  out: iconOut,
  map: iconMap,
  lock: iconLock,
  pin: iconPin,
  selectedMarker: iconSelectedMarker,
  check: iconCheck,
  email: iconEmail,
} as const;

export const onboarding = [
  {
    id: 1,
    title: "The perfect ride is just a tap away!",
    description:
      "Your journey begins with Ryde. Find your ideal ride effortlessly.",
    image: images.onboarding1,
  },
  {
    id: 2,
    title: "Best car in your hands with Ryde",
    description:
      "Discover the convenience of finding your perfect ride with Ryde",
    image: images.onboarding2,
  },
  {
    id: 3,
    title: "Your ride, your way. Let's go!",
    description:
      "Enter your destination, sit back, and let us take care of the rest.",
    image: images.onboarding3,
  },
];
