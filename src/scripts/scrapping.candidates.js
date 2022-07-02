import { $, $$ } from '../utils/selectors';

const mainUl = $('main > ul');
$$("li .mb1 a",mainUl).forEach(element=>{
    console.log(element)
    element.href.split('?')[0]

    const port = chrome.runtime.connect({name:'scrapElements'});
    port.postMessage({
        urls
    })

})