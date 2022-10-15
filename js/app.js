let chat = document.querySelector("#chat_link");


let chatsData = [{
    id: "one",
    name: "박원용",
    desc: "상태메세지를 입력하세요.",
    time: "22:12",
    alret: "",
},
{
    id: "two",
    name: "박서연",
    desc: "상태메세지를 입력하세요.",
    time: "12:34",
    alret: "",
},]

let chats = () => {
    return(chat.innerHTML = chatsData.map((x)=>{

        let {id, name, desc, time, alret} = x;
        return` <div class="user-component">
    <div class="user-component__column">
    <img src=img/user.png class="user-component__avatar">
            <div class="user-component__text">
                <h4 class="user-component__title">${name}</h4>
                <h6 class="user-component__subtitle">${desc}</h6>
                </div>
                </div>
        <div class="user-component__column">
                <span class="user-component__time">${time}</span>
                <span class="badge">${alret}</span>
        </div>
        </div>`
    }).join(""));
    };
    


chats();
