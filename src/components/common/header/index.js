import { NeonButton } from "@/components/common/StyleButton";
import { BarNeon, HeaderContainer, Icon, LogBar, Logo } from "./style";
import Link from "next/link";
import { useEffect, useState } from "react";
import SideBar from "../sidebar/sidebar";
import { tokenExist, userName } from "@/api/auth";

export default function Header() {
  const [stepTwo, setStepTwo] = useState(false);
  const [iconClicked, setIconClicked] = useState(false);
  const user = userName();

  useEffect(() => {
    setStepTwo(tokenExist());
    setIconClicked(false);
  }, []);

  return (
    <>
      <HeaderContainer>
        <Link style={{ textDecoration: "none" }} href="/">
          <Logo>
            <>
              <img src="/UnChickenApp2.0.jpg" alt="UnChicken Logo" />
              <h1>UnChicken</h1>
            </>
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
          <LogBar
            iconClicked={iconClicked}
            onClick={() => setIconClicked(!iconClicked)}
          >
            <h1>{user}</h1>
            <Icon iconClicked={iconClicked}></Icon>
          </LogBar>
        )}
      </HeaderContainer>
      <SideBar iconClicked={iconClicked}></SideBar>
    </>
  );
}
