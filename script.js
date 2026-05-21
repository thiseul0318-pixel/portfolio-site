const container = document.querySelector(".card-container");
let cards = document.querySelectorAll(".card");

let hoverTimer = null;


const gap = 40;
const extra = 60;
const peek = gap + extra;

const originals = Array.from(cards);

originals.forEach(card => {
    const clone = card.cloneNode(true);
    container.appendChild(clone);
});

originals.forEach(card => {
    const clone = card.cloneNode(true);
    container.insertBefore(clone, container.firstChild);
});

cards = document.querySelectorAll(".card");

const sectionWidth =
    container.scrollWidth / 3;

container.scrollLeft = sectionWidth;

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        clearTimeout(hoverTimer);

        hoverTimer = setTimeout(() => {

            if (card.classList.contains("active")) {
                return;
            }

            cards.forEach(c =>
                c.classList.remove("active")
            );

            card.classList.add("active");

            requestAnimationFrame(() => {

                const cardLeft =
                    card.offsetLeft;

                const cardRight =
                    cardLeft +
                    card.offsetWidth;

                const viewLeft =
                    container.scrollLeft;

                const viewRight =
                    container.scrollLeft +
                    container.offsetWidth;

                if (cardRight > viewRight - peek) {

                    container.scrollTo({
                        left:
                            cardRight
                            - container.offsetWidth
                            + peek,
                        behavior: "smooth"
                    });

                }

                if (cardLeft < viewLeft + peek) {

                    container.scrollTo({
                        left:
                            cardLeft - peek,
                        behavior: "smooth"
                    });

                }

            });

        }, 250);

    });

});

container.addEventListener("scroll", () => {

    const max =
        container.scrollWidth;

    const third =
        max / 3;

    if (container.scrollLeft <= 0) {

        container.scrollLeft = third;

    }

    if (container.scrollLeft >= max - container.offsetWidth) {

        container.scrollLeft = third;

    }

});

/* 연도 버튼 */

const yearBtns = document.querySelectorAll(".year-btn");

const yearImage =
    document.getElementById("yearImage");

const yearText =
    document.getElementById("yearText");

/* 연도별 데이터 */

const projectData = {

    2022: {

        image:
            "img/Webubbly.png",

        text: `
            <h2>
                WEBUBBLY
            </h2>

            <p>
                프로젝트의 팀장으로 팀원들 의견을 조율하며 프로젝트를 이끌었습니다.
                <br><br>
                전체적인 일정 체크 및 앨범, 뮤직비디오 기획과 연출을 담당하여
                프로젝트 콘셉트와 방향성을 설정하였고 뮤직비디오에 '청춘'이라는 주제를
                담아내기 위해 노력했습니다.
                <br><br>
                또한 앨범 로고와 커버 디자인을 비롯해 유튜브 채널 프로필과 배너 디자인을 담당했습니다.
                '청춘'이라는 주제를 시각적으로 표현하기 위해 메인 컬러인 블루를 활용했으며,
                앞으로도 이어나갈 우리의 이야기 Our page라는 프로젝트를 담기 위해
                책과 음악을 결합하여 디자인하였습니다.
                <br><br>
                뮤직비디오 촬영을 위해 현장 로케이션을 하며, 팀원들과 함께 촬영장소를 선정하여 진행하였고
                촬영당일 팀원들과의 역할분담을 통해 원활한 촬영이 이루어질 수 있도록 노력하였습니다.
            </p>

            <p>역할 : 팀장 / 기획 및 연출 / 앨범 로고 및 커버 디자인 <br>
            기간 : 2022.09 ~ 2022.12 <br>
            사용 툴 : MS Office, Procreate</p>
        `
    },

    2023: {

        image:
            "img/project2023.jpg",

        text: `
            <h2>
                2023-24 이무진 전국투어 콘서트 [별책부록]
            </h2>

            <p>
                공연의 연출팀 AD로서 공연의 전반적인 연출과 현장 진행을 도왔습니다.
                <br><br>
                공연이 원활하게 진행이 될 수 있도록, 공연에 필요한 문서들과 소품들을 준비하고
                공연 당일에는 백스테이지에서 아티스트를 비롯해 스태프들과 소통하며 현장진행에 힘썼습니다.
                <br><br>
                또한 전국투어를 하며 각 지역별 공연장의 동선들을 파악하여 아티스트&밴드 세션들의 동선을 정리하고
                리허설을 통해 공연의 흐름을 확인하며 공연을 준비하였습니다.
            </p>

            <p>역할 : AD <br>
            기간 : 2023.11 ~ 2024.01 <br>
            사용 툴 : MS Office, Photoshop, Premiere</p>
        `
    },

    2024: {

        image:
            "img/project2024.png",

        text: `
            <h2>
                2024 VIVIZ WORLD TOUR [V.hind:Love and Tears]
            </h2>

            <p>
                공연 전 아티스트&소속사와의 미팅을 통해 공연의 콘셉트와 방향성을 파악하고,
                공연을 연출하기 위한 연출안을 작성하였습니다.
                <br>
                곡별 연출 아이디어를 제안하고, 연출 효과들을 구체적으로 생각하며 공연 연출에 대한
                안목을 키울 수 있었습니다. 또한 공연에 필요한 문서를 작성하고, 필요 소품들을 준비하며
                공연에 필요한 전반적인 연출 업무들을 도왔습니다.
                <br><br>
                해외투어를 하며 국내와는 다른 공연장을 경험할 수 있었고, 현지에서 발생되는 문제들을 해결하기 위해
                 현지 스태프들과 소통하며 공연이 원활하게 진행될 수 있도록 노력하였습니다.
                <br>
                해외투어의 경우 공연장별 제약도 있고, 동선 및 구성들이 달라지는 부분들이 있어 그에 맞게
                대처하며 공연을 준비하는 과정에서 유연하게 대처하는 능력을 키울 수 있었습니다.
            </p>

            <p>역할 : AD <br>
            기간 : 2024.06 ~ 2024.09 <br>
            사용 툴 : MS Office, Photoshop, Premiere, lilustrator & Indisign</p>
        `
    },

    2025: {

        image:
            "img/project2025.png",

        text: `
            <h2>
                2025 DONG HAE FANCON [EAST COST: WAVE]
            </h2>

            <p>
                공연전 기존에 아티스트가 진행하였던 공연 영상들을 참고하며, 셋리스트와 코너 구성들을 작가님과
                소통하며 방향성을 정리하는 일을 도왔습니다. 이후 무대 시안과 연출안들을 작성하며 소속사&아티스트 미팅을 준비했습니다.
                <br>
                곡별로 레퍼런스들을 찾으며 이미지를 구체화하였고, 그에 어울리는 연출 효과들도 고민하였습니다.
                또한 코너에 필요한 물품들을 디자인하고, 제작하였으며 VCR 영상에 필요한 소품들도 준비하였습니다.
                <br><br>
                VCR 촬영 당일에는 촬영을 위한 소품들을 사전에 세팅하고 실시간으로 모니터링을 진행하며 촬영진행을 도왔습니다.
                <br>
                공연 당일에는 백스테이지에서 FOH와 소통하며 공연이 원활하게 진행될 수 있게 도왔고,
                공연 당일 로비에서 관객들의 참여가 필요한 코너 소품들을 비치하고 공연이 시작되기 전 회수한 뒤 정리하여 코너 진행에
                문제가 생기지 않도록 하였습니다.
            </p>

            <p>역할 : AD <br>
            기간 : 2025.04 ~ 2025.04 <br>
            사용 툴 : MS Office, Photoshop, Premiere, lilustrator & Indisign</p>
        `
    }
};

/* 클릭 이벤트 */

yearBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        const year =
            btn.dataset.year;

        /* active 변경 */

        yearBtns.forEach(b =>
            b.classList.remove("active")
        );

        btn.classList.add("active");

        /* 이미지 변경 */

        yearImage.style.backgroundImage =
            `url(${projectData[year].image})`;

        yearImage.style.backgroundSize =
            "cover";

        yearImage.style.backgroundPosition =
            "center";

        /* 텍스트 변경 */

        yearText.innerHTML =
            projectData[year].text;

    });

});

/* 처음 로드 */

window.addEventListener(
    "DOMContentLoaded",
    () => {

        const defaultYear =
            "2022";

        yearImage.style.backgroundImage =
            `url(${projectData[defaultYear].image})`;

        yearImage.style.backgroundSize =
            "cover";

        yearImage.style.backgroundPosition =
            "center";

        yearText.innerHTML =
            projectData[defaultYear].text;

    }
);

const designItems =
    document.querySelectorAll(".design-item");

const modal =
    document.querySelector(".image-modal");

const modalImage =
    document.querySelector(".modal-image");

/* 이미지 클릭 */

designItems.forEach(item => {

    item.addEventListener("click", () => {

        modal.classList.add("show");

        modalImage.src = item.src;

    });

});

/* 배경 클릭하면 닫기 */

modal.addEventListener("click", () => {

    modal.classList.remove("show");

});

/* Scroll To Top 버튼 */

const scrollTopBtn =
    document.querySelector(".scroll-top");

/* 스크롤하면 버튼 보이기 */

window.addEventListener("scroll", () => {

    const scrollPosition =
        window.innerHeight + window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight;

    /* 맨 밑에서 100px 위 지점 */

    if (scrollPosition >= pageHeight - 100) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

/* 클릭하면 맨 위로 이동 */

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});