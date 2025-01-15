const products = [ 
    {'category' : 'Waffle', 'name' : 'Waffle with Berries', 'price' : 6.50, 'image' : 'assets/images/image-waffle-desktop.jpg'},
    {'category' : 'Crème Brûlée', 'name' : 'Vanilla Bean Crème Brûlée', 'price' : 7.00, 'image' : 'assets/images/image-creme-brulee-desktop.jpg'},
    {'category' : 'Macaron', 'name' : 'Macaron Mix of Five', 'price' : 8.00, 'image' : 'assets/images/image-macaron-desktop.jpg'},
    {'category' : 'Tiramisu', 'name' : 'Classic Tiramisu', 'price' : 5.50, 'image' : 'assets/images/image-tiramisu-desktop.jpg'},
    {'category' : 'Baklava', 'name' : 'Classic Tiramisu', 'price' : 4.00, 'image' : 'assets/images/image-baklava-desktop.jpg'},
    {'category' : 'Pie', 'name' : 'Lemon Meringue Pie', 'price' : 5.00, 'image' : 'assets/images/image-meringue-desktop.jpg'},
    {'category' : 'Cake', 'name' : 'Red Velvet Cake', 'price' : 4.50, 'image' : 'assets/images/image-cake-desktop.jpg'},
    {'category' : 'Brownie', 'name' : 'Salted Caramel Brownie', 'price' : 4.50, 'image' : 'assets/images/image-brownie-desktop.jpg'},
    {'category' : 'Panna Cotta', 'name' : 'Vanilla Panna Cotta', 'price' : 6.50, 'image' : 'assets/images/image-panna-cotta-desktop.jpg'},
]

const loadProducts = (products, container) => {
    products.forEach(product => {
        container.innerHTML += `
            <div class="card"> 
                <div class="img-card">
                <img src="${product.image}" alt="${product.name}">
                <button class="contador-btn"><i class="fa-solid fa-cart-plus"></i>Add to Cart</button>
                </div>
                <p>${product.category}</p>
                <h2>${product.name}</h2>
                <span>$${product.price.toFixed(2)}</span>
            </div>
        `
    })
}

loadProducts(products , document.querySelector('.container-pai-card'))

document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.contador-btn');

    botoes.forEach(function(botao) {
        botao.addEventListener('click', function(event) {
            botao.classList.add('active');
            
            if (!botao.querySelector('.contador')) {
                botao.innerHTML = `<i class="fa-solid fa-minus"></i><p class="contador">0</p><i class="fa-solid fa-plus"></i>`;
            }

            let contador = parseInt(botao.querySelector('.contador').textContent);

            const larguraBotao = botao.offsetWidth;
            const posicaoClique = event.clientX - botao.getBoundingClientRect().left;

            if (posicaoClique < larguraBotao / 2) {
                contador--;
            } else {
                contador++;
            }

            botao.querySelector('.contador').textContent = contador;
            if (contador <= 0) {
                botao.classList.remove('active');
                botao.innerHTML = `<i class="fa-solid fa-cart-plus"></i>Add to Cart`;
            }
        });
    });
});




