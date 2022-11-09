let notificationUnseen = document.querySelectorAll('.notification.unseen');
let notificationUnseenCounter = document.querySelector('header>div>h2>span');
const markedAllAsRead = document.querySelector('header>p');



notificationUnseenCounter.innerHTML = notificationUnseen.length;

markedAllAsRead.addEventListener('click', () => {
    notificationUnseen.forEach((element) => {
        element.classList.remove('unseen')
    });
    notificationUnseen = document.querySelectorAll('.notification.unseen');
    notificationUnseenCounter.innerHTML = notificationUnseen.length;
})



