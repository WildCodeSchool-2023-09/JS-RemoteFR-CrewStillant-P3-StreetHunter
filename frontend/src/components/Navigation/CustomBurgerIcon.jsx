import burgerIcon from "../../assets/burgerIcon.png";
import crossIcon from "../../assets/crossicon.png";

function CustomBurgerIcon() {
  return <img alt="icon" src={burgerIcon} width={100} />;
}

function CustomCrossIcon() {
  return <img alt="crossicon" src={crossIcon} width={100} />;
}

export { CustomBurgerIcon, CustomCrossIcon };
