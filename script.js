// Initialize Lucide Icons
lucide.createIcons();

// Skills Data
const skills = [
    { name: "Stealth Coding", icon: "zap", desc: "Writing clean, efficient code silently." },
    { name: "Architecture", icon: "shield", desc: "Building robust Gotham-proof systems." },
    { name: "Problem Solving", icon: "target", desc: "Detective-level bug analysis." }
];

const skillsContainer = document.getElementById('skills-container');
skills.forEach(skill => {
    skillsContainer.innerHTML += `
        <div class="bg-[#020617] border-2 border-[#1e293b] p-8 hover:border-[#EAB308] transition-all group">
            <i data-lucide="${skill.icon}" class="w-12 h-12 text-[#EAB308] mb-6 group-hover:scale-110 transition-transform"></i>
            <h3 class="text-xl font-black uppercase italic mb-4">${skill.name}</h3>
            <p class="text-slate-400">${skill.desc}</p>
        </div>
    `;
});

// Photo Gallery Data
const photos = [
    "https://cdn.builder.io/api/v1/image/assets%2F69e6441b4f5b4e51bbb1bc9424e39074%2Ff8618c1a032a4f6eb59275b290cfad09?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F69e6441b4f5b4e51bbb1bc9424e39074%2Ffd80fec32a8549a2882a5a7f879bdfc0?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F69e6441b4f5b4e51bbb1bc9424e39074%2F27f3054fcfb142678ac9961ba4ddd6c2?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F69e6441b4f5b4e51bbb1bc9424e39074%2F4421a9fdf1e649619e9ebf9535704c0d?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F69e6441b4f5b4e51bbb1bc9424e39074%2F64c92fdb96b34574bd7bb880b2782cd7?format=webp&width=800&height=1200"
];

const galleryContainer = document.getElementById('gallery-container');
photos.forEach(photo => {
    galleryContainer.innerHTML += `
        <div class="break-inside-avoid relative group">
            <img src="${photo}" class="w-full h-auto batman-border grayscale group-hover:grayscale-0 transition-all duration-500">
        </div>
    `;
});

// Re-run icon generation for dynamic elements
lucide.createIcons();
// About Data
const aboutData = [
    { 
        title: "Identity", 
        icon: "user", 
        desc: "Classified. Known for delivering high-stakes projects under extreme pressure. I thrive in the dark mode." 
    },
    { 
        title: "Base of Ops", 
        icon: "map-pin", 
        desc: "Operating from the heart of Gotham's tech district. Remote execution available for global missions." 
    },
    { 
        title: "Efficiency", 
        icon: "zap", 
        desc: "100% Uptime. 0% Mercy for Bugs. Lightning-fast deployments and bulletproof security." 
    }
];

const aboutContainer = document.getElementById('about-container');
aboutData.forEach(item => {
    aboutContainer.innerHTML += `
        <div class="text-center md:text-left space-y-4">
            <div class="w-12 h-12 bg-[#EAB308] flex items-center justify-center mx-auto md:mx-0 batman-border">
                <i data-lucide="${item.icon}" class="text-[#020617] w-6 h-6"></i>
            </div>
            <h3 class="text-2xl font-black uppercase italic">${item.title}</h3>
            <p class="text-slate-400">${item.desc}</p>
        </div>
    `;
});

// Important: ensure lucide.createIcons() is called after this loop!
lucide.createIcons();
// Handle Contact Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("The signal has been sent to Gotham. S Pritam will respond shortly.");
        contactForm.reset();
    });
}

// Final call to initialize all icons (including newly added contact icons)
lucide.createIcons();