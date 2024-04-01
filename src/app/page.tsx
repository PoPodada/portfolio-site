import Image from "next/image";
import { Profile } from "@/app/ui/Profile";
import type { NextPage } from 'next';

const Home:NextPage = () => {
  return (
    <>
    <p>mainページ</p>
    <Profile />
    </>
  );
}

export default Home;