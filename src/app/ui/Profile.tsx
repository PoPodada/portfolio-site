'use client'
import Image from "next/image";
import { FC} from "react";
import { usePathname } from 'next/navigation';
import { Icons } from "./Icons";
import Button from "@mui/material/Button";
import Link from 'next/link';

export const Profile: FC = () => {
  const pathname = usePathname();
  const links = [
    {name:'Profile',href:'/'},
    { name: 'Articles', href: '/dashboard' },
    
  ];
  return (
    <>
    <div className="h-screen flex flex-col items-center justify-center">
    <Image
        src="/PoPodada.png"
        width={150}
        height={760}
        className="hidden md:block mx-auto "
        alt="PoPodada"
        priority
      ></Image>
      <h2 className="flex justify-center">PoPodada</h2>
      <Icons />
    </div>
    
      
      
      
    <div className="flex justify-between w-[300px] mx-auto">
        {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
          >
            <Button
             variant={pathname === link.href ? 'contained' : 'outlined'}
             >
            <p className="hidden md:block">{link.name}</p>
            </Button>
          </Link>
        );
      })}
      </div>
    </>
  );
};
