const stateDefautl = {
    arrPhim: [
        {
            "maPhim": 10541,
            "tenPhim": "AVATAR : DÒNG CHẢY CỦA NƯỚC 2023",
            "biDanh": "avatar-dong-chay-cua-nuoc-2023",
            "trailer": "https://www.youtube.com/watch?v=oeRG9A6bDdY",
            "hinhAnh": "https://movieapi.cyberlearn.vn/hinhanh/meo-di-hia-dieu-uoc-cuoi-cung_gp01.jpg",
            "moTa": "Lấy bối cảnh sau hơn một thập kỷ kể từ phần phim đầu tiên, Avatar: Dòng Chảy Của Nước kể về câu chuyện của gia đình Sully (Jake, Neytiri, và con của họ), những vấn đề xung quanh họ, những nỗ lực để bảo vệ sự an toàn của gia đình, những cuộc chiến sinh tồn, và những hiểm họa mà họ phải đối mặt.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2020-10-10T00:00:00",
            "danhGia": 10,
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
        }
    ]
}

export const QuanLyPhimReducer = (state = stateDefautl, action) =>{
    switch (action.type){

  
        default: return {...state}
    }
}