window.addEventListener('load', () => {
    const arrWeek = [1, 2, 3, 4,5,6,7, 99];
    arrWeek.forEach((n) => {
        document.querySelector(`#week-${n}`).addEventListener('click', () => week(n))
    })
})

const week = (n) => {
    console.log("hello");
    let customHtml;
    const table = document.querySelector('.table tbody');
    const weekTitle = document.querySelector('#week-title');
    document.querySelectorAll('.week-link').forEach(week => week.classList.remove('active'))
    document.querySelector('.my-file').innerHTML='';
    switch (n) {
        case 7:
            customHtml = `
            <tr>
            <th>#1</th>
            <td>Tạo trang GroupDiary + Project + Result</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>03-02-2024</td>
            <td>04-02-2024</td>
            <td>Hoàn Thành</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>Tạo trang About, Chỉnh Sửa Header</td>
            <td>Lê Bá Khánh Duy</td>
            <td>03-02-2024</td>
            <td>04-02-2024</td>
            <td>Hoàn Thành</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>Tạo trang Home + StyleGuide</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>03-02-2024</td>
            <td>04-02-2024</td>
            <td>Hoàn Thành</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>Tạo trang Technical, Tìm kiếm template</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>03-02-2024</td>
            <td>04-02-2024</td>
            <td>Hoàn Thành</td>
        </tr>`
            document.querySelector('#week-7').classList.add('active')
            table.innerHTML = customHtml;
            weekTitle.innerHTML = "(Week-7)"
            break;
        case 6:
            customHtml = `
            <tr>
            <th>#1</th>
            <td>CRUD anime</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>29-01-2024</td>
            <td>01-02-2024</td>
            <td>Hoàn Thành</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>Load Data cho category</td>
            <td>Lê Bá Khánh Duy</td>
            <td>29-01-2024</td>
            <td>01-02-2024</td>
            <td>Hoàn Thành</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>Chức năng comment</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>29-01-2024</td>
            <td>01-02-2024</td>
            <td>Hoàn Thành</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>Thiết kế light-theme</td>
            <td>Đăng Văn Trung</td>
            <td>29-01-2024</td>
            <td>01-02-2024</td>
            <td>Chưa Hoàn Thành</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>Giao diện thay đổi mật khẩu</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>29-01-2024</td>
            <td>01-02-2024</td>
            <td>Hoàn Thành</td>
        </tr>`
            document.querySelector('#week-6').classList.add('active')
            table.innerHTML = customHtml;
            weekTitle.innerHTML = "(Week-6)"
            break;
        case 99:
            customHtml = `
            <thead class="h4">
            <tr>
                <th>Tuần</h6></th>
                <th>Nguyễn Ngọc Hân</th>|
                <th>Lê Bá Khánh Duy</th>
                <th>Hoàng Lê Nguyên Mạnh</th>
                <th>Đăng Văn Trung</th>
                <th>Nguyễn Vũ Bảo</th>
            </tr>
        </thead>
        <tbody class="h5">
        <tr>
            <th>#1</th>
            <td>(Giao Diện)HomePage</td>
            <td>(Giao Diện)Admin-Anime</td>
            <td>(Giao Diện)Quên Mật Khẩu</td>
            <td>(Giao Diện)DetailPage</td>
            <td>(Giao Diện)Admin-User</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>(Giao Diện)Biểu Mẫu</td>
            <td>(Giao Diện)Sigup</td>
            <td>(Giao Diện)Admin-Home</td>
            <td>(Giao Diện)(Giao Diện)Category</td>
            <td>(Giao Diện)Login</td>
        </tr>
        <tr>
        <th>#3</th>
        <td>(Chức Năng)Tìm Kiếm</td>
        <td>(Giao Diện)About</td>
        <td>(Giao Diện)Watching</td>
        <td>(Giao Diện)AnimeFavorite</td>
        <td>(Chức Năng)Quên Mật Khẩu</td>
    </tr>
     <tr>
        <th>#4</th>
        <td>(Chức Năng)Phân Labble Cho Header</td>
        <td>(Chức Năng)Logout</td>
        <td>(Chức Năng)Sigup</td>
        <td>x</td>
        <td>(Chức Năng)Login</td>
    </tr>
     <tr>
        <th>#5</th>
        <td>(Chức Năng)Group Diary</td>
        <td>x</td>
        <td>(Chức Năng)Load Data Cho Watching</td>
        <td>x</td>
        <td>(Chức Năng)Load Data cho Profile</td>
    </tr>
     <tr>
        <th>#5.2</th>
        <td>(Chức Năng)CRUD User</td>
        <td>x</td>
        <td>(Chức Năng)Load Data Cho HomePage</td>
        <td>x</td>
        <td>(Chức Năng)Load Data Cho Favorite</td>
    </tr>
    <tr>
        <th>#6</th>
        <td>(Chức Năng)CRUD Anime</td>
        <td>(Chức Năng)Load Data cho Category</td>
        <td>(Chức Năng)Comment</td>
        <td>x</td>
        <td>(Giao Diện)Đổi mật khẩu</td>
    </tr>
    <tr>
        <th>#7</th>
        <td>(Project cuối cùng Kỳ) 
            <ul>
                <li>Tạo GroupDiary</li>
                <li>Tạo Project</li>
                <li>Tạo Result</li>
            </ul>
        </td>
        <td>(Project Cuối Kỳ) 
            <ul>
                <li>Tạo About</li>
                <li>Header,Footer</li>
            </ul>
        </td>
        <td>(Project Cuối Kỳ)
            <ul>
                <li>Tạo Home</li>
                <li>Tạo StyleGuide</li>
            </ul>
        </td>
        <td>x</td>
        <td>(Project Cuối Kỳ)
            <ul>
                <li> TạoTechnical</li>
                <li>Tìm kiếm template</li>
            </ul>
        </td>
    </tr>
        </tbody>
        `
            document.querySelector('#week-99').classList.add('active')
            document.querySelector('.table').innerHTML = customHtml;
            weekTitle.innerHTML = "(Tổng Hợp Những Chức Năng Đã Làm)"
            break;
        case 5:
            customHtml = `
            <tr>
            <th>#1</th>
            <td>Phân lable cho header khi người dùng login</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>25-01-2024</td>
            <td>24-01-2024</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>Load data cho userProfile</td>
            <td>Lê Bá Khánh Duy</td>
            <td>25-01-2024</td>
            <td>24-01-2024</td>
            <td>chưa hoàn thành</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>Giao diện quên mật khẩu</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>25-01-2024</td>
            <td>24-01-2024</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>Ligh-Theme cho giao diện</td>
            <td>Đăng Văn Trung</td>
            <td>25-01-2024</td>
            <td>24-01-2024</td>
            <td>chưa hoàn thành</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>Chức năng quên mật khẩu</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>25-01-2024</td>
            <td>24-01-2024</td>
            <td>hoàn thành</td>
        </tr>
        </tbody>
            </table>`
        const customHtml2 = `
        <table class="table table-dark table-hover">
                <thead>
                <tr>
                <th>STT</th>
                <th>Công Việc</th>
                <th>Người Thực Hiện</th>
                <th>Ngày Bắt Đầu</th>
                <th>Ngày Kết Thúc</th>
                <th>Trạng thái</th>
            </tr>
        </thead>
            <tr>
            <th>#1</th>
            <td>Chức năng Search</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>25-01-2024</td>
            <td>28-01-2024</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>chức năng đăng xuất</td>
            <td>Lê Bá Khánh Duy</td>
            <td>25-01-2024</td>
            <td>28-01-2024</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>load data cho trang watching</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>25-01-2024</td>
            <td>28-01-2024</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>giao diện thay đổi mật khẩu</td>
            <td>Đăng Văn Trung</td>
            <td>25-01-2024</td>
            <td>28-01-2024</td>
            <td>chưa hoàn thành</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>load data cho trang profile</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>25-01-2024</td>
            <td>28-01-2024</td>
            <td>hoàn thành</td>
        </tr>
        `
            document.querySelector('#week-5').classList.add('active')
            table.innerHTML = `${customHtml}
            <h4 class="text-white text-center mt-0 mb-4 w-100 mt-4">(Week-5.2)</h4>
            ${customHtml2}
            `;
            weekTitle.innerHTML = "(Week-5)"
            break;
        case 4:
            customHtml = `
            <tr>
            <th>#1</th>
            <td>làm giao diện cho biểu mẫu liên hệ</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>06-01-2023</td>
            <td>08-01-2023</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>chức năng load data cho anime-details</td>
            <td>Lê Bá Khánh Duy</td>
            <td>06-01-2023</td>
            <td>08-01-2023</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>chức năng đăng ký</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>06-01-2023</td>
            <td>08-01-2023</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>chức năng search</td>
            <td>Đăng Văn Trung</td>
            <td>06-01-2023</td>
            <td>08-01-2023</td>
            <td>chưa hoàn thành</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>chức năng load data cho anime favorite</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>06-01-2023</td>
            <td>08-01-2023</td>
            <td>hoàn thành</td>                                                                             
        </tr>
        `

            document.querySelector('#week-4').classList.add('active')
            table.innerHTML = customHtml;
            weekTitle.innerHTML = "(Week-4)"
            break;
        case 3:
            customHtml = `
            <tr>
            <th>#1</th>
            <td>Cập nhật design giấy & figma cho HomePage, group-diary</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>Cập nhật design giấy & figma cho Sigup, About, Admin(AnimePage)</td>
            <td>Lê Bá Khánh Duy</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>Cập nhật design giấy & figma cho WatchingPage, Admin(HomePage)</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td>hoàn thành</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>Cập nhật design giấy & figma cho DetailPage, CategoryPage, AnimeFavorite</td>
            <td>Đăng Văn Trung</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td>chưa hoàn thành</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>Cập nhật design giấy & figma cho Login, Admin(UserPage)</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>26-12-2023</td>
            <td>29-12-2023</td>
            <td>hoàn thành</td>
        </tr>
        `
       

            document.querySelector('#week-3').classList.add('active')
            table.innerHTML = customHtml;
            weekTitle.innerHTML = "(Week-3)"
            break;
        case 2:
            customHtml = `
            <tr>
            <th>#1</th>
            <td>Làm chức năng cho trang admin-user</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>05-12-2023</td>
            <td>07-12-2023</td>
            <td>Hoàn thành</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>Làm giao diện admin-anime</td>
            <td>Lê Bá Khánh Duy</td>
            <td>05-12-2023</td>
            <td>07-12-2023</td>
            <td>Hoàn thành (Trễ 1 ngày)</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>Làm chức năng load anime cho index</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>05-12-2023</td>
            <td>07-12-2023</td>
            <td>Hoàn thành</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>Làm giao diện cho trang AnimeFavorite</td>
            <td>Đăng Văn Trung</td>
            <td>05-12-2023</td>
            <td>07-12-2023</td>
            <td>Hoàn thành</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>Làm chức năng login</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>05-12-2023</td>
            <td>07-12-2023</td>
            <td>Hoàn thành</td>
        </tr>`
            document.querySelector('#week-2').classList.add('active')
            table.innerHTML = customHtml;
            weekTitle.innerHTML = "(Week-2)"
            break;
        case 1:
            customHtml = `
            <tr>
            <th>#1</th>
            <td>Làm Chức Năng Group Diary</td>
            <td>Nguyễn Ngọc Hân</td>
            <td>28-11-2023</td>
            <td>30-11-2023</td>
            <td>Hoàn thành</td>
        </tr>
        <tr>
            <th>#2</th>
            <td>Làm giao diện cho trang About</td>
            <td>Lê Bá Khánh Duy</td>
            <td>28-11-2023</td>
            <td>30-11-2023</td>
            <td>Hoàn thành</td>
        </tr>
        <tr>
            <th>#3</th>
            <td>Làm giao diện cho trang Admin Home Page</td>
            <td>Hoàng Lê Nguyên Mạnh</td>
            <td>28-11-2023</td>
            <td>03-12-2023</td>
            <td>Hoàn thành</td>
        </tr>
        <tr>
            <th>#4</th>
            <td>Làm giao diện cho trang Category</td>
            <td>Đăng Văn Trung</td>
            <td>28-11-2023</td>
            <td>03-12-2023</td>
            <td>Hoàn thành</td>
        </tr>
        <tr>
            <th>#5</th>
            <td>Làm giao diện cho trang Admin User Manager</td>
            <td>Nguyễn Vũ Bảo</td>
            <td>28-11-2023</td>
            <td>05-12-2023</td>
            <td>Hoàn thành</td>
        </tr>
            `
            document.querySelector('#week-1').classList.add('active')
            table.innerHTML = customHtml;
            weekTitle.innerHTML = "(Week-1)"
            break;
    }
}