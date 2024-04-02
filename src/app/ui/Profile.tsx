'use client'
import Image from "next/image";
import { FC} from "react";
import { usePathname } from 'next/navigation';
import { Icons } from "./Icons";
import Button from "@mui/material/Button";
import clsx from 'clsx';
import Link from 'next/link';

export const Profile: FC = () => {
  const pathname = usePathname();
  const links = [
    {name:'Profile',href:'/'},
    { name: 'Articles', href: '/dashboard' },
    
  ];
  return (
    <>
      <Image
        src="/PoPodada.png"
        width={150}
        height={760}
        className="hidden md:block"
        alt="PoPodada"
      ></Image>
      <h2>PoPodada</h2>
      <Icons />
      
        
        {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
          >
            <Button
             variant={pathname === link.href ? 'contained' : 'outlined'}
            //  style={pathname === link.href ?{ color: "1F273D", backgroundColor: "white" }:{color:"#FFFFFF"}}
             >
            <p className="hidden md:block">{link.name}</p>
            </Button>
          </Link>
        );
      })}
    </>
  );
};
