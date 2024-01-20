const data = {
            "Tic Tac Toe (AI)": {
                post: "In this Game Your Opponent is AI",
                image: "https://cdn-icons-png.flaticon.com/512/2241/2241465.png",
                url: "Tic Tac Toe AI.html"
            },
            "Tic Tac Toe": {
                post: "In this Game Your Opponent is Your Friend",
                image: "https://cdn-icons-png.flaticon.com/512/2241/2241465.png",
                url: "Tic Tac Toe.html"
            },
            "Minesweeper": {
                post: "Minesweeper is a logic puzzle video game genre generally played on personal computers",
                image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/47264ce6-f9be-440a-8fe5-de7b40f003e7/dei6h4b-df3577af-65e0-46bc-99c7-ff43b23650ec.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ3MjY0Y2U2LWY5YmUtNDQwYS04ZmU1LWRlN2I0MGYwMDNlN1wvZGVpNmg0Yi1kZjM1NzdhZi02NWUwLTQ2YmMtOTljNy1mZjQzYjIzNjUwZWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rtXP_e9oMVKCSuY0zNtE68mFA927FUWDVxu3rfiJryQ",
                url: "Minesweeper.html"
            },
            "Blocks": {
                post: "Block games feature blocks as a gameplay element or visual style.",
                image: "Block Game.png",
                url: "Blocks.html"
            },
            "Chess": {
                post: "Chess is a board game for two players, called White and Black",
                image: "https://cdn-icons-png.flaticon.com/512/4363/4363846.png",
                url: "Chess.html"
            },
            "Magic Square": {
                post: "In recreational mathematics, a square array of numbers",
                image: "Magic Square.png",
                url: "Magic Sqaure.html"
            },
            "Rock Paper Scissors": {
                post: "Rock paper scissors is an intransitive hand game, usually played between two people",
                image: "https://img.freepik.com/premium-vector/hands-playing-rock-paper-scissors-game-flat-design-style-vector-illustration_540284-598.jpg?w=360",
                url: "Rock Paper.html"
            },
            "Puzzle": {
                post: "Puzzle, riddle, enigma refer to something baffling or confusing that is to be solved.",
                image: "https://cdn-icons-png.flaticon.com/512/7468/7468192.png",
                url: "Puzzle.html"
            }
        };
        function searchTitles() {
        const searchInput = document.getElementById("search").value.toLowerCase();
        const resultsContainer = document.getElementById("results");
        const hiddenContent = document.getElementById("hidden-content");

        // Check if the search input is empty
        if (searchInput === "") {
            resultsContainer.innerHTML = ""; // Clear previous results
            hiddenContent.style.display = "none"; // Hide hidden content
            return;
        }

        resultsContainer.innerHTML = ""; // Clear previous results

        Object.keys(data).forEach(title => {
            const lowerCaseTitle = title.toLowerCase();
            if (lowerCaseTitle.includes(searchInput)) {
                const resultTitle = document.createElement("div");
                resultTitle.classList.add("result-title");
                resultTitle.textContent = title;
                resultTitle.onclick = () => showHiddenContent(title);
                resultsContainer.appendChild(resultTitle);
            }
        });
    }

    function showHiddenContent(title) {
        const hiddenContent = document.getElementById("hidden-content");
        const hiddenTitle = document.getElementById("hidden-title");
        const hiddenPost = document.getElementById("hidden-post");
        hiddenTitle.textContent = title;
        hiddenPost.innerHTML = `
            <p class="pt"><b>${data[title].post}</b></p>
            <img src="${data[title].image}" alt="Image for ${title}">
            <p class="btnh"><a href="${data[title].url}" class="at">Try Now</a></p><br>
        `;
        hiddenContent.style.display = "block";
    }
