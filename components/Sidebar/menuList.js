import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';
import BubbleChartRoundedIcon from '@mui/icons-material/BubbleChartRounded';

const  iconsList = [
     {
        iconName:"Home",
        icon: <HomeRoundedIcon className="text-[#034363]"/>,
        link:"/dashboard"
    },
{
        iconName:"Alert",
        icon:<StarBorderRoundedIcon className="text-[#034363]"/>,
        link:"/alerts"
    },
   {
     iconName:"Message",
     icon:<MailRoundedIcon className="text-[#034363]"/>,
     link:"/news"
 },
{
     iconName:"Sentiment",
     icon:<InsertChartRoundedIcon className="text-[#034363]"/>,
     link:"/treatment",
 },
{
     iconName:"Analytics",
     icon:<BubbleChartRoundedIcon className="text-[#034363]"/>,
     link:"/analytics"
 }
]
   



export default iconsList;