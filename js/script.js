/**
 * DANH SÁCH SÁCH - Mảng chứa thông tin các sản phẩm sách
 */
const books = [
  {
    id: 1,
    title: "Trốn Lên Mái Nhà Để Khóc",
    author: "Lam",
    category: "Sách Văn Học",
    price: 95000,
    image: "../img/tron-len-mai-nha-de-khoc.jpg",
    describe:
      "Có những ngày chẳng ai hiểu mình, chẳng ai cần mình, chẳng ai thương mình. Và những ngày đó, mái nhà là nơi duy nhất tôi thấy an toàn. <br><br>" +
      "“Trốn Lên Mái Nhà Để Khóc” không chỉ là câu chuyện của riêng tác giả, mà còn là những mảnh ghép ký ức của mỗi người. Một cuốn sách dành cho những trái tim nhạy cảm, cho những ai từng giấu nước mắt sau nụ cười, từng thu mình vào một góc chỉ để đối diện với chính mình.",
  },
  {
    id: 2,
    title: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
    author: "Nguyễn Nhật Ánh",
    category: "Sách Văn Học",
    price: 150000,
    image: "../img/toi_thay_hoa_vang_tren_co_xanh.jpg",
    describe:
      "Những câu chuyện nhỏ xảy ra ở một ngôi làng nhỏ: chuyện người, chuyện cóc, chuyện ma, chuyện công chúa và hoàng tử, rồi chuyện đói ăn, cháy nhà, lụt lội,... Bối cảnh là trường học, nhà trong xóm, bãi tha ma. Dẫn chuyện là cậu bé 15 tuổi tên Thiều. Thiều có chú ruột là chú Đàn, có bạn thân là cô bé Mận. Nhưng nhân vật đáng yêu nhất lại là Tường, em trai Thiều, một cậu bé học không giỏi. Thiều, Tường và những đứa trẻ sống trong cùng một làng, học cùng một trường, có biết bao chuyện chung. Chúng nô đùa, cãi cọ rồi yêu thương nhau, cùng lớn lên theo năm tháng, trải qua bao sự kiện biến cố của cuộc đời. <br><br>" +
      "Tác giả vẫn giữ cách kể chuyện bằng chính giọng trong sáng hồn nhiên của trẻ con. 81 chương ngắn là 81 câu chuyện hấp dẫn với nhiều chi tiết thú vị, cảm động, có những tình tiết bất ngờ, từ đó lộ rõ tính cách người. Cuốn sách, vì thế, có sức ám ảnh.",
  },
  {
    id: 3,
    title: "Tôi Thích Dáng Vẻ Nỗ Lực Của Chính Mình",
    author: "Lily Trương",
    category: "Sách Văn Học",
    price: 99000,
    image: "../img/toi_thich_dang_ve_no_luc_cua_chinh_minh.jpg",
    describe:
      "NẾU ÔNG TRỜI KHÔNG BAN CHO BẠN SỰ MAY MẮN, VẬY HÃY TỰ BIẾN BẢN THÂN MÌNH THÀNH “KỲ TÍCH” <br><br>" +
      "- Có phải bạn luôn thắc mắc tại sao sau rất nhiều nỗ lực, mình vẫn chưa có được sự tiến bộ mà bản thân hằng mong đợi? <br><br>" +
      "- Có phải bạn vẫn nghi ngờ rằng bản thân đang “giậm chân tại chỗ” và ngày mình chạm vào ước mơ có thể sẽ chẳng bao giờ đến? <br><br>" +
      "- Có phải bạn cho rằng mình đã cố gắng rất nhiều, nhưng cuối cùng lại không bằng một phần nhỏ sự may mắn của người khác? <br><br>" +
      "Vậy hãy lắng nghe lời chia sẻ đầy ý nghĩa của tác giả Lily Trương trong cuốn sách “Tôi thích dáng vẻ nỗ lực của chính mình”. br><br>" +
      "“Khoáng vật muốn thành kim cương cũng phải chịu một sức nóng đỉnh điểm 1200 độ. Sâu phải lột xác để hoá bướm, phượng hoàng phải chịu đau đớn để tái sinh. Bất cứ cao thủ nào cũng cần phải trải qua khoảng thời gian thử thách khó khăn. Không phải ai sinh ra cũng có tài năng thiên bẩm và sẽ chẳng ai có thể luôn gặp may mắn. Tiếp tục kiên trì, chăm chỉ, bạn sẽ biến mình trở thành kỳ tích.” <br><br>" +
      "Được chắp bút bởi một trong những tác giả trẻ tài năng - Lily Trương, “Tôi thích dáng vẻ nỗ lực của chính mình” hứa hẹn sẽ trở thành người bạn tri kỷ luôn tiếp thêm động lực để bạn nuôi dưỡng ước mơ và khám phá tri thức. Hãy nhớ rằng muốn đứng được ở nơi mà người khác không đứng được, bạn phải chịu được những áp lực mà người thường không thể chịu được.",
  },
  {
    id: 4,
    title: "Nơi Nào Có Mẹ - Nơi Ấy Là Nhà",
    author: "Hạ Mer",
    category: "Sách Văn Học",
    price: 90000,
    image: "../img/noi-nao-co-me-noi-ay-la-nha.jpg",
    describe:
      "Trên đời này, sẽ chẳng có ai sẵn sàng mua những thứ tốt nhất cho bạn dù họ có thể cả năm không mua lấy một bộ quần áo mới… ngoại trừ MẸ của bạn. <br><br>" +
      "Trên đời này, sẽ chẳng có ai sẵn sàng cho bạn những bữa ăn miễn phí, yêu thương bạn vô điều kiện… ngoại trừ MẸ của bạn. <br><br>" +
      "Đúng thật là “thế gian rộng lớn, có mẹ là đủ”, nơi chúng ta muốn quay trở về để được chữa lành, được an ủi. Dù cả thế giới có bỏ mặc bạn, vẫn dám chắc chắn một điều, trong lòng mẹ, bạn chính là cả thế giới. <br><br>" +
      "NƠI NÀO CÓ MẸ, NƠI ẤY LÀ NHÀ là lời nhắn mà tác giả Hạ Mer gửi đến tất cả chúng ta: Khi bạn tìm hoài chẳng thấy hạnh phúc, về nhà đi! Nơi có Mẹ, có một mâm cơm ấm, một vòng tay êm, một góc sân nhỏ. Nơi có mẹ tựa một gốc đại thụ che trời, luôn đóng vai trầm mặc, che gió, che mưa cho bạn, sẵn sàng hy sinh mọi thứ mà không cần hồi đáp. <br><br>" +
      "Cuốn sách này không có triết lý hay bài học cao siêu gì cả, ở đây chỉ có những mẩu chuyện nho nhỏ mà tác giả Hạ Mer góp nhặt từ những năm tháng tuổi thơ cho tới lúc trải nghiệm và trưởng thành giữa cuộc đời rộng lớn. Mong rằng những con chữ này sẽ giúp ích gì đó cho bạn hoặc bạn sẽ bắt gặp hình ảnh của bản thân mình trong đó.",
  },
  {
    id: 5,
    title:
      "Kế Toán Vỉa Hè - Thực Hành Báo Cáo Tài Chính Căn Bản Từ Quầy Bán Nước Chanh",
    author: "Darrell Mullis, Judith Orloff",
    category: "Sách Kinh Tế",
    price: 199000,
    image: "../img/ke_toan_via_he.jpg",
    describe:
      "Đã bao lần bạn cầm trên tay bảng báo cáo tài chính doanh nghiệp của mình, nhưng chẳng thể nào hiểu nổi? <br><br>" +
      "Kế toán và tài chính là nỗi đau chung của rất nhiều doanh nghiệp nhỏ. Ngôn ngữ tài chính dường như là điều bí ẩn nhất của thế giới. Vô số tính toán và ý đồ được cài cắm sau các con số, mà thậm chí người kinh doanh nhiều năm cũng không thể nào bóc tách nổi. <br><br>" +
      "Nếu bạn vẫn cảm thấy mù mờ với bảng báo cáo tài chính của mình thì thật là đáng tiếc. Tài chính được xem như là ngôn ngữ của kinh doanh. Bảng kế toán sẽ cho bạn biết được doanh nghiệp của mình lời hay lỗ, trả lời câu hỏi vì sao trông bạn có vẻ đang ăn nên làm ra, nhưng két sắt công ty không có lấy một đồng. <br><br>" +
      "Quyển sách mang đến cho bạn: <br><br>" +
      "- Kiến thức căn bản về kế toán doanh nghiệp. <br><br>" +
      "- Phân biệt 3 loại báo cáo tài chính quan trọng nhất. <br><br>" +
      "- Phân tích chức năng của mỗi loại báo cáo trong quản trị doanh nghiệp. <br><br>" +
      "- Hiểu và tự lập được bảng cân đối kế toán, báo cáo kết quả kinh doanh, báo cáo luân chuyển tiền tệ. <br><br>" +
      "- Đánh giá sơ bộ được sức khỏe tài chính của doanh nghiệp thông qua 3 báo cáo tài chính trên. <br><br>" +
      "- Bạn càng am hiểu sớm kế toán và báo cáo tài chính, càng có lợi cho công việc kinh doanh lâu dài.",
  },
  {
    id: 6,
    title: "Nói Thế Nào Để Bán Được Hàng?",
    author: "Vương Kiến Tứ",
    category: "Sách Kinh Tế",
    price: 120000,
    image: "../img/noi-the-nao-de-ban-duoc-hang.png",
    describe:
      "Bắt đầu xuất bản từ năm 2008, cuốn sách Nói thế nào để bán được hàng? đã liên tục in nối hơn ba mươi lần, được rất nhiều công ty lựa chọn làm tài liệu đào tạo cho nhân viên, đồng thời luôn nằm trong top sách bán chạy nhất, tính thực dụng và hữu ích đã được kiểm chứng qua thời gian và thực tiễn. <br><br>" +
      "Ở cuốn Nói thế nào để bán được hàng? – lần tái bản này, nội dung cơ bản tập trung vào lĩnh vực hàng tiêu dùng như nội thất, và chủ yếu dành cho nhân viên bán lẻ. Tôi tin rằng, việc xác định rõ nội dung ngành nghề sẽ giúp cho việc áp dụng vào thực tế của độc giả trở nên hiệu quả hơn. <br><br>" +
      "Tiếp theo, nội dung cuốn sách bám sát sự biến đổi của thị trường. Như chúng ta đã biết, trong những năm gần đây, thị trường bán lẻ có sự thay đổi vô cùng lớn. Ngành công nghệ điện tử phát triển mạnh, nhiều thương hiệu mới xuất hiện, người tiêu dùng ngày một thông thái và am hiểu hơn, việc kinh doanh hàng tiêu dùng lâu dài ngày càng trở nên khó khăn, điều đó đã đặt ra yêu cầu ngày càng cao đối với nhân viên bán lẻ. Chúng ta cần tập trung vào yêu cầu của người tiêu dùng, cung cấp cho họ nhiều trải nghiệm giá trị và cụ thể hơn. Do đó, tác giả  sẽ đi sâu vào phân tích tâm lí và cảm nhận của khách hàng nhiều hơn. ",
  },
  {
    id: 7,
    title: "Giữ Chân Khách Hàng - Bí Quyết Duy Trì Vòng Lặp Mua Hàng",
    author: "Noah Fleming",
    category: "Sách Kinh Tế",
    price: 129000,
    image: "../img/giu-chan-khach-hang.jpg",
    describe:
      "Nhạy bén và sáng suốt, Noah Fleming đã tiết lộ cho chúng ta bí kíp giữ chân khách hàng gồm bốn giai đoạn tạo thành một quy trình đi theo vòng xoáy ốc, biến họ không chỉ thành khách hàng trung thành mà còn là những người hâm mộ nhiệt tình, quảng bá cho doanh nghiệp. <br><br>" +
      "Sáng tạo trước khi thuyết phục: Tiến hành marketing và đưa ra thông điệp phù hợp, khiến khách hàng tưởng tượng ra những trải nghiệm tuyệt vời có thể có với sản phẩm/dịch vụ cũng như với doanh nghiệp cung ứng. <br><br>" +
      "Chuyển đổi không ép buộc: Biến khách hàng tiềm năng thành khách hàng, khiến họ hoàn toàn tự nguyện trả tiền cho hàng hóa, dịch vụ của bạn; <br><br>" +
      "Thiết kế trải nghiệm: Tạo ra một trải nghiệm nhất quán từ đầu chí cuối, đảm bảo khách hàng sẽ coi đó là trải nghiệm tuyệt nhất – ấn tượng ban đầu khó phai, kết thúc có hậu. <br><br>" +
      "Hạnh phúc mãi về sau: Dù khách hàng đã mua hàng nhưng vẫn cần tập trung thúc đẩy chăm sóc và truyền miệng, theo sát khách hàng để họ tiếp tục làm ăn với bạn.",
  },
  {
    id: 8,
    title:
      "Bán Hàng Shopee Thực Chiến Từ A-Z - 36 Chiến Lược Đỉnh Cao Bùng Nổ Doanh Số",
    author: "Văn Chính",
    category: "Sách Kinh Tế",
    price: 249000,
    image: "../img/shopee.jpg",
    describe:
      "Hành trình vạn dặm luôn bắt đầu từ những bước chân đầu tiên. Tôi mong các bạn một khi đã lựa chọn bắt đầu thì hãy làm hết mình. Nếu chẳng may thất bại thì cũng không sao cả, vì chúng ta sẽ có thêm bài học, thêm kinh nghiệm. Về sau nhìn lại, bạn sẽ hiểu rằng mình chẳng may thất bại do yếu tố nào đó, như chọn sản phẩm sai chẳng hạn. Tôi cũng có lúc lựa chọn sản phẩm sai, mất đến 2 tỷ đồng trong một tháng. Sai lầm này cũng khiến tôi buồn chán trong một thời gian. Nhưng rồi tôi lại nghĩ rằng, mình bắt đầu từ con số 0 mà còn làm được, thì bây giờ có cơ hội tại sao lại không làm. Nói chung, khi chúng ta cố gắng suy nghĩ tích cực, không bỏ cuộc, thì chúng ta sẽ tự tạo ra được may mắn cho mình. <br><br>" +
      "Khi đọc cuốn sách này hay tham gia các khóa học của tôi, mong các bạn nhớ rằng, câu “Tôi biết rồi” là câu cấm kỵ. Để có thể tìm ra lối thoát hoặc cải thiện, bùng nổ doanh số thì chúng ta cần lắng nghe, cần tiếp thu 100% những kiến thức được chia sẻ. Vì đôi khi, một kiến thức nho nhỏ lại là chiếc chìa khóa cho các bạn. <br><br>" +
      "Có những bạn học trực tiếp với tôi trong 3 ngày mà chỉ nhớ một vài từ khoá nhưng hiệu quả đem lại thì rất tốt, doanh số tăng trưởng thêm 30-50%. Thậm chí, việc học lại khóa học Shopee Master hay đọc lại cuốn sách này cũng là bình thường. Khi đọc cuốn sách nhiều hơn một lần, bạn sẽ càng hiểu sâu về nó. Còn khi bạn nói hoặc nghĩ: “Tôi biết rồi”, thì não bạn sẽ tạo ra loại hoóc-môn ngăn cản việc tiếp thu kiến thức của bạn. <br><br>" +
      "Bất kể bạn là ai, đang làm trong lĩnh vực gì, bạn cũng hoàn toàn có thể làm chủ thu nhập và theo đuổi đam mê kinh doanh của mình. Nhưng hãy nhớ rằng, xu thế của thị trường và những biến đổi kinh tế là điều mà bạn KHÔNG BAO GIỜ ĐƯỢC BỎ LỠ và SHOPEE là một trong số đó!",
  },
  {
    id: 9,
    title: "Thỏ Bảy Màu Và Những Người Nghĩ Nó Là Bạn",
    author: "Huỳnh Thái Ngọc",
    category: "Truyện tranh",
    price: 99000,
    image: "../img/tho_bay_mau.jpg",
    describe:
      "Thỏ Bảy Màu là fanpage sở hữu hơn 2,6tr lượt thích trên mạng xã hội. Với hình tượng nhân vật thú vị cùng phong cách sáng tạo độc đáo, Thỏ bảy màu vẫn luôn là thu hút được số lượng lớn người quan tâm thể hiện qua nhiều bài viết với hàng chục nghìn lượt like và share.<br><br>" +
      "Thỏ Bảy Màu là một nhân vật hư cấu chẳng còn xa lạ gì với anh em dùng mạng xã hội với slogan “Nghe lời Thỏ, kiếp này coi như bỏ!”.<br><br>" +
      "Thỏ Bảy Màu đơn giản chỉ là một con thỏ trắng với sự dở hơi, ngang ngược nhưng đáng yêu vô cùng tận. Nó luôn nghĩ rằng mình không có cuộc sống và không có bạn bè. Tuy nhiên, Thỏ lại chẳng bao giờ thấy cô đơn vì đến cô đơn cũng bỏ nó mà đi.<br><br>" +
      "Cuốn sách là những mẩu chuyện nhỏ được ghi lại bằng tranh xoay quanh Thỏ Bảy Màu và những người nghĩ nó là bạn. Những mẩu chuyện được truyền tải rất “teen” đậm chất hài hước, châm biếm qua sự sáng tạo không kém phần “mặn mà” của tác giả càng trở nên độc đáo và thu hút.<br><br>" +
      "Nếu một ngày bạn lỡ cảm thấy buồn thì hãy đọc cuốn sách này để biết thế nào là cười sảng nha!",
  },
  {
    id: 10,
    title: "Ở Đây Có Một Con Én",
    author: "Tuấn Dũng",
    category: "Truyện tranh",
    price: 99000,
    image: "../img/o_day_co_mot_con_en.jpg",
    describe:
      "Én là một nhân vật hư cấu có thật xuất hiện trên Facebook từ cuối năm 2018 và để lại tiếng vang lớn nếu hét trong hang động. Thuở ban đầu Én chỉ là những tranh truyện vừa xấu vừa vô nghĩa được vài người like, đến bây giờ Én vẫn xấu và vô nghĩa nhưng được nhiều like hơn. “Ở đây có một con Én” - cuốn sách đầu tiên đánh dấu chặng đường 6 năm làm trò hề trên mạng xã hội, là tập hợp những mẩu chuyện chứa đựng nhiều thông điệp tích cực về cuộc sống khi soi bằng kính lúp. <br><br>" +
      "Dẫu vậy, Én mong góp phần giúp bạn giải đáp thắc mắc cuộc sống bình thường sẽ ra sao khi chúng ta suy nghĩ khác thường và phi logic. Khá là hỗn loạn đấy, cơ mà vui! Vui thì nên mua!",
  },
  {
    id: 11,
    title: "Doraemon - Nobita Và Bản Giao Hưởng Địa Cầu",
    author: "Fujiko F Fujio , Teruko Utsumi, Kazuaki Imai",
    category: "Truyện tranh",
    price: 60000,
    image: "../img/nobita_va_ban_giao_huong_dia_cau.jpg",
    describe:
      "Nobita đang tập sáo để chuẩn bị cho buổi hòa nhạc ở trường thì bất ngờ gặp cô bé Micca bí ẩn có giọng hát tuyệt vời. Micca rất thích nốt No nhẹ nhõm vô ưu Nobita thổi, bèn mời nhóm bạn đến Cung Điện Farre kì lạ, nơi sử dụng âm nhạc làm năng lượng. Cung Điện “ngủ đông” vì cạn nhiên liệu, và Micca đang tìm kiếm bậc thầy âm nhạc để cùng trình diễn nhằm hồi sinh nó. Doraemon và nhóm bạn địa cầu dùng bảo bối chứng chỉ chuyên viên âm nhạc để chọn nhạc cụ diễn tấu với Micca. Cung Điện Farre vừa dần phục hồi thì...",
  },
  {
    id: 12,
    title: "Mùa Hè Bất Tận",
    author: "Lâm Hoàng Trúc",
    category: "Truyện tranh",
    price: 120000,
    image: "../img/mua-he-bat-tan.jpg",
    describe:
      "Mùa Hè Bất Tận của tác giả Lâm Hoàng Trúc, do NXB Thanh Niên, Du Bút kết hợp cùng June Comics phát hành là ấn bản truyện tranh hiếm hoi khai thác tâm hồn tuổi mới lớn dưới lăng kính không chỉ có mộng mơ. <br><br>" +
      "Ba năm sau Đường Hoa (2018), tác giả Lâm Hoàng Trúc trở lại với tác phẩm mới đánh dấu bước trưởng thành vượt bậc trong cả nét vẽ lẫn nội dung thể hiện. Mùa Hè Bất Tận là câu chuyện của hai đứa trẻ cùng tên Phương đang bước vào năm học cuối cùng của cấp hai. Những tâm tư của chúng tưởng như đơn thuần, chỉ xoay quanh thế giới nhỏ bé của tuổi thiếu niên, như chuyện học hành thi cử, những kỳ vọng của mẹ cha, hay những rung động đầu đời. Nhưng kỳ thực, đó lại là một quá trình trút bỏ vỏ kén đầy đau đớn để cả hai tìm kiếm bản ngã của chính mình ở ngưỡng cửa trưởng thành. <br><br>" +
      "Mùa Hè Bất Tận là tập truyện tranh đầu tiên tại Việt Nam thể hiện rõ tinh thần của thể loại “coming of age”. Đây là thể loại xoay quanh quá trình các nhân vật chuyển mình từ một đứa trẻ thành người lớn, cho ta thấy cách họ đối mặt với khó khăn, vui buồn, cách họ phản ứng trước những biến cố trong đời, và lớn lên từ những lần vấp ngã như thế nào. Mùa Hè Bất Tận đã không chỉ khơi dậy sự đồng cảm từ bạn đọc cùng trang lứa với nhân vật mà còn khiến các độc giả từng trải qua tuổi thiếu niên bồi hồi liên tưởng tới chính mình trong quá khứ. <br><br>" +
      "Nếu trong Đường Hoa Lâm Hoàng Trúc men theo chiều dài nhân sinh bằng giọng kể, đường bút lạc quan, tươi sáng, thì với Mùa Hè Bất Tận nữ tác giả trẻ chỉ chọn một lát cắt cuộc sống và khắc sâu những chiêm nghiệm của nó lên hơn hai trăm trang truyện. Lâm Hoàng Trúc lấy cảm hứng từ chính trải nghiệm của mình để phác nên chân dung hai cô cậu bé mới ở tuổi ăn tuổi học nhưng đã sớm phải nếm trải những áp lực lớn hơn lứa tuổi ngây thơ. Những trăn trở rất hiện sinh của hai đứa trẻ về cuộc sống và cái chết, về lẽ tồn tại được thể hiện chân thành và sống động, dễ dàng làm rung động người đọc. <br><br>" +
      "Bằng nét vẽ đạt độ tinh tế cao, Lâm Hoàng Trúc đã tái hiện một không gian trường lớp và gia đình hết sức gần gũi của Việt Nam. Độc giả sẽ bắt gặp hình ảnh quen thuộc của cây phượng đổ bóng sân trường, hay con hẻm nhỏ lộn xộn mà yên tĩnh giữa trưa hè, được Lâm Hoàng Trúc thể hiện chân thực và chăm chút tới từng chi tiết nhỏ. Tất cả trang vẽ đều được phác thảo bằng chì rồi đi mực công phu trên khổ giấy A3, chủ yếu sử dụng các mảng đen trắng tương phản cao, tạo cảm xúc sâu lắng cho một tác phẩm giàu chất liệu chiêm nghiệm. <br><br>" +
      "Tách khỏi ảnh hưởng của truyện tranh Nhật Bản, Lâm Hoàng Trúc theo đuổi phong cách riêng cho câu chuyện mình muốn kể. Tác giả lược bỏ tối đa những khung truyện mô tả độc thoại nội tâm, giữ cho Mùa Hè Bất Tận một góc nhìn khách quan và nhường lại mọi cảm nhận cho độc giả. Có thể nói đây là một tác phẩm truyện tranh Việt Nam hiếm hoi mang đậm ngôn ngữ của điện ảnh hiện đại. <br><br>" +
      "Mùa Hè Bất Tận được Lâm Hoàng Trúc mong muốn sẽ chinh phục độc giả ở mọi lứa tuổi. Tập truyện mở ra những góc sâu kín nhất của tuổi thiếu niên, nói thay nỗi lòng của các bạn trẻ với gia đình, nhà trường. Những nỗi niềm không dễ nói ra ấy là của chung cho bất kỳ ai đã từng bước qua một thời tuổi xanh, và cũng là một lời nhắn gửi đến chính những bậc cha mẹ của ngày hôm nay.",
  },
];

let cart = [];

/**
 * UTILITIES - Các hàm tiện ích hỗ trợ
 */
const Utils = {
  formatPrice: (price) => price.toLocaleString() + "đ",
  validateName: (name) => /^[^\s]+\s+[^\s]+/.test(name.trim()),
  showAlert: (message) => alert(message),
  redirect: (url) => (window.location.href = url),
};

/**
 * CART MANAGER - Quản lý giỏ hàng và các chức năng liên quan
 */
const CartManager = {
  init() {
    this.load();
    this.updateUI();
  },

  load() {
    const saved = localStorage.getItem("cart");
    if (saved) cart = JSON.parse(saved);
  },

  save() {
    localStorage.setItem("cart", JSON.stringify(cart));
  },

  add(bookId, quantity = 1) {
    const book = books.find((b) => b.id == bookId);
    if (!book) return false;

    const existingItem = cart.find((item) => item.id == bookId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: book.id,
        title: book.title,
        price: book.price,
        image: book.image,
        quantity: quantity,
      });
    }

    this.save();
    this.updateUI();
    return true;
  },

  remove(bookId) {
    cart = cart.filter((item) => item.id != bookId);
    this.save();
    this.updateUI();
  },

  updateQuantity(bookId, newQuantity) {
    const item = cart.find((item) => item.id == bookId);
    if (item) {
      item.quantity = Math.max(1, newQuantity);
      this.save();
      this.updateUI();
    }
  },

  getTotalItems() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  },

  getTotalPrice() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  updateUI() {
    const container = document.querySelector(".cart-items");
    const summary = document.querySelector(".cart-summary");

    if (!container) return;

    container.innerHTML = "";

    cart.forEach((item) => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="cart-item-details">
          <h3>${item.title}</h3>
          <p>${Utils.formatPrice(item.price)}</p>
        </div>
        <div class="cart-item-price">
          <div class="quantity">
            <button class="remove-item" data-id="${item.id}">Xóa</button>
            <button class="decrease" data-id="${item.id}">-</button>
            <input type="number" value="${
              item.quantity
            }" min="1" class="quantity-input" data-id="${item.id}">
            <button class="increase" data-id="${item.id}">+</button>
          </div>
          <p class="item-total">${Utils.formatPrice(
            item.quantity * item.price
          )}</p>
        </div>
      `;
      container.appendChild(div);
    });

    if (summary) {
      summary.innerHTML = `
        <p><strong>${this.getTotalItems()} sản phẩm</strong></p>
        <p><strong>${Utils.formatPrice(
          this.getTotalPrice()
        )}</strong> (Chưa gồm phí vận chuyển)</p>
        <button class="checkout-button" ${
          cart.length === 0 ? "disabled" : ""
        }>Tiến hành đặt hàng</button>
      `;

      const checkoutBtn = summary.querySelector(".checkout-button");
      if (checkoutBtn && cart.length === 0) {
        checkoutBtn.style.opacity = "0.6";
        checkoutBtn.style.cursor = "not-allowed";
      }
    }
  },
};

/**
 * BOOK MANAGER - Quản lý hiển thị thông tin sách chi tiết
 */
const BookManager = {
  loadDetails() {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get("id");
    if (!bookId) return;

    const book = books.find((b) => b.id == bookId);
    if (!book) return;

    document.getElementById("book-image").src = book.image;
    document.getElementById("book-title").textContent = book.title;
    document.getElementById("book-author").textContent = book.author;
    document.getElementById("book-category").textContent =
      "Thể loại: " + book.category;
    document.getElementById("book-price").textContent = Utils.formatPrice(
      book.price
    );
    document.getElementById("book-describe").innerHTML = `<strong>${
      book.title
    }</strong><br>${book.describe || "Không có mô tả"}`;

    document
      .querySelector(".add-to-cart")
      .setAttribute("data-book-id", book.id);
  },

  setupDescriptionToggle() {
    const toggleBtn = document.getElementById("toggle-describe");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        const describe = document.getElementById("book-describe");
        const isCollapsed = describe.classList.contains("collapsed");

        if (isCollapsed) {
          describe.classList.remove("collapsed");
          this.textContent = "Thu gọn";
        } else {
          describe.classList.add("collapsed");
          this.textContent = "Xem thêm";
        }
      });
    }
  },
};

/**
 * MODAL CONTROLLER - Quản lý các modal (đăng nhập, đăng ký, thanh toán)
 */
const ModalController = {
  init() {
    this.cacheElements();
    this.bindEvents();
  },

  cacheElements() {
    this.elements = {
      loginModal: document.getElementById("loginModal"),
      registerModal: document.getElementById("registerModal"),
      openLoginBtns: document.querySelectorAll("#openLogin"),
      openRegiBtns: document.querySelectorAll("#openRegi"),
      closeBtns: document.querySelectorAll(".close"),
      loginForm: document.getElementById("loginForm"),
      registerForm: document.getElementById("registerForm"),
      paymentModal: document.getElementById("paymentModal"),
      paymentForm: document.getElementById("paymentForm"),
      checkoutBtn: document.querySelector(".checkout-button"),
    };
  },

  bindEvents() {
    this.elements.openLoginBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => this.openModal(e, "loginModal"));
    });

    this.elements.openRegiBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => this.openModal(e, "registerModal"));
    });

    this.elements.closeBtns.forEach((btn) => {
      btn.addEventListener("click", () => this.closeAllModals());
    });

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal")) {
        this.closeAllModals();
      }
    });

    if (this.elements.loginForm) {
      this.elements.loginForm.addEventListener("submit", (e) =>
        this.handleLogin(e)
      );
    }

    if (this.elements.registerForm) {
      this.elements.registerForm.addEventListener("submit", (e) =>
        this.handleRegister(e)
      );
    }

    if (this.elements.checkoutBtn) {
      this.elements.checkoutBtn.addEventListener("click", (e) =>
        this.openPaymentModal(e)
      );
    }

    if (this.elements.paymentForm) {
      this.elements.paymentForm.addEventListener("submit", (e) =>
        this.handlePayment(e)
      );
    }
  },

  openModal(e, modalId) {
    e.preventDefault();
    this.closeAllModals();
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("show");
      document.body.style.overflow = "hidden";
      const firstInput = modal.querySelector("input");
      if (firstInput) firstInput.focus();
    }
  },

  closeAllModals() {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("show"));
    document.body.style.overflow = "auto";
  },

  handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
      Utils.showAlert("Vui lòng nhập đầy đủ email và mật khẩu");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      Utils.showAlert(`Chào mừng ${user.name}!`);
      this.closeAllModals();
      UserManager.updateUserMenu();
    } else {
      Utils.showAlert("Email hoặc mật khẩu không đúng!");
    }
  },

  handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("regConfirmPassword").value;

    if (!Utils.validateName(name)) {
      Utils.showAlert("Vui lòng nhập đầy đủ họ và tên");
      return;
    }

    if (!email || !password || !confirmPassword) {
      Utils.showAlert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (password !== confirmPassword) {
      Utils.showAlert("Mật khẩu không khớp!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some((u) => u.email === email)) {
      Utils.showAlert("Email đã được sử dụng!");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    Utils.showAlert("Đăng ký thành công!");
    this.closeAllModals();
  },

  openPaymentModal(e) {
    e.preventDefault();
    if (cart.length === 0) {
      Utils.showAlert("Không có sản phẩm nào để thanh toán!");
      return;
    }

    this.closeAllModals();
    this.elements.paymentModal.classList.add("show");
    document.body.style.overflow = "hidden";

    const summaryItems =
      this.elements.paymentModal.querySelector(".summary-items");
    summaryItems.innerHTML = "";

    cart.forEach((item) => {
      const div = document.createElement("div");
      div.className = "summary-item";
      div.innerHTML = `
        <span>${item.title} (x${item.quantity})</span>
        <span>${Utils.formatPrice(item.price * item.quantity)}</span>
      `;
      summaryItems.appendChild(div);
    });

    document.getElementById("totalAmount").textContent = Utils.formatPrice(
      CartManager.getTotalPrice()
    );
  },

  handlePayment(e) {
    e.preventDefault();
    const name = document.getElementById("paymentName").value;
    const phone = document.getElementById("paymentPhone").value;
    const address = document.getElementById("paymentAddress").value;
    const method = document.getElementById("paymentMethod").value;
    const generateInvoice = document.getElementById("generateInvoice").checked;

    if (!name || !phone || !address || !method) {
      Utils.showAlert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const orderData = {
      customer: { name, phone, address },
      paymentMethod: method,
      items: cart,
      total: CartManager.getTotalPrice(),
      date: new Date().toISOString(),
    };

    // Lưu đơn hàng vào localStorage
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    orders.push(orderData);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Xóa giỏ hàng
    cart = [];
    CartManager.save();
    CartManager.updateUI();

    // Hiển thị hóa đơn nếu checkbox được chọn
    if (generateInvoice) {
      this.showInvoiceModal(orderData);
    }

    this.closeAllModals();
    Utils.showAlert("Đặt hàng thành công!");
  },

  showInvoiceModal(order) {
    const invoiceModal = document.getElementById("invoiceModal");
    const invoiceContent = document.getElementById("invoiceContent");

    if (!invoiceModal || !invoiceContent) return;

    // Tạo nội dung hóa đơn
    const content = `
      <p><strong>Họ và tên:</strong> ${order.customer.name}</p>
      <p><strong>Số điện thoại:</strong> ${order.customer.phone}</p>
      <p><strong>Địa chỉ:</strong> ${order.customer.address}</p>
      <p><strong>Phương thức thanh toán:</strong> ${order.paymentMethod}</p>
      <p><strong>Ngày đặt hàng:</strong> ${new Date(
        order.date
      ).toLocaleString()}</p>
      <table>
        <thead>
          <tr>
            <th>Sản phẩm</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          ${order.items
            .map(
              (item) => `
                <tr>
                  <td>${item.title}</td>
                  <td>${item.quantity}</td>
                  <td>${Utils.formatPrice(item.price)}</td>
                  <td>${Utils.formatPrice(item.price * item.quantity)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
      <p class="total">Tổng cộng: ${Utils.formatPrice(order.total)}</p>
    `;

    // Hiển thị nội dung hóa đơn trong modal
    invoiceContent.innerHTML = content;
    invoiceModal.style.display = "flex";

    // Đóng modal khi nhấn nút "Đóng"
    document.getElementById("closeInvoiceBtn").addEventListener("click", () => {
      invoiceModal.style.display = "none";
    });

    // Đóng modal khi nhấn nút "X" ở góc
    invoiceModal.querySelector(".close").addEventListener("click", () => {
      invoiceModal.style.display = "none";
    });
  },
};

/**
 * USER MANAGER - Quản lý người dùng và lịch sử mua hàng
 */
const UserManager = {
  init() {
    this.updateUserMenu();
  },

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser") || "null");
  },

  logout() {
    localStorage.removeItem("currentUser");
    this.updateUserMenu();
    Utils.showAlert("Đã đăng xuất thành công!");
  },

  updateUserMenu() {
    const user = this.getCurrentUser();
    const accountMenu = document.querySelector(".has-submenu .sub-menu");
    const accountLink = document.querySelector(".has-submenu > a");

    if (!accountMenu || !accountLink) return;

    if (user) {
      accountLink.innerHTML = `
        <span class="user-name">${user.name}</span> <i class="dropdown-icon">▼</i>
      `;

      accountMenu.innerHTML = `
        <li><a href="../html/lich-su-mua-hang.html">Lịch sử mua hàng</a></li>
        <li><a href="#" id="logout">Đăng xuất</a></li>
      `;
    } else {
      accountLink.innerHTML = `Tài khoản <i class="dropdown-icon">▼</i>`;

      accountMenu.innerHTML = `
        <li><a href="#" id="openLogin">Đăng nhập</a></li>
        <li><a href="#" id="openRegi">Đăng ký</a></li>
      `;
    }

    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.logout();
      });
    }

    const loginBtn = document.getElementById("openLogin");
    if (loginBtn) {
      loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        ModalController.openModal(e, "loginModal");
      });
    }

    const regiBtn = document.getElementById("openRegi");
    if (regiBtn) {
      regiBtn.addEventListener("click", (e) => {
        e.preventDefault();
        ModalController.openModal(e, "registerModal");
      });
    }
  },

  loadOrderHistory() {
    const orderList = document.querySelector(".order-list");
    if (!orderList) return;

    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const currentUser = this.getCurrentUser();

    if (!currentUser) {
      orderList.innerHTML = `
        <p class="no-orders">Vui lòng đăng nhập để xem lịch sử mua hàng</p>
        <button onclick="ModalController.openModal(event, 'loginModal')" class="btn">Đăng nhập ngay</button>
      `;
      return;
    }

    const userOrders = orders.filter(
      (order) => order.customer?.email === currentUser.email
    );

    if (userOrders.length === 0) {
      orderList.innerHTML = `
        <div class="no-orders">
          <p>Không có đơn hàng nào.</p>
          <a href="../html/cua-hang.html" class="btn">Mua sắm ngay</a>
        </div>
      `;
      return;
    }

    orderList.innerHTML = userOrders
      .map((order) => {
        const orderDate = new Date(order.date).toLocaleDateString();
        const orderItems = order.items
          .map(
            (item) => `
            <div class="order-item" 
                 data-id="${item.id}" 
                 data-title="${item.title}" 
                 data-price="${item.price}" 
                 data-image="${item.image}"
                 data-quantity="${item.quantity}">
              <img src="${item.image}" alt="${item.title}">
              <div class="item-details">
                <h3>${item.title}</h3>
                <p>${Utils.formatPrice(item.price)} x ${item.quantity}</p>
                <p>Ngày đặt: ${orderDate}</p>
              </div>
                <button class="reorder-button" data-id="${
                  item.id
                }" data-quantity="${item.quantity}">Mua lại</button>
            </div>
          `
          )
          .join("");

        return `
          <div class="order-group">
            ${orderItems}
          </div>
        `;
      })
      .join("");

    document.querySelectorAll(".reorder-button").forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const bookId = this.getAttribute("data-id");
        const quantity = parseInt(this.getAttribute("data-quantity")) || 1;

        cart = [];
        CartManager.save();

        if (CartManager.add(bookId, quantity)) {
          ModalController.openPaymentModal(e);
        }
      });
    });
  },
};

/**
 * FILTER CONTROLLER - Quản lý bộ lọc sản phẩm
 */
const FilterController = {
  init() {
    this.bindEvents();
  },

  bindEvents() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    if (!filterBtns.length) return;

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.filterProducts(btn.getAttribute("data-category"));
      });
    });
  },

  filterProducts(category) {
    const productItems = document.querySelectorAll(".product-item");
    if (!productItems.length) return;

    productItems.forEach((item) => {
      const bookId = item
        .querySelector(".view-details")
        .getAttribute("data-book-id");
      const book = books.find((b) => b.id == bookId);

      if (category === "all" || (book && book.category === category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  },
};

/**
 * EVENT HANDLERS - Quản lý các sự kiện trên trang
 */
const EventHandlers = {
  setupCartEvents() {
    document.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      if (e.target.classList.contains("remove-item")) {
        CartManager.remove(id);
      }
      if (e.target.classList.contains("increase")) {
        const item = cart.find((item) => item.id == id);
        if (item) CartManager.updateQuantity(id, item.quantity + 1);
      }
      if (e.target.classList.contains("decrease")) {
        const item = cart.find((item) => item.id == id);
        if (item && item.quantity > 1)
          CartManager.updateQuantity(id, item.quantity - 1);
      }
    });

    document.addEventListener("change", (e) => {
      if (e.target.classList.contains("quantity-input")) {
        const id = e.target.getAttribute("data-id");
        const qty = parseInt(e.target.value) || 1;
        CartManager.updateQuantity(id, qty);
      }
    });
  },

  setupProductEvents() {
    const addBtn = document.querySelector(".add-to-cart");
    if (addBtn) {
      addBtn.addEventListener("click", function () {
        const bookId = this.getAttribute("data-book-id");
        const quantity =
          parseInt(document.querySelector(".quantity-input")?.value) || 1;
        if (CartManager.add(bookId, quantity)) {
          Utils.showAlert("Đã thêm vào giỏ hàng!");
        }
      });
    }

    document.querySelectorAll(".view-details").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const bookId = this.getAttribute("data-book-id");
        Utils.redirect(`thong-tin-sach.html?id=${bookId}`);
      });
    });

    const buyNowBtn = document.querySelector(".buy-now");
    if (buyNowBtn) {
      buyNowBtn.addEventListener("click", function () {
        const bookId = document
          .querySelector(".add-to-cart")
          .getAttribute("data-book-id");
        const quantity =
          parseInt(document.querySelector(".quantity-input")?.value) || 1;

        cart = [];
        if (CartManager.add(bookId, quantity)) {
          ModalController.openPaymentModal({ preventDefault: () => {} });
        }
      });
    }
  },

  setupQuantityControls() {
    const qtyInput = document.querySelector(".quantity-input");
    if (qtyInput) {
      document.querySelector(".increase").addEventListener("click", () => {
        qtyInput.value = parseInt(qtyInput.value) + 1;
      });
      document.querySelector(".decrease").addEventListener("click", () => {
        if (parseInt(qtyInput.value) > 1) {
          qtyInput.value = parseInt(qtyInput.value) - 1;
        }
      });
    }
  },
};

/**
 * KHỞI TẠO ỨNG DỤNG - Khởi chạy tất cả các chức năng khi DOM sẵn sàng
 */
function initializeApp() {
  CartManager.init();
  BookManager.loadDetails();
  BookManager.setupDescriptionToggle();
  ModalController.init();
  FilterController.init();
  EventHandlers.setupCartEvents();
  EventHandlers.setupProductEvents();
  EventHandlers.setupQuantityControls();
  UserManager.init();
  UserManager.loadOrderHistory();
}

if (document.readyState === "complete") {
  initializeApp();
} else {
  document.addEventListener("DOMContentLoaded", initializeApp);
}
