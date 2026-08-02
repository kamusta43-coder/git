
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDph5CIVN17pPvUTakvHpSR3a0RCSkWNh0",
  authDomain: "midnight-writer-website.firebaseapp.com",
  projectId: "midnight-writer-website",
  storageBucket: "midnight-writer-website.firebasestorage.app",
  messagingSenderId: "980397906147",
  appId: "1:980397906147:web:d56540ec3cfba8a4f64dd6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDph5CIVN17pPvUTakvHpSR3a0RCSkWNh0",
  authDomain: "midnight-writer-website.firebaseapp.com",
  projectId: "midnight-writer-website",
  storageBucket: "midnight-writer-website.firebasestorage.app",
  messagingSenderId: "980397906147",
  appId: "1:980397906147:web:d56540ec3cfba8a4f64dd6",
  measurementId: "G-WVWLS7BZ94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
Note: This option uses the modular JavaScript SDK, which provides reduced SDK size.

Learn more about Firebase for web: Get Started, Web SDK API Reference, Samples
// Midnight Writer Publishing System // Save unfinished writing function saveDraft(){ let title = document.getElementById("title").value; let content = document.getElementById("content").value; localStorage.setItem( "draftTitle", title ); localStorage.setItem( "draftContent", content ); alert("Draft saved."); } // Load unfinished writing function loadDraft(){ document.getElementById("title").value = localStorage.getItem("draftTitle") || ""; document.getElementById("content").value = localStorage.getItem("draftContent") || ""; } // Remove draft function clearDraft(){ document.getElementById("title").value=""; document.getElementById("content").value=""; localStorage.removeItem("draftTitle"); localStorage.removeItem("draftContent"); } // Preview writing function previewEssay(){ let title = document.getElementById("title").value; let content = document.getElementById("content").value; document.getElementById("previewTitle").innerHTML = title || "Untitled Essay"; document.getElementById("previewText").innerHTML = content || "Nothing written yet."; } // Publish essay function publishEssay(){ let title = document.getElementById("title").value; let content = document.getElementById("content").value; if(title === "" || content === ""){ alert("Please add a title and essay first."); return; } let essays = JSON.parse( localStorage.getItem("publishedEssays") ) || []; essays.push({ title:title, content:content, date:new Date().toLocaleDateString() }); localStorage.setItem( "publishedEssays", JSON.stringify(essays) ); alert("Essay published."); } // Load archive function loadEssays(){ let archive = document.getElementById("essayArchive"); if(!archive){ return; } let essays = JSON.parse( localStorage.getItem("publishedEssays") ) || []; if(essays.length === 0){ archive.innerHTML = "<p>No essays published yet.</p>"; return; } archive.innerHTML=""; essays.reverse().forEach(function(essay,index){ let card = document.createElement("article"); card.className="card"; card.innerHTML = ` <h2>${essay.title}</h2> <p class="date"> ${essay.date} </p> <p class="excerpt"> ${essay.content.substring(0,200)}... </p> <a class="button" href="read.html?id=${index}"> Read Essay </a> `; archive.appendChild(card); }); } // Load single essay function loadSingleEssay(){ let area = document.getElementById("singleEssay"); if(!area){ return; } let essays = JSON.parse( localStorage.getItem("publishedEssays") ) || []; let params = new URLSearchParams(window.location.search); let id = params.get("id"); let essay = essays[id]; if(!essay){ area.innerHTML = "<h2>Essay not found.</h2>"; return; } area.innerHTML = ` <h1>${essay.title}</h1> <p class="date"> ${essay.date} </p> <div> ${essay.content .split("\n") .map(paragraph => `<p>${paragraph}</p>` ) .join("")} </div> `; }
<button onclick="publishEssay()"> Publish Essay </button>


async function publishEssay(){

  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;

  if(title === "" || content === ""){
    alert("Please add a title and essay first.");
    return;
  }

  try {
    await addDoc(collection(db, "essays"), {
      title: title,
      content: content,
      date: new Date().toLocaleDateString()
    });

    alert("Essay published online!");

  } catch(error) {
    console.error(error);
    alert("Publishing failed.");
  }
}
window.publishEssay = publishEssay;


