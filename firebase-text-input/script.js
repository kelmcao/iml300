const firebaseConfig = {
  apiKey: "AIzaSyBxF3y4JcRZ6qSzIGaNtVSQwRXQ0t3Kg3w",
  authDomain: "iml300-firebase-demo-fall20252.firebaseapp.com",
  projectId: "iml300-firebase-demo-fall20252",
  storageBucket: "iml300-firebase-demo-fall20252.firebasestorage.app",
  messagingSenderId: "971469607012",
  appId: "1:971469607012:web:ee278f60b607eceb3d8f71",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
let dbRef = db.ref("text");

let chatContainer = document.getElementById("chat-container");
let entry = document.getElementById("text-input-entry");
let share = document.getElementById("text-input-submit");

dbRef.on("child_added", gotText);

function gotText(data) {
  let value = data.val();
  console.log(value);

  const row = document.createElement("div");
  row.className = "response";

  const code = document.createElement("div");
  code.className = "response-code";

  const text = document.createElement("div");
  text.className = "response-text";
  text.textContent = value;

  const labels = ["RECEIVED", "LOGGED", "ARCHIVED", "ON RECORD", "NOTED"];
  const stamp = document.createElement("div");
  stamp.className = "response-stamp";
  stamp.textContent = labels[Math.floor(Math.random() * labels.length)];

  row.appendChild(code);
  row.appendChild(text);
  row.appendChild(stamp);

  // base position for interaction
  row.dataset.offsetX = (Math.random() - 0.5) * 24;
  row.dataset.offsetY = (Math.random() - 0.5) * 12;

  chatContainer.insertBefore(row, chatContainer.firstChild);
}

document.addEventListener("mousemove", (e) => {
  const rows = document.querySelectorAll(".response");

  rows.forEach((row) => {
    const rect = row.getBoundingClientRect();
    const rowX = rect.left + rect.width / 2;
    const rowY = rect.top + rect.height / 2;

    const dx = e.clientX - rowX;
    const dy = e.clientY - rowY;
    const dist = Math.max(Math.sqrt(dx * dx + dy * dy), 80);

    const force = Math.min(140 / dist, 1.5);

    const moveX = -dx * force * 0.08;
    const moveY = -dy * force * 0.08;

    const baseX = parseFloat(row.dataset.offsetX || 0);
    const baseY = parseFloat(row.dataset.offsetY || 0);

    row.style.transform = `translate(${baseX + moveX}px, ${baseY + moveY}px) rotate(${dx * 0.008}deg)`;
  });
});

const textInputSubmit = document.getElementById("text-input-submit");
textInputSubmit.addEventListener("click", submitText);

let textContainerElement = document.getElementById("text-input-entry");

function submitText() {
  let textToSubmit = textContainerElement.value;
  if (!textToSubmit.trim()) return;

  let newKey = dbRef.push().key;
  let updates = {};
  updates[newKey] = textToSubmit;
  dbRef.update(updates);

  textContainerElement.value = "";
}

function submitlock() {
  entry.remove();
  share.value = "Archived.";
  share.disabled = true;
  share.style.width = "auto";
}