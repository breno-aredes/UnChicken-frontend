import { NeonButton } from "@/components/common/button";
import { BarNeon, HeaderContainer, LogBar, Logo } from "./style";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <img src="/UnChickenApp2.0.jpg"></img>
        <h1> UnChicken </h1>
      </Logo>
      <LogBar>
        <NeonButton>SignIn</NeonButton>
        <BarNeon></BarNeon>
        <NeonButton>SignUp</NeonButton>
      </LogBar>
    </HeaderContainer>
  );
}
