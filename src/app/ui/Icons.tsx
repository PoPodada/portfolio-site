import { FC} from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import Image from 'next/image';

export const Icons:FC = () => {
    return(
        <ul>
           <GitHubIcon sx={{ fontSize: 70 ,color: 'white'}} />
           <XIcon sx={{ fontSize: 70 ,color: 'white'}} />
           <Image
            src="/qiita-white-icon.png"
            width={70}
            height={760}
            className="inline"
            alt="PoPodada-qiita"
            >
            </Image>
            <Image
            src="/Wantedly_Icon.svg"
            width={90}
            height={760}
            className="inline"
            alt="PoPodada-qiita"
            >
            </Image>
        </ul>
    )
}