import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as LaIcons from "oh-vue-icons/icons/la";
const Fa = Object.values({ ...FaIcons });
const La = Object.values({ ...LaIcons });
addIcons(...Fa, ...La);
export default OhVueIcon;