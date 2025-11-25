// Certificate data - easy to update
const certificates = [
    {
        title: 'Diskominfo Kabupaten Bantul',
        type: 'national',
        image: 'Sertifikat/serti1.jpg',
        link: 'https://esurat.bantulkab.go.id/public/1UEPs5DrRaE7WtzY'
    },
    {
        title: 'Darmajaya CSIRT',
        type: 'national', 
        image: 'Sertifikat/serti2.jpg'
    },
    {
        title: 'Diskominfo Kota Depok',
        type: 'national',
        image: 'Sertifikat/serti3.jpg'
    },
    {
        title: 'Diskominfo Provinsi Jawa Timur',
        type: 'national',
        image: 'Sertifikat/serti4.jpg'
    },
    {
        title: 'Diskominfo Kulon Progo',
        type: 'national',
        image: 'Sertifikat/serti5.png'
    },
    {
        title: 'Sman 5 Pandeglang',
        type: 'national',
        image: 'Sertifikat/serti6.png'
    },
    {
        title: 'Smam Satu Gresik',
        type: 'national',
        image: 'Sertifikat/serti7.png'
    },
    {
        title: 'Universitas Islam Depok',
        type: 'national',
        image: 'Sertifikat/serti8.jpg'
    },
    {
        title: 'Diskominfotik Provinsi DKI Jakarta',
        type: 'national',
        image: 'Sertifikat/serti9.jpg',
        link: 'https://soc.jakarta.go.id//certificate/view?token=$2y$13$uP8RKP/oyrbbjjs./v7KHu6OeyNZNbQRSbNZ.6ohMuth8JPNM2eYq'
    },
    {
        title: 'Universitas Muhammadiyah Jambi',
        type: 'national',
        image: 'Sertifikat/serti10.jpg'
    },
    {
        title: 'Universitas Muhammadiyah Cirebon',
        type: 'national',
        image: 'Sertifikat/serti11.jpg'
    },
    {
        title: 'Diskominfo Kota Cimahi',
        type: 'national',
        image: 'Sertifikat/serti12.jpg'
    },
    {
        title: 'Avans Hogeschool',
        type: 'international',
        image: 'Sertifikat/Loa.jpg'
    },
    {
        title: 'Avans Hogeschool',
        type: 'international',
        image: 'Sertifikat/Loa2.jpg'
    },
    {
        title: 'Diskominfo DIY',
        type: 'national',
        image: 'Sertifikat/serti14.jpg',
        link: 'https://sadewa.jogjaprov.go.id/pdf?id=U2FsdGVkX1p1L2u3S71CuVnCertYAS0m24za1JHLtMRNZqRNRV0gs8YlldJFu5p1L2u3SZ7p1L2u3SS5NFrPv2q8rxqtP6lf1NT5xp1L2u3Sgge1Q2u3A4le1Q2u3A4l&document_type=targetedtte'
    },
    {
        title: 'Diskominfo Kota Bekasi',
        type: 'national',
        image: 'Sertifikat/serti15.jpg',
    },
    {
        title: 'Diskominfo Kutai Kartanegara',
        type: 'national',
        image: 'Sertifikat/serti16.jpg',
        link: 'https://ttis.kukarkab.go.id/whitehat-etam?page=3'
    },
    {
        title: 'Univesritas Negeri Jakarta',
        type: 'national',
        image: 'Sertifikat/serti17.jpg',
    },
    {
        title: 'Universitas Airlangga',
        type: 'national',
        image: 'Sertifikat/serti18.jpg',
    },
    {
        title: 'Universitas Dirgantara Marsekal Suryadarma',
        type: 'national',
        image: 'Sertifikat/serti19.jpg',
    }
];

// Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const header = document.getElementById('header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Hide header on scroll down
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop;
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Render certificates
function renderCertificates(filter = 'all') {
    const grid = document.querySelector('.certificates-grid');
    if (!grid) return;

    const filteredCerts = filter === 'all' 
        ? certificates 
        : certificates.filter(cert => cert.type === filter);

    grid.innerHTML = filteredCerts.map(cert => `
        <div class="certificate-item fade-in" data-type="${cert.type}">
            <div class="certificate-header">
                <div class="certificate-title">${cert.title}</div>
                <div class="certificate-badge">${cert.type === 'international' ? 'International' : 'National'}</div>
            </div>
            <img src="${cert.image}" alt="${cert.title}" class="certificate-img">
            ${cert.link ? `
            <div class="certificate-actions">
                <a href="${cert.link}" target="_blank" class="certificate-link">
                    <i class="fas fa-external-link-alt"></i> Lihat Sertifikat Online
                </a>
            </div>
            ` : ''}
        </div>
    `).join('');
}

// Certificate filters
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        renderCertificates(filter);
    });
});

// Animate counters
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Animate skill bars
function animateSkillBars() {
    document.querySelectorAll('.skill-progress').forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 500);
    });
}

// Typewriter effect
class TypeWriter {
    constructor(element, texts, speed = 100) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.textIndex = 0;
        this.charIndex = 0;
        this.currentText = '';
        this.isDeleting = false;
        this.type();
    }

    type() {
        const current = this.textIndex % this.texts.length;
        const fullText = this.texts[current];

        if (this.isDeleting) {
            this.currentText = fullText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.currentText = fullText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        this.element.innerHTML = this.currentText;

        let typeSpeed = this.speed;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.charIndex === fullText.length) {
            typeSpeed = 2000;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stat-number')) {
                const target = parseInt(entry.target.getAttribute('data-count'));
                if (!entry.target.classList.contains('animated')) {
                    animateCounter(entry.target, target, 2000);
                    entry.target.classList.add('animated');
                }
            } else if (entry.target.classList.contains('skill-progress')) {
                if (!entry.target.classList.contains('animated')) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = width + '%';
                    entry.target.classList.add('animated');
                }
            } else {
                entry.target.classList.add('fade-in');
            }
        }
    });
}, {
    threshold: 0.1
});

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Render certificates
    renderCertificates();
    
    // Initialize typewriter
    const typewriterElement = document.querySelector('.typewriter-text');
    if (typewriterElement) {
        const texts = [
            'Web Penetration Tester',
            'Security Researcher',
            'Bug Hunter',
            'Vulnerability Assessment'
        ];
        new TypeWriter(typewriterElement, texts, 100);
    }
    
    // Observe elements for animations
    document.querySelectorAll('.stat-number, .skill-progress, .fade-in').forEach(el => {
        observer.observe(el);
    });
});