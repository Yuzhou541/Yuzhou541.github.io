// USTC Timetable period definitions
const periodTimes = {
  1: { start: '7:50', end: '8:35' },
  2: { start: '8:40', end: '9:25' },
  3: { start: '9:45', end: '10:30' },
  4: { start: '10:35', end: '11:20' },
  5: { start: '11:25', end: '12:10' },
  6: { start: '14:00', end: '14:45' },
  7: { start: '14:50', end: '15:35' },
  8: { start: '15:55', end: '16:40' },
  9: { start: '16:45', end: '17:30' },
  10: { start: '17:35', end: '18:20' },
  11: { start: '19:30', end: '20:15' },
  12: { start: '20:20', end: '21:05' },
  13: { start: '21:10', end: '21:55' }
};

// USTC classes storage
let ustcClasses = JSON.parse(localStorage.getItem('ustcClasses')) || [];

// General events storage
let calendarEvents = JSON.parse(localStorage.getItem('calendarEvents')) || [];
let timetableEvents = JSON.parse(localStorage.getItem('timetableEvents')) || [];
    
// Preserve initial timetable HTML
const timetableTbody = document.querySelector('#ustc-timetable tbody');
const timetableTbodyInitialHTML = timetableTbody.innerHTML;
    
// Initialize custom cursor functionality
document.addEventListener('DOMContentLoaded', function() {
  const cursorOuter = document.querySelector('.cursor-outer');
  const cursorInner = document.querySelector('.cursor-inner');
  const positions = { mouseX: 0, mouseY: 0 };
      
  // Track cursor position
  document.addEventListener('mousemove', (e) => {
    positions.mouseX = e.clientX;
    positions.mouseY = e.clientY;
        
    cursorOuter.style.left = `${positions.mouseX}px`;
    cursorOuter.style.top = `${positions.mouseY}px`;
    cursorInner.style.left = `${positions.mouseX}px`;
    cursorInner.style.top = `${positions.mouseY}px`;
  });
      
  // Click effect
  document.addEventListener('mousedown', (e) => {
    cursorInner.classList.add('click');
        
    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
        
    // Cleanup after animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
      
  document.addEventListener('mouseup', () => {
    cursorInner.classList.remove('click');
  });
      
  // Hover effect
  const hoverElements = document.querySelectorAll('a, button, [role="button"], #about-btn, #social-btn, #toolkit-btn, #schedule-btn');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorInner.classList.add('hover');
    });
        
    el.addEventListener('mouseleave', () => {
      cursorInner.classList.remove('hover');
    });
  });

  // Initialize theme
  initializeTheme();
      
  // Initialize toolkit filters
  initToolkitFilter();
      
  // Initialize schedule page
  initSchedulePage();
      
  // Initialize clock toggle
  initClockToggle();
      
  // Initialize weeks selection
  initWeeksSelection();
      
  // Initialize semester selection
  initSemesterSelection();
});

// Page elements
const cover = document.getElementById("cover");
const resume = document.getElementById("resume");
const social = document.getElementById("social");
const toolkit = document.getElementById("toolkit");
const schedule = document.getElementById("schedule");
const avatarFrame = document.getElementById("avatar-frame");
const name = document.getElementById("name");
const slogan = document.getElementById("slogan");
const aboutBtn = document.getElementById("about-btn");
const socialBtn = document.getElementById("social-btn");
const toolkitBtn = document.getElementById("toolkit-btn");
const scheduleBtn = document.getElementById("schedule-btn");
const toggleBtn = document.getElementById("toggle-btn");
const toggleBtnSocial = document.getElementById("toggle-btn-social");
const toggleBtnToolkit = document.getElementById("toggle-btn-toolkit");
const toggleBtnSchedule = document.getElementById("toggle-btn-schedule");
const clock = document.getElementById("clock");
const clockSocial = document.getElementById("clock-social");
const clockToolkit = document.getElementById("clock-toolkit");
const clockSchedule = document.getElementById("clock-schedule");
const resumeBackBtn = document.getElementById("resume-back-btn");
const socialBackBtn = document.getElementById("social-back-btn");
const toolkitBackBtn = document.getElementById("toolkit-back-btn");
const scheduleBackBtn = document.getElementById("schedule-back-btn");

let coverHidden = false;
let currentPage = null;
let calendar; // FullCalendar instance
let currentWeek = new Date(); // Timetable current week
    
// Animated display of cover elements
function showCoverElements() {
  avatarFrame.classList.add("visible");
  setTimeout(() => {
    name.classList.add("visible");
  }, 400);
  setTimeout(() => {
    slogan.classList.add("visible");
  }, 800);
  setTimeout(() => {
    aboutBtn.classList.add("visible");
    socialBtn.classList.add("visible");
    toolkitBtn.classList.add("visible");
    scheduleBtn.classList.add("visible");
  }, 1200);

  // Hide clock toggle initially
  const clockToggle = document.querySelector('.clock-toggle');
  if (clockToggle) clockToggle.style.display = 'none';
}

// Transition from cover to content page
function showPage(page) {
  if (coverHidden && currentPage === page) return;
      
  cover.classList.add("hidden");
  setTimeout(() => {
    cover.style.display = "none";
    document.body.style.overflow = "auto";
    coverHidden = true;
        
    // Hide all pages
    resume.classList.remove("visible");
    social.classList.remove("visible");
    toolkit.classList.remove("visible");
    schedule.classList.remove("visible");
        
    // Show selected page
    if (page === 'resume') {
      resume.classList.add("visible");
      currentPage = 'resume';
      setTimeout(() => {
        resumeBackBtn.classList.add("visible");
      }, 500);
    } else if (page === 'social') {
      social.classList.add("visible");
      currentPage = 'social';
      setTimeout(() => {
        socialBackBtn.classList.add("visible");
      }, 500);
    } else if (page === 'toolkit') {
      toolkit.classList.add("visible");
      currentPage = 'toolkit';
      setTimeout(() => {
        toolkitBackBtn.classList.add("visible");
      }, 500);
    } else if (page === 'schedule') {
      schedule.classList.add("visible");
      currentPage = 'schedule';
      setTimeout(() => {
        scheduleBackBtn.classList.add("visible");
      }, 500);
    }
  }, 1500);
      
  avatarFrame.classList.remove("visible");
  name.classList.remove("visible");
  slogan.classList.remove("visible");
  aboutBtn.classList.remove("visible");
  socialBtn.classList.remove("visible");
  toolkitBtn.classList.remove("visible");
  scheduleBtn.classList.remove("visible");

  // Show clock toggle
  const clockToggle = document.querySelector('.clock-toggle');
  if (clockToggle) clockToggle.style.display = 'flex';
}

// Return to cover page
function backToCover() {
  coverHidden = false;
  cover.style.display = "flex";
  cover.classList.remove("hidden");
      
  // Hide all pages and back buttons
  resume.classList.remove("visible");
  social.classList.remove("visible");
  toolkit.classList.remove("visible");
  schedule.classList.remove("visible");
  resumeBackBtn.classList.remove("visible");
  socialBackBtn.classList.remove("visible");
  toolkitBackBtn.classList.remove("visible");
  scheduleBackBtn.classList.remove("visible");
      
  // Reset cover elements
  setTimeout(() => {
    cover.classList.add("visible");
    showCoverElements();
  }, 100);
}

// Initialize on page load
window.addEventListener("load", () => {
  cover.classList.add("visible");
  showCoverElements();
  startClock();
});

// Button event handlers
aboutBtn.addEventListener("click", () => showPage('resume'));
socialBtn.addEventListener("click", () => showPage('social'));
toolkitBtn.addEventListener("click", () => showPage('toolkit'));
scheduleBtn.addEventListener("click", () => showPage('schedule'));
resumeBackBtn.addEventListener("click", backToCover);
socialBackBtn.addEventListener("click", backToCover);
toolkitBackBtn.addEventListener("click", backToCover);
scheduleBackBtn.addEventListener("click", backToCover);

// Theme management functions
function initializeTheme() {
  const currentHour = new Date().getHours();
  const isNightTime = currentHour >= 18 || currentHour < 6;
  applyTheme(isNightTime ? 'dark' : 'light');
  updateToggleBtnIcon();
}

// Theme toggle functionality
toggleBtn.addEventListener("click", toggleTheme);
toggleBtnSocial.addEventListener("click", toggleTheme);
toggleBtnToolkit.addEventListener("click", toggleTheme);
toggleBtnSchedule.addEventListener("click", toggleTheme);

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  updateToggleBtnIcon();
  updateCalendarTheme();
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

function updateToggleBtnIcon() {
  const isDark = document.body.classList.contains("dark-mode");
      
  // Update all theme toggle buttons
  const toggleButtons = document.querySelectorAll("#toggle-btn, #toggle-btn-social, #toggle-btn-toolkit, #toggle-btn-schedule");
      
  toggleButtons.forEach(button => {
    const icon = button.querySelector("i");
    if (isDark) {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    } else {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  });
}

// Clock functionality
function startClock() {
  updateClock();
  setInterval(updateClock, 1000);
}

function updateClock() {
  const now = new Date();
  const timeZoneName = now.toLocaleTimeString("en-us", { timeZoneName: "short" }).split(" ").pop();
  const hours = now.getHours().toString().padStart(2, "0");
  const mins = now.getMinutes().toString().padStart(2, "0");
  const timeString = `${timeZoneName} ${hours}:${mins}`;
      
  clock.textContent = timeString;
  clockSocial.textContent = timeString;
  clockToolkit.textContent = timeString;
  clockSchedule.textContent = timeString;
}
    
// Clock toggle functionality
function initClockToggle() {
  const clockToggle = document.getElementById("clock-toggle");
  const clocks = [clock, clockSocial, clockToolkit, clockSchedule];
      
  // Initial state: clocks expanded
  let clocksCollapsed = false;
      
  clockToggle.addEventListener("click", () => {
    clocksCollapsed = !clocksCollapsed;
        
    // Update all clocks
    clocks.forEach(clockElement => {
      if (clocksCollapsed) {
        clockElement.classList.add("collapsed");
      } else {
        clockElement.classList.remove("collapsed");
      }
    });
        
    // Update button icon
    if (clocksCollapsed) {
      clockToggle.innerHTML = '<i class="fas fa-chevron-right"></i>';
    } else {
      clockToggle.innerHTML = '<i class="fas fa-clock"></i>';
    }
  });
}
    
// Toolkit filtering and search functionality
function initToolkitFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('toolkit-search-input');
  const toolkitCards = document.querySelectorAll('.toolkit-card');
  const categorySections = document.querySelectorAll('.category-section');
  const noResultsMessage = document.querySelector('.no-results');
      
  // Category filter functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
          
      // Update button states
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
          
      // Apply filters
      filterTools(category, searchInput.value.trim());
    });
  });
      
  // Search functionality
  searchInput.addEventListener('input', () => {
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
    filterTools(activeCategory, searchInput.value.trim());
  });
      
  // Filter tools function
  function filterTools(category, searchTerm) {
    let hasResults = false;
    let totalVisible = 0;
        
    // Process all cards
    toolkitCards.forEach(card => {
      const cardCategories = card.dataset.categories.split(' ');
      const cardTitle = card.dataset.title.toLowerCase();
      const searchMatch = searchTerm === '' || cardTitle.includes(searchTerm.toLowerCase());
      const categoryMatch = category === 'all' || cardCategories.includes(category);
          
      if (searchMatch && categoryMatch) {
        card.style.display = 'flex';
        totalVisible++;
      } else {
        card.style.display = 'none';
      }
    });
        
    // Update category section visibility
    categorySections.forEach(section => {
      const sectionCategory = section.dataset.category;
      const hasVisibleCards = Array.from(section.querySelectorAll('.toolkit-card'))
        .some(card => card.style.display !== 'none');
          
      if ((category === 'all' || sectionCategory === category) && hasVisibleCards) {
        section.style.display = 'block';
        hasResults = true;
      } else {
        section.style.display = 'none';
      }
    });
        
    // Show/hide no results message
    if (totalVisible === 0) {
      noResultsMessage.style.display = 'block';
    } else {
      noResultsMessage.style.display = 'none';
    }
  }
      
  // Initial display: show all
  filterTools('all', '');
}
    
// Schedule Page Functionality
function initSchedulePage() {
  // Initialize calendar and timetable
  initCalendar();
  initTimetable();
      
  // View switching functionality
  const viewSwitchers = document.querySelectorAll('.schedule-switch-btn');
  const calendarSection = document.getElementById('calendar-section');
  const timetableSection = document.getElementById('timetable-section');
  const ustcTimetableSection = document.getElementById('ustc-timetable-section');
  const myTimetableSection = document.getElementById('my-timetable-section');
      
  // Set My Timetable as default view
  viewSwitchers.forEach(b => b.classList.remove('active'));
  document.querySelector('.schedule-switch-btn[data-view="my-timetable"]').classList.add('active');
  calendarSection.classList.remove('active');
  timetableSection.classList.remove('active');
  ustcTimetableSection.classList.remove('active');
  myTimetableSection.classList.add('active');
      
  viewSwitchers.forEach(btn => {
    btn.addEventListener('click', () => {
      viewSwitchers.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
          
      const view = btn.dataset.view;
      calendarSection.classList.remove('active');
      timetableSection.classList.remove('active');
      ustcTimetableSection.classList.remove('active');
      myTimetableSection.classList.remove('active');
          
      if (view === 'calendar') {
        calendarSection.classList.add('active');
        // Ensure calendar always shows day view when activated
        calendar.changeView('dayGridDay');
      } else if (view === 'timetable') {
        timetableSection.classList.add('active');
        updateTimetable();
      } else if (view === 'ustc-timetable') {
        ustcTimetableSection.classList.add('active');
        renderUstcTimetable();
      } else if (view === 'my-timetable') {
        myTimetableSection.classList.add('active');
      }
    });
  });
      
  // Event modal functionality
  const eventModal = document.getElementById('event-modal');
  const eventModalClose = document.getElementById('event-modal-close');
  const eventCancelBtn = document.getElementById('event-cancel-btn');
  const eventForm = document.getElementById('event-form');
      
  // General event modal
  const generalEventModal = document.getElementById('general-event-modal');
  const generalEventModalClose = document.getElementById('general-event-modal-close');
  const generalEventCancelBtn = document.getElementById('general-event-cancel-btn');
  const generalEventForm = document.getElementById('general-event-form');
      
  // Open modal for new calendar event
  document.getElementById('add-calendar-event').addEventListener('click', () => {
    openGeneralEventModal('calendar');
  });
      
  // Open modal for new timetable event
  document.getElementById('add-timetable-event').addEventListener('click', () => {
    openGeneralEventModal('timetable');
  });
      
  // Open modal for new USTC class
  document.getElementById('add-ustc-event').addEventListener('click', () => {
    openUstcClassModal();
  });
      
  // Close modals
  eventModalClose.addEventListener('click', () => {
    eventModal.style.display = 'none';
  });
      
  eventCancelBtn.addEventListener('click', () => {
    eventModal.style.display = 'none';
  });
      
  generalEventModalClose.addEventListener('click', () => {
    generalEventModal.style.display = 'none';
  });
      
  generalEventCancelBtn.addEventListener('click', () => {
    generalEventModal.style.display = 'none';
  });
      
  // Close modals when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === eventModal) {
      eventModal.style.display = 'none';
    }
    if (e.target === generalEventModal) {
      generalEventModal.style.display = 'none';
    }
  });
      
  // Handle USTC class form submission
  eventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveUstcClass();
  });
      
  // Handle general event form submission
  generalEventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveGeneralEvent();
  });
      
  // Delete USTC class
  document.getElementById('event-delete-btn').addEventListener('click', () => {
    deleteUstcClass();
  });
      
  // Delete general event
  document.getElementById('general-event-delete-btn').addEventListener('click', () => {
    deleteGeneralEvent();
  });
      
  // Week navigation for timetable
  document.getElementById('prev-week-btn').addEventListener('click', () => {
    currentWeek.setDate(currentWeek.getDate() - 7);
    updateTimetable();
  });
      
  document.getElementById('next-week-btn').addEventListener('click', () => {
    currentWeek.setDate(currentWeek.getDate() + 7);
    updateTimetable();
  });
}
    
// Semester selection functionality
function initSemesterSelection() {
  const semesterLinks = document.querySelectorAll('.semester-dropdown-content a');
      
  semesterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const semester = link.dataset.semester;
          
      // Update dropdown button text
      const dropdownBtn = document.querySelector('.semester-dropdown-btn');
      dropdownBtn.innerHTML = `${link.textContent} <i class="fas fa-caret-down"></i>`;
          
      // Hide all semester timetables
      document.querySelectorAll('.semester-timetable-container').forEach(container => {
        container.classList.remove('active');
      });
          
      // Show selected semester timetable
      document.getElementById(semester).classList.add('active');
    });
  });
}
    
// Calendar functionality
function initCalendar() {
  const calendarEl = document.getElementById('calendar-container');
      
  calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridDay',  // Default to day view
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: calendarEvents,
    eventClick: function(info) {
      openGeneralEventModal('calendar', info.event);
    },
    eventDidMount: function(info) {
      // Apply dark mode styles
      if (document.body.classList.contains('dark-mode')) {
        info.el.style.backgroundColor = '#6a3093';
        info.el.style.borderColor = '#6a3093';
      }
    }
  });
      
  calendar.render();
  updateCalendarTheme();
}
    
function updateCalendarTheme() {
  if (!calendar) return;
      
  if (document.body.classList.contains('dark-mode')) {
    calendar.setOption('themeSystem', 'standard');
  } else {
    calendar.setOption('themeSystem', 'standard');
  }
}
    
// Timetable functionality
function initTimetable() {
  // Generate timetable structure
  const timetableBody = document.getElementById('timetable-body');
  timetableBody.innerHTML = '';
      
  // Create time slots from 8:00 to 22:00
  for (let hour = 8; hour <= 22; hour++) {
    const row = document.createElement('tr');
        
    // Time cell
    const timeCell = document.createElement('td');
    timeCell.className = 'time-cell';
    timeCell.textContent = `${hour}:00 - ${hour + 1}:00`;
    row.appendChild(timeCell);
        
    // Day cells
    for (let day = 0; day < 7; day++) {
      const dayCell = document.createElement('td');
      dayCell.dataset.day = day;
      dayCell.dataset.hour = hour;
      dayCell.addEventListener('click', () => {
        handleTimetableCellClick(dayCell);
      });
      row.appendChild(dayCell);
    }
        
    timetableBody.appendChild(row);
  }
      
  updateTimetable();
}
    
function updateTimetable() {
  // Fix: Correct week calculation by using ISO week
  const weekStart = new Date(currentWeek);
  // Adjust to Monday of the current week
  weekStart.setDate(currentWeek.getDate() - (currentWeek.getDay() + 6) % 7);
  
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);
      
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  document.getElementById('current-week').textContent =
    `Week of ${weekStart.toLocaleDateString('en-US', options)} - ${weekEnd.toLocaleDateString('en-US', options)}`;
      
  // Clear all cells
  const cells = document.querySelectorAll('#timetable-body td:not(.time-cell)');
  cells.forEach(cell => {
    cell.className = '';
    cell.innerHTML = '';
  });
      
  // Filter events for current week
  const weekStartTime = weekStart.getTime();
  const weekEndTime = weekEnd.getTime() + 24 * 60 * 60 * 1000;
      
  const weekEvents = timetableEvents.filter(event => {
    const eventDate = new Date(event.start).getTime();
    return eventDate >= weekStartTime && eventDate < weekEndTime;
  });
      
  // Populate events
  weekEvents.forEach(event => {
    const eventDate = new Date(event.start);
    const day = (eventDate.getDay() + 6) % 7; // Convert to 0-6 (Mon-Sun)
    const hour = eventDate.getHours();
        
    const cell = document.querySelector(`#timetable-body td[data-day="${day}"][data-hour="${hour}"]`);
    if (cell) {
      cell.className = 'has-event';
          
      const eventElement = document.createElement('div');
      eventElement.className = 'timetable-event';
      eventElement.innerHTML = `
        <strong>${event.title}</strong>
        ${event.description ? `<small>${event.description}</small>` : ''}
      `;
      eventElement.addEventListener('click', (e) => {
        e.stopPropagation();
        openGeneralEventModal('timetable', event);
      });
          
      cell.appendChild(eventElement);
    }
  });
}
    
function handleTimetableCellClick(cell) {
  const day = parseInt(cell.dataset.day);
  const hour = parseInt(cell.dataset.hour);
      
  // Calculate date for this cell
  const eventDate = new Date(currentWeek);
  // Adjust to Monday of the current week
  eventDate.setDate(currentWeek.getDate() - (currentWeek.getDay() + 6) % 7);
  eventDate.setDate(eventDate.getDate() + day);
  eventDate.setHours(hour, 0, 0, 0);
      
  // End time is 1 hour later
  const endDate = new Date(eventDate);
  endDate.setHours(hour + 1, 0, 0, 0);
      
  // Open modal with pre-filled times
  openGeneralEventModal('timetable', null, {
    start: eventDate,
    end: endDate
  });
}
    
// Initialize weeks selection
function initWeeksSelection() {
  const weeksGrid = document.getElementById('weeks-grid');
  weeksGrid.innerHTML = '';
      
  for (let week = 1; week <= 18; week++) {
    const checkboxContainer = document.createElement('div');
    checkboxContainer.className = 'week-checkbox';
        
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `week-${week}`;
    checkbox.name = 'ustc-week';
    checkbox.value = week;
        
    const label = document.createElement('label');
    label.htmlFor = `week-${week}`;
    label.textContent = week;
        
    checkbox.addEventListener('change', updateWeekDisplay);
        
    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(label);
    weeksGrid.appendChild(checkboxContainer);
  }
}
    
// Update week display based on selected weeks
function updateWeekDisplay() {
  const weekDisplay = document.getElementById('week-display');
  const selectedWeeks = Array.from(document.querySelectorAll('input[name="ustc-week"]:checked'))
    .map(checkbox => parseInt(checkbox.value))
    .sort((a, b) => a - b);
      
  if (selectedWeeks.length === 0) {
    weekDisplay.textContent = 'No weeks selected';
    return;
  }
      
  // Format weeks to ranges
  const ranges = [];
  let start = selectedWeeks[0];
  let end = start;
      
  for (let i = 1; i < selectedWeeks.length; i++) {
    if (selectedWeeks[i] === end + 1) {
      end = selectedWeeks[i];
    } else {
      ranges.push(start === end ? start : `${start}-${end}`);
      start = selectedWeeks[i];
      end = start;
    }
  }
  ranges.push(start === end ? start : `${start}-${end}`);
      
  weekDisplay.textContent = ranges.join(', ') + ' week(s)';
}
    
// Format weeks for display
function formatWeeks(weeks) {
  if (!weeks || weeks.length === 0) return '';
      
  // Sort weeks numerically
  const sortedWeeks = [...weeks].sort((a, b) => a - b);
      
  // Create ranges
  const ranges = [];
  let start = sortedWeeks[0];
  let end = start;
      
  for (let i = 1; i < sortedWeeks.length; i++) {
    if (sortedWeeks[i] === end + 1) {
      end = sortedWeeks[i];
    } else {
      ranges.push(start === end ? start : `${start}-${end}`);
      start = sortedWeeks[i];
      end = start;
    }
  }
  ranges.push(start === end ? start : `${start}-${end}`);
      
  return ranges.join(', ');
}
    
// USTC Timetable functionality
function renderUstcTimetable() {
  // Restore initial table structure
  const timetable = document.getElementById('ustc-timetable');
  const tbody = timetable.querySelector('tbody');
  tbody.innerHTML = timetableTbodyInitialHTML;
      
  // Get all cells
  const cells = Array.from(tbody.querySelectorAll('td[data-period][data-day]'));
      
  // Initialize occupied status array
  const occupied = Array(14).fill().map(() => Array(7).fill(false));
      
  // Clear cell content
  cells.forEach(cell => {
    cell.innerHTML = '';
    cell.rowSpan = 1;
    cell.className = '';
  });
      
  // Sort classes by start period
  ustcClasses.sort((a, b) => a.periodStart - b.periodStart);
      
  // Store course information per cell
  const cellCourses = Array(14).fill().map(() => Array(7).fill().map(() => []));
      
  // Collect courses for each cell
  ustcClasses.forEach(cls => {
    const periodStart = parseInt(cls.periodStart);
    const periodEnd = parseInt(cls.periodEnd);
        
    cls.days.forEach(day => {
      for (let period = periodStart; period <= periodEnd; period++) {
        if (period >= 1 && period <= 13) {
          cellCourses[period][day].push({
            id: cls.id,
            courseName: cls.courseName,
            instructor: cls.instructor,
            location: cls.location,
            weeks: cls.weeks,
            periodStart: cls.periodStart,
            periodEnd: cls.periodEnd
          });
        }
      }
    });
  });
      
  // Render courses to cells
  for (let period = 1; period <= 13; period++) {
    for (let day = 0; day <= 6; day++) {
      const courses = cellCourses[period][day];
      if (courses.length === 0) continue;
          
      // Find current cell
      const cell = tbody.querySelector(`td[data-period="${period}"][data-day="${day}"]`);
      if (!cell) continue;
          
      // Skip if already merged
      if (occupied[period][day]) continue;
          
      // Find maximum period span
      let maxPeriod = period;
      for (let p = period; p <= 13; p++) {
        // Check if all courses exist in subsequent periods
        const allExist = courses.every(course =>
          cellCourses[p][day].some(c => c.id === course.id)
        );
            
        if (allExist) {
          maxPeriod = p;
        } else {
          break;
        }
      }
          
      // Calculate row span
      const rowSpan = maxPeriod - period + 1;
          
      // Mark periods as occupied
      for (let p = period; p <= maxPeriod; p++) {
        occupied[p][day] = true;
      }
          
      // Set merged cell
      cell.rowSpan = rowSpan;
      cell.className = 'has-class event-cell';
          
      // Calculate end period
      const endPeriod = period + rowSpan - 1;
          
      // Create start time element
      const startInfo = document.createElement('div');
      startInfo.className = 'time-info start-info';
      startInfo.textContent = periodTimes[period].start;
          
      // Create end time element
      const endInfo = document.createElement('div');
      endInfo.className = 'time-info end-info';
      endInfo.textContent = periodTimes[endPeriod].end;
          
      // Create course container
      const container = document.createElement('div');
      container.className = 'overlap-container';
          
      // Add time elements
      cell.appendChild(startInfo);
      cell.appendChild(endInfo);
          
      // Add course information
      courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.className = 'overlap-course';
        courseDiv.innerHTML = `
          <div class="course-name">${course.courseName}</div>
          <div class="instructor">${course.instructor}</div>
          <div class="location">${course.location}</div>
        `;
        container.appendChild(courseDiv);
      });
          
      // Add container to cell
      cell.appendChild(container);
          
      // Remove merged cells
      for (let p = period + 1; p <= maxPeriod; p++) {
        const nextCell = tbody.querySelector(`td[data-period="${p}"][data-day="${day}"]`);
        if (nextCell) {
          nextCell.style.display = 'none';
        }
      }
    }
  }
      
  // Render course list
  renderUstcClassesList();
}
    
function renderUstcClassesList() {
  const tbody = document.getElementById('ustc-classes-body');
  tbody.innerHTML = '';
      
  ustcClasses.forEach(cls => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${cls.periodStart} - ${cls.periodEnd}</td>
      <td>${cls.courseName}</td>
      <td>${cls.instructor}</td>
      <td>${cls.location}</td>
      <td>${formatWeeks(cls.weeks)}</td>
      <td>${getDaysString(cls.days)}</td>
      <td>
        <button class="edit-ustc-class" data-id="${cls.id}">Edit</button>
        <button class="delete-ustc-class" data-id="${cls.id}">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });
      
  // Add edit events
  document.querySelectorAll('.edit-ustc-class').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const cls = ustcClasses.find(c => c.id === id);
      if (cls) {
        openUstcClassModal(cls);
      }
    });
  });
      
  // Add delete events
  document.querySelectorAll('.delete-ustc-class').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      deleteUstcClass(id);
    });
  });
}
    
function getDaysString(days) {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days.map(day => dayNames[day]).join(', ');
}
    
function openUstcClassModal(cls = null) {
  const modal = document.getElementById('event-modal');
  const deleteBtn = document.getElementById('event-delete-btn');
      
  if (cls) {
    // Edit mode
    document.getElementById('event-modal-title').textContent = 'Edit Class';
    document.getElementById('event-id').value = cls.id;
    document.getElementById('ustc-period-start').value = cls.periodStart;
    document.getElementById('ustc-period-end').value = cls.periodEnd;
    document.getElementById('ustc-course-name').value = cls.courseName;
    document.getElementById('ustc-instructor').value = cls.instructor;
    document.getElementById('ustc-location').value = cls.location;
        
    // Clear all day checkboxes
    document.querySelectorAll('input[name="ustc-day"]').forEach(checkbox => {
      checkbox.checked = false;
    });
        
    // Set selected days
    cls.days.forEach(day => {
      const checkbox = document.querySelector(`input[name="ustc-day"][value="${day}"]`);
      if (checkbox) {
        checkbox.checked = true;
      }
    });
        
    // Clear all week checkboxes
    document.querySelectorAll('input[name="ustc-week"]').forEach(checkbox => {
      checkbox.checked = false;
    });
        
    // Set selected weeks
    if (cls.weeks && cls.weeks.length > 0) {
      cls.weeks.forEach(week => {
        const checkbox = document.querySelector(`input[name="ustc-week"][value="${week}"]`);
        if (checkbox) {
          checkbox.checked = true;
        }
      });
    }
        
    // Update week display
    updateWeekDisplay();
        
    // Show delete button
    deleteBtn.style.display = 'inline-block';
  } else {
    // Add mode
    document.getElementById('event-modal-title').textContent = 'Add New Class';
    document.getElementById('event-id').value = '';
    document.getElementById('ustc-period-start').value = '1';
    document.getElementById('ustc-period-end').value = '1';
    document.getElementById('ustc-course-name').value = '';
    document.getElementById('ustc-instructor').value = '';
    document.getElementById('ustc-location').value = '';
        
    // Clear all day checkboxes
    document.querySelectorAll('input[name="ustc-day"]').forEach(checkbox => {
      checkbox.checked = false;
    });
        
    // Clear all week checkboxes
    document.querySelectorAll('input[name="ustc-week"]').forEach(checkbox => {
      checkbox.checked = false;
    });
        
    // Update week display
    updateWeekDisplay();
        
    // Hide delete button
    deleteBtn.style.display = 'none';
  }
      
  modal.style.display = 'flex';
}
    
function saveUstcClass() {
  const id = document.getElementById('event-id').value;
  const periodStart = document.getElementById('ustc-period-start').value;
  const periodEnd = document.getElementById('ustc-period-end').value;
  const courseName = document.getElementById('ustc-course-name').value;
  const instructor = document.getElementById('ustc-instructor').value;
  const location = document.getElementById('ustc-location').value;
      
  // Get selected days
  const days = [];
  document.querySelectorAll('input[name="ustc-day"]:checked').forEach(checkbox => {
    days.push(parseInt(checkbox.value));
  });
      
  // Get selected weeks
  const weeks = [];
  document.querySelectorAll('input[name="ustc-week"]:checked').forEach(checkbox => {
    weeks.push(parseInt(checkbox.value));
  });
      
  if (!courseName || !instructor || !location || days.length === 0 || weeks.length === 0) {
    alert('Please fill in all required fields');
    return;
  }
      
  if (parseInt(periodStart) > parseInt(periodEnd)) {
    alert('End period cannot be earlier than start period');
    return;
  }
      
  if (id) {
    // Update existing class
    const index = ustcClasses.findIndex(c => c.id === id);
    if (index !== -1) {
      ustcClasses[index] = {
        id,
        periodStart,
        periodEnd,
        courseName,
        instructor,
        location,
        days,
        weeks
      };
    }
  } else {
    // Add new class
    const newClass = {
      id: Date.now().toString(),
      periodStart,
      periodEnd,
      courseName,
      instructor,
      location,
      days,
      weeks
    };
    ustcClasses.push(newClass);
  }
      
  // Save to local storage
  localStorage.setItem('ustcClasses', JSON.stringify(ustcClasses));
      
  // Close modal
  document.getElementById('event-modal').style.display = 'none';
      
  // Re-render timetable
  renderUstcTimetable();
}
    
function deleteUstcClass(id = null) {
  if (!id) {
    id = document.getElementById('event-id').value;
  }
      
  if (!id) return;
      
  // Confirm deletion
  if (!confirm('Are you sure you want to delete this class?')) {
    return;
  }
      
  // Remove from array
  ustcClasses = ustcClasses.filter(c => c.id !== id);
      
  // Save to local storage
  localStorage.setItem('ustcClasses', JSON.stringify(ustcClasses));
      
  // Close modal
  document.getElementById('event-modal').style.display = 'none';
      
  // Re-render timetable
  renderUstcTimetable();
}
    
function openGeneralEventModal(type, event = null, preset = null) {
  const modal = document.getElementById('general-event-modal');
  const deleteBtn = document.getElementById('general-event-delete-btn');
      
  if (event) {
    // Edit mode
    document.getElementById('general-event-modal-title').textContent = 'Edit Event';
    document.getElementById('general-event-id').value = event.id;
    document.getElementById('event-title').value = event.title;
    document.getElementById('event-description').value = event.description || '';
    document.getElementById('event-start').value = formatDateTimeForInput(new Date(event.start));
    document.getElementById('event-end').value = formatDateTimeForInput(new Date(event.end));
        
    // Show delete button
    deleteBtn.style.display = 'inline-block';
  } else {
    // Add mode
    document.getElementById('general-event-modal-title').textContent = 'Add New Event';
    document.getElementById('general-event-id').value = '';
    document.getElementById('event-title').value = '';
    document.getElementById('event-description').value = '';
        
    if (preset) {
      document.getElementById('event-start').value = formatDateTimeForInput(preset.start);
      document.getElementById('event-end').value = formatDateTimeForInput(preset.end);
    } else {
      const now = new Date();
      const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);
      document.getElementById('event-start').value = formatDateTimeForInput(now);
      document.getElementById('event-end').value = formatDateTimeForInput(oneHourLater);
    }
        
    // Hide delete button
    deleteBtn.style.display = 'none';
  }
      
  // Set event type
  document.getElementById('general-event-type').value = type;
      
  modal.style.display = 'flex';
}
    
function formatDateTimeForInput(date) {
  return date.toISOString().slice(0, 16);
}
    
function saveGeneralEvent() {
  const id = document.getElementById('general-event-id').value;
  const type = document.getElementById('general-event-type').value;
  const title = document.getElementById('event-title').value;
  const description = document.getElementById('event-description').value;
  const start = document.getElementById('event-start').value;
  const end = document.getElementById('event-end').value;
      
  if (!title || !start || !end) {
    alert('Please fill in all required fields');
    return;
  }
      
  const event = {
    id: id || Date.now().toString(),
    title,
    description,
    start,
    end
  };
      
  let events;
  if (type === 'calendar') {
    events = calendarEvents;
  } else {
    events = timetableEvents;
  }
      
  if (id) {
    // Update existing event
    const index = events.findIndex(e => e.id === id);
    if (index !== -1) {
      events[index] = event;
    }
  } else {
    // Add new event
    events.push(event);
  }
      
  // Save to local storage
  if (type === 'calendar') {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  } else {
    localStorage.setItem('timetableEvents', JSON.stringify(events));
  }
      
  // Close modal
  document.getElementById('general-event-modal').style.display = 'none';
      
  // Update UI
  if (type === 'calendar') {
    calendar.removeAllEvents();
    calendar.addEventSource(events);
    calendar.render();
  } else {
    updateTimetable();
  }
}
    
function deleteGeneralEvent() {
  const id = document.getElementById('general-event-id').value;
  const type = document.getElementById('general-event-type').value;
      
  if (!id) return;
      
  // Confirm deletion
  if (!confirm('Are you sure you want to delete this event?')) {
    return;
  }
      
  let events;
  if (type === 'calendar') {
    events = calendarEvents;
  } else {
    events = timetableEvents;
  }
      
  // Remove from array
  const index = events.findIndex(e => e.id === id);
  if (index !== -1) {
    events.splice(index, 1);
  }
      
  // Save to local storage
  if (type === 'calendar') {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  } else {
    localStorage.setItem('timetableEvents', JSON.stringify(events));
  }
      
  // Close modal
  document.getElementById('general-event-modal').style.display = 'none';
      
  // Update UI
  if (type === 'calendar') {
    calendar.removeAllEvents();
    calendar.addEventSource(events);
    calendar.render();
  } else {
    updateTimetable();
  }
}
