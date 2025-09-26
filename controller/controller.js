$(document).ready(function () {
    const container = $("#main_content");
    const products = [
        {
            img: "images/products/product-2.png",
            title: "Dell Inspiron 15",
            price: "R$ 4.500",
            desc: "Dell Inspiron 15 (3000 Series): notebook básico com tela de 15,6\", webcam integrada e design clássico em preto."
        },
        {
            img: "images/products/product-8.png",
            title: "iPhone 14 Pro",
            price: "R$ 6.299",
            desc: "iPhone 14 Pro (ou Pro Max): smartphone “Pro” da Apple lançado em 2022, com A16 Bionic, tela ProMotion."
        },
        {
            img: "images/products/product-14.png",
            title: "PlayStation 5",
            price: "R$ 4.000",
            desc: "PlayStation 5 (com drive de disco): console da Sony lançado em 2020, com CPU/GPU customizados."
        },
        {
            img: "images/products/product-9.png",
            title: "Galaxy S23 Ultra",
            price: "R$ 4.179",
            desc: "Samsung Galaxy S23 Ultra: flagship de 2023, com tela Dynamic AMOLED 2X de 6,8″, taxa adaptativa de 120 Hz."
        },
        {
            img: "images/products/product-15.png",
            title: "Aorus Supreme 5",
            price: "R$ 4.182",
            desc: "Chassi com painéis de vidro temperado, iluminação RGB sincronizável via RGB Fusion, conectividade de ponta."
        },
        {
            img: "images/products/product-7.png",
            title: "Pop Racer X",
            price: "R$ 688,90",
            desc: "Cadeira gamer estilo racing. Design inspirado em bancos esportivos com encosto alto, apoio para cabeça."
        },
        {
            img: "images/products/product-13.png",
            title: "Thrustmaster T300",
            price: "R$ 4.214,75",
            desc: "Volante estilo Ferrari com pedais: periférico de simulação licenciado pela Ferrari, com volante de direção."
        },
        {
            img: "images/products/product-10.png",
            title: "ROG Chill Case",
            price: "R$ 147",
            desc: "AeroActive Cooler (clip-on): ventilador externo com sistema termoelétrico nos modelos mais avançados."
        },
        {
            img: "images/products/product-1.png",
            title: "Asus VivoBook 15",
            price: "R$ 2.999",
            desc: "Asus VivoBook 15 (Slate Gray): notebook fino e leve com tela de ~15,6”, teclado completo incluindo teclado."
        }
    ];
    products.forEach((prod, index) => {
        const cardHTML = `
            <div class="card card${index + 1}">
                <img src="${prod.img}" alt="${prod.title}">
                <h1>${prod.title} <br> ${prod.price}</h1>
                <p>${prod.desc}</p>
                <button class="btn">Comprar</button>
            </div>
        `;
        container.append(cardHTML);
    });
});
