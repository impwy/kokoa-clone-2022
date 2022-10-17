const moreSuggestions = document.querySelector(".more-suggestions");

let suggestionsData = [
    {
    icon :`<i class="fa-brands fa-github"></i>`,
    text : "gihub",
    },
    {
    icon :`<i class="fa-brands fa-twitter"></i>`,
    text : "twitter",
    },
    {
    icon :`<i class="fa-brands fa-github"></i>`,
    text : "gihub",
    },
    {
    icon :`<i class="fa-brands fa-github"></i>`,
    text : "gihub",
    },
];

let suggestion = ()=>{
    return (moreSuggestions.innerHTML = suggestionsData.map((y)=>{
        let {icon, text} = y;
        return `
            <div class="more-suggestions__icons">
            <div class="more-suggestions__icon">
                <div class="more-suggestions__icon-image">
                    ${icon}
                </div>
                <span class="more-suggestions__icon-text">${text}</span>
            </div>
        </div>
        `}).join(""));
    
};
suggestion();