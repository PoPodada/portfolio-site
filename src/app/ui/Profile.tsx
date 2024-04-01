import Image from "next/image";
import { FC } from "react";
import { Icons } from "./Icons";
import Button from "@mui/material/Button";

export const Profile: FC = () => {
  return (
    <article>
      <Image
        src="/PoPodada.png"
        width={150}
        height={760}
        className="hidden md:block"
        alt="PoPodada"
      ></Image>
      <h2>PoPodada</h2>
      <Icons />
      <div>
        <Button
          variant="contained"
          style={{ color: "#1F273D", backgroundColor: "white" }}
        >
          プロフィール
        </Button>
        <Button
          variant="contained"
          style={{ color: "#1F273D", backgroundColor: "white" }}
        >
          記事
        </Button>
        
      </div>
    </article>
  );
};
