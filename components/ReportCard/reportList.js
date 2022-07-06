
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldVirus,faBookMedical, faMessage, faFireAlt } from '@fortawesome/free-solid-svg-icons';


const ReportList =[
    {
    reportTitle:" 2nd Floor Bathroom HOD",
    reportInfo:"Administration Room",
    reportIcon: <FontAwesomeIcon  icon={faBookMedical} className='w-5 h-5 mx-auto text-red-500 rounded-full sm:shrink-0 '/>
    ,
    iconBg: "bg-red-100",
    reportTime: "5 minutes ago ",

    },
    {
        reportTitle:" Sia Hospital",
        reportInfo:"Report Lab Room",
        reportIcon: <FontAwesomeIcon  icon={faFireAlt} className='w-5 h-5 mx-auto text-blue-500 rounded-full sm:shrink-0 '/>,
        reportTime: "2 minutes ago ",
        iconBg:'bg-blue-100'

        },
        {
            reportTitle:"KNUST COVID LAB",
            reportInfo:"McGregor Virus and Infectious center",
            reportIcon: <FontAwesomeIcon  icon={faShieldVirus} className='w-5 h-5 mx-auto text-green-500 rounded-full sm:shrink-0 '/>,
            reportTime: "2 minutes ago ",
            iconBg:'bg-green-100'
    
            },
    
]

export default ReportList;