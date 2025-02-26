document.addEventListener('DOMContentLoaded', function() {
   
    const ctaButton = document.querySelector('.cta-button');

    ctaButton.addEventListener('click', function(event) {
        event.preventDefault();
        const hacksSection = document.getElementById('hacks');

        hacksSection.scrollIntoView({
            behavior: 'smooth'
        });
    });

    const hackSections = document.querySelectorAll('.hack-section');

    hackSections.forEach((section, index) => {
        if ((index + 1) % 2 === 0) { 
            section.classList.add('even');
        }
    });

    
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');

   
    function displayComments() {
        commentList.innerHTML = ''; 

        let comments = JSON.parse(localStorage.getItem('comments') || '[]');

        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `
                <div class="comment-author">${comment.name} <span class="comment-date">${comment.date}</span></div>
                <p class="comment-text">${comment.comment}</p>
            `;
            commentList.appendChild(commentDiv);
        });
    }

 
    displayComments();

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const commentInput = document.getElementById('comment');

        const name = nameInput.value;
        const comment = commentInput.value;
        const date = new Date().toLocaleDateString();

        
        let comments = JSON.parse(localStorage.getItem('comments') || '[]');

        comments.push({ name: name, comment: comment, date: date });

        localStorage.setItem('comments', JSON.stringify(comments));

        nameInput.value = '';
        commentInput.value = '';

        displayComments();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const html = document.documentElement;

    function toggleTheme() {
        if (html.dataset.theme === 'dark') {
            html.dataset.theme = 'light';
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Иконка луны
            localStorage.setItem('theme', 'light');
        } else {
            html.dataset.theme = 'dark';
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Иконка солнца
            localStorage.setItem('theme', 'dark');
        }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.dataset.theme = savedTheme;
        if (savedTheme === 'dark') {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Иконка солнца
        }
    }

    themeToggle.addEventListener('click', toggleTheme);

    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function(event) {
        event.preventDefault();
        const hacksSection = document.getElementById('hacks');
        hacksSection.scrollIntoView({
            behavior: 'smooth'
        });
    });

    const hackSections = document.querySelectorAll('.hack-section');
    hackSections.forEach((section, index) => {
        if ((index + 1) % 2 === 0) {
            section.classList.add('even');
        }
    });

    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');

    function displayComments() {
        commentList.innerHTML = '';
        let comments = JSON.parse(localStorage.getItem('comments') || '[]');
        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `
                <div class="comment-author">${comment.name} <span class="comment-date">${comment.date}</span></div>
                <p class="comment-text">${comment.comment}</p>
            `;
            commentList.appendChild(commentDiv);
        });
    }

    displayComments();

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameInput = document.getElementById('name');
        const commentInput = document.getElementById('comment');
        const name = nameInput.value;
        const comment = commentInput.value;
        const date = new Date().toLocaleDateString();

        let comments = JSON.parse(localStorage.getItem('comments') || '[]');
        comments.push({
            name: name,
            comment: comment,
            date: date
        });

        localStorage.setItem('comments', JSON.stringify(comments));

        nameInput.value = '';
        commentInput.value = '';

        displayComments();
    });
});

const clearCommentsButton = document.getElementById('clear-comments');

if (clearCommentsButton) {
    clearCommentsButton.addEventListener('click', clearComments);
}
