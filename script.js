// DOM Elements
const searchInput = document.getElementById("searchInput");
const dateFilter = document.getElementById("dateFilter");
const darkModeToggle = document.getElementById("darkModeToggle");
const notesContainer = document.getElementById("notesContainer");

let filteredNotes = [...notesData];

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    populateDateFilter();
    renderNotes();
    loadDarkMode();
    setLastUpdated();
});

// Dark Mode Toggle
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    darkModeToggle.setAttribute("aria-pressed", document.body.classList.contains("dark-mode"));
});

// Load Dark Mode Preference
function loadDarkMode() {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️ Light Mode";
        darkModeToggle.setAttribute("aria-pressed", "true");
    }
}

// Set the last-updated text. Prefer the latest note date if available.
function setLastUpdated() {
    const el = document.getElementById('lastUpdated');
    if (!el) return;

    try {
        if (Array.isArray(notesData) && notesData.length > 0) {
            const dates = notesData
                .map(n => new Date(n.date))
                .filter(d => !isNaN(d));
            if (dates.length > 0) {
                const latest = new Date(Math.max.apply(null, dates));
                el.textContent = latest.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
                return;
            }
        }
    } catch (e) {
        // fall back to today's date
    }

    const today = new Date();
    el.textContent = today.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

// Populate Date Filter
function populateDateFilter() {
    const dates = [...new Set(notesData.map(note => note.date))];
    dates.forEach(date => {
        const option = document.createElement("option");
        option.value = date;
        option.textContent = date;
        dateFilter.appendChild(option);
    });
}

// Search & Filter
searchInput.addEventListener("input", filterNotes);
dateFilter.addEventListener("change", filterNotes);

function filterNotes() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedDate = dateFilter.value;

    filteredNotes = notesData.filter(note => {
        const matchesSearch = note.title.toLowerCase().includes(searchTerm) ||
                              note.content.toLowerCase().includes(searchTerm);
        const matchesDate = !selectedDate || note.date === selectedDate;
        return matchesSearch && matchesDate;
    });

    renderNotes();
}

// Render Notes
function renderNotes() {
    notesContainer.innerHTML = "";

    if (filteredNotes.length === 0) {
        notesContainer.innerHTML = '<div class="no-results">No notes found. Try adjusting your search or filters.</div>';
        return;
    }

    filteredNotes.forEach(note => {
        const noteEl = document.createElement("div");
        noteEl.className = "note";
        noteEl.innerHTML = `
            <div class="note-title">${note.title}</div>
            <div class="note-date">📅 ${note.date}</div>
            <div class="note-content">${note.content}</div>
        `;
        notesContainer.appendChild(noteEl);
    });
}
