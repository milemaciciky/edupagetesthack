const showAnswers = () => {
    const script = document.createElement("script");
    script.src = chrome.extension.getURL("src/edu-hack.js");

    (document.head || documentElement).appendChild(script);  
};
