document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-tabs]").forEach(tabsEl => {
        const buttons = tabsEl.querySelectorAll("[data-tab-button]");
        const panels = tabsEl.querySelectorAll("[data-tab-panel]");

        // Activate the first tab by default
        if (buttons.length > 0 && panels.length > 0) {
            buttons[0].classList.add("tab-active");
            panels[0].classList.add("tab-active");
        }

        buttons.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                // Remove active from all
                buttons.forEach(b => b.classList.remove("tab-active"));
                panels.forEach(p => p.classList.remove("tab-active"));

                // Activate selected
                btn.classList.add("tab-active");
                panels[i].classList.add("tab-active");
            });
        });
    });
});