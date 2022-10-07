import React from 'react';
import DashLayout from '../components/DashLayout';
import Image from 'next/image';


const Treatment =()=>{
return (
    <DashLayout>
        <div className="max-w-4xl">
            <h1 className="text-4xl font-bold">1. COVID-19 antiviral medications</h1>
            <div className="grid gap-1 grid-col-2">
            <p className="font-light">You may have heard about monoclonal antibody and convalescent plasma treatments. But the newest treatments are antiviral pills, a class of medication used to treat infections caused by viruses like COVID-19.</p>
           <br/> <p className="font-medium">“Currently, there are two antiviral medications that have received Emergency Use Authorization
            (EUA) by the U.S. Food and Drug Administration to treat COVID-19, ritonavir-boosted nirmatrelvir 
            (Paxlovid) and molnupiravir (Lagevrio),” said Jason Brown, MD, 
            the chief medical officer for Banner Pharmacy Services in Phoenix, AZ.  </p>
            <Image src='/images/dont-img.png' height={400} width={400} alt="covid-19 image" className=''/>
            <p className="">
            “Both antiviral medications have been proven to be effective in reducing a patient's chances of being hospitalized,
             or dying, from COVID-19 and can be taken in the comfort of your own home.”
             </p>

             </div>
             <br/>
             <br/>
             <h1 className="text-4xl font-bold">2.Who can take COVID-19 oral antivirals?</h1>
             <div className="grid gap-1 grid-col-2">
             <div  className="flex ">
             <p className="flex-wrap">Both medications are available by prescription, but they aren't for everyone.
             Paxlovid is the preferred oral antiviral for COVID-19 treatment.
              However, you may not be able to take Paxlovid if you have severe renal or liver disease and/or are taking certain medications due to drug interactions. Lagevrio should only be taken if you are unable to receive Paxlovid or a monoclonal antibody.You shouldn’t take Lagevrio 
              if you’re pregnant or breastfeeding and/or 17 years old and younger as it can slow bone and cartilage growth. 
              </p>
              </div>
             <Image src='/images/283.jpg' height={400} width={400} alt="covid-19 image" className="relative shrink-0"/>
            
             <p className="font-medium ">
             The FDA has authorized Paxlovid for people ages 12 and older who weigh at least 88 pounds and are high risk.
              Lagevrio is authorized for adults 18 and older who are high risk when alternative COVID-19 treatment options authorized by 
             FDA (i.e., Paxlovid) are not accessible or clinically appropriate.
             </p>
             </div>
             <br/>
             
             <p className="font-medium">
                “Those who may benefit most from COVID-19 therapy are patients with high risk factors 
                or health conditions that put them at risk for developing severe disease,” Dr. Brown said.
                “Some of these risk factors include patients who are overweight, obese, have heart conditions, diabetes, cancer,
                 chronic liver disease, chronic lung disease, pregnancy or are over age 50
                 </p>
                 
                  <br/>
                  <div className="grid gap-1 grid-col-2">
                 <div>
                 <h1 className="text-4xl font-bold ">3. What are the potential side effects of taking COVID-19 antivirals?</h1>
                 <p className="flex-wrap font-medium">As with any medication, you could experience side effects with antivirals. 
                     Some side effects from oral antivirals include altered sense of taste, diarrhea, nausea, dizziness
                    , high blood pressure and muscle aches.
                    
                “Your provider will carefully discuss the risks and benefits with you,
                including any potential drug interactions,
             before prescribing any medication,” Dr. Brown said.</p>
             </div>
             <div className='relative' style={{height:"400", width:"400"}}> 
             <Image src='/images/symptoms.jpg' height={400} width={400} style={{ position: "relative", width: '400', height:"400",}}/>
             </div>
             </div>
             <br/>
             <h1 className="text-4xl font-bold" >4. When should COVID-19 antiviral medications be taken?</h1><br/>
             <p p className="font-medium"> <Image src='/images/symptoms-img.png' height={200} width={300} alt="covid-19 image" className="inline-flex "/> “Oral antivirals are most effective if prescribed as soon as possible and within 5 days of onset of symptoms,” Erickson said.
                Paxlovid and Lagevrio are oral medications that can be taken with or without food.
                It’s important to finish all prescribed medication to help them be as effective as possible. </p>
        </div>
    </DashLayout>
);
}

export default Treatment;
