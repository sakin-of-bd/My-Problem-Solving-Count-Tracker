const platforms = [
    { name: "Codeforces", username: "sakin_of_bd", url: "https://codeforces.com/profile/sakin_of_bd" },
    { name: "CodeChef", username: "sakin_of_bd", url: "https://www.codechef.com/users/sakin_of_bd" },
    { name: "LeetCode", username: "sakin_of_bd", url: "https://leetcode.com/sakin_of_bd/" },
    { name: "Vjudge", username: "noob_sakin", url: "https://vjudge.net/user/noob_sakin" },
    { name: "AtCoder", username: "sakin_of_bd", url: "https://atcoder.jp/users/sakin_of_bd" },
    { name: "HackerRank", username: "noob_sakin", url: "https://www.hackerrank.com/noob_sakin" }
];

async function loadData() {
    try {
        const response = await fetch("data.json");
        const data = await response.json();
        renderCards(data);
    } catch (error) {
        console.error("Error loading data.json:", error);
        document.getElementById("cardsContainer").innerHTML = "<p style='color:white;'>⚠️ Unable to load data</p>";
    }
}

function renderCards(data) {
    const container = document.getElementById("cardsContainer");
    container.innerHTML = "";

    let total = 0;

    platforms.forEach(p => {
        const solved = data[p.name.toLowerCase()] || 0;
        total += solved;

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h2>${p.name}</h2>
            <p class="username">${p.username}</p>
            <p class="solved">${solved}</p>
            <a href="${p.url}" target="_blank">View Profile</a>
        `;
        container.appendChild(card);
    });

    const totalCard = document.createElement("div");
    totalCard.className = "card total-card";
    totalCard.innerHTML = `
        <h2>Total Solved</h2>
        <p class="solved">${total}</p>
    `;
    container.appendChild(totalCard);
}

loadData();
