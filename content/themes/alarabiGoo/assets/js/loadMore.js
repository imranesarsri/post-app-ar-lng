class LoadButton {
    constructor(button) {
        this.nextDom = document;
        this.loadBtnElement = button;
        this.container = button
            .closest(".gh-archive-feed-wrapper")
            .querySelector(".gh-posts-feed");

        if (button) {
            this.toLoadMore();
            this.loadNextPage();
        }
    }

    async loadNextPage() {
        const next = this.nextDom.querySelector('link[rel="next"]');

        if (next) {
            let url = next.href;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    this.loadBtnElement.style.display = "none";
                    return;
                }
                this.nextDom = document
                    .createRange()
                    .createContextualFragment(await response.text());
            } catch {
                this.loadBtnElement.style.display = "none";
            }
        } else {
            this.loadBtnElement.style.display = "none";
        }
    }

    toLoadMore() {
        this.loadBtnElement.addEventListener("click", () => {
            this.loadNextPage();

            for (const post of this.nextDom.querySelectorAll(
                ".gh-posts-feed .gh-posts-feed-post"
            )) {
                this.container.appendChild(post);
            }
        });

        this.loadBtnElement.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                this.loadNextPage();
                for (const post of this.nextDom.querySelectorAll(
                    ".gh-posts-feed .gh-posts-feed-post"
                )) {
                    this.container.appendChild(post);
                }
            }
        });
    }
}

export const loadMore = () => {
    const btnsLoad = document.querySelectorAll(".gh-load-more-button");

    if (!btnsLoad.length) {
        return;
    }

    btnsLoad.forEach((btn) => new LoadButton(btn));
};
