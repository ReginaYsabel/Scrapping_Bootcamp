document.querySelector('body > button').addEventListener('click', async tab=>{
   await chrome.tabs.update(
    tab.id,
    {
        url:'https://www.linkedin.com/search/results/people/?keywords=fullstack'
    }
   )

   
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['./scripts/scrappingLinkedin.js']
    });

    chrome.runtime.onConnect.addListener(port=>{
        if(port.name == 'scrapService'){  
        }
        
     })
   
});  
