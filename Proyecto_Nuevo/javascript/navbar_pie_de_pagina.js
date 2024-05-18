const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<nav class="navbar navbar-expand-xl bg-transparent p-4">
            <div class="container-fluid justify-content-between">
                <!-- Logo -->
                <a class="navbar-brand text-light fs-2 d-none d-xl-block" href="/index.html">
                    <img src="imagenes/CAOSNEWS.png" alt="Caos News Logo" width="250" height="140">
                </a>
                <!-- Título para pantallas pequeñas -->
                <span class="navbar-brand text-light fs-2 d-xl-none">CAOS NEWS</span>
                <!-- Botón de colapso -->
                <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item me-5">
                            <a class="nav-link text-danger" href="/registro.html">Iniciar sesion</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link text-danger" href="/carrito.html">Carrito</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link active text-light" href="/deportes.html">Deportes</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link text-light" href="/economia.html">Economia</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link text-light" href="/chile.html">Chile</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link text-light" href="/mundo.html">Mundo</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link text-light" href="/API.html">Clima</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
`;



footer.innerHTML = `
<div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">affiliate program</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">shipping</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>online shop</h4>
                    <ul>
                        <li><a href="#">watch</a></li>
                        <li><a href="#">bag</a></li>
                        <li><a href="#">shoes</a></li>
                        <li><a href="#">dress</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>

`;