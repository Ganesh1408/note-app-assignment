const titleEl = document.getElementById("title");
const contentEl = document.getElementById("content");
const tagEl = document.getElementById("tag");
const buttonEl = document.getElementById("save-button");
const listEl = document.getElementById("note-list");

window.onload = function() {
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        renderNotes(savedNotes);
    };
    

buttonEl.addEventListener("click", function() {
    listEl.style.display = "block"; // Show the list when a note is added
        const time = new Date().toLocaleString();
        if (titleEl.value === "" || contentEl.value === ""|| tagEl.value === "") {  
            alert("Please fill in all fields.");
            return;
        }

        const note ={
                title: titleEl.value,
                content: contentEl.value,
                tag: tagEl.value,
                time: time
        }

        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        console.log(savedNotes);

        savedNotes.push(note);
        localStorage.setItem("notes", JSON.stringify(savedNotes));
        titleEl.value = "";
        contentEl.value = "";   
        tagEl.value = "";
        renderNotes(savedNotes);
})

function renderNotes(notes) {
        listEl.innerHTML = ""; // Clear previous notes
        if (notes.length === 0) {
            console.log("No notes to display."); 
        } else {
            console.log("Rendering notes:", notes); // Debugging line
        
        }
        
        notes.forEach(function(note, index) {
            const noteEl = document.createElement("div");
            noteEl.classList.add("note");
            noteEl.innerHTML = `
                <h2 class="note-heading">${note.title}</h2>
                <p class="note-content">${note.content}</p>
                <p class="note-tag"><strong>Tag:</strong> ${note.tag}</p>
                <p><strong>Time:</strong> ${note.time}</p>
                <button  class="delete-button" data-index="${index}">Delete</button>
        
            `;
            listEl.appendChild(noteEl);

        });
    }

    listEl.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-button")) {
            const index = event.target.getAttribute("data-index");
            const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
            savedNotes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(savedNotes));
            renderNotes(savedNotes);
        }
    
    })