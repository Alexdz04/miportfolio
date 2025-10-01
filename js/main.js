document.addEventListener('DOMContentLoaded', function() {

    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('.main-nav ul');
    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', function() {
            navUl.classList.toggle('active');
            menuToggle.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', navUl.classList.contains('active'));
        });

        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                navUl.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    const themeSwitch = document.createElement('button');
    themeSwitch.classList.add('theme-switch');
    themeSwitch.innerHTML = '🌙';
    themeSwitch.setAttribute('aria-label', 'Alternar modo oscuro/claro');
    document.querySelector('.site-header .container').appendChild(themeSwitch);

    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeSwitch.innerHTML = '☀️'; 
    } else {
        document.body.classList.remove('dark-theme');
        themeSwitch.innerHTML = '🌙'; 
    }
    
    themeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const newTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        themeSwitch.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
    });

    const langSwitch = document.createElement('button');
    langSwitch.classList.add('lang-switch');
    langSwitch.innerHTML = 'EN';
    langSwitch.setAttribute('aria-label', 'Alternar idioma español/ingles');
    document.querySelector('.site-header .container').appendChild(langSwitch);

    const translations = {
        es: {
            about: 'Sobre mi',
            projects: 'Proyectos',
            contact: 'Contactame',
            cv: 'Descarga mi CV',
            hello: 'Jayner Alejandro Diaz Peralta',
            dev: 'Estudiante de Desarrollo de Software',
            desc: 'Estudiante de Desarrollo de Software con interés en aplicar y ampliar conocimientos en programación. Apasionado por la tecnología, en constante formación para fortalecer mis habilidades. Persona responsable, con sólidos principios y compromiso con el trabajo en equipo y el desarrollo profesional.',
            projectsTitle: 'Mis proyectos',
            projectsDesc: 'Una seleccion de algunos de mis trabajos. Puede ver mas en mi perfil de GitHub.',
            project1Title: 'Sistema de Gestión de Tareas Personales',
            project1Desc: 'El Sistema de Gestión de Tareas Personales (SGTP) es una aplicación web que hice para que se pueda organizar y gestionar las tareas diarias de una manera mas eficiente',
            project2Title: 'GameStore',
            project2Desc: '"GameStore" que hice el cual se puede ver un listado de juegos. CRUD.',
            project3Title: 'App ministerio medio ambiente',
            project3Desc: 'Aplicacion movil hecha en Dart (Flutter) para el ministerio de medio ambiente.',
            talk: 'Contactame',
            contactDesc: 'Puedes contactarme rellenando el formulario o via WhatsApp, Email, Telegram o SMS.',
            message: 'O dejame un mensaje',
            name: 'Nombre',
            email: 'Correo electronico',
            phone: 'Numero de telefono (Opcional)',
            reason: 'Razon del contacto',
            send: 'Enviar Mensaje',
            contactTelegram: 'Telegram',  
            contactWhatsapp: 'WhatsApp', 
            contactPhone: 'Llamar',  
            footer: 'Jayner Alejandro Diaz Peralta. Portfolio.',
            githubButton: 'GitHub',  
            githubCard: 'Ver en GitHub',
        },
        en: {
            about: 'About me',
            projects: 'Projects',
            contact: 'Contact me',
            cv: 'Download my CV',
            hello: 'Jayner Alejandro Diaz Peralta',
            dev: 'Software Development Student',
            desc: 'Software Development student with an interest in applying and expanding knowledge in programming. Passionate about technology, continuously learning to strengthen my skills. Responsible individual with solid principles, committed to teamwork and professional growth.',
            projectsTitle: 'My Projects',
            projectsDesc: 'A selection of some of my work. You can see more on my GitHub profile.',
            project1Title: 'Personal Task Management System',
            project1Desc: 'The Personal Task Management System (PTMS) is a web application I developed to organize and manage daily tasks more efficiently.',
            project2Title: 'GameStore',
            project2Desc: '"GameStore" is a project I built where you can view a list of games with full CRUD functionality.',
            project3Title: 'Ministry of Environment App',
            project3Desc: 'A mobile application developed in Dart (Flutter) for the Ministry of Environment.',
            talk: 'Get in touch with me',
            contactDesc: 'You can contact me by filling out the form or via WhatsApp, email, Telegram or SMS.',
            message: 'Or leave me a message',
            name: 'Name',
            email: 'Email',
            phone: 'Phone number (Optional)',
            reason: 'Reason for contact',
            send: 'Send Message',
            contactTelegram: 'Telegram', 
            contactWhatsapp: 'WhatsApp',  
            contactPhone: 'Call',  
            footer: 'Jayner Alejandro Diaz Peralta. Portfolio.',
            githubButton: 'GitHub',
            githubCard: 'View on GitHub',
        }
    };

    
    const linkTranslations = {
        es: {
            logoText: 'Mi portafolio',
            cvText: 'Descarga mi CV',
            cvHref: 'assets/CV_Alejandro_Diaz_Peralta.pdf'
        },
        en: {
            logoText: 'My portfolio',
            cvText: 'Download my CV',
            cvHref: 'assets/CV_Alejandro_Diaz_Peralta-EN.pdf'
        }
    };

    let currentLang = localStorage.getItem('lang') || 'es';
    langSwitch.innerHTML = currentLang === 'es' ? 'EN' : 'ES';

    function applyLanguage(lang) {
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            el.textContent = translations[lang][key];
        });
        document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
            const key = el.getAttribute('data-lang');
            el.placeholder = translations[lang][key];
        });
    }


    function updateLinks(lang) {
        const logoLink = document.querySelector('.logo a');
        const cvLink = document.querySelector('.cv-button'); 

        if (logoLink) {
            logoLink.textContent = linkTranslations[lang].logoText;
            logoLink.href = 'index.html'; 
        }
        if (cvLink) {
            cvLink.textContent = linkTranslations[lang].cvText;
            cvLink.href = linkTranslations[lang].cvHref;
        }
    }

    langSwitch.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('lang', currentLang);
        langSwitch.innerHTML = currentLang === 'es' ? 'EN' : 'ES';
        applyLanguage(currentLang);
        updateLinks(currentLang); 
    });

    applyLanguage(currentLang);
    updateLinks(currentLang); 

    const profilePicHalo = document.querySelector('.profile-pic');
    if (profilePicHalo) {
        const halo = document.createElement('div');
        halo.classList.add('halo');
        profilePicHalo.parentElement.style.position = 'relative';
        profilePicHalo.parentElement.insertBefore(halo, profilePicHalo); 
    }

    const animatedElements = document.querySelectorAll('h1, .project-card, .about-me');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    });
    animatedElements.forEach(el => observer.observe(el));

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const loader = document.createElement('div');
    loader.classList.add('form-loader');
    form.appendChild(loader);
    loader.style.display = 'block';

    const formData = new FormData(form);

    fetch('https://formspree.io/f/xyznwzkv', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        loader.style.display = 'none';
        console.log('Respuesta de Formspree:', response);  
        if (response.ok) {
            console.log('Envio exitoso – ver dashboard');
            const success = document.createElement('div');
            success.classList.add('form-success');
            success.innerText = currentLang === 'es' ? 'Mensaje enviado!' : 'Message sent!';
            form.appendChild(success);
            success.style.display = 'block';
            setTimeout(() => {
                success.style.display = 'none';
                form.reset();
            }, 3500);
        } else {
            throw new Error('Error al enviar el mensaje');
        }
    })
    .catch(error => {
        loader.style.display = 'none';
        console.error('Error en fetch:', error);  
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('form-error');
        errorDiv.innerText = currentLang === 'es' ? 'Error al enviar. Intenta de nuevo.' : 'Error sending. Try again.';
        form.appendChild(errorDiv);
        errorDiv.style.display = 'block';
        setTimeout(() => errorDiv.style.display = 'none', 3500);
    });
});

    }

    const backToTop = document.createElement('button');
    backToTop.classList.add('back-to-top');
    backToTop.innerHTML = '↑';
    backToTop.setAttribute('aria-label', 'Volver arriba');
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) backToTop.classList.add('show');
        else backToTop.classList.remove('show');
    });

    backToTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));

    // Easter egg
    const profilePic = document.querySelector('.profile-pic');

if (profilePic) {
    profilePic.addEventListener('click', (event) => {
        const rect = profilePic.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const particles = ['HTML', 'JS', 'C#', '.NET', 'CSS', 'PYTHON'];

        
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            
            particle.innerText = particles[Math.floor(Math.random() * particles.length)];

            
            particle.style.left = `${centerX}px`;
            particle.style.top = `${centerY}px`;

       
            const angle = (Math.random() * Math.PI) - (Math.PI / 2); 
            const distanceX = Math.random() * 200 - 100; 
            const distanceY = 100 + Math.random() * 150; 
            const tx = Math.cos(angle) * distanceX;
            const ty = distanceY; 

     
            const rot = (Math.random() * 360) - 180; 

            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);
            particle.style.setProperty('--rot', `${rot}deg`);

            document.body.appendChild(particle);

            setTimeout(() => particle.remove(), 1500);
        }
    });
}

});
