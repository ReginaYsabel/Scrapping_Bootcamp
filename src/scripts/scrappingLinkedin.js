// import axios from 'axios';
import axios from 'axios';
import { autoScroll } from '../utils/autoScroll';
import { $, $$ } from '../utils/selectors';
import { waitForElement } from '../utils/waitForElement';
import { selectors } from './scrapper.config';

const {main} = selectors;
async function resolveIsReady(){
    
    await waitForElement(main.profileImg);
    await autoScroll();
}

async function scrap(){
    await waitForElement(main.contactInfoA);
    // contactInfoE.click();
    // const contatInfoS =  await waitForElement(main.contacInfoS);
    const response = await axios.get('https://www.linkedin.com/voyager/api/identity/profiles/andreina-nathaly-rodriguez-martinez/profileContactInfo',
        {
            headers:{
                'csrf-token':'ajax:1511945238015895291'
            }
        });
    console.log(response.data);
    
    const arrayExperience = [];
    $$(main.generalContainer('experience')).forEach((e)=>{
        arrayExperience.push($('span[aria-hidden="true"]',e).textContent);
    });

    console.log(arrayExperience);

}

async function start(){
    await resolveIsReady();
    await scrap();
}

start();