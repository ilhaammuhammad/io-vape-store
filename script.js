document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Cart array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Update cart display
    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = `${item.name} - Rp ${item.price}`;
            cartItems.appendChild(itemDiv);
            total += item.price;
        });

        totalPriceElement.textContent = `Rp ${total}`;
    }

    // Add item to cart
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = button.getAttribute('data-id');
            const name = button.getAttribute('data-name');
            const price = parseInt(button.getAttribute('data-price'));

            cart.push({ id, name, price });
            localStorage.setItem('cart', JSON.stringify(cart));

            alert('Produk ditambahkan ke keranjang!');
        });
    });

    updateCart();
});
// Menangani pengiriman form checkout
document.getElementById("checkoutForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form terkirim secara otomatis

    // Mengambil data dari form
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const paymentMethod = document.getElementById("payment-method").value;

    // Membuat konfirmasi pembayaran
    alert(`
        Terima kasih, ${name}!
        Pembayaran Anda sedang diproses dengan metode: ${paymentMethod}.
        Alamat Pengiriman: ${address}
        Nomor Telepon: ${phone}
    `);

    // Setelah konfirmasi, reset form
    document.getElementById("checkoutForm").reset();
});
