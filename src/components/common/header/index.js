import { NeonButton } from "@/components/common/StyleButton";
import { BarNeon, HeaderContainer, LogBar, Logo } from "./style";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderContainer>
      <Link style={{ textDecoration: "none" }} href="/">
        <Logo>
          <img src="/UnChickenApp2.0.jpg"></img>
          <h1> UnChicken </h1>
        </Logo>
      </Link>

      <LogBar>
        <Link href="/signin">
          <NeonButton>Entrar</NeonButton>
        </Link>

        <BarNeon></BarNeon>
        <Link href="/signup">
          <NeonButton>Cadastre-se</NeonButton>
        </Link>
      </LogBar>
    </HeaderContainer>
  );
}
