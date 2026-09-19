const express = require("express"); // nhúng thư viện express vào
const path = require("path"); // thư viện có sẵn của node js
require('dotenv').config();
const database = require("./config/database")

const clientRouters = require("./routers/client/index.router")

const app = express(); // gọi và khởi tạo app
const port = 3000; // định nghĩa cổng

//Kết nối database
database.connect();
// Thiết lập views
app.set("views", path.join(__dirname, "views")); // dirname tên thư mục
app.set("view engine", "pug");

//Thiết lập thư mục chứa file tĩnh của frontend
app.use(express.static(path.join(__dirname, "public")));
//đứng từ app gọi get để lấy ra giao diện
// req gửi yêu cầu đi, nó là 1 object đối tượng
// res phản hồi
// lấy file pug và render thành file html trả về giao diện HTMl đó

//Thiết lập đường dẫn
app.use("/", clientRouters);


// Khởi chạy dự án ở cổng 3000
app.listen(port, () => {
	console.log(`Website đang chạy trên cổng ${port}`);
});

// mongodb+srv://giangka20061005_db_user:XBoPV1NPRlBpsOMe@cluster0.5cv1rw2.mongodb.net/tour-managemen
