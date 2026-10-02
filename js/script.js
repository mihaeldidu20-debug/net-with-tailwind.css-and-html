/* =========================================
   STREAMFLIX - VERSION 2 JAVASCRIPT
========================================= */


/* =========================================
   1. SEARCH
========================================= */

const searchButton = document.getElementById("searchButton");

if (searchButton) {

    searchButton.addEventListener("click", function () {

        const searchTerm = prompt(
            "What movie or series are you looking for?"
        );

        if (!searchTerm) {
            return;
        }

        const cards = document.querySelectorAll("article");

        let found = false;

        cards.forEach(function (card) {

            const text = card.textContent.toLowerCase();

            if (text.includes(searchTerm.toLowerCase())) {

                card.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                card.classList.add(
                    "ring-4",
                    "ring-red-500"
                );

                found = true;

                setTimeout(function () {

                    card.classList.remove(
                        "ring-4",
                        "ring-red-500"
                    );

                }, 2500);

            }

        });

        if (!found) {

            alert(
                `"${searchTerm}" was not found in the movie collection.`
            );

        }

    });

}


/* =========================================
   2. WATCH NOW BUTTON
========================================= */

const watchButtons = document.querySelectorAll("button");

watchButtons.forEach(function (button) {

    if (
        button.textContent
            .trim()
            .includes("Watch Now")
    ) {

        button.addEventListener("click", function () {

            alert(
                "▶ Now playing: The Hostage\n\n" +
                "Enjoy your movie!"
            );

        });

    }

});


/* =========================================
   3. MY LIST
========================================= */

const myListButtons = document.querySelectorAll("button");

myListButtons.forEach(function (button) {

    if (
        button.textContent
            .trim()
            .includes("My List")
    ) {

        button.addEventListener("click", function () {

            if (
                button.textContent.includes("My List")
            ) {

                button.textContent = "✓ Added";

                button.classList.remove(
                    "bg-white/10"
                );

                button.classList.add(
                    "bg-red-600"
                );

            } else {

                button.textContent = "+ My List";

            }

        });

    }

});


/* =========================================
   4. GENRE FILTER
========================================= */

const genreButtons = document.querySelectorAll(
    "section button"
);

genreButtons.forEach(function (button) {

    const genre = button.textContent.trim();

    const genres = [
        "All",
        "Action",
        "Comedy",
        "Horror",
        "Drama",
        "Sci-Fi"
    ];

    if (!genres.includes(genre)) {
        return;
    }

    button.addEventListener("click", function () {

        genreButtons.forEach(function (btn) {

            const btnText = btn.textContent.trim();

            if (genres.includes(btnText)) {

                btn.classList.remove(
                    "bg-red-600"
                );

                btn.classList.add(
                    "bg-white/5"
                );

            }

        });


        button.classList.remove(
            "bg-white/5"
        );

        button.classList.add(
            "bg-red-600"
        );


        if (genre === "All") {

            showAllMovies();

        } else {

            filterMovies(genre);

        }

    });

});


/* =========================================
   5. FILTER MOVIES
========================================= */

function filterMovies(genre) {

    const movieCards = document.querySelectorAll(
        "#movies article"
    );

    movieCards.forEach(function (card) {

        const movieInfo =
            card.textContent.toLowerCase();

        /*
            The current action movie section
            contains Action movies.

            Other genres are displayed as
            unavailable for now.
        */

        if (genre === "Action") {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

    if (genre !== "Action") {

        alert(
            `${genre} movies will be added to this section soon.`
        );

    }

}


/* =========================================
   6. SHOW ALL MOVIES
========================================= */

function showAllMovies() {

    const movieCards = document.querySelectorAll(
        "#movies article"
    );

    movieCards.forEach(function (card) {

        card.style.display = "block";

    });

}


/* =========================================
   7. MOVIE CARD INTERACTION
========================================= */

const movieCards = document.querySelectorAll(
    "#trending article, #movies article"
);

movieCards.forEach(function (card) {

    card.addEventListener("click", function (event) {

        /*
            Don't trigger if the user clicked
            an actual button inside the card.
        */

        if (
            event.target.tagName === "BUTTON"
        ) {
            return;
        }


        const titleElement =
            card.querySelector("h3");

        if (!titleElement) {
            return;
        }


        const title =
            titleElement.textContent.trim();


        alert(
            `🎬 ${title}\n\n` +
            "Movie selected.\n" +
            "The player will be connected later."
        );

    });

});


/* =========================================
   8. TRENDING MOVIE PLAY BUTTONS
========================================= */

const playButtons =
    document.querySelectorAll("#trending button");

playButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.stopPropagation();

        const card =
            button.closest("article");

        if (!card) {
            return;
        }

        const titleElement =
            card.querySelector("h3");

        if (!titleElement) {
            return;
        }

        const title =
            titleElement.textContent.trim();

        alert(
            `▶ Playing ${title}...`
        );

    });

});


/* =========================================
   9. CONTINUE WATCHING
========================================= */

const continueCards = document.querySelectorAll(
    ".group"
);

continueCards.forEach(function (card) {

    const text =
        card.textContent.toLowerCase();

    if (
        text.includes("episode") &&
        text.includes("continue")
    ) {

        card.addEventListener("click", function () {

            const titleElement =
                card.querySelector("h3");

            if (!titleElement) {
                return;
            }

            const title =
                titleElement.textContent.trim();

            alert(
                `▶ Continuing: ${title}`
            );

        });

    }

});


/* =========================================
   10. VIEW ALL TRENDING
========================================= */

const viewAllButtons =
    document.querySelectorAll("button");

viewAllButtons.forEach(function (button) {

    if (
        button.textContent
            .trim()
            .includes("View all")
    ) {

        button.addEventListener("click", function () {

            const trending =
                document.getElementById("trending");

            if (trending) {

                trending.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }

});


/* =========================================
   11. NAVIGATION LINKS
========================================= */

const navigationLinks =
    document.querySelectorAll("header nav a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const href =
            link.getAttribute("href");

        /*
            Allow links such as #trending
            and #movies to scroll normally.
        */

        if (
            href &&
            href.startsWith("#")
        ) {

            const section =
                document.querySelector(href);

            if (section) {

                event.preventDefault();

                section.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});


/* =========================================
   12. MOBILE MENU MESSAGE
========================================= */

const mobileLogo =
    document.querySelector("header nav");

if (mobileLogo) {

    console.log(
        "StreamFlix Version 2 loaded successfully."
    );

}


/* =========================================
   13. FOOTER LINK INTERACTION
========================================= */

const footerLinks =
    document.querySelectorAll("footer a");

footerLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const linkName =
            link.textContent.trim();

        alert(
            `${linkName} page selected.`
        );

    });

});


/* =========================================
   14. PAGE LOAD
========================================= */

window.addEventListener("load", function () {

    console.log(
        "🎬 StreamFlix is ready!"
    );

});