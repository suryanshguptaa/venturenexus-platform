// Application Data
const appData = {
  "featuredEvents": [
    {
      "id": 1,
      "title": "Startup Mahakumbh 2025",
      "date": "2025-07-15",
      "time": "09:00 AM",
      "location": "India Expo Mart, Greater Noida",
      "category": "Expo",
      "description": "India's largest startup ecosystem congregation featuring 2000+ startups, 100+ investors, and 50+ corporates.",
      "image": "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      "registrationFee": "Free",
      "expectedAttendees": 50000,
      "organizer": "Government of India",
      "tags": ["networking", "investment", "expo", "government"]
    },
    {
      "id": 2,
      "title": "IIT Delhi E-Summit 2025",
      "date": "2025-08-10",
      "time": "10:00 AM", 
      "location": "IIT Delhi, New Delhi",
      "category": "E-Cell Event",
      "description": "Annual entrepreneurship summit featuring keynotes from successful founders, pitch competitions, and workshops.",
      "image": "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=250&fit=crop",
      "registrationFee": "₹500",
      "expectedAttendees": 5000,
      "organizer": "IIT Delhi E-Cell",
      "tags": ["education", "pitch", "competition", "iit"]
    },
    {
      "id": 3,
      "title": "TechCrunch Disrupt India",
      "date": "2025-09-20",
      "time": "09:30 AM",
      "location": "NSIC Exhibition Complex, New Delhi",
      "category": "Conference",
      "description": "International startup conference bringing global investors and entrepreneurs to India's startup ecosystem.",
      "image": "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
      "registrationFee": "₹2500",
      "expectedAttendees": 8000,
      "organizer": "TechCrunch",
      "tags": ["international", "investors", "scaling", "unicorns"]
    },
    {
      "id": 4,
      "title": "Bangalore Fintech Meetup",
      "date": "2025-07-25",
      "time": "06:00 PM",
      "location": "91springboard, Koramangala, Bangalore",
      "category": "Meetup",
      "description": "Monthly gathering of fintech entrepreneurs, developers, and investors in India's Silicon Valley.",
      "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      "registrationFee": "₹200",
      "expectedAttendees": 150,
      "organizer": "Bangalore Fintech Community",
      "tags": ["fintech", "monthly", "networking", "bangalore"]
    },
    {
      "id": 5,
      "title": "Women Entrepreneur Conclave",
      "date": "2025-08-05",
      "time": "11:00 AM",
      "location": "The Leela Palace, Mumbai",
      "category": "Conference",
      "description": "Empowering women entrepreneurs with success stories, funding opportunities, and mentorship sessions.",
      "image": "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop",
      "registrationFee": "₹1000",
      "expectedAttendees": 2000,
      "organizer": "Women Entrepreneurs India",
      "tags": ["women", "empowerment", "funding", "mentorship"]
    },
    {
      "id": 6,
      "title": "Ideathon 2025: Climate Tech",
      "date": "2025-07-30",
      "time": "08:00 AM",
      "location": "BITS Pilani, Rajasthan",
      "category": "Ideathon",
      "description": "48-hour ideathon focused on climate technology solutions with expert mentorship and prize money.",
      "image": "https://images.unsplash.com/photo-1569163139394-de4e5f43e4e3?w=400&h=250&fit=crop",
      "registrationFee": "₹300",
      "expectedAttendees": 500,
      "organizer": "BITS Pilani E-Cell",
      "tags": ["climatetech", "hackathon", "sustainability", "innovation"]
    }
  ],
  "eventCategories": [
    {"name": "Pitch Competitions", "icon": "🎯", "count": 45},
    {"name": "Startup Expos", "icon": "🏢", "count": 28},
    {"name": "Investor Meetups", "icon": "💰", "count": 67},
    {"name": "Ideathons", "icon": "💡", "count": 134},
    {"name": "Workshops", "icon": "🛠️", "count": 89},
    {"name": "E-Cell Fests", "icon": "🎓", "count": 156}
  ],
  "topECells": [
    {"name": "IIT Bombay E-Cell", "events": 12, "followers": 25000},
    {"name": "IIT Delhi E-Cell", "events": 10, "followers": 22000},
    {"name": "BITS Pilani E-Cell", "events": 8, "followers": 18000},
    {"name": "IIT Kanpur E-Cell", "events": 9, "followers": 16000},
    {"name": "NIT Trichy E-Cell", "events": 7, "followers": 12000}
  ],
  "statistics": {
    "totalEvents": 2847,
    "totalUsers": 125000,
    "registeredECells": 450,
    "successfulConnections": 8500
  },
  "testimonials": [
    {
      "name": "Rajesh Kumar",
      "role": "Founder, TechStart Solutions",
      "college": "IIT Delhi",
      "text": "VentureNexus helped me discover the perfect investor meetup that led to our Series A funding!",
      "rating": 5
    },
    {
      "name": "Priya Sharma",
      "role": "Student Entrepreneur",
      "college": "BITS Pilani",
      "text": "The AI recommendations are spot-on! I found events I would never have discovered otherwise.",
      "rating": 5
    }
  ]
};

// Global Variables
let currentFilter = 'all';
let isLoading = false;

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const heroSearch = document.getElementById('heroSearch');
const eventsGrid = document.getElementById('eventsGrid');
const categoriesGrid = document.getElementById('categoriesGrid');
const ecellsGrid = document.getElementById('ecellsGrid');
const testimonialsGrid = document.getElementById('testimonialsGrid');
const chatFab = document.getElementById('chatFab');
const aiChat = document.getElementById('aiChat');
const chatClose = document.getElementById('chatClose');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');
const loadingOverlay = document.getElementById('loadingOverlay');

// Utility Functions
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    weekday: 'long'
  };
  return date.toLocaleDateString('en-IN', options);
}

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

function showLoading() {
  if (loadingOverlay) {
    loadingOverlay.classList.add('show');
  }
}

function hideLoading() {
  if (loadingOverlay) {
    loadingOverlay.classList.remove('show');
  }
}

// Animation Functions
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = formatNumber(Math.floor(current));
  }, 16);
}

function observeCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

// Scroll Effects
function handleScroll() {
  const scrollY = window.scrollY;
  
  if (navbar) {
    if (scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
}

// Navigation Functions
function initNavigation() {
  // Mobile menu toggle
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      
      // Close mobile menu if open
      if (navMenu) {
        navMenu.classList.remove('active');
      }
      if (mobileMenuBtn) {
        mobileMenuBtn.classList.remove('active');
      }
      
      // Update active nav link
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

// Event Functions
function createEventCard(event) {
  return `
    <div class="event-card" data-category="${event.category}">
      <div class="event-card-image" style="background-image: url('${event.image}')">
        <div class="event-category">${event.category}</div>
      </div>
      <div class="event-card-content">
        <h3 class="event-title">${event.title}</h3>
        <div class="event-meta">
          <div>📅 ${formatDate(event.date)} • ${event.time}</div>
          <div>📍 ${event.location}</div>
          <div>👥 ${event.organizer}</div>
        </div>
        <p class="event-description">${event.description}</p>
        <div class="event-footer">
          <span class="event-price">${event.registrationFee}</span>
          <span class="event-attendees">${formatNumber(event.expectedAttendees)} attending</span>
        </div>
      </div>
    </div>
  `;
}

function renderEvents(events = appData.featuredEvents) {
  if (!eventsGrid) return;
  
  showLoading();
  
  setTimeout(() => {
    eventsGrid.innerHTML = events.map(createEventCard).join('');
    hideLoading();
    
    // Add click handlers for event cards
    document.querySelectorAll('.event-card').forEach(card => {
      card.addEventListener('click', () => {
        // In a real app, this would navigate to event details
        showNotification('Event details coming soon!', 'info');
      });
    });
  }, 500);
}

function filterEvents(category) {
  currentFilter = category;
  
  // Update filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-filter="${category}"]`).classList.add('active');
  
  // Filter events
  if (category === 'all') {
    renderEvents(appData.featuredEvents);
  } else {
    const filteredEvents = appData.featuredEvents.filter(event => event.category === category);
    renderEvents(filteredEvents);
  }
}

function initEventFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterEvents(filter);
    });
  });
}

// Category Functions
function createCategoryCard(category) {
  return `
    <div class="category-card">
      <div class="category-icon">${category.icon}</div>
      <h3 class="category-name">${category.name}</h3>
      <p class="category-count">${category.count} events</p>
    </div>
  `;
}

function renderCategories() {
  if (!categoriesGrid) return;
  
  categoriesGrid.innerHTML = appData.eventCategories.map(createCategoryCard).join('');
  
  // Add click handlers
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      showNotification('Category filtering coming soon!', 'info');
    });
  });
}

// E-Cell Functions
function createECellCard(ecell) {
  return `
    <div class="ecell-card">
      <h3 class="ecell-name">${ecell.name}</h3>
      <div class="ecell-stats">
        <span>${ecell.events} events</span>
        <span>${formatNumber(ecell.followers)} followers</span>
      </div>
    </div>
  `;
}

function renderECells() {
  if (!ecellsGrid) return;
  
  ecellsGrid.innerHTML = appData.topECells.map(createECellCard).join('');
  
  // Add click handlers
  document.querySelectorAll('.ecell-card').forEach(card => {
    card.addEventListener('click', () => {
      showNotification('E-Cell portal coming soon!', 'info');
    });
  });
}

// Testimonial Functions
function createTestimonialCard(testimonial) {
  const stars = '⭐'.repeat(testimonial.rating);
  return `
    <div class="testimonial-card">
      <div class="testimonial-rating">${stars}</div>
      <p class="testimonial-text">"${testimonial.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-info">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.role} • ${testimonial.college}</p>
        </div>
      </div>
    </div>
  `;
}

function renderTestimonials() {
  if (!testimonialsGrid) return;
  
  testimonialsGrid.innerHTML = appData.testimonials.map(createTestimonialCard).join('');
}

// Search Functions
function initSearch() {
  if (!heroSearch) return;
  
  heroSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (query.length > 2) {
      const filteredEvents = appData.featuredEvents.filter(event => 
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        event.tags.some(tag => tag.toLowerCase().includes(query))
      );
      renderEvents(filteredEvents);
    } else if (query.length === 0) {
      renderEvents(appData.featuredEvents);
    }
  });
  
  heroSearch.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      showNotification('AI-powered search results!', 'success');
    }
  });
}

// AI Chat Functions
function initAIChat() {
  if (!chatFab || !aiChat) return;
  
  chatFab.addEventListener('click', () => {
    aiChat.classList.add('open');
    chatFab.style.display = 'none';
  });
  
  if (chatClose) {
    chatClose.addEventListener('click', () => {
      aiChat.classList.remove('open');
      chatFab.style.display = 'flex';
    });
  }
  
  if (chatSend && chatInput) {
    const sendMessage = () => {
      const message = chatInput.value.trim();
      if (message) {
        addChatMessage(message, 'user');
        chatInput.value = '';
        
        // Simulate AI response
        setTimeout(() => {
          const responses = [
            "I found some great startup events for you! Would you like me to show events in your city?",
            "Based on your interests, I recommend checking out the TechCrunch Disrupt India event. It's perfect for scaling startups!",
            "I can help you discover events by category. Are you interested in pitch competitions, investor meetups, or workshops?",
            "Great question! Let me search for entrepreneurship events that match your profile.",
            "I noticed you're interested in fintech. The Bangalore Fintech Meetup might be perfect for you!"
          ];
          const randomResponse = responses[Math.floor(Math.random() * responses.length)];
          addChatMessage(randomResponse, 'bot');
        }, 1000);
      }
    };
    
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }
}

function addChatMessage(message, type) {
  if (!chatMessages) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${type}`;
  messageDiv.innerHTML = `<div class="message-content">${message}</div>`;
  
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Notification System
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-surface);
    color: var(--color-text);
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: var(--shadow-lg);
    border-left: 4px solid var(--color-${type === 'success' ? 'startup-green' : info === 'info' ? 'startup-blue' : 'startup-orange'});
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 300px;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Button Interactions
function initButtonInteractions() {
  // Hero CTA buttons
  document.querySelectorAll('.hero-cta .btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.textContent.includes('Explore')) {
        document.querySelector('#events').scrollIntoView({ behavior: 'smooth' });
      } else {
        showNotification('E-Cell portal coming soon!', 'info');
      }
    });
  });
  
  // Search button
  document.querySelector('.search-btn')?.addEventListener('click', () => {
    showNotification('AI search activated!', 'success');
  });
  
  // View All Events button
  document.querySelector('.section-cta .btn')?.addEventListener('click', () => {
    showNotification('Loading all events...', 'info');
  });
  
  // CTA section buttons
  document.querySelectorAll('.cta-buttons .btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.textContent.includes('Get Started')) {
        showNotification('Welcome to VentureNexus!', 'success');
      } else {
        showNotification('Learn more about our platform!', 'info');
      }
    });
  });
  
  // Login/Signup buttons
  document.querySelectorAll('.nav-actions .btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showNotification(`${btn.textContent} coming soon!`, 'info');
    });
  });
}

// Initialize Application
function initApp() {
  console.log('🚀 Initializing VentureNexus...');
  
  // Initialize all components
  initNavigation();
  initSearch();
  initEventFilters();
  initAIChat();
  initButtonInteractions();
  
  // Render content
  renderEvents();
  renderCategories();
  renderECells();
  renderTestimonials();
  
  // Initialize scroll effects
  observeCounters();
  
  // Event listeners
  window.addEventListener('scroll', handleScroll);
  
  // Add some initial delay for smooth loading
  setTimeout(() => {
    hideLoading();
    showNotification('Welcome to VentureNexus! 🚀', 'success');
  }, 1000);
  
  console.log('✅ VentureNexus initialized successfully!');
}

// Service Worker Registration (PWA)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    // Page is visible again
    console.log('VentureNexus is back in focus');
  }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + K to focus search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    if (heroSearch) {
      heroSearch.focus();
    }
  }
  
  // Escape to close chat
  if (e.key === 'Escape' && aiChat && aiChat.classList.contains('open')) {
    aiChat.classList.remove('open');
    chatFab.style.display = 'flex';
  }
});

// Export for debugging (if needed)
window.VentureNexus = {
  data: appData,
  currentFilter,
  renderEvents,
  filterEvents,
  showNotification
};