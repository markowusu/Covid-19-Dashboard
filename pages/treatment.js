import React from 'react';
import DashLayout from '../components/DashLayout';
import Image from 'next/image';


const Treatment =()=>{
return (
    <DashLayout>
        <div class="max-w-4xl">
            <h1 class="text-4xl font-bold">1. COVID-19 antiviral medications</h1>
            <p class="font-light">You may have heard about monoclonal antibody and convalescent plasma treatments. But the newest treatments are antiviral pills, a class of medication used to treat infections caused by viruses like COVID-19.</p>
           <br/> <p class="font-medium">“Currently, there are two antiviral medications that have received Emergency Use Authorization
            (EUA) by the U.S. Food and Drug Administration to treat COVID-19, ritonavir-boosted nirmatrelvir 
            (Paxlovid) and molnupiravir (Lagevrio),” said Jason Brown, MD, 
            the chief medical officer for Banner Pharmacy Services in Phoenix, AZ. 
            “Both antiviral medications have been proven to be effective in reducing a patient's chances of being hospitalized,
             or dying, from COVID-19 and can be taken in the comfort of your own home.”</p>
             <Image src='/images/dont-img.png' height={200} width={300}/>
             <br/>
             <br/>
             <h1 class="text-4xl font-bold">2.Who can take COVID-19 oral antivirals?</h1>
             <p>Both medications are available by prescription, but they aren't for everyone. 
             <Image src='/images/283.jpg' height={200} width={300}/>
             </p>
             <br/>
             <p class="font-medium">
             Paxlovid is the preferred oral antiviral for COVID-19 treatment.
              However, you may not be able to take Paxlovid if you have severe renal or liver disease and/or are taking certain medications due to drug interactions. Lagevrio should only be taken if you are unable to receive Paxlovid or a monoclonal antibody.You shouldn’t take Lagevrio 
              if you’re pregnant or breastfeeding and/or 17 years old and younger as it can slow bone and cartilage growth.The FDA has authorized Paxlovid for people ages 12 and older who weigh at least 88 pounds and are high risk.
              Lagevrio is authorized for adults 18 and older who are high risk when alternative COVID-19 treatment options authorized by 
             FDA (i.e., Paxlovid) are not accessible or clinically appropriate.
             </p>
             <br/>
             <p class="font-medium">
                “Those who may benefit most from COVID-19 therapy are patients with high risk factors 
                or health conditions that put them at risk for developing severe disease,” Dr. Brown said.
                “Some of these risk factors include patients who are overweight, obese, have heart conditions, diabetes, cancer,
                 chronic liver disease, chronic lung disease, pregnancy or are over age 50
                 </p>
                  <br/>
                 <h1 class="text-4xl font-bold">3. What are the potential side effects of taking COVID-19 antivirals?</h1>
                <br/><p class="font-medium">As with any medication, you could experience side effects with antivirals. <Image src='/images/symptoms.jpg' height={200} width={300}/></p>
                <br/><p class="font-medium"> Some side effects from oral antivirals include altered sense of taste, diarrhea, nausea, dizziness
                    , high blood pressure and muscle aches.
                “Your provider will carefully discuss the risks and benefits with you,
                including any potential drug interactions,
             before prescribing any medication,” Dr. Brown said.</p>
             <br/>
             <h1 class="text-4xl font-bold" >4. When should COVID-19 antiviral medications be taken?</h1><br/>
             <p p class="font-medium"> <Image src='/images/symptoms-img.png' height={200} width={300}/> “Oral antivirals are most effective if prescribed as soon as possible and within 5 days of onset of symptoms,” Erickson said.
                Paxlovid and Lagevrio are oral medications that can be taken with or without food.
                It’s important to finish all prescribed medication to help them be as effective as possible. </p>
        </div>
    </DashLayout>
);
}

export default Treatment;
