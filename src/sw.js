/* eslint-disable no-undef */
/*
chrome.action.onClicked.addListener(async tab => {

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['./scripts/scrappingLinkedin.js']
    });
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['./scripts/scrapping.candidates.js']
    });


}
);*/
 chrome.runtime.onConnect.addListener(port=>{
    if(port.name == 'scrapService'){
        port.onMessage.addListener(message=>{
            fetch('http://localhost:3000/profiles',{
                method:'POST',
                headers:{'Content-type':'application/json'},
                body:JSON.stringify(message)
            })
        })

    }
    if(port.name == 'scrapInit'){
        port.onMessage.addListener(message=>{
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['./scripts/scrappingLinkedin.js']
            });
        })

    }
 })