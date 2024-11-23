const scroll = document.querySelectorAll(".scroll");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimacao();
}

function addAnimacao() {
    scroll.forEach((scrollElement) => {
        scrollElement.setAttribute('data-animacao', true);

        const scrollInner = scrollElement.querySelectorAll(".scroll__inner");
        scrollInner.forEach((innerElement) => {
            const scrollContent = Array.from(innerElement.children);

            scrollContent.forEach((item) => {
                const duplicarItem = item.cloneNode(true);
                duplicarItem.setAttribute('aria-hidden', true);
                innerElement.appendChild(duplicarItem); // Corrigido o método para appendChild
            });
        });
    });
}
