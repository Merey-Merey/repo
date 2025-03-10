async function loadMenu() {
    const sheetId = "1Ao72GlvvBddlvMuJK_EMVjW7HdeRqN4l1TeFIVdLTRY"; 
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=Лист1`;
   
    try {
        const response = await fetch(url);
        const text = await response.text();
        const json = JSON.parse(text.substring(47, text.length - 2));

        let menuHTML = "";
        json.table.rows.forEach(row => {
            let name = row.c[0]?.v || "No Name"; 
            let imageUrl = row.c[1]?.v;          
            let category = row.c[2]?.v || "all"; 
            if (imageUrl && imageUrl.includes("drive.google.com")) {
                const fileId = imageUrl.match(/[-\w]{25,}/);
                if (fileId) {
                    imageUrl = `https://drive.google.com/uc?export=view&id=${fileId[0]}`;
                } else {
                    imageUrl = "https://via.placeholder.com/150";
                }
            } else if (!imageUrl || !imageUrl.startsWith("http")) {
                imageUrl = "https://via.placeholder.com/150";
            }

            menuHTML += `
                <div class="house-box" data-category="${category}">
                    <img src="${imageUrl}" onerror="this.onerror=null; this.src='https://via.placeholder.com/150';">
                    <h2>${name}</h2>
                </div>
            `;
        });

        document.getElementById("menu").innerHTML = menuHTML;
        activateFiltering();

    } catch (error) {
        console.error("Error loading data", error);
    }
}

function activateFiltering() {
    const buttons = document.querySelectorAll(".btn");
    const houseBoxes = document.querySelectorAll(".house-box");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.textContent.trim().toLowerCase(); 
            houseBoxes.forEach(box => {
                const category = box.getAttribute("data-category").toLowerCase();
                if (filter === "all" || category === filter) {
                    box.style.display = "inline-block";
                } else {
                    box.style.display = "none";
                }
            });
        });
    });
}
loadMenu();



