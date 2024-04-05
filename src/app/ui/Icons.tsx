import { FC} from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import Image from 'next/image';

export const Icons:FC = () => {
    return(
        <ul className='mt-[30px] w-[400px] flex justify-between'>
           <GitHubIcon sx={{ fontSize: 70 ,color: 'white',height:"auto"}} />
           <XIcon sx={{ fontSize: 70 ,color: 'white'}} />
           <Image
            src="/qiita-white-icon.png"
            width={70}
            height={70}
            className="inline"
            alt="PoPodada-qiita"
            priority
            >
            </Image>
            <Image
            src="/Wantedly_Icon.svg"
            width={90}
            height={90}
            className="inline"
            alt="PoPodada-qiita"
            priority
            >
            </Image>
        </ul>
    )
}