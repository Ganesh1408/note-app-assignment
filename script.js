
const titleEl = document.getElementById("title")
const contentEl = document.getElementById("content")
const tagButton = document.getElementById("tagButton")
const tagEl = document.getElementById("tag")
const listEl = document.getElementById("note-list")
const listItem = document.getElementById("list-item")
const buttonEl = document.getElementById("save-button")
const note_title = document.getElementById("note-heading")
const note_content = document.getElementById("note-content")
const note_tag = document.getElementById("note-tag") 
const deleteEl = document.getElementById("delete")

const timeStamp = document.getElementById("time")
const time = new Date().toLocaleString()
 timeStamp.textContent = time




buttonEl.addEventListener("click",(e)=>{
   listEl.style.display="block"
   localStorage.setItem("list",JSON.stringify(listEl))
   
    note_title.textContent = titleEl.value;
    note_content.textContent = contentEl.value;
    
   
    
})
tagButton.addEventListener("click",()=>{
        note_tag.textContent = tagEl.value
})

