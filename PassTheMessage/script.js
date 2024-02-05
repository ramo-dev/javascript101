const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const intro = get('.intro-text')

let BOT_MSGS = ''
async function BOT_MSG(){
    await fetch('./data.json')
    .then(response => {
        if(!response.ok){
            throw new Error('HTTP error! status: ' + response.status);
        }
        else{
            console.log('Success:  ', response.status);
            return response.json()
        }
    }).then(data => {
        BOT_MSGS = data;
        return BOT_MSG
    })
}

BOT_MSG()

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://img.freepik.com/premium-vector/robot-chatbot-assistant-modern-robotic-character_48369-38111.jpg?size=626&ext=jpg&ga=GA1.1.2068637681.1705667847&semt=ais";
const PERSON_IMG = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.2068637681.1705667847&semt=ais";
const BOT_NAME = "BOT";
const PERSON_NAME = "Annuar";

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse();
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})", display: flex"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;
  intro.style.display = 'none'
  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 200;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
