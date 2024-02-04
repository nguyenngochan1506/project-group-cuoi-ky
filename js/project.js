window.addEventListener('load', () => {
    const tabs = ['btn-requirement', 'btn-design', 'btn-implement'];
    tabs.forEach(tab => document.querySelector(`#${tab}`).addEventListener('click', () => handleRenderTab(tab)))

})

const handleRenderTab = (tab) => {
    const mainContent = document.querySelector('.main-content');
    switch (tab) {
        case 'btn-requirement':
            mainContent.innerHTML = `
            <table class="table table-striped">
                        <thead class="fs-5">
                            <tr>
                                <th>Stt</th>
                                <th>Chức Năng Chính</th>
                                <th>Người Đề Xuất</th>
                                <th>Người Thực Hiện</th>
                                <th>Thời Gian Dự Kiến</th>
                                <th>Trạng Thái</th>
                            </tr>
                        </thead>
                        <tbody class="fs-6">
                            <tr>
                                <th>#1</th>
                                <td>Thiết kế giao diện cho các trang</td>
                                <td>Mọi người cùng thảo luận</td>
                                <td>Toàn bộ thành viên</td>
                                <td>28-11-2023 -> 29-12-2023 (1 tháng)</td>
                                <td>Đã hoàn thành</td>
                            </tr>
                            <tr>
                                <th>#2</th>
                                <td>Bình luận</td>
                                <td>Nguyễn Ngọc Hân</td>
                                <td>Hoàng Lê Nguyên Mạnh</td>
                                <td>29-01-2024 -> 01-02-2024 (3 ngày)</td>
                                <td>Đã hoàn thành</td>
                            </tr>
                            <tr>
                                <th>#3</th>
                                <td>Signup</td>
                                <td>Nguyễn Ngọc Hân</td>
                                <td>Hoàng Lê Nguyên Mạnh</td>
                                <td>06-01-2023 -> 08-01-2023 (2 ngày)</td>
                                <td>Đã hoàn thành</td>
                            </tr>
                            <tr>
                                <th>#4</th>
                                <td>Xem phim</td>
                                <td>Nguyễn Ngọc Hân</td>
                                <td>Hoàng Lê Nguyên Mạnh</td>
                                <td>25-01-2024 -> 28-01-2024 (3 ngày)</td>
                                <td>Đã hoàn thành</td>
                            </tr>
                            <tr>
                                <th>#5</th>
                                <td>Phân loại phim</td>
                                <td>Nguyễn Ngọc Hân</td>
                                <td>Lê Bá Khánh Duy</td>
                                <td>29-01-2024 -> 01-02-2024 (2 ngày)</td>
                                <td>Đã hoàn thành</td>
                            </tr>
                            <tr>
                                <th>#6</th>
                                <td>Login</td>
                                <td>Nguyễn Ngọc Hân</td>
                                <td>Nguyễn Vũ Bảo</td>
                                <td>05-12-2023 ->   07-12-2023 (2 ngày)</td>
                                <td>Đã hoàn thành</td>
                            </tr>
                            <tr>
                                <th>#7</th>
                                <td>Danh sách phim yêu thích</td>
                                <td>Nguyễn Ngọc Hân</td>
                                <td>Nguyễn Vũ Bảo</td>
                                <td>06-01-2023 -> 08-01-2023 (2 ngày)</td>
                                <td>Đã hoàn thành</td>
                            </tr>
                            <tr>
                                <th>#8</th>
                                <td>Quên mật khẩu</td>
                                <td>Nguyễn Ngọc Hân</td>
                                <td>Nguyễn Vũ Bảo</td>
                                <td>24-01-2024 -> 25-01-2024 (1 ngày)</td>
                                <td>Đã hoàn thành</td>
                            </tr>
                            <tr>
                                <th>#9</th>
                                <td>Tìm kiếm phim</td>
                                <td>Nguyễn Ngọc Hân</td>
                                <td>Nguyễn Ngọc Hân</td>
                                <td>25-01-2024 -> 28-01-2024 (3 ngày)</td>
                                <td>Đã hoàn thành</td>
                            </tr>
                            <tr>
                                <th>#10</th>
                                <td>Conditional Header Rendering</td>
                                <td>Nguyễn Ngọc Hân</td>
                                <td>Nguyễn Ngọc Hân</td>
                                <td>24-01-2024 -> 25-01-2024 (1 ngày)</td>
                                <td>Đã hoàn thành</td>
                            </tr>
                            <tr>
                                <th>#11</th>
                                <td>CRUD cho phim và người dùng</td>
                                <td>Nguyễn Ngọc Hân</td>
                                <td>Nguyễn Ngọc Hân</td>
                                <td>29-01-2024 -> 01-02-2024 (2 ngày)</td>
                                <td>Đã hoàn thành</td>
                            </tr>
                        </tbody>
                    </table>
            `;
            break;

        case 'btn-design':
            mainContent.innerHTML = `
            <div class="row">
                        <div class="col-3">
                            <div class="d-flex flex-column flex-shrink-0 p-3 text-black custom-sidebar">
                                <h4 href="#"
                                    class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                                    <span class="fw-bold text-decoration-underline">Các Thiết Kế</span>
                                </h4>
                                <hr>
                                <ul class="nav nav-pills flex-column mb-auto">
                                    <li class="nav-item ">
                                        <a class="nav-link week-link active text-black " id="home" aria-current="page">
                                            Home
                                        </a>
                                        <a class="nav-link week-link text-black " id="login" aria-current="page">
                                            Login
                                        </a>
                                        <a class="nav-link week-link text-black " id="signup" aria-current="page">
                                            Signup
                                        </a>
                                        <a class="nav-link week-link text-black" id="forgot" aria-current="page">
                                            ForgotPassword
                                        </a>
                                        <a class="nav-link week-link text-black" id="change" aria-current="page">
                                            ChangePassword
                                        </a>
                                        <a class="nav-link week-link  text-black" id="about" aria-current="page">
                                            About
                                        </a>
                                        <a class="nav-link week-link  text-black" id="admin-home" aria-current="page">
                                            Admin Home
                                        </a>
                                        <a class="nav-link week-link  text-black" id="admin-anime" aria-current="page">
                                            Admin Anime
                                        </a>
                                        <a class="nav-link week-link  text-black" id="admin-user" aria-current="page">
                                            Admin User
                                        </a>
                                        <a class="nav-link week-link  text-black" id="watching" aria-current="page">
                                            Watching
                                        </a>
                                        <a class="nav-link week-link  text-black" id="groupdiary" aria-current="page">
                                            GroupDiary
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-9 mt-3" id="design-content">
                            <h4 class=" text-center text-decoration-underline">Thiết Kế Ban Đầu</h4>
                            <div class="d-flex justify-content-evenly mt-3">
                                <div id="design-paper">
                                    <div class="title text-center">
                                        <h5 class="text-center">Trên Giấy</h5>
                                        <a class="btn btn-success " href="./images/design/homePage.png" target="_blank"
                                            id="btn-dowloadn-paper" rel="noopener noreferrer" download="design">Tải Xuống</a>
                                    </div>
                                    <img class="img-fluid mt-2" src="./images/design/homePage.png" alt="home">
                                </div>
                                <div id="design-figma">
                                    <div class="title text-center">
                                        <h5 class="text-center">Trên HTML</h5>
                                        <a class="btn btn-success " href="./images/design/homePageFigma.png"
                                            id="btn-download-figma" target="_blank" rel="noopener noreferrer" download="design">Tải Xuống</a>

                                        <a  class="btn btn-danger " href="https://www.figma.com/community/file/1322581491249749941"
                                            target="_blank" rel="noopener noreferrer">Go To Figma</a>
                                    </div>
                                    <img class="img-fluid mt-2" src="./images/design/homePageFigma.png" alt="home">
                                </div>
                            </div>
                            <div class="text-center mt-5">
                                <a class="btn btn-primary" id="download-all">
                                Download Tất Cả
                                </a>
                            </div>
                        </div>
                    </div>
            `;

            const arrWeek = ['home', 'login', 'signup', 'forgot', 'change', 'about', 'admin-home', 'admin-anime', 'admin-user', 'watching', 'groupdiary'];
            arrWeek.forEach((n) => {
                document.querySelector(`#${n}`).addEventListener('click', () => week(n))
            })

            document.querySelector('#download-all').addEventListener('click', handleDownloadAll)

            break;

        case 'btn-implement':
            mainContent.innerHTML = `
            <div class="">
                        <h5>Account dùng để test:</h5>
                        <ul class="fs-6">
                            <li class="text-black"> Account với quyền <i class="text-decoration-underline">admin</i>
                                <ul>
                                    <li class="text-black">UserName: <strong>Admin</strong></li>
                                    <li class="text-black">Password: <strong>123</strong></li>
                                </ul>
                            </li>
                            <li  class="text-black">Account <i class="text-decoration-underline">thường</i>
                                <ul>
                                    <li class="text-black">UserName: <strong>nguyenngochan</strong></li>
                                    <li class="text-black">Password: <strong>123</strong></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>TÊN CHỨC NĂNG</th>
                                <th>NGƯỜI THỰC HIỆN</th>
                                <th>ĐƯỜNG DẪN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>#1</th>
                                <td>Bình luận <i>(Yêu cầu đăng nhập)</i></td>
                                <td>Hoàng Lê Nguyên Mạnh</td>
                                <td><a href="https://hci2024-group04.web.app/anime-details.html?animeId=1" target="_blank" rel="noopener noreferrer"><i class="text-decoration-underline">Bình luận</i></a></td>
                            </tr>
                            <tr>
                                <th>#2</th>
                                <td>Signup</td>
                                <td>Hoàng Lê Nguyên Mạnh</td>
                                <td><a href="https://hci2024-group04.web.app/signup.html" target="_blank" rel="noopener noreferrer"><i class="text-decoration-underline">Signup</i></a></td>
                            </tr>
                            <tr>
                                <th>#3</th>
                                <td>Xem phim</td>
                                <td>Hoàng Lê Nguyên Mạnh</td>
                                <td><a href="https://hci2024-group04.web.app/watching.html?animeId=7&tap=1" target="_blank" rel="noopener noreferrer"><i class="text-decoration-underline">Xem Phim</i></a></td>
                            </tr>
                            <tr>
                                <th>#4</th>
                                <td>Phân loại phim</td>
                                <td>Lê Bá Khánh Duy</td>
                                <td><a href="https://hci2024-group04.web.app/category.html" target="_blank" rel="noopener noreferrer"><i class="text-decoration-underline">Thể loại</i></a></td>
                            </tr>
                            <tr>
                                <th>#5</th>
                                <td>Login</td>
                                <td>Nguyễn Vũ Bảo</td>
                                <td><a href="https://hci2024-group04.web.app/login.html" target="_blank" rel="noopener noreferrer"><i class="text-decoration-underline">login</i></a></td>
                            </tr>
                            <tr>
                                <th>#6</th>
                                <td>Danh sách phim yêu thích <i>(Yêu cầu đăng nhập)</i></td>
                                <td>Nguyễn Vũ Bảo</td>
                                <td><a href="https://hci2024-group04.web.app/anime-favorite.html" target="_blank" rel="noopener noreferrer"><i class="text-decoration-underline">Danh sách yêu thích</i></a></td>
                            </tr>
                            <tr>
                                <th>#7</th>
                                <td>Quên mật khẩu</td>
                                <td>Nguyễn Vũ Bảo</td>
                                <td><a href="https://hci2024-group04.web.app/forgot-password.html" target="_blank" rel="noopener noreferrer"><i class="text-decoration-underline">Quên mật khẩu</i></a></td>
                            </tr>
                            <tr>
                                <th>#8</th>
                                <td>Profile <i>(Yêu cầu đăng nhập)</i></td>
                                <td>Nguyễn Vũ Bảo</td>
                                <td><a href="https://hci2024-group04.web.app/profile.html" target="_blank" rel="noopener noreferrer"><i class="text-decoration-underline">Profile</i></a></td>
                            </tr>
                            <tr>
                                <th>#8</th>
                                <td>Tìm kiếm phim</td>
                                <td>Nguyễn Ngọc Hân</td>
                                <td><a href="https://hci2024-group04.web.app/home.html" target="_blank" rel="noopener noreferrer"><i class="text-decoration-underline">Tìm kiếm</i></a></td>
                            </tr>
                            <tr>
                                <th>#9</th>
                                <td>Conditional Header Rendering</td>
                                <td>Nguyễn Ngọc Hân</td>
                                <td><a href="https://hci2024-group04.web.app/home.html" target="_blank" rel="noopener noreferrer"><i class="text-decoration-underline">Conditional Header Rendering</i></a></td>
                            </tr>
                            <tr>
                                <th>#10</th>
                                <td>CRUD cho phim và người dùng <i>(Yêu cầu đăng nhập với quyền admin)</i></td>
                                <td>Nguyễn Ngọc Hân</td>
                                <td><a  href="https://hci2024-group04.web.app/admin-page-anime.html" target="_blank" rel="noopener noreferrer"><i class="text-decoration-underline">Admin</i></a></td>
                            </tr>
                        </tbody>
                    </table>
            `
            break;

    }
}

const handleDownloadAll = ()=>{
    console.log('đao');
}

const week = (n) => {
    const btnDownload = document.querySelector('#design-paper a');
    const btnDownloadFigma = document.querySelector('#design-figma a');
    const imgPaper = document.querySelector('#design-paper img');
    const imgFigma = document.querySelector('#design-figma img');
    const goFigma = document.querySelectorAll('#design-figma a')[1];

    document.querySelectorAll('.week-link').forEach(week => week.classList.remove('active'))
    switch (n) {
        case 'home':
            imgPaper.setAttribute('src', './images/design/homePage.png')
            btnDownload.setAttribute('href', './images/design/homePage.png')

            imgFigma.setAttribute('src', './images/design/homePageFigma.png')
            btnDownloadFigma.setAttribute('href', './images/design/homePageFigma.png')
            goFigma.setAttribute('href', 'https://www.figma.com/community/file/1322581491249749941')

            document.querySelector('#home').classList.add('active')
            break;

        case 'login':
            imgPaper.setAttribute('src', './images/design/login.jpg')
            btnDownload.setAttribute('href', './images/design/login.jpg')

            imgFigma.setAttribute('src', './images/design/loginFigma.png')
            btnDownloadFigma.setAttribute('href', './images/design/loginFigma.png')
            goFigma.setAttribute('href', 'https://www.figma.com/file/X4o8RNTHll3IrrIuKXH3Up/Login?type=design&mode=design&t=g83DUzwyHMmawGti-0')

            document.querySelector('#login').classList.add('active')
            break;

        case 'signup':
            imgPaper.setAttribute('src', './images/design/signup.jpg')
            btnDownload.setAttribute('href', './images/design/signup.jpg')

            imgFigma.setAttribute('src', './images/design/sigupFigma.png')
            btnDownloadFigma.setAttribute('href', './images/design/sigupFigma.png')
            goFigma.setAttribute('href', 'https://www.figma.com/file/dziDi2j4dU2HXh2sQ4N6VA/Design-for-Animeweb?type=design&node-id=0%3A1&mode=design&t=PE7BOOTWFKejUJGj-1')


            document.querySelector('#signup').classList.add('active')
            break;

        case 'forgot':

            document.querySelector('#forgot').classList.add('active')
            break;

        case 'about':
            imgPaper.setAttribute('src', './images/design/about.jpg')
            btnDownload.setAttribute('href', './images/design/about.jpg')

            imgFigma.setAttribute('src', './images/design/aboutFigma.png')
            btnDownloadFigma.setAttribute('href', './images/design/aboutFigma.png')
            goFigma.setAttribute('href', 'https://www.figma.com/file/dziDi2j4dU2HXh2sQ4N6VA/Design-for-Animeweb?type=design&node-id=0%3A1&mode=design&t=PE7BOOTWFKejUJGj-1')


            document.querySelector('#about').classList.add('active')
            break;
        case 'change':
            imgPaper.setAttribute('src', './images/design/change.jpg')
            btnDownload.setAttribute('href', './images/design/change.jpg')

            imgFigma.setAttribute('src', './images/design/changFigma.png')
            btnDownloadFigma.setAttribute('href', './images/design/changFigma.png')
            goFigma.setAttribute('href', 'https://www.figma.com/file/bwTjULcHP81sA3GGOzOtSb/Untitled?type=design&mode=design&t=0zZ4nySSST8iCdU4-0')

            document.querySelector('#change').classList.add('active')
            break;

        case 'admin-home':
            imgPaper.setAttribute('src', './images/design/adminHome.jpg')
            btnDownload.setAttribute('href', './images/design/adminHome.jpg')

            imgFigma.setAttribute('src', './images/design/adminHomeFigma.png')
            btnDownloadFigma.setAttribute('href', './images/design/adminHomeFigma.png')
            goFigma.setAttribute('href', 'https://www.figma.com/file/hDuepywanvNOqjxevRDZaO/Untitled?type=design&node-id=0%3A1&mode=design&t=SM2DxZ7VQW4MtBZt-1')


            document.querySelector('#admin-home').classList.add('active')
            break;
        case 'admin-anime':
            imgPaper.setAttribute('src', './images/design/adminAnime.jpg')
            btnDownload.setAttribute('href', './images/design/adminAnime.jpg')

            imgFigma.setAttribute('src', './images/design/adminAnimeFigma.png')
            btnDownloadFigma.setAttribute('href', './images/design/adminAnimeFigma.png')
            goFigma.setAttribute('href', 'https://www.figma.com/file/dziDi2j4dU2HXh2sQ4N6VA/Design-for-Animeweb?type=design&node-id=0%3A1&mode=design&t=PE7BOOTWFKejUJGj-1')


            document.querySelector('#admin-anime').classList.add('active')
            break;
        case 'admin-user':
            imgPaper.setAttribute('src', './images/design/adminUser.jpg')
            btnDownload.setAttribute('href', './images/design/adminUser.jpg')

            imgFigma.setAttribute('src', './images/design/adminUserFigma.png')
            btnDownloadFigma.setAttribute('href', './images/design/adminUserFigma.png')
            goFigma.setAttribute('href', 'https://www.figma.com/file/IB02lMI3S4QaxvXJfg7RLT/page-user?type=design&node-id=0-1&mode=design&t=KYBjZe39Fb5XcrOG-0')


            document.querySelector('#admin-user').classList.add('active')
            break;

        case 'watching':

            imgPaper.setAttribute('src', './images/design/watching.jpg')
            btnDownload.setAttribute('href', './images/design/watching.jpg')

            imgFigma.setAttribute('src', './images/design/watchingFigma.png')
            btnDownloadFigma.setAttribute('href', './images/design/watchingFigma.png')
            goFigma.setAttribute('href', 'https://www.figma.com/file/hDuepywanvNOqjxevRDZaO/Untitled?type=design&node-id=0%3A1&mode=design&t=SM2DxZ7VQW4MtBZt-1')

            document.querySelector('#watching').classList.add('active')
            break;

        case 'groupdiary':

            imgPaper.setAttribute('src', './images/design/groupDiary.png')
            btnDownload.setAttribute('href', './images/design/groupDiary.png')

            imgFigma.setAttribute('src', './images/design/groupDiaryFigma.png')
            btnDownloadFigma.setAttribute('href', './images/design/groupDiaryFigma.png')
            goFigma.setAttribute('href', 'https://www.figma.com/community/file/1322583971132871609')


            document.querySelector('#groupdiary').classList.add('active')
            break;
    }
}