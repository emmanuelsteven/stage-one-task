// Toggle Sidebar
function toggleSidebar(target) {
    const sidebar = document.querySelector('#navigation');

    if (target.classList.contains('sideburger-open')) {
        sidebar.classList.add('on-menu');
        sidebar.classList.remove('off-menu');
        target.classList.toggle('button-off');
        target.nextElementSibling.classList.add('button-on');
        target.nextElementSibling.classList.remove('button-off');
    }
    
    if (target.classList.contains('sideburger-close')) {
        sidebar.classList.remove('on-menu');
        sidebar.classList.add('off-menu');
        target.classList.toggle('button-off');
        target.previousElementSibling.classList.add('button-on');
        target.previousElementSibling.classList.remove('button-off');
    }
}


function hideSidebarOnScroll() {
    const sidebar = document.querySelector('#navigation');
    const toggleButtonClose = document.querySelector(".sideburger-close");
    if (sidebar.classList.contains('on-menu')) {
        sidebar.classList.remove('on-menu');
        sidebar.classList.add('off-menu');
        toggleButtonClose.classList.add('button-off');
        toggleButtonClose.previousElementSibling.classList.add('button-on');
        toggleButtonClose.previousElementSibling.classList.remove('button-off');
    }
}


function updateTimeAndDate() {
    const currentTimeElement = document.getElementById('current-time');
    const currentDayElement = document.getElementById('current-day');

    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeString = now.toLocaleTimeString('en-US', options);
    const dayString = now.toDateString();

    currentTimeElement.textContent = timeString;
    currentDayElement.textContent = dayString;
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleButtonOpen = document.querySelector(".sideburger-open");
    const toggleButtonClose = document.querySelector(".sideburger-close");

    toggleButtonOpen.addEventListener('click', (event) => {
        toggleSidebar(event.currentTarget);
    });

    toggleButtonClose.addEventListener('click', (event) => {
        toggleSidebar(event.currentTarget);
    });

    window.addEventListener('scroll', hideSidebarOnScroll);

    updateTimeAndDate();
    setInterval(updateTimeAndDate, 1000); 
});

