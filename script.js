// =========================================================
// LOADING SCREEN - Hide after 0.5 seconds
// =========================================================
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 300);
        }
    }, 500);
});

// =========================================================
// GLOBAL TRANSLATIONS
// =========================================================
const translations = {
    pageTitle: {
        km: 'សិរីមង្គលអាពាហ៍ពិពាហ៍ | ឃុន ខាយស៊ីន & ពេជ្រ ម៉ានីកា',
        en: 'Wedding Ceremony | Khun Khaysin & Pech Manika'
    },
    entranceRespect: { km: 'សូមគោរពអញ្ជើញ', en: 'Respectfully invite' },
    entranceCeremony: { km: 'សិរីមង្គលអាពាហ៍ពិពាហ៍', en: 'Auspicious Wedding Ceremony' },
    enterInvitation: { km: 'បើកសំបុត្រអាពាហ៍ពិពាហ៍', en: 'Open the invitation' },
    mainCeremony: { km: 'សិរីមង្គលអាពាហ៍ពិពាហ៍', en: 'Auspicious Wedding Ceremony' },
    parentTitleFemale: { km: 'លោកស្រី', en: 'Mrs.' },
    parentNamePlaceholder1: { km: 'ជិន សុភ័ក្រនារី', en: 'CHIN Sophakneary' },
    parentNamePlaceholder2: { km: 'គឹម សាវឿន', en: 'KIM Savoeun' },
    parentNamePlaceholder3: { km: 'សំ​ សុផារី', en: 'SAM Sophary' },
    parentTitle2: { km: 'ឯកឧត្តម', en: 'His Excellency' },
    parentTitle3: { km: 'លោកជំទាវ', en: 'Her Excellency' },
    honorInvite: { km: 'មានកិត្តិយសសូមគោរពអញ្ជើញ', en: 'Our great honor to respectfully invite' }, //////
    invitationBody: {
        km: 'សម្ដេច ទ្រង់ ឯកឧត្តម លោកជំទាវ ​លោកអ្នកឧកញ៉ា អ្នកឧកញ៉ា ឧកញ៉ា លោក លោកស្រី អ្នកនាងកញ្ញា និងប្រិយមិត្ត ចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យ សិរីសួស្ដីជ័យមង្គលក្នុងពិធីមង្គលអាពាហ៍ពិពាហ៍ កូនប្រុស កូនស្រីរបស់យើងខ្ញុំ',
        en: 'We are deeply honored to have Samdech, His Excellency, Lok Chumteav, Lok Oknha, Neak Oknha, Oknha, ladies and gentlemen, and our cherished friends join us as officiants and distinguished guests to bless our son and daughter with a life filled with happiness, health, and everlasting love.'
    },
    groomLabel: { km: 'កូនប្រុសនាម', en: 'Groom' },
    brideLabel: { km: 'កូនស្រីនាម', en: 'Bride' },
    brideName: { km: 'គឹម ', en: 'KIM ' },
    brideName1: { km: 'ច័ន្ទដាហ្សូនីតា', en: 'Chandajonita' },//////
    groomName: { km: 'ជិន', en: 'CHIN ' }, 
    groomName1: { km: 'សុវន្ណរតនៈ', en: 'Sovannarotanak' },//////
    takingPlace: { km: 'ដែលប្រព្រឹត្តទៅនៅ', en: 'which will held on' },
    weddingDate: { km: 'ថ្ងៃសៅរ៍ - ២៨ - មីនា - ២០២៦', en: 'Saturday - 28 - March - 2026' },
    venueName: { km: 'ដឹព្រេមៀ សេនធ័រ សែនសុខ (អាគារ D&E)', en: 'At The Premier Center Sen Sok (Building I)' },
    startTime: { km: 'ចាប់ពីម៉ោង ០៦:៣០​ ព្រឹក តទៅ​!', en: 'Start From 6:30 am !' },
    locationTitle: { km: 'ទីតាំងកម្មវិធី', en: 'Wedding Venue' },
    scanMap: { km: 'ស្កេនទីនេះដើម្បីមើលទីតាំង', en: 'Scan to check the map!' },
    viewMap: { km: 'មើលទីផែនទី', en: 'View Map' },
    agendaTitle: { km: 'កម្មវិធីមង្គលអាពាហ៍ពិពាហ៍', en: 'Wedding Ceremony' },
    agendaDateMorning: { km: 'ថ្ងៃសៅរិ៍៍ ទី២៨ ខែកុម្ភៈ ឆ្នាំ២០២៦', en: 'Saturday 28th January 2026' },
    agendaPeriodMorning: { km: 'ពេលព្រឹក ( អាគារ I)', en: 'Morning (Building I)' },
    agendaPeriodEvening: { km: 'ពេលល្ងាច ( អាគារ I)', en: 'Evening (Building I)' },
    time6am: { km: '6:00 ព្រឹក', en: '6:00 AM' },
    time6pm: { km: '6:00 ល្ងាច', en: '6:00 PM' },
    ceremonyProcession: { km: 'ដង្ហែជំនូន', en: 'Procession' },
    ceremonyBlessing: { km: 'ពិធីសូត្រមន្ត និងទទួលពរជ័យពីព្រះសង្ឃ', en: 'Monk blessing ceremony' },
    ceremonyHairCut: { km: 'ពិធីកាត់សក់', en: 'Hair cutting ritual' },
    ceremonyAncestor: { km: 'ពិធីសែនដូនតា', en: 'Ancestor offering ceremony' },
    ceremonySevenRotations: { km: 'ពិធីបង្វិលពពិល', en: 'Bongvul Popil ritual' },
    ceremonyStringTying: { km: 'ពិធីចងដៃ', en: 'String tying ceremony' },
    ceremonyLunch: { km: 'ពិធីទទួលទានអាហារពេលថ្ងៃត្រង់', en: 'Lunch reception' },
    ceremonyGuestReception: { km: 'ពិធីទទួលភ្ញៀវកិត្តិយស', en: 'Guest reception' },
    countdownTitle: { km: 'រាប់ថយក្រោយទៅថ្ងៃមង្គល', en: 'Countdown to the big day' },
    labelDays: { km: 'ថ្ងៃ', en: 'Days' },
    labelHours: { km: 'ម៉ោង', en: 'Hours' },
    labelMinutes: { km: 'នាទី', en: 'Minutes' },
    labelSeconds: { km: 'វិនាទី', en: 'Seconds' },
    weddingDateText: { km: 'ថ្ងៃទី ០២ ខែ ០៣ ឆ្នាំ ២០២៦', en: '02 March 2026' },
    calendarButtonText: { km: 'កត់ទុកក្នុងប្រតិទិន', en: 'Save to calendar' },
    albumTitle: { km: 'វិចិត្រសាល', en: 'Gallery' },  //////
    wishTitle: { km: 'សារជូនពរដល់គូស្វាមីភរិយាថ្មី', en: 'Write a wish to a New Married Couple' },
    labelGuestName: { km: 'ឈ្មោះរបស់អ្នក', en: 'Your name' },
    placeholderGuestName: { km: 'ឈ្មោះរបស់អ្នក', en: 'Your Name' },
    labelWishMessage: { km: 'សារជូនពរ', en: 'Wish message' },
    placeholderWishMessage: { km: 'សរសេរសារ...', en: 'Write your message...' },
    submitWish: { km: 'ផ្ញើសារជូនពរ', en: 'Send wish' },
    wishesSubtitle: { km: 'សារជូនពរ', en: 'Wishing' },
    seeMore: { km: 'មើលសារបន្ថែម', en: 'See more wishes' },
    countdownComplete: { km: 'ដល់ថ្ងៃមង្គលហើយ!', en: "It's wedding day!" },
    loadingWishes: { km: 'កំពុងទាញយក...', en: 'Loading...' },
    noWishes: { km: 'មិនមានសារលឹក', en: 'No messages yet.' },
    offline: { km: 'មិនមានការតភ្ជាប់អ៊ីនធឺណេត', en: 'No internet connection.' },
    sendingWish: { km: 'កំពុងផ្ញើ...', en: 'Sending...' },
    emptyMessageAlert: { km: 'សូមវាយបញ្ចូលសារ', en: 'Please enter a message' },
    appreciationTitle: { km: 'សេចក្ដីថ្លែងអំណរគុណ និងសូមអភ័យទោស', en: 'Thank You & Our Sincere Apology' },
    appreciationMessage: { km: 'យើងខ្ញុំជាមាតាបិតា កូនទាំងពីរ សូមថ្លែងអំណរគុណ យ៉ាងជ្រាលជ្រៅចំពោះវត្តមានដ៏ឧត្តុង្គឧត្តមរបស់​ សម្ដេច ទ្រង់ ឯកឧត្តម​ លោកជំទាវ លោកអ្នកឧកញ៉ា អ្នកឧកញ៉ា ឧកញ៉ា លោក​​ លោកស្រី អ្នកនាងកញ្ញា ដែលបានអញ្ជើញចូលរួមជាកិត្តិយសក្នុងពិធីសិរីសួស្ដីអាពាហ៍ពិពាហ៍ កូនប្រុស កូនស្រី របស់យើងខ្ញុំនាពេលខាងមុខនេះ។​ យើងខ្ញុំសូមការខន្តីអភ័យទោស ដែលពុំបានជូនលិខិតអញ្ជើញនេះដោយផ្ទាល់។​ ដោយគាវរកិច្ចដ៏ខ្ពង់ខ្ពស់ពីយើងខ្ញុំ​។​', en: 'We, the parents of the bride and groom, would like to express our deepest gratitude and heartfelt appreciation for the honorable presence of Samdech, His Excellency, Lok Chumteav, Lok Neak Oknha, Neak Oknha, Lok Oknha, Oknha, ladies and gentlemen, who have graciously attended and honored the upcoming wedding ceremony of our beloved son and daughter. We sincerely apologize for not being able to deliver this invitation to you in person. With our highest respects.' }
};

let currentLanguage = 'km';

const t = (key, fallback = '') => translations[key]?.[currentLanguage] || fallback;

// =========================================================
// ENGLISH FONT CONFIGURATION - EASY TO CUSTOMIZE
// =========================================================
const englishFontConfig = {
    // Keys with Kugile_Demo font (special styling) - MODIFY FONT SIZES HERE
    special: {
        keys: ['honorInvite', 'brideName', 'groomName', 'albumTitle', 'mainCeremony', 'appreciationTitle','agendaTitle',
             'wishTitle', 'countdownTitle', 'wishesSubtitle','groomName1','groomName', 'brideName1','brideName'],
        fontFamily: "'EnglishSpecial', sans-serif",
        fontSize: {
            'honorInvite': '1.1em',      // Change this to adjust font size
            'brideName': '1.2em',        // Change this to adjust font size
            'groomName': '1.2em',        // Change this to adjust font size
            'albumTitle': '2em',       // Change this to adjust font size
            'mainCeremony': '1.1em' ,    // Change this to adjust font size
            'appreciationTitle': '0.9em',   // Change this to adjust font size
            'agendaTitle': '1.2em'   ,    // Change this to adjust font size
            'wishTitle': '0.9em',      // Change this to adjust font size
            'countdownTitle': '1.2em',     // Change this to adjust font size
            'wishesSubtitle': '1.2em',     // Change this to adjust font size
            'groomName1': '1.2em' ,        // Change this to adjust font size
            'groomName': '1.2em' ,         // Change this to adjust font size
            'brideName1': '1.2em' ,        // Change this to adjust font size
            'brideName': '1.2em'           // Change this to adjust font size
            
            

        }
    },
    // Standard Crimson-Roman font - MODIFY FONT SIZE HERE
    standard: {
        fontFamily: "'EnglishStandard', sans-serif",
        fontSize: '0.9em',  // Change this to adjust all other English text
        lineHeight: '1.4em'
    },
    
};

const applyLanguage = (lang = 'km') => {
    currentLanguage = lang;
    document.documentElement.setAttribute('lang', lang === 'km' ? 'km' : 'en');

    const title = translations.pageTitle?.[lang];
    if (title) document.title = title;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const value = translations[key]?.[lang];
        if (value === undefined) return;

        // Apply special font for specific English translations
        if (lang === 'en' && englishFontConfig.special.keys.includes(key)) {
            el.style.fontFamily = englishFontConfig.special.fontFamily;
            el.style.fontSize = englishFontConfig.special.fontSize[key] || englishFontConfig.standard.fontSize;
        } else if (lang === 'en') {
            el.style.fontFamily = englishFontConfig.standard.fontFamily;
            el.style.fontSize = englishFontConfig.standard.fontSize;
        } else {
            el.style.fontFamily = ""; // Reset to default for Khmer
            el.style.fontSize = "";
        }

        if (el.dataset.i18nHtml === 'true') {
            el.innerHTML = value;
        } else {
            el.textContent = value;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const placeholderKey = el.dataset.i18nPlaceholder;
        const value = translations[placeholderKey]?.[lang];
        if (value !== undefined) {
            el.setAttribute('placeholder', value);
        }
    });

    const languageToggle = document.getElementById('language-toggle-button');
    if (languageToggle) {
        languageToggle.textContent = lang === 'km' ? 'EN' : 'KH';
        languageToggle.title = lang === 'km' ? 'Switch to English' : 'ប្ដូរទៅខ្មែរ';
    }
};

// =========================================================
// URL PERSONALIZATION LOGIC
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    // =========================================================
    // WISHES/COMMENTS SECTION
    // =========================================================
    const wishesList = document.getElementById('wishesList');
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzDzcd9yZPHjWj8u_2hNwm4tJDnyvGkX1Bik-jSb3OBx26Q_WkxMACDWjXJLvtdrbZu/exec';

    const savedLanguage = localStorage.getItem('preferredLanguage') || 'km';
    applyLanguage(savedLanguage);

    const languageToggleButton = document.getElementById('language-toggle-button');
    if (languageToggleButton) {
        languageToggleButton.addEventListener('click', () => {
            const nextLang = currentLanguage === 'km' ? 'en' : 'km';
            localStorage.setItem('preferredLanguage', nextLang);
            applyLanguage(nextLang);
            renderWishes();
            updateWeddingCountdown();
            loadAllWishesFromSheets();
        });
    }
    
    // Load from Google Sheets (online storage)
    let allWishes = [];
    let currentLimit = 5;
    let isLoading = false;
    
    // Fetch all wishes from Google Sheets
    async function loadAllWishesFromSheets() {
        if (isLoading) return;
        isLoading = true;
        wishesList.innerHTML = `<p style="color: #f1d577;">${t('loadingWishes', 'Loading...')}</p>`;
        
        try {
            console.log('Fetching from:', SCRIPT_URL);
            const response = await fetch(SCRIPT_URL, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache'
            });
            
            console.log('Response status:', response.status);
            if (!response.ok) {
                console.error('Response status:', response.status);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('Raw data from API:', data);
            console.log('Data type:', typeof data);
            console.log('Is array:', Array.isArray(data));
            console.log('Data length:', data?.length);
            
            // Data is returned as an array directly from doGet
            if (Array.isArray(data) && data.length > 0) {
                console.log('Processing wishes...');
                console.log('First item structure:', data[0]);
                
                // Filter out blank/empty messages with better validation
                allWishes = data.filter(wish => {
                    // Check if wish object exists
                    if (!wish) return false;
                    
                    // Get message - handle different possible formats
                    const message = wish.message || wish.Message || wish.msg || '';
                    const name = wish.name || wish.Name || wish.guestName || '';
                    
                    // Convert to string if needed and check if not empty
                    const messageStr = String(message).trim();
                    const nameStr = String(name).trim();
                    
                    return messageStr.length > 0 && nameStr.length > 0;
                }).map(wish => ({
                    // Normalize the data structure
                    name: String(wish.name || wish.Name || wish.guestName || ''),
                    message: String(wish.message || wish.Message || wish.msg || ''),
                    date: String(wish.date || wish.Date || new Date().toLocaleString('km-KH') || '')
                }));
                
                console.log('Filtered wishes count:', allWishes.length);
                console.log('All wishes:', allWishes);
                currentLimit = 5;
                renderWishes();
                console.log('Wishes rendered successfully');
            } else {
                console.log('No API wishes, checking localStorage...');
                // Fallback to localStorage wishes if API returns empty
                const localWishes = JSON.parse(localStorage.getItem('localWishes') || '[]');
                if (localWishes.length > 0) {
                    console.log('Found local wishes:', localWishes);
                    allWishes = localWishes;
                    currentLimit = 5;
                    renderWishes();
                } else {
                    wishesList.innerHTML = `<p style="color: #f1d577;">${t('noWishes', 'No messages yet.')}</p>`;
                }
            }
        } catch (error) {
            console.error('Error loading wishes:', error);
            console.error('Error message:', error.message);
            console.error('SCRIPT_URL:', SCRIPT_URL);
            // Show "no messages" instead of error to avoid confusion
            wishesList.innerHTML = `<p style="color: #f1d577;">Debug Info: ${error.message}<br>Check console (F12) for details</p>`;
        }
        isLoading = false;
    }
    
    // Load wishes on page load
    loadAllWishesFromSheets();

    // --- The Intersection Observer ---
    const wishObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add class to fade in
                entry.target.classList.add('show');
            } else {
                // Remove class to fade out when scrolling away
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the card is visible
    });

    function renderWishes() {
        wishesList.innerHTML = ''; 
        const visibleWishes = allWishes.slice(0, currentLimit);

        visibleWishes.forEach((wish) => {
            const card = document.createElement('div');
            card.className = 'wish-card';
            card.innerHTML = `
                <span class="wish-guest-name">${wish.name}</span>
                <div class="wish-text-content">${wish.message}</div>
                <span class="wish-date-time">${wish.date}</span>
            `;
            
            wishesList.appendChild(card);
            
            // Start watching this specific card for scroll
            wishObserver.observe(card);
        });

        if (allWishes.length > currentLimit) {
            seeMoreBtn.style.display = 'block';
        } else {
            seeMoreBtn.style.display = 'none';
        }
    }

    // Function to add only the new wish card without re-rendering everything
    function addNewWishCard(wish) {
        const card = document.createElement('div');
        card.className = 'wish-card new-wish';
        card.innerHTML = `
            <span class="wish-guest-name">${wish.name}</span>
            <div class="wish-text-content">${wish.message}</div>
            <span class="wish-date-time">${wish.date}</span>
        `;
        
        // Insert at the top of the list
        wishesList.insertBefore(card, wishesList.firstChild);
        
        // Watch this card for scroll fade-in
        wishObserver.observe(card);
        
        // Add fade-in effect
        setTimeout(() => {
            card.classList.add('show');
        }, 10);
    }

    // --- "See more wish" Button ---
    seeMoreBtn.addEventListener('click', () => {
        currentLimit += 5;
        renderWishes();
    });

    // --- Form Submission (will be consolidated below) ---

    renderWishes();
    // 1. Look for the name in the URL (?to=Name+Here)
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('to');

    console.log("Checking for guest name in URL...");

    if (guestName) {
        // Clean the name (convert + or _ back to spaces)
        const cleanName = guestName.replace(/[\+_]/g, ' ');
        console.log("Found guest name:", cleanName);

        // 2. Update Page 1 Name
        const page1Element = document.getElementById('page1-guest-name');
        if (page1Element) {
            page1Element.innerText = cleanName;
            console.log("Successfully updated Page 1 text.");
        } else {
            console.error("Could not find the ID 'page1-guest-name' in your HTML!");
        }

        // 3. Update Page 2 Wish Form Input (if it exists)
        const formInput = document.getElementById('guestName');
        if (formInput) {
            formInput.value = cleanName;
            formInput.setAttribute('readonly', true);
        }
    } else {
        console.log("No 'to' parameter found in the URL. Showing default name.");
    }
    // === DOM ELEMENT SELECTION ===
    const entrancePage = document.getElementById('entrance-page');
    const enterButton = document.getElementById('enter-button');
    const transitionOverlay = document.getElementById('transition-overlay');
    const transitionVideo = document.getElementById('transition-video');
    const bgMusic = document.getElementById('bg-music');
    const page2Main = document.getElementById('page-2-main');
    const invitationBox = document.querySelector('.main-invitation-box');
    
    // === GLOBAL VARIABLES ===
    const weddingDate = new Date("March 28, 2026 06:30:00").getTime();
    let audioPlayed = false;

    // 💥 IMPORTANT: REPLACE THIS URL with your actual Sheet Monkey/SheetDB API URL 💥
    const WISH_API_URL = 'YOUR_API_SUBMISSION_ENDPOINT_HERE'; 


    // =========================================================
    // 0. STAGGERED REVEAL FOR ENTRANCE PAGE CONTENT
    // =========================================================

    function revealEntrancePage() {
        document.querySelectorAll('#entrance-page .fade-in-item').forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.15}s`; 
            item.classList.add('is-visible');
        });
    }
    revealEntrancePage(); 

    // =========================================================
    // 1. ENTRANCE LOGIC
    // =========================================================

    if (enterButton) {
        enterButton.addEventListener('click', () => {
            if (entrancePage) entrancePage.style.display = 'none';
            if (transitionOverlay) {
                transitionOverlay.style.display = 'flex';
                // Start with fade-from-white class (overlay invisible)
                transitionOverlay.classList.add('fade-from-white');
            }
            
            // Play video and audio, then fade in the transition
            setTimeout(() => {
                const bgVideo = document.getElementById('global-bg-video');
                if (bgVideo) {
                    bgVideo.play().catch(e => console.log("BG video autoplay failed:", e));
                }

                if (transitionVideo) {
                    transitionVideo.currentTime = 0;
                    transitionVideo.play();
                }

                if (!audioPlayed && bgMusic) {
                    bgMusic.volume = 0.5; 
                    bgMusic.play().then(() => {
                        audioPlayed = true;
                    }).catch(e => {
                        console.error("Music autoplay failed:", e);
                    });
                }
                
                // Remove fade-from-white to reveal the transition (fade in effect)
                if (transitionOverlay) {
                    transitionOverlay.classList.remove('fade-from-white');
                }
            }, 100);
        });
    }

    // =========================================================
    // 2. TRANSITION END LOGIC
    // =========================================================

    if (transitionVideo) {
        transitionVideo.onended = () => {
            // Trigger fade to white effect
            if (transitionOverlay) {
                transitionOverlay.classList.add('fade-to-white');
                
                // Hide transition overlay and show page 2 after white fade completes
                setTimeout(() => {
                    if (transitionOverlay) transitionOverlay.style.display = 'none';
                    if (page2Main) page2Main.style.display = 'block';
                    document.body.style.overflowY = 'scroll'; 

                    if (invitationBox) invitationBox.classList.add('border-fade-in');
                    
                    setupScrollReveal();
                }, 500); // Match the 0.5s fade-to-white transition
            }
        };
    }

    // =========================================================
    // 3. SCROLL REVEAL IMPLEMENTATION
    // =========================================================

    function setupScrollReveal() {
        const observerOptions = {
            root: null, 
            rootMargin: '0px',
            threshold: 0.1 
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                const element = entry.target;
                
                if (entry.isIntersecting) {
                    element.style.transitionDelay = '0s';
                    setTimeout(() => {
                        element.classList.add('is-visible');
                    }, 10);
                } else {
                    element.classList.remove('is-visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('#page-2-main .fade-in-item').forEach((item) => {
            item.style.transitionDelay = '0s'; 
            observer.observe(item);
        });
    }
    
    // =========================================================
    // 4. COUNTDOWN TIMER LOGIC
    // =========================================================
  // Function to convert English numbers to Khmer digits
function toKhmerNumber(num) {
    const khmerDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
    return num.toString().split('').map(digit => khmerDigits[digit] || digit).join('');
}

// 1. SET THE TARGET DATE: February 28, 2026
const targetDate = new Date("February 28, 2026 00:00:00").getTime();

const formatNumberForLang = (num) => {
    const padded = num < 10 ? `0${num}` : `${num}`;
    return currentLanguage === 'km' ? toKhmerNumber(padded) : padded;
};

function updateWeddingCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    // 2. GET ELEMENTS BY ID
    const dElem = document.getElementById("days");
    const hElem = document.getElementById("hours");
    const mElem = document.getElementById("minutes");
    const sElem = document.getElementById("seconds");

    // 3. UPDATE ONLY IF ELEMENTS EXIST
    if (dElem && hElem && mElem && sElem) {
        dElem.innerText = formatNumberForLang(d);
        hElem.innerText = formatNumberForLang(h);
        mElem.innerText = formatNumberForLang(m);
        sElem.innerText = formatNumberForLang(s);
    } else {
        console.log("Countdown elements not found! Check your HTML IDs.");
    }

    // If countdown is finished
    if (distance < 0) {
        clearInterval(countdownInterval);
        const timerGrid = document.querySelector(".timer-grid");
        if (timerGrid) timerGrid.innerHTML = `<h3>${t('countdownComplete', 'It\'s wedding day!')}</h3>`;
    }
}

// Run every second
const countdownInterval = setInterval(updateWeddingCountdown, 1000);

// Run once immediately so it doesn't wait 1 second to start
updateWeddingCountdown();
    // =========================================================
    // 5. ADD TO CALENDAR LOGIC
    // =========================================================

    function setupCalendarLink() {
        const title = "ពិធីមង្គលអាពាហ៍ពិពាហ៍ | ឃុន ខាយស៊ីន & ពេជ្រ ម៉ានីកា";
        const description = "សូមគោរពអញ្ជើញលោក លោកស្រី ចូលរួមពិធីមង្គលអាពាហ៍ពិពាហ៍កូនប្រុស កូនស្រីរបស់យើងខ្ញុំ។";
        const location = "ដឹ ព្រេមៀ សេនធ័រ សែនសុខ (អាគារ D&E)";
        const startDateTime = "20260328T063000";
        const endDateTime = "20260328T143000";
        
        const googleCalendarLink = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(title)}&dates=${startDateTime}/${endDateTime}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;

        const calendarButton = document.getElementById('add-to-calendar');
        if(calendarButton) {
            calendarButton.href = googleCalendarLink;
        }
    }
    setupCalendarLink();


    // =========================================================
    // 6. PERSONALIZED GREETING HANDLER (CRITICAL FIX)
    // =========================================================



document.getElementById('wishForm').addEventListener('submit', function(e) {
    e.preventDefault(); // STOP the page refresh and URL message appearance
    
    const name = document.getElementById('guestName').value;
    const message = document.getElementById('wishMessage').value;
    const btn = document.getElementById('submitBtn');
    const wishesList = document.getElementById('wishesList');
    
    if (!message.trim()) {
        alert(t('emptyMessageAlert', 'Please enter a message'));
        return;
    }
    
    btn.disabled = true;
    btn.innerText = t('sendingWish', 'Sending...');

    // Send to Google Sheets API only (no localStorage)
    const date = new Date().toLocaleString('km-KH');

    // Send to API
    fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ name: name, message: message, date: date })
    })
    .then(response => {
        console.log('Wish submitted successfully');
        // Reset form - clear only the message (keep guest name)
        document.getElementById('wishMessage').value = "";
        btn.disabled = false;
        btn.innerText = t('submitWish', 'Send wish');
        
        // Create the new wish object
        const newWish = {
            name: name,
            message: message,
            date: date
        };
        
        // Add the new wish to the top of the array
        allWishes.unshift(newWish);
        console.log('New wish added to display:', newWish);
        
        // Save to localStorage as backup
        const localWishes = JSON.parse(localStorage.getItem('localWishes') || '[]');
        localWishes.unshift(newWish);
        localStorage.setItem('localWishes', JSON.stringify(localWishes));
        console.log('Saved to localStorage:', localWishes);
        
        // Just add the new wish card (don't re-render entire list)
        addNewWishCard(newWish);
        console.log('New wish displayed');
    })
    .catch(error => {
        console.error('Error submitting wish:', error);
        btn.disabled = false;
        btn.innerText = t('submitWish', 'Send wish');
    });
});

    // =========================================================
    // 8. IMAGE LIGHTBOX/GALLERY LOGIC
    // =========================================================

    const albumImages = document.querySelectorAll("#wedding-album .album-photo");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImage");
    const lightboxClose = document.getElementById("lightboxClose");
    let currentIndex = 0;

    if (albumImages.length > 0 && lightbox) {
        albumImages.forEach((img, index) => {
            img.addEventListener("click", () => {
                currentIndex = index;
                openLightbox();
            });
        });

        function openLightbox() {
            lightbox.style.display = "flex";
            if (lightboxImg) {
                lightboxImg.classList.remove("show");
                setTimeout(() => {
                    lightboxImg.src = albumImages[currentIndex].src;
                    lightboxImg.classList.add("show");
                }, 10);
            }
        }

        if (lightboxClose) {
            lightboxClose.addEventListener("click", () => {
                lightbox.style.display = "none";
            });
        }

        let startX = 0;
        let isDown = false;
        let dragStartX = 0;

        lightbox.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });

        lightbox.addEventListener("touchend", (e) => {
            let endX = e.changedTouches[0].clientX;
            let diff = startX - endX;
            if (diff > 50) swipeNext();
            if (diff < -50) swipePrev();
        });

        lightbox.addEventListener("mousedown", (e) => {
            isDown = true;
            dragStartX = e.clientX;
        });

        lightbox.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault(); 
        });

        lightbox.addEventListener("mouseup", (e) => {
            if (!isDown) return;
            isDown = false;
            let diff = dragStartX - e.clientX;
            if (diff > 50) swipeNext();
            if (diff < -50) swipePrev();
        });
        
        lightbox.addEventListener("mouseleave", () => {
            isDown = false;
        });

        function swipeNext() {
            if (!lightboxImg || currentIndex >= albumImages.length - 1) return;
            lightboxImg.classList.remove("show");
            animateSwipe("left");
            currentIndex++;
            setTimeout(() => {
                lightboxImg.classList.remove("swipe-left");
                lightboxImg.src = albumImages[currentIndex].src;
                setTimeout(() => {
                    lightboxImg.classList.add("show");
                }, 20);
            }, 320);
        }

        function swipePrev() {
            if (!lightboxImg || currentIndex <= 0) return;
            lightboxImg.classList.remove("show");
            animateSwipe("right");
            currentIndex--;
            setTimeout(() => {
                lightboxImg.classList.remove("swipe-right");
                lightboxImg.src = albumImages[currentIndex].src;
                setTimeout(() => {
                    lightboxImg.classList.add("show");
                }, 20);
            }, 320);
        }

        function animateSwipe(direction) {
            if (lightboxImg) {
                lightboxImg.classList.add(direction === "left" ? "swipe-left" : "swipe-right");
            }
        }
    }
    
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Select the elements
    const audio = document.getElementById('bg-music');
    const toggleButton = document.getElementById('music-toggle-button');
    
    // *** IMPORTANT: REPLACE 'ID_OF_YOUR_ENTRANCE_BUTTON' with the actual ID of the button
    //     that the user clicks to leave the entrance screen and go to page 2. ***
    const entranceButton = document.getElementById('ID_OF_YOUR_ENTRANCE_BUTTON'); 

    if (!audio || !toggleButton) {
        console.warn("Music element or toggle button missing.");
        return;
    }

    // --- Utility Functions ---

    // Checks if the audio is muted
    const isMuted = () => audio.muted;

    // Updates the button icon (assumes you are using Font Awesome icons)
    const updateButtonIcon = () => {
        if (isMuted()) {
            toggleButton.innerHTML = '<i class="fas fa-volume-mute"></i>'; // Muted icon
            toggleButton.title = 'Unmute background music';
        } else {
            toggleButton.innerHTML = '<i class="fas fa-volume-up"></i>'; // Playing icon
            toggleButton.title = 'Mute background music';
        }
    };
    
    // --- Main Logic ---

    // 1. Mute/Unmute Toggle Function
    const toggleMusic = () => {
        if (isMuted()) {
            audio.muted = false;
            // When unmuting, ensure the music starts if it hasn't yet (though entrance click handles this)
            if (audio.paused) {
                audio.play().catch(e => console.log("Play error on unmute:", e));
            }
        } else {
            audio.muted = true;
        }
        updateButtonIcon();
    };

    // 2. Play Music on Entrance Button Click
    if (entranceButton) {
        // Set audio to muted initially, as it hasn't started yet
        audio.muted = true; 
        updateButtonIcon();

        entranceButton.addEventListener('click', () => {
            // When the user clicks to enter page 2, start the music
            audio.play().then(() => {
                // Successfully started music, unmute it
                audio.muted = false;
                updateButtonIcon(); 
            }).catch(error => {
                // If play() fails (e.g., browser restriction), keep it muted
                console.log("Auto-play failed even after user click:", error);
                audio.muted = true;
                updateButtonIcon();
            });

            // *** IMPORTANT: If your page transition is not instantaneous, you might want to 
            // delay this audio.play() until the transition to #page-2-main is complete. ***
        });
    } else {
         console.error("Entrance button not found. Please check the ID.");
    }

    // 3. Attach Mute/Unmute Listener
    toggleButton.addEventListener('click', toggleMusic);
});

// =========================================================
// NAVIGATION MENU FUNCTIONALITY
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    const menuToggleBtn = document.getElementById('menu-toggle-button');
    const navigationMenu = document.getElementById('navigation-menu');
    const menuItems = document.querySelectorAll('.menu-item');

    // Toggle menu visibility
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', () => {
            menuToggleBtn.classList.toggle('active');
            navigationMenu.classList.toggle('active');
        });
    }

    // Close menu when a menu item is clicked and smooth scroll to section
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Close the menu
            menuToggleBtn.classList.remove('active');
            navigationMenu.classList.remove('active');
            
            // Smooth scroll to section
            const targetId = item.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const isMenuClick = navigationMenu.contains(e.target);
        const isButtonClick = menuToggleBtn.contains(e.target);
        
        if (!isMenuClick && !isButtonClick && navigationMenu.classList.contains('active')) {
            menuToggleBtn.classList.remove('active');
            navigationMenu.classList.remove('active');
        }
    });
});

// =========================================================
// GALLERY PHOTO FADE IN ON SCROLL
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    const albumPhotos = document.querySelectorAll('.album-photo');
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, observerOptions);
    
    albumPhotos.forEach(photo => {
        observer.observe(photo);
    });
});

// =========================================================
// TIMELINE ITEMS FADE IN FROM RIGHT ON SCROLL
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, observerOptions);
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
});