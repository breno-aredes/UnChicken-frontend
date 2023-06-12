import { NeonButton } from "@/components/common/StyleButton";
import { BarNeon, HeaderContainer, LogBar, Logo } from "./style";
import Link from "next/link";
import { VscThreeBars } from "react-icons/vsc";

export default function Header({ stepTwo, iconClicked, setIconClicked }) {
  return (
    <HeaderContainer>
      <Link style={{ textDecoration: "none" }} href="/">
        <Logo>
          <img src="/UnChickenApp2.0.jpg" alt="UnChicken Logo" />
          <h1>UnChicken</h1>
        </Logo>
      </Link>

      {!stepTwo ? (
        <LogBar>
          <Link href="/signin">
            <NeonButton>Entrar</NeonButton>
          </Link>
          <BarNeon></BarNeon>
          <Link href="/signup">
            <NeonButton>Cadastre-se</NeonButton>
          </Link>
        </LogBar>
      ) : (
        <>
          <VscThreeBars
            onClick={() => setIconClicked(!iconClicked)}
          ></VscThreeBars>
        </>
      )}
    </HeaderContainer>
  );
}
