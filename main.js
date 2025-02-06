const container = document.getElementById("main");

container.innerHTML = "";

function render () {
    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth > 637) {
        container.innerHTML = `
        <div class="line">
            We're here <div class="transperent"></div> to make
        </div>
        <div class="line">
            healthy <div class="transperent"></div> living effortless,
        </div>
        <div class="line">
            so you can <div class="transperent"></div> live longer
        </div>
        <div class="line">
            and happier <div class="transperent"></div>
        </div>`;
    } else {
        container.innerHTML = `
        <div class="line">
            We're here <div class="transperent"></div>
        </div>
        <div class="line">    
            to <div class="transperent"></div> make
        </div>
        <div class="line">
            <div class="transperent"></div>healthy living
        </div>
        <div class="line">
            effortless, so you
        </div>
        <div class="line">
            can <div class="transperent"></div> live longer
        </div>
        <div class="line">
            and happier <div class="transperent"></div>
        </div>`;
    }

    const transperentBlocks = document.querySelectorAll(".transperent");
    transperentBlocks.forEach((block) => {
        block.innerHTML = `<video autoplay muted loop id="bg-video">
            <source src="./video.mp4" type="video/mp4">
        </video>`;
    })
}

window.addEventListener("resize", () => {
    render();
})

render();