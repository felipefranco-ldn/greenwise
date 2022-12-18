import loginIcon from "../../assets/images/icons/user-login-icon.svg";
import registerIcon from "../../assets/images/icons/user-register-icon.svg";
import helpIcon from "../../assets/images/icons/user-help-icon.svg";
import "./ProfileOptions.scss";
import OptionsTab from "../OptionsTab/OptionsTab";

export default function ProfileOptions() {
  return (
    <aside className="aside">
      <OptionsTab
        linkTo="/login"
        cardTitle="Log in"
        imgAlt="login icon"
        imgSrc={loginIcon}
      />

      <OptionsTab
        linkTo="/register"
        cardTitle="Register"
        imgAlt="register icon"
        imgSrc={registerIcon}
      />

      <OptionsTab
        linkTo="/help"
        cardTitle="Help"
        imgAlt="help icon"
        imgSrc={helpIcon}
      />
    </aside>
  );
}
