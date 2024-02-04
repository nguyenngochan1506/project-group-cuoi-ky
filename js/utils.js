window.onload = () => {
    const path = window.location.pathname;
    const listEle = document.querySelectorAll('.navbar-nav .nav-link');
    listEle.forEach(ele => {
        ele.classList.remove('active')
    })
    switch (path) {
        case '/':
        case '/index.html':
            document.querySelector('.navbar-nav .nav-link[href="index.html"]').classList.add('active')
            break;
        case '/about.html':
            document.querySelector('.navbar-nav .nav-link[href="about.html"]').classList.add('active')
            break;
        case '/groupDiary.html':
            document.querySelector('.navbar-nav .nav-link[href="groupDiary.html"]').classList.add('active')
            break;
        case '/project.html':
            document.querySelector('.navbar-nav .nav-link[href="project.html"]').classList.add('active')
            break;
        case '/technical.html':
            document.querySelector('.navbar-nav .nav-link[href="technical.html"]').classList.add('active')
            break;
        case '/styleGuide.html':
            document.querySelector('.navbar-nav .nav-link[href="styleGuide.html"]').classList.add('active')
            break;
        case '/result.html':
            document.querySelector('.navbar-nav .nav-link[href="result.html"]').classList.add('active')
            break;
    }
}