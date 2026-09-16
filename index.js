const express = require("express"); // nhúng thư viện express vào
const app = express();// gọi và khởi tạo app
const port = 3000;// định nghĩa cổng

//đứng từ app gọi get để lấy ra giao diện
// req gửi yêu cầu đi, nó là 1 object đối tượng
// res phản hồi 
app.get("/", (req, res) => {
	res.send("Trang chủ 123");
});

app.get("/tours", (req, res) => {
	res.send("Danh sách tour");
});

// Khởi chạy dự án ở cổng 3000
app.listen(port, () => {
	console.log(`Website đang chạy trên cổng ${port}`);
});
