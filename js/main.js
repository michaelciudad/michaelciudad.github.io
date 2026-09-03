const proyectos = [
    {
        titulo: "Sistema de Gestión de Tareas",
        descripcion: "Aplicación Full Stack para administrar tareas con autenticación de usuarios y persistencia de datos.",
        tecnologias: ["HTML", "Tailwind CSS", "JavaScript", "Node.js"],
        github: "https://github.com/michaelciudad",
        demo: "#"
    },
    {
        titulo: "API REST E-Commerce",
        descripcion: "Backend completo para e-commerce con endpoints para productos, carrito de compras y usuarios.",
        tecnologias: ["JavaScript", "Express", "PostgreSQL"],
        github: "https://github.com/michaelciudad",
        demo: "#"
    },
    {
        titulo: "Dashboard Interactivo",
        descripcion: "Interfaz interactiva que consume APIs públicas para mostrar datos analíticos en tiempo real.",
        tecnologias: ["HTML", "Tailwind CSS", "JavaScript"],
        github: "https://github.com/michaelciudad",
        demo: "#"
    }
];

// funcion para renderizar proyectos
function renderProjects() {
    const container = document.getElementById("projects-container");
    if (!container) return;

    container.innerHTML = proyectos.map(project => `
        <article class="bg-slate-800/40 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover:-translate-y-1">
            <div>
                <h3 class="text-xl font-bold text-slate-100 mb-2">${project.titulo}</h3>
                <p class="text-slate-400 text-sm mb-4 leading-relaxed">${project.descripcion}</p>
            </div>
            <div>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${project.tecnologias.map(tech => `
                        <span class="text-xs font-mono bg-indigo-950/60 text-indigo-300 border border-indigo-800/50 px-2.5 py-1 rounded-md">
                            ${tech}
                        </span>
                    `).join('')}
                </div>
                <div class="flex items-center gap-4 text-sm font-medium">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-indigo-400 transition-colors flex items-center gap-1">
                        Código &rarr;
                    </a>
                    <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-indigo-400 transition-colors flex items-center gap-1">
                        Demo &rarr;
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}
  //sanguchito
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const iconHamburger = document.getElementById("icon-hamburger");
const iconClose = document.getElementById("icon-close");
const mobileLinks = document.querySelectorAll(".mobile-link");

function toggleMenu() {
    const isHidden = mobileMenu.classList.contains("hidden");
    
    if (isHidden) {
        mobileMenu.classList.remove("hidden");
        iconHamburger.classList.add("hidden");
        iconClose.classList.remove("hidden");
    } else {
        mobileMenu.classList.add("hidden");
        iconHamburger.classList.remove("hidden");
        iconClose.classList.add("hidden");
    }
}

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (!mobileMenu.classList.contains("hidden")) {
                toggleMenu();
            }
        });
    });
}


const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        formStatus.classList.remove("hidden", "bg-red-900/50", "text-red-300");
        formStatus.classList.add("bg-emerald-900/50", "text-emerald-300", "border", "border-emerald-800");
        formStatus.textContent = "¡Mensaje enviado con éxito! Te responderé pronto.";
        contactForm.reset();
    });
}


document.addEventListener("DOMContentLoaded", renderProjects);
