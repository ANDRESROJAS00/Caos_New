
const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<nav class="navbar navbar-expand-xl bg-transparent p-4">
            <div class="container-fluid justify-content-between">
                <!-- Logo -->
                <a class="navbar-brand text-light fs-2 d-none d-xl-block" href="{% url 'index' %}">
                    <img src="{% static 'img/CAOSNEWS.png' %}" alt="Caos News Logo" width="250" height="140">
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
                            <a class="nav-link text-danger" href="{% url 'registro' %}">Iniciar sesión</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link text-danger" href="{% url 'carrito' %}">Carrito</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link active text-light" href="{% url 'deportes' %}">Deportes</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link text-light" href="{% url 'economia' %}">Economía</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link text-light" href="{% url 'chile' %}">Chile</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link text-light" href="{% url 'mundo' %}">Mundo</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link text-light" href="{% url 'api' %}">Clima</a>
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
        <h4>Lo que hacemos</h4>
        <ul>
            <p>Nos dedicamos a mantenerte actualizado de las ultimas noticias del País y del Mundo.</p>
        </ul>
    </div>
    <div class="footer-col">
        <h4>Quienes somos</h4>
        <ul>
            <p>Somos un noticiero creado por estudiantes de DucoUc Vina del Mar.</p>
        </ul>
    </div>
    <div class="footer-col">
        <h4>¿Necesitas ayuda?
        </h4>
        <ul>
            <P>Enviamos tu video o escribe una denuncia</P>
        </ul>
    </div>
    <div class="footer-col">
        <h4>Siguenos</h4>
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