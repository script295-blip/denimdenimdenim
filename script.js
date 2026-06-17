const fabricTiers = [
  ["F1", "일반 논셀비지 광폭 데님", "광폭 직기로 생산한 논셀비지 데님입니다."],
  ["F2", "헤비웨이트 논셀비지", "셀비지가 아닌 중량 데님입니다."],
  ["F3", "일본 셀비지", "일본 셔틀 직기 셀비지 데님입니다."],
  ["F4", "헤비웨이트 일본 셀비지", "중량 일본 셔틀 직기 셀비지 데님입니다."],
  ["F5", "슬럽 / 네프 / 특수 위사 셀비지", "슬럽, 네프, 컬러 위사, 특수 셀비지 디테일이 있는 데님입니다."],
  ["F6", "천연 인디고 / 핸드다이 / 소량 개발 원단", "천연 염색, 손염색, 브랜드 전용 소량 개발 원단입니다."],
  ["F7", "폐쇄된 밀의 잔여 원단, 예: Cone White Oak", "폐쇄된 밀에서 남은 데드스톡 또는 잔여 원단입니다."]
];

const laborTiers = [
  ["L1", "기본 5포켓 봉제", "표준 5포켓 구조입니다."],
  ["L2", "버튼 플라이 / 체인스티치 / 히든 리벳", "버튼 플라이, 체인스티치, 히든 리벳 봉제입니다."],
  ["L3", "셀비지 정렬 / 싱글니들 봉제", "셀비지 정렬과 싱글니들 봉제입니다."],
  ["L4", "핸드 샌딩 / 워싱 / 디스트레스", "핸드 샌딩, 워싱, 디스트레스 피니싱입니다."],
  ["L5", "리페어 / 패치워크", "리페어와 패치워크 작업입니다."],
  ["L6", "사시코 / 보로 / 핸드페인팅", "사시코, 보로, 핸드페인팅 작업입니다."],
  ["L7", "풀커스텀 패턴 / bespoke denim", "풀커스텀 패턴 또는 비스포크 데님 제작입니다."]
];

const products = [
  {
    id: "stussy-levis-501",
    category: "collaboration",
    brand: "Stussy x Levi's",
    model: "Embossed 501 Jeans",
    photo: "assets/Embossed 501 Jeans_main.png",
    line: "SS23 501 150주년 협업",
    retail: "약 328,000원",
    resale: "최근 12개월 약 289,000-655,000원; StockX 마지막 거래가 약 546,000원",
    fabricTier: "F1",
    laborTier: "L4",
    fabric: "러기드한 워싱 인디고 컬러의 100% 코튼 데님입니다. 셀비지 제품으로 판매되지는 않았습니다.",
    hardware: "Levi's 501 베이스에 협업 버튼 생크와 백 패치가 적용되었습니다.",
    construction: "501의 5포켓 구조, 버튼 클로저와 버튼 플라이를 사용합니다. Levi's 제품 페이지 기준 중국 생산입니다.",
    collaboration: "501 150주년 시즌에 Stussy 아이코노그래피를 Levi's 501 위에 적용한 협업입니다.",
    heritage: "501은 전 세계적으로 인식되는 청바지 형태이며, Stussy는 1980년대 후반 캘리포니아 스트리트웨어의 역사를 이 아카이브에 더합니다.",
    scarcity: "Levi's 공식 페이지는 품절 상태이며, StockX는 정가 약 328,000원, 마지막 거래가 약 546,000원, 최근 12개월 약 289,000-655,000원 범위를 기록합니다.",
    sources: [
      ["Levi's 제품 페이지", "https://www.levi.com/US/en_US/levis-x-stussy/stussy-levis-embossed-501-jeans/p/A52180000"],
      ["StockX 시장 데이터", "https://stockx.com/stussy-x-levis-embossed-501-jeans-stussy-rugged-blue"]
    ]
  },
  {
    id: "clot-unionrail-501",
    category: "collaboration",
    brand: "CLOT x Levi's",
    model: "UNIONRAIL 501 Jean Black",
    photo: "assets/UNIONRAIL 501 Jean Black_main.png",
    line: "FW24 협업",
    retail: "약 281,000원",
    resale: "최근 12개월 약 398,000-682,000원; StockX 마지막 거래가 약 587,000원",
    fabricTier: "F1",
    laborTier: "L4",
    fabric: "블랙 컬러의 Levi's 501 데님입니다. 공개 마켓 페이지는 셀비지 원단보다 협업성과 컬러를 더 강조합니다.",
    hardware: "501의 하드웨어 문법에 협업 전용 브랜딩이 더해진 릴리스입니다.",
    construction: "501 진을 베이스로 합니다. 블랙 501 데님 베이스, UNIONRAIL 그래픽, 협업 브랜딩, 5포켓 구조입니다.",
    collaboration: "CLOT x Levi's UNIONRAIL 그래픽을 Levi's 501 블랙 데님에 적용한 협업입니다.",
    heritage: "Levi's 501 실루엣에 CLOT 아카이브와 Edison Chen의 스트리트웨어 관객층이 결합한 제품입니다.",
    scarcity: "StockX는 정가 약 281,000원, 조사 시점 즉시 구매가 약 802,000원, 최근 12개월 약 398,000-682,000원 범위를 표시합니다.",
    sources: [
      ["StockX 시장 데이터", "https://stockx.com/levis-x-clot-unionrail-501-jean-black"],
      ["Levi's x CLOT 릴리스 노트", "https://prtimes.jp/main/html/rd/p/000000096.000046510.html"]
    ]
  },
  {
    id: "denim-tears-selvedge",
    category: "collaboration",
    brand: "Denim Tears",
    model: "Straight Cotton Wreath Denim Pant Selvedge",
    photo: "assets/Straight Cotton Wreath Denim Pant Selvedge main.png",
    line: "Cotton Wreath 셀비지 프로그램",
    retail: "약 460,000원",
    resale: "GOAT의 Levi's x Denim Tears Raw Indigo 새 상품 호가 약 499,000원; 현재 Denim Tears 셀비지 정가는 약 460,000원",
    fabricTier: "F3",
    laborTier: "L4",
    fabric: "14온스 일본 셀비지 데님, 100% 코튼입니다. 미국에서 재단, 봉제, 워싱되었습니다.",
    hardware: "커스텀 앤틱 니켈 생크 버튼과 커스텀 브라스 리벳을 사용합니다.",
    construction: "스트레이트 핏, 5포켓 구조이며 미국에서 워싱되었습니다.",
    collaboration: "Levi's x Denim Tears SS21 버전은 501과 Cotton Wreath 모티프를 사용했고, 이어지는 Denim Tears 셀비지 팬츠는 일본 셀비지 데님 위에 같은 모티프를 유지합니다.",
    heritage: "Tremaine Emory의 Cotton Wreath 그래픽이 적용된 데님입니다.",
    scarcity: "GOAT는 Levi's x Denim Tears Raw Indigo 새 상품을 약 499,000원으로 표시합니다. StockX는 SS21 Levi's x Denim Tears 정가 약 460,000원과 일부 컬러의 넓은 최근 12개월 거래 범위를 기록합니다.",
    sources: [
      ["Denim Tears 제품 페이지", "https://denimtears.com/products/straight-cotton-wreath-denim-pant-selvedge"],
      ["GOAT Levi's x Denim Tears Raw Indigo", "https://www.goat.com/apparel/levi-s-x-denim-tears-the-cotton-wreath-selvedge-jean-raw-indigo-dt501-raw"],
      ["StockX SS21 Denim Tears x Levi's", "https://stockx.com/denim-tears-x-levis-cotton-wreath-jean-white"]
    ]
  },
  {
    id: "visvim-social-sculpture",
    category: "artisan",
    brand: "visvim",
    model: "Social Sculpture 01 Slim Damaged",
    photo: "assets/Social Sculpture 01 Slim Damaged main.png",
    line: "Social Sculpture 데님",
    retail: "리테일러 기록 기준 약 1,599,000-1,997,000원",
    resale: "Grailed Damaged-17 판매 사례 약 2,496,000원",
    fabricTier: "F6",
    laborTier: "L4",
    fabric: "오리지널 14온스 셀비지 데님입니다. 로프 염색 인디고 yarn의 색 변화와 불균일한 질감이 보입니다.",
    hardware: "오리지널 버튼, 리벳, 슬라이더, 히든 지퍼 백 포켓을 사용하며 모델에 따라 천연 염색 가죽 또는 벅스킨 패치가 적용됩니다.",
    construction: "일본 생산입니다. 슬림 또는 레귤러 핏 변형이 있으며, 데미지 01 버전은 셀비지 아웃심과 버튼 플라이를 사용합니다.",
    collaboration: "외부 협업 없는 visvim Social Sculpture 라인 제품입니다.",
    heritage: "Hiroki Nakamura의 Social Sculpture 라인은 일본 공예 리서치, 염색, 빈티지 피니싱을 럭셔리 데님 언어로 전환합니다.",
    scarcity: "Grailed의 Social Sculpture 01 Slim Damaged-17 판매 사례는 약 2,496,000원이며, 리테일러 페이지는 데미지 01 모델을 약 1,599,000-1,997,000원 정가로 표시합니다.",
    sources: [
      ["WEAR / MR PORTER archived listing", "https://wear.jp/item/35557857/"],
      ["Grailed 판매 사례", "https://www.grailed.com/listings/19059222-visvim-visvim-social-sculpture-01-slim-damaged-17"],
      ["visvim official Social Sculpture 03", "https://shop.visvim.com/0122105005007"]
    ]
  },
  {
    id: "kapital-century-no5",
    category: "artisan",
    brand: "Kapital",
    model: "Century Denim Monkey Cisco No. 5",
    photo: "assets/kapital-century-denim-monkey-cisco-no5.png",
    line: "Century Denim",
    retail: "유럽 리테일러 기준 약 801,000원 또는 약 1,065,000원",
    resale: "새 상품 Grailed 매물 기준 약 983,000-1,092,000원",
    fabricTier: "F6",
    laborTier: "L6",
    fabric: "감물 염색 코튼 데님에 인디고 염색 사시코 실이 교차해 들어간 원단입니다.",
    hardware: "도넛 버튼, 히든 리벳, 신치백을 사용합니다.",
    construction: "5포켓 Monkey Cisco 핏, 일본 생산, 100% 코튼, 버튼 플라이 구조입니다.",
    collaboration: "외부 협업이 아니라 Kapital 내부의 사시코 텍스타일 시스템이 제품을 이끕니다.",
    heritage: "Century Denim은 일본 사시코 보강과 식물 염색 전통을 참조하며, 원단 자체가 제품의 시그니처가 됩니다.",
    scarcity: "전문 리테일러는 제한된 사이즈런을 자주 보이며, Grailed의 새 Monkey Cisco Century Denim 매물은 약 983,000-1,092,000원에 등장한 사례가 있습니다.",
    sources: [
      ["Pancho and Lefty 제품 페이지", "https://www.panchoandlefty.se/collections/kapital/products/kapital-century-denim-monkey-cisco-no-5"],
      ["Grailed 매물 사례", "https://www.grailed.com/listings/81852511-kapital-kapital-century-denim-5p-monkey-cisco-jeans"],
      ["Hansen Garments Century Denim note", "https://hansengarmentsstore.com/products/century-denim-monkey-cisco-sashiko-5p-jeans-n5sbrown"]
    ]
  },
  {
    id: "white-oak-reference",
    category: "heritage",
    brand: "Levi's",
    model: "511 Raw White Oak Cone Selvedge Denim",
    photo: "assets/511 Raw White Oak Cone Selvedge Denim 메인.png",
    line: "White Oak Cone Mills selvedge denim",
    retail: "리테일 기록 기준 약 231,000-262,000원",
    resale: "Levi's 511 White Oak 판매 사례 기준 약 112,000-161,000원",
    fabricTier: "F7",
    laborTier: "L2",
    fabric: "Cone Mills White Oak 출처가 표기된 셀비지 데님입니다.",
    hardware: "지퍼 플라이, 5포켓 하드웨어, Levi's 패치를 사용합니다.",
    construction: "511 슬림 핏 5포켓 구조와 White Oak Cone 셀비지 원단 표기가 포함됩니다.",
    collaboration: "협업 제품이 아닙니다.",
    heritage: "Cone Denim Greensboro White Oak 공장 생산 원단을 사용한 Levi's 511 라인입니다.",
    scarcity: "Greensboro White Oak 공장은 2017년에 폐쇄되었습니다.",
    sources: [
      ["Levi's 511 White Oak 사례", "https://www.garmentory.com/sale/levis/mens-denim-slim/950892-511-raw-white-oak-cone-selvedge-denim"],
      ["Grailed Levi's 511 판매 사례", "https://www.grailed.com/listings/10227379-levi-s-levi-s-511-selvedge-cone-mills-white-oak-denim"],
      ["Reddit White Oak 시장 논의", "https://www.reddit.com/r/rawdenim/comments/14lm2bz/how_much_cone_mills_white_oak_is_out_there/"]
    ]
  },
  {
    id: "levis-501-1933",
    category: "heritage",
    brand: "Levi's",
    model: "1933 501 Original",
    photo: "assets/1954 501 Z Original 메인.png",
    line: "Vintage Clothing / 1933 501",
    retail: "약 460,000원",
    resale: "eBay 매물: 중고 약 235,000-627,000원 / 신품 약 435,000원",
    fabricTier: "F6",
    laborTier: "L3",
    fabric: "벨트 루프, 클래식 cinch, suspender buttons를 반영한 1933 501 복각 데님입니다.",
    hardware: "클래식 cinch, 서스펜더 버튼, 리벳, 버튼 플라이를 사용합니다.",
    construction: "1933년 사양을 바탕으로 한 5포켓 스트레이트 실루엣입니다.",
    collaboration: "협업 제품이 아닙니다.",
    heritage: "1933 501은 초창기 501에 있던 벨트 루프와 멜빵 버튼을 함께 보여주는 복각 제품입니다.",
    scarcity: "공식 루트: Levi's 공식 페이지. 중고 시장: 현재 확인된 매물 없음.",
    sources: [
      ["Levi's 공식", "https://www.levi.com/US/en_US/levis-vintage-clothing/levis-vintage-clothing-for-men/mens-1933-501-jeans/p/335010049"]
    ]
  },
  {
    id: "levis-501-1944",
    category: "heritage",
    brand: "Levi's",
    model: "1944 501 Original",
    photo: "assets/1954 501 Z Original 메인.png",
    line: "Vintage Clothing / 1944 501",
    retail: "약 433,000원",
    resale: "eBay 매물: 중고 약 273,000-468,000원 / 신품 약 468,000원",
    fabricTier: "F6",
    laborTier: "L3",
    fabric: "전시기 1944 501 사양을 복각한 셀비지 데님입니다.",
    hardware: "리벳, 버튼 플라이, 셀비지 마감이 적용됩니다.",
    construction: "1944년 501의 전시기 패턴과 봉제 사양을 따릅니다.",
    collaboration: "협업 제품이 아닙니다.",
    heritage: "1944 501은 전시기 501의 원형을 복각한 Levi's Vintage Clothing 제품입니다.",
    scarcity: "공식 루트: Levi's 공식 페이지. 중고 시장: 현재 확인된 매물 없음.",
    sources: [
      ["Levi's 공식", "https://www.levi.com/US/en_US/levis-vintage-clothing/levis-vintage-clothing-for-men/1944-501-original-fit-selvedge-mens-jeans/p/445010072"]
    ]
  },
  {
    id: "levis-501-1947",
    category: "heritage",
    brand: "Levi's",
    model: "1947 501 Original",
    photo: "assets/1947 Type II 메인.png",
    line: "Vintage Clothing / 1947 501",
    retail: "약 434,000원",
    resale: "eBay 매물: 중고 약 175,000-445,000원 / 신품 약 505,000원",
    fabricTier: "F6",
    laborTier: "L3",
    fabric: "전후 복귀 시기의 1947 501 사양을 반영한 셀비지 데님입니다.",
    hardware: "리벳, 버튼 플라이, 레드 탭, 5포켓 하드웨어를 사용합니다.",
    construction: "1947년 501의 스트레이트 실루엣과 복각 봉제 사양을 따릅니다.",
    collaboration: "협업 제품이 아닙니다.",
    heritage: "1947 501은 전후 501의 재료와 구조가 복귀한 시기를 복각합니다.",
    scarcity: "공식 루트: Levi's 공식 페이지. 중고 시장: 현재 확인된 매물 없음.",
    sources: [
      ["Levi's 공식", "https://www.levi.com/US/en_US/clothing/men/jeans/1947-501-jeans/p/475010181"]
    ]
  },
  {
    id: "levis-501-1954-z",
    category: "heritage",
    brand: "Levi's",
    model: "1954 501 Z Original",
    photo: "assets/1954 501 Z Original 메인.png",
    line: "Vintage Clothing / 501 Z",
    retail: "약 460,000원",
    resale: "eBay 매물: 중고 약 148,000-299,000원 / 신품 약 466,000원",
    fabricTier: "F6",
    laborTier: "L3",
    fabric: "501 Z로 불린 1954년 전개를 복각한 셀비지 데님입니다.",
    hardware: "지퍼 플라이, 리벳, 5포켓 하드웨어를 사용합니다.",
    construction: "1954년 501 Z 사양을 바탕으로 한 스트레이트 핏입니다.",
    collaboration: "협업 제품이 아닙니다.",
    heritage: "1954 501 Z는 501에 지퍼 플라이가 적용된 전개를 복각합니다.",
    scarcity: "공식 루트: Levi's 공식 페이지. 중고 시장: 현재 확인된 매물 없음.",
    sources: [
      ["Levi's 공식", "https://www.levi.com/US/en_US/clothing/men/jeans/straight/1954-501-original-fit-selvedge-mens-jeans/p/501540107"]
    ]
  },
  {
    id: "levis-501-1955",
    category: "heritage",
    brand: "Levi's",
    model: "1955 501 Original",
    photo: "assets/1954 501 Z Original 메인.png",
    line: "Vintage Clothing / 1955 501",
    retail: "약 460,000원",
    resale: "eBay 매물: 중고 약 145,000-250,000원 / 신품 약 450,000-894,000원",
    fabricTier: "F6",
    laborTier: "L3",
    fabric: "1950년대 일본산 복각 셀비지 원단을 사용한 1955 501 사양입니다.",
    hardware: "리벳, 버튼 플라이, 5포켓 하드웨어를 사용합니다.",
    construction: "1955년형의 anti-fit 실루엣과 더 넉넉한 좌석, 다리폭을 반영합니다.",
    collaboration: "협업 제품이 아닙니다.",
    heritage: "1955 501은 1950년대 501의 박스형 실루엣을 복각합니다.",
    scarcity: "공식 루트: Levi's 공식 페이지. 중고 시장: 현재 확인된 매물 없음.",
    sources: [
      ["Levi's 공식", "https://www.levi.com/US/en_US/levis-vintage-clothing/levis-vintage-clothing-for-men/1955-501-original-fit-mens-jeans/p/501550075"]
    ]
  },
  {
    id: "levis-501-1966",
    category: "heritage",
    brand: "Levi's",
    model: "1966 501 Original",
    photo: "assets/0306-18 메인.png",
    line: "Vintage Clothing / 1966 501",
    retail: "약 460,000원",
    resale: "eBay 매물: 중고 약 190,000-373,000원 / 신품 약 480,000원",
    fabricTier: "F6",
    laborTier: "L3",
    fabric: "1966년부터 1971년까지 생산된 501 사양을 재현한 셀비지 데님입니다.",
    hardware: "리벳, 버튼 플라이, 5포켓 하드웨어를 사용합니다.",
    construction: "1966 501의 레귤러 스트레이트 실루엣과 복각 봉제 사양입니다.",
    collaboration: "협업 제품이 아닙니다.",
    heritage: "1966 501은 1966년부터 1971년까지의 501을 복각한 제품입니다.",
    scarcity: "공식 루트: Levi's 공식 페이지. 중고 시장: 현재 확인된 매물 없음.",
    sources: [
      ["Levi's 공식", "https://www.levi.com/US/en_US/levis-vintage-clothing/levis-vintage-clothing-for-men/1966-501-original-fit-selvedge-mens-jeans/p/665010135"]
    ]
  },
  {
    id: "levis-501-original-modern",
    category: "core",
    brand: "Levi's",
    model: "501 Original Fit",
    photo: "assets/Levis 501 Original Fit new.png?v=20260615-7",
    line: "Modern 501 Original",
    retail: "약 128,000-173,000원",
    resale: "eBay 매물: 중고 약 7,000-62,000원 / 신품 약 110,000원",
    fabricTier: "F1",
    laborTier: "L2",
    fabric: "100% cotton 또는 stretch denim으로 생산되는 현대 501 Original입니다.",
    hardware: "버튼 플라이와 5포켓 하드웨어를 사용합니다.",
    construction: "허리 착용, 허벅지 여유, 스트레이트 레그 실루엣입니다.",
    collaboration: "협업 제품이 아닙니다.",
    heritage: "501 Original은 Levi's의 대표 스트레이트 핏 라인입니다.",
    scarcity: "공식 루트: Levi's 공식 페이지. 중고 시장: 현재 확인된 매물 없음.",
    sources: [
      ["Levi's 공식", "https://www.levi.com/US/en_US/clothing/men/jeans/straight/501-original-fit-mens-jeans/p/005013139"]
    ]
  },
  {
    id: "levis-501-shrink-to-fit",
    category: "core",
    brand: "Levi's",
    model: "501 Original Shrink-to-Fit",
    photo: "assets/Levis 501 Original Shrink-to-Fit new.png?v=20260615-6",
    line: "Shrink-to-Fit",
    retail: "약 124,000원",
    resale: "eBay 매물: 중고 약 28,000-45,000원 / 신품 약 60,000원",
    fabricTier: "F1",
    laborTier: "L2",
    fabric: "raw denim으로 제작되는 Shrink-to-Fit 501입니다.",
    hardware: "버튼 플라이와 5포켓 하드웨어를 사용합니다.",
    construction: "몸에 맞게 줄어드는 raw denim 사양입니다.",
    collaboration: "협업 제품이 아닙니다.",
    heritage: "Shrink-to-Fit은 세탁 후 핏이 변하는 501의 대표 버전입니다.",
    scarcity: "공식 루트: Levi's 공식 페이지. 중고 시장: 현재 확인된 매물 없음.",
    sources: [
      ["Levi's 공식", "https://www.levi.com/US/en_US/clothing/men/jeans/straight/501-original-shrink-to-fit-mens-jeans/p/005012596"]
    ]
  },
  {
    id: "levis-505-regular",
    category: "core",
    brand: "Levi's",
    model: "505 Regular Fit",
    photo: "assets/1954 501 Z Original 메인.png",
    line: "Classic zip fly straight fit",
    retail: "약 91,000원",
    resale: "eBay 매물: 중고 약 12,000-30,000원",
    domesticResale: [75000, 79000, 103000, 129000],
    fabricTier: "F1",
    laborTier: "L2",
    fabric: "100% cotton 비스트레치 데님으로 생산되는 505 Regular입니다.",
    hardware: "지퍼 플라이와 버튼 클로저, 5포켓 하드웨어를 사용합니다.",
    construction: "허리 착용, 허벅지 여유, 스트레이트 레그 실루엣입니다.",
    collaboration: "협업 제품이 아닙니다.",
    heritage: "1967년부터 이어진 Levi's의 대표 지퍼 플라이 스트레이트 핏입니다.",
    scarcity: "공식 루트: Levi's 공식 페이지. 중고 시장: 현재 확인된 매물 없음.",
    sources: [
      ["Levi's 공식", "https://www.levi.com/US/en_US/clothing/men/jeans/straight/505TM-regular-fit-mens-jeans/p/005050236"]
    ]
  },
  {
    id: "levis-511-slim-modern",
    category: "core",
    brand: "Levi's",
    model: "511 Slim Fit",
    photo: "assets/511 Raw White Oak Cone Selvedge Denim 메인.png",
    line: "Modern slim fit",
    retail: "약 108,000-117,000원",
    resale: "eBay 매물: 중고 약 7,000-40,000원 / 신품 약 30,000-62,000원",
    fabricTier: "F2",
    laborTier: "L2",
    fabric: "midweight denim과 소량 스트레치 조합으로 생산되는 511 Slim입니다.",
    hardware: "지퍼 플라이와 5포켓 하드웨어를 사용합니다.",
    construction: "좌석과 허벅지에서 좁아지는 슬림 실루엣입니다.",
    collaboration: "협업 제품이 아닙니다.",
    heritage: "511 Slim은 Levi's의 현대적인 슬림 핏 기준입니다.",
    scarcity: "공식 루트: Levi's 공식 페이지. 중고 시장: 현재 확인된 매물 없음.",
    sources: [
      ["Levi's 공식", "https://www.levi.com/US/en_US/clothing/men/jeans/slim/511-slim-fit-mens-jeans/p/045116091"]
    ]
  },
  {
    id: "levis-517-bootcut",
    category: "core",
    brand: "Levi's",
    model: "517 Bootcut",
    photo: "assets/Levis 517 Bootcut new.png?v=20260615-8",
    line: "Bootcut",
    retail: "약 154,000원",
    resale: "eBay 매물: 중고 약 19,000-150,000원",
    domesticResale: [78000, 125000, 140000, 150000, 180000, 250000],
    fabricTier: "F1",
    laborTier: "L2",
    fabric: "비스트레치 데님으로 생산되는 517 Bootcut입니다.",
    hardware: "지퍼 플라이와 5포켓 하드웨어를 사용합니다.",
    construction: "허리 착용, 허벅지 슬림, 부츠컷 레그 실루엣입니다.",
    collaboration: "협업 제품이 아닙니다.",
    heritage: "1969년 부츠 위에 걸치도록 만든 Levi's 부츠컷 라인입니다.",
    scarcity: "공식 루트: Levi's 공식 페이지. 중고 시장: 현재 확인된 매물 없음.",
    sources: [
      ["Levi's 공식", "https://www.levi.com/US/en_US/clothing/men/jeans/bootcut/517-bootcut-mens-jeans/p/005170278"]
    ]
  },
  {
    id: "levis-550-relaxed",
    category: "core",
    brand: "Levi's",
    model: "550 Relaxed Fit",
    photo: "assets/1954 501 Z Original 메인.png",
    line: "Relaxed fit",
    retail: "약 108,000-117,000원",
    resale: "eBay 매물: 중고 약 16,000-29,000원 / 신품 약 60,000원",
    domesticResale: [90000],
    fabricTier: "F1",
    laborTier: "L2",
    fabric: "비스트레치 데님으로 생산되는 550 Relaxed입니다.",
    hardware: "지퍼 플라이와 5포켓 하드웨어를 사용합니다.",
    construction: "허리 착용, 허벅지 여유, 약한 테이퍼가 있는 릴랙스드 실루엣입니다.",
    collaboration: "협업 제품이 아닙니다.",
    heritage: "1985년에 도입된 Levi's 릴랙스 핏 계열입니다.",
    scarcity: "공식 루트: Levi's 공식 페이지. 중고 시장: 현재 확인된 매물 없음.",
    sources: [
      ["Levi's 공식", "https://www.levi.com/US/en_US/clothing/unisex/jeans/550-relaxed-fit-mens-jeans/p/005500112"]
    ]
  },
  {
    id: "levis-569-loose",
    category: "core",
    brand: "Levi's",
    model: "569 Loose Straight Fit",
    photo: "assets/The Flat Head 3002 메인.png",
    line: "Loose straight fit",
    retail: "약 108,000-117,000원",
    resale: "eBay 매물: 중고 약 18,000-60,000원",
    domesticResale: [109000],
    fabricTier: "F1",
    laborTier: "L2",
    fabric: "비스트레치 데님으로 생산되는 569 Loose Straight입니다.",
    hardware: "지퍼 플라이와 5포켓 하드웨어를 사용합니다.",
    construction: "허리 착용, 넓은 허벅지, 스트레이트 레그 실루엣입니다.",
    collaboration: "협업 제품이 아닙니다.",
    heritage: "569는 루즈 스트레이트 핏으로 분류되는 Levi's의 현대 라인입니다.",
    scarcity: "공식 루트: Levi's 공식 페이지. 중고 시장: 현재 확인된 매물 없음.",
    sources: [
      ["Levi's 공식", "https://www.levi.com/US/en_US/clothing/men/jeans/loose/569-loose-straight-fit-mens-jeans/p/005690390"]
    ]
  },
  {
    id: "iron-heart-ih-666s-21",
    category: "core",
    brand: "Iron Heart",
    model: "IH-666S-21",
    photo: "assets/IH-666S-21 메인.png",
    line: "21oz Japanese selvedge slim straight",
    retail: "약 560,000-610,000원",
    resale: "중고 거래 기준 약 390,000-620,000원",
    fabricTier: "F4",
    laborTier: "L2",
    fabric: "Iron Heart의 21온스 인디고 일본 셀비지 데님입니다. 무게와 밀도, 긴 길들이기 기간이 가격 설명의 구성입니다.",
    hardware: "Iron Heart 각인 버튼과 리벳, 가죽 패치, 버튼 플라이를 사용합니다.",
    construction: "일본 생산, 슬림 스트레이트 핏, 체인스티치 밑단과 헤리티지 5포켓 구조입니다.",
    collaboration: "외부 협업이 아니라 브랜드의 헤비웨이트 원단 정체성이 중심입니다.",
    heritage: "Iron Heart는 바이커 문화와 초고중량 일본 셀비지 이미지를 함께 사용합니다.",
    scarcity: "21온스 원단, 일본 생산, 미수선 여부, 실제 페이드 상태가 중고 가격의 기준입니다.",
    sources: [
      ["Iron Heart IH-666S-21", "https://www.ironheart.co.uk/bottoms/ih-666s-21.html"]
    ]
  },
  {
    id: "iron-heart-ih-777s-21",
    category: "core",
    brand: "Iron Heart",
    model: "IH-777S-21",
    photo: "assets/IH-777S-21 메인.png",
    line: "21oz Japanese selvedge slim tapered",
    retail: "약 560,000-610,000원",
    resale: "중고 약 360,000-600,000원; 미수선·인기 사이즈는 정가 근처 유지",
    fabricTier: "F4",
    laborTier: "L2",
    fabric: "21온스 일본 셀비지 데님으로, IH-666S와 같은 헤비웨이트 원단 계열입니다.",
    hardware: "각인 버튼, 리벳, 가죽 패치, 버튼 플라이 구성입니다.",
    construction: "일본 생산, 슬림 테이퍼드 핏, 체인스티치 밑단을 갖춘 5포켓 구조입니다.",
    collaboration: "외부 협업보다 핏 차이와 원단 무게가 제품 정보입니다.",
    heritage: "Iron Heart의 21온스 데님은 내구성과 긴 페이드 기간을 중시하는 로데님 소비자에게 대표 제품으로 판매됩니다.",
    scarcity: "정규 생산 제품이지만 입고 주기와 사이즈 품절이 리셀 가격에 반영됩니다.",
    sources: [
      ["Iron Heart IH-777S-21", "https://www.ironheart.co.uk/bottoms/ih-777s-21.html"]
    ]
  },
  {
    id: "samurai-s710xx",
    category: "core",
    brand: "Samurai Jeans",
    model: "S710XX 19oz",
    photo: "assets/S710XX 19oz 메인.png",
    line: "19oz Japanese selvedge regular straight",
    retail: "약 430,000-520,000원",
    resale: "중고 약 250,000-480,000원; 한정 패치·아크 없는 해외판은 상태 의존",
    fabricTier: "F4",
    laborTier: "L2",
    fabric: "19온스 일본 셀비지 데님입니다. Samurai 특유의 거친 질감과 무거운 원단감이 구성입니다.",
    hardware: "브랜드 전용 버튼, 리벳, 가죽 패치가 사용됩니다.",
    construction: "일본 생산, 레귤러 스트레이트 핏, 버튼 플라이와 체인스티치 밑단 구조입니다.",
    collaboration: "협업이 아니라 Samurai의 무사 서사와 헤비웨이트 원단 정체성이 구성 요소입니다.",
    heritage: "오사카 5 계열 이후 일본 복각 데님 문화에서 강한 팬층을 가진 브랜드입니다.",
    scarcity: "19온스 일본 셀비지, 일본 생산, 브랜드 전용 하드웨어가 구성 요소입니다.",
    sources: [
      ["Samurai Jeans official", "https://samurai-j.com/"]
    ]
  },
  {
    id: "pure-blue-japan-xx019",
    category: "core",
    brand: "Pure Blue Japan",
    model: "XX-019",
    photo: "assets/XX-019 메인.png",
    line: "14oz slub selvedge relaxed tapered",
    retail: "약 430,000-500,000원",
    resale: "중고 약 240,000-430,000원; 새 상품 인기 사이즈는 정가 근처",
    fabricTier: "F5",
    laborTier: "L2",
    fabric: "14온스 일본 셀비지 데님이며 Pure Blue Japan 특유의 슬럽 질감이 표면에 강하게 나타납니다.",
    hardware: "PBJ 리프 자수, 브랜드 패치, 버튼 플라이, 금속 리벳 구성이 특징입니다.",
    construction: "일본 생산, 릴랙스 테이퍼드 핏, 체인스티치 마감입니다.",
    collaboration: "외부 협업 없이 원단 질감 자체가 제품 정체성입니다.",
    heritage: "PBJ는 불규칙한 표면감과 강한 페이드 대비를 원하는 로데님 소비자에게 알려져 있습니다.",
    scarcity: "인기 핏과 사이즈는 리테일러별 품절이 빠르며, 미착용품은 중고보다 가격이 유지됩니다.",
    sources: [
      ["Pure Blue Japan official", "https://purebluejapan.jp/"]
    ]
  },
  {
    id: "pure-blue-japan-np013",
    category: "core",
    brand: "Pure Blue Japan",
    model: "NP-013",
    photo: "assets/NP-013 메인.png",
    line: "Nep denim slim tapered",
    retail: "약 430,000-520,000원",
    resale: "중고 약 260,000-480,000원; 네프 원단 선호층에 따라 가격 유지",
    fabricTier: "F5",
    laborTier: "L2",
    fabric: "네프가 많이 보이는 일본 셀비지 데님입니다. 표면에 하얀 점과 불균일한 조직감이 나타납니다.",
    hardware: "브랜드 패치, 버튼 플라이, 금속 리벳, PBJ 자수 디테일을 사용합니다.",
    construction: "일본 생산, 슬림 테이퍼드 계열 5포켓 구조입니다.",
    collaboration: "협업보다 특수 원단의 시각성이 제품 정보입니다.",
    heritage: "PBJ의 특수 질감 원단은 착용 전부터 명확한 표면감을 보여줍니다.",
    scarcity: "네프가 보이는 특수 표면감, 일본 생산, PBJ 자수 디테일이 구성 요소입니다.",
    sources: [
      ["Pure Blue Japan official", "https://purebluejapan.jp/"]
    ]
  },
  {
    id: "momotaro-0306-18",
    category: "core",
    brand: "Momotaro Jeans",
    model: "0306-18",
    photo: "assets/0306-18 메인.png",
    line: "18oz Zimbabwe cotton selvedge tight tapered",
    retail: "약 390,000-480,000원",
    resale: "중고 약 220,000-410,000원; 새 상품은 사이즈 품절 시 정가 근처",
    fabricTier: "F4",
    laborTier: "L2",
    fabric: "18온스 일본 셀비지 데님이며, Zimbabwe cotton 사용을 강조하는 Momotaro 헤비웨이트 라인입니다.",
    hardware: "브랜드 전용 버튼과 리벳, 가죽 패치, 핑크 셀비지 ID가 특징입니다.",
    construction: "일본 생산, 타이트 테이퍼드 핏, 버튼 플라이와 체인스티치 마감입니다.",
    collaboration: "협업이 아니라 Momotaro의 원단 출처와 배틀 스트라이프 헤리티지가 표기 요소입니다.",
    heritage: "Okayama 데님 산지와 Momotaro의 복숭아 소년 서사가 브랜드 헤리티지를 만듭니다.",
    scarcity: "18온스 Zimbabwe cotton 셀비지, 일본 생산, 핑크 셀비지 ID가 구성 요소입니다.",
    sources: [
      ["Momotaro Jeans official", "https://momotaro-jeans.com/"]
    ]
  },
  {
    id: "oni-622zr",
    category: "core",
    brand: "ONI Denim",
    model: "622ZR Secret Denim",
    photo: "assets/622ZR Secret Denim 메인.png",
    line: "20oz Secret Denim relaxed tapered",
    retail: "약 430,000-520,000원",
    resale: "중고 약 280,000-520,000원; 품절 사이즈는 정가 이상 매물로 등록됨",
    fabricTier: "F5",
    laborTier: "L2",
    fabric: "20온스 Secret Denim으로 알려진 불규칙한 슬럽 텍스처의 일본 셀비지입니다.",
    hardware: "도넛 버튼, 리벳, 가죽 패치, 셀비지 ID를 갖춥니다.",
    construction: "일본 생산, 릴랙스 테이퍼드 핏, 버튼 플라이 구조입니다.",
    collaboration: "협업보다 ONI의 원단 비밀주의와 독특한 조직감이 제품 정보입니다.",
    heritage: "ONI는 20온스 Secret Denim과 강한 슬럽 조직로 슬럽 조직을 사용합니다.",
    scarcity: "입고 주기가 짧고 리테일러별 수량이 적어 특정 사이즈는 빠르게 품절됩니다.",
    sources: [
      ["ONI Denim official", "https://www.onidenim.com/"]
    ]
  },
  {
    id: "studio-dartisan-sd101",
    category: "core",
    brand: "Studio D'Artisan",
    model: "SD-101",
    photo: "assets/Studio DArtisan SD-101 new.png?v=20260615-11",
    line: "15oz selvedge regular straight",
    retail: "약 330,000-430,000원",
    resale: "중고 약 180,000-340,000원; 한정 패치 모델은 더 높게 형성",
    fabricTier: "F3",
    laborTier: "L2",
    fabric: "15온스 일본 셀비지 데님입니다. 복각 지향의 질감과 페이드를 강조합니다.",
    hardware: "브랜드 각인 버튼, 리벳, 가죽 패치, 버튼 플라이 구조입니다.",
    construction: "일본 생산, 레귤러 스트레이트 5포켓 구조와 체인스티치 마감입니다.",
    collaboration: "정규 제품은 협업보다 Studio D'Artisan의 오사카 데님 헤리티지가 구성입니다.",
    heritage: "오사카 5로 언급되는 일본 복각 데님 브랜드 중 하나로, 초기 일본 로데님 문화와 연결됩니다.",
    scarcity: "15온스 일본 셀비지, 일본 생산, 브랜드 각인 하드웨어가 구성 요소입니다.",
    sources: [
      ["Studio D'Artisan official", "https://www.dartisan.co.jp/"]
    ]
  },
  {
    id: "warehouse-1001xx",
    category: "core",
    brand: "Warehouse & Co.",
    model: "Lot 1001XX",
    photo: "assets/Warehouse & Co. Lot 1001XX.png",
    line: "Vintage reproduction selvedge straight",
    retail: "약 390,000-500,000원",
    resale: "중고 거래 기준 약 230,000-450,000원",
    fabricTier: "F3",
    laborTier: "L2",
    fabric: "빈티지 Levi's 질감을 재현한 일본 셀비지 데님입니다.",
    hardware: "철제 버튼, 리벳, 가죽 패치, 버튼 플라이 같은 복각 디테일을 사용합니다.",
    construction: "일본 생산, 스트레이트 핏, 빈티지 봉제 사양을 따릅니다.",
    collaboration: "협업보다 복각 정확도와 원단 재현력이 구성 요소입니다.",
    heritage: "Warehouse는 일본 빈티지 복각 데님에서 고증과 페이드 재현으로 알려져 있습니다.",
    scarcity: "빈티지 복각 셀비지, 일본 생산, 철제 버튼과 가죽 패치가 구성 요소입니다.",
    sources: [
      ["Warehouse & Co. official", "https://warehouse.co.jp/"]
    ]
  },
  {
    id: "fullcount-1101",
    category: "core",
    brand: "Full Count",
    model: "1101",
    photo: "assets/1101 메인.png",
    line: "13.7oz Zimbabwe cotton selvedge straight",
    retail: "약 350,000-450,000원",
    resale: "중고 약 190,000-380,000원; 미수선·좋은 페이드 상태는 가격 유지",
    fabricTier: "F3",
    laborTier: "L2",
    fabric: "Zimbabwe cotton을 강조하는 13.7온스 일본 셀비지 데님입니다.",
    hardware: "브랜드 버튼, 리벳, 가죽 패치, 버튼 플라이를 사용합니다.",
    construction: "일본 생산, 레귤러 스트레이트 핏, 체인스티치 마감입니다.",
    collaboration: "협업보다 착용감과 빈티지 페이드 재현이 중심입니다.",
    heritage: "Full Count는 오사카 복각 데님 문화의 주요 브랜드로, 부드러운 착용감과 페이드로 알려져 있습니다.",
    scarcity: "13.7온스 Zimbabwe cotton 셀비지와 일본 생산 복각 구조가 구성 요소입니다.",
    sources: [
      ["Full Count official", "https://full-count.co.jp/"]
    ]
  },
  {
    id: "sugar-cane-1947",
    category: "core",
    brand: "Sugar Cane",
    model: "1947 Type II",
    photo: "assets/1947 Type II 메인.png",
    line: "14.25oz vintage reproduction selvedge",
    retail: "약 280,000-380,000원",
    resale: "중고 약 150,000-300,000원; 미국 내 인기 사이즈는 안정적",
    fabricTier: "F3",
    laborTier: "L2",
    fabric: "1940년대 Levi's 계열을 참조한 14온스대 일본 셀비지 데님입니다.",
    hardware: "도넛 버튼, 리벳, 가죽 패치, 버튼 플라이 같은 복각 디테일을 사용합니다.",
    construction: "일본 생산, 스트레이트 핏, 체인스티치 밑단 구조입니다.",
    collaboration: "협업보다 Toyo Enterprise 산하 Sugar Cane의 복각 완성도가 중심입니다.",
    heritage: "Sugar Cane은 아메리칸 워크웨어 복각을 일본식 생산으로 재해석하는 브랜드입니다.",
    scarcity: "14.25온스 복각 셀비지와 Toyo Enterprise 생산 배경이 구성 요소입니다.",
    sources: [
      ["Sugar Cane / Toyo Enterprise", "https://www.toyo-enterprise.co.jp/brand/sugar-cane/"]
    ]
  },
  {
    id: "the-flat-head-3002",
    category: "core",
    brand: "The Flat Head",
    model: "3002",
    photo: "assets/The Flat Head 3002 메인.png",
    line: "14.5oz selvedge regular straight",
    retail: "약 390,000-500,000원",
    resale: "중고 거래 기준 약 220,000-420,000원",
    fabricTier: "F3",
    laborTier: "L2",
    fabric: "14온스대 일본 셀비지 데님이며 강한 세로결과 페이드 대비가 특징입니다.",
    hardware: "브랜드 버튼, 리벳, 가죽 패치, 버튼 플라이 구성입니다.",
    construction: "일본 생산, 레귤러 스트레이트 핏, 체인스티치 마감입니다.",
    collaboration: "협업보다는 The Flat Head의 페이드 문화와 복각 봉제가 구성 요소입니다.",
    heritage: "일본 로데님 커뮤니티에서 선명한 페이드와 견고한 봉제로 오래 평가받은 브랜드입니다.",
    scarcity: "일부 모델은 생산 변경과 유통 제한으로 해외 중고 시장에서 수량이 적습니다.",
    sources: [
      ["The Flat Head official", "https://www.flat-head.com/"]
    ]
  },
  {
    id: "tcb-50s",
    category: "core",
    brand: "TCB Jeans",
    model: "50's Jeans",
    photo: "assets/1947 Type II 메인.png",
    line: "1950s reproduction selvedge straight",
    retail: "약 250,000-330,000원",
    resale: "중고 거래 기준 약 140,000-280,000원",
    fabricTier: "F3",
    laborTier: "L2",
    fabric: "1950년대 데님을 참조한 일본 셀비지 데님입니다.",
    hardware: "복각 버튼, 리벳, 가죽 패치, 버튼 플라이를 사용합니다.",
    construction: "일본 생산, 스트레이트 핏, 빈티지 봉제 사양입니다.",
    collaboration: "협업이 아니라 합리적인 가격의 일본 복각 완성도가 구성입니다.",
    heritage: "TCB는 빈티지 워크웨어를 연구해 합리적 가격대의 일본 복각 데님으로 알려져 있습니다.",
    scarcity: "정규 제품이지만 입고 주기와 사이즈 품절에 따라 해외 구매 난도가 생깁니다.",
    sources: [
      ["TCB Jeans official", "https://tcbjeans.myshopify.com/"]
    ]
  },
  {
    id: "orslow-105",
    category: "core",
    brand: "orSlow",
    model: "105 Standard Denim",
    photo: "assets/1101 메인.png",
    line: "Japanese standard fit denim",
    retail: "약 300,000-420,000원",
    resale: "중고 거래 기준 약 160,000-320,000원",
    fabricTier: "F3",
    laborTier: "L1",
    fabric: "orSlow 105 Standard는 일본 생산 5포켓 스탠다드 핏 데님입니다.",
    hardware: "orSlow 버튼과 리벳, 가죽 패치, 5포켓 하드웨어를 사용합니다.",
    construction: "일본 생산, 여유 있는 스트레이트 핏, 일상복 중심의 5포켓 구조입니다.",
    collaboration: "협업보다 orSlow의 일본 생산 5포켓 구조와 스탠다드 핏이 구성 요소입니다.",
    heritage: "빈티지 워크웨어를 현대 캐주얼웨어로 낮은 톤에서 재해석하는 브랜드입니다.",
    scarcity: "일본 생산, 스탠다드 핏, orSlow 버튼과 리벳이 구성 요소입니다.",
    sources: [
      ["orSlow official", "https://orslow.jp/"]
    ]
  },
  {
    id: "resolute-710",
    category: "core",
    brand: "RESOLUTE",
    model: "710",
    photo: "assets/SD-101 메인.png",
    line: "Japanese slim straight denim",
    retail: "약 320,000-420,000원",
    resale: "중고 거래 기준 약 170,000-330,000원",
    fabricTier: "F3",
    laborTier: "L1",
    fabric: "일본산 데님을 사용하며, 선명한 페이드와 클래식한 표면감을 목표로 합니다.",
    hardware: "브랜드 버튼, 리벳, 가죽 패치, 5포켓 하드웨어 구성입니다.",
    construction: "일본 생산, 슬림 스트레이트 핏, 다양한 웨이스트와 기장 조합이 특징입니다.",
    collaboration: "협업보다 디자이너 Hayashi Yoshiyuki의 핏 철학이 구성입니다.",
    heritage: "Denime 출신 디자이너의 복각 기반 핏 설계가 브랜드 신뢰를 만듭니다.",
    scarcity: "사이즈와 기장 조합이 많아 맞는 조합은 중고 시장에서 거래됩니다.",
    sources: [
      ["RESOLUTE official", "https://resolute.jp/"]
    ]
  },
  {
    id: "naked-famous-elephant",
    category: "core",
    brand: "Naked & Famous Denim",
    model: "Elephant Denim series",
    photo: "assets/S710XX 19oz 메인.png",
    line: "Heavyweight Japanese selvedge seasonal series",
    retail: "약 280,000-430,000원",
    resale: "중고 약 150,000-360,000원; 단종 Elephant 모델은 새 상품 매물가 상승",
    fabricTier: "F4",
    laborTier: "L2",
    fabric: "Elephant 시리즈는 19온스 이상 헤비웨이트 일본 셀비지 원단을 사용하는 라인입니다.",
    hardware: "브랜드 패치, 버튼, 리벳, 셀비지 ID를 사용합니다.",
    construction: "Weird Guy 등 브랜드 고정 핏으로 출시되는 5포켓 구조입니다.",
    collaboration: "협업이 아니라 19온스 이상 헤비웨이트 일본 셀비지 원단이 구성입니다.",
    heritage: "Naked & Famous는 특수 원단, 고중량 원단, 실험적 위사를 대중적인 가격대에 소개하는 브랜드입니다.",
    scarcity: "19온스 이상 헤비웨이트 일본 셀비지와 단종 모델명이 구성 요소입니다.",
    sources: [
      ["Naked & Famous Denim", "https://tateandyoko.com/collections/naked-famous-denim"]
    ]
  },
  {
    id: "evisu-2000-no2",
    category: "core",
    brand: "Evisu",
    model: "2000 No.2",
    photo: "assets/Evisu 2000 No.2 new.png?v=20260615-9",
    line: "Japanese selvedge with painted gull",
    retail: "약 450,000-700,000원",
    resale: "중고 약 180,000-650,000원; 핸드페인트와 일본 생산 표기 여부가 가격 좌우",
    fabricTier: "F3",
    laborTier: "L6",
    fabric: "일본 셀비지 데님을 사용한 Evisu 대표 라인입니다.",
    hardware: "Evisu 버튼, 리벳, 가죽 패치, 셀비지 디테일을 사용합니다.",
    construction: "일본 생산 No.2 라인은 5포켓 구조, 버튼 플라이, 백포켓 갈매기 페인팅이 중심입니다.",
    collaboration: "정규 제품은 협업보다 백포켓 갈매기 페인팅이 핵심 시각 요소입니다.",
    heritage: "Evisu는 1990년대 일본 데님 붐과 핸드페인팅 백포켓 아이콘으로 전 세계 매장에서 판매됩니다.",
    scarcity: "일본 생산, 초기 태그, 핸드페인트 백포켓이 구성 요소입니다.",
    sources: [
      ["Evisu official", "https://www.evisu.com/"]
    ]
  },
  {
    id: "lvc-1947-501",
    category: "heritage",
    brand: "Levi's",
    model: "1947 501",
    photo: "assets/0306-18 메인.png",
    line: "Vintage Clothing / 1947 501",
    retail: "약 330,000-470,000원",
    resale: "중고 거래 기준 약 160,000-420,000원",
    fabricTier: "F3",
    laborTier: "L2",
    fabric: "1947년 Levi's 501을 복각한 셀비지 데님입니다.",
    hardware: "501 버튼 플라이, 리벳, 레드 탭, 가죽 또는 페이퍼 패치 등 복각 디테일을 사용합니다.",
    construction: "스트레이트 핏, 5포켓 구조, 체인스티치 마감이 중심입니다.",
    collaboration: "협업보다 Levi's 아카이브 복각이라는 헤리티지가 구성 요소입니다.",
    heritage: "1947 501은 1947년 Levi's 501의 균형 잡힌 실루엣을 대표하는 복각 모델입니다.",
    scarcity: "1947 501 복각, 셀비지 원단, 501 버튼 플라이 구조가 구성 요소입니다.",
    sources: [
      ["Levi's Vintage Clothing", "https://www.levi.com/"]
    ]
  },
  {
    id: "rrl-slim-selvedge",
    category: "heritage",
    brand: "RRL",
    model: "Slim Fit Selvedge Jean",
    photo: "assets/The Flat Head 3002 메인.png",
    line: "Ralph Lauren vintage western denim",
    retail: "약 450,000-650,000원",
    resale: "중고 약 180,000-500,000원; 한정 워싱·미국 생산 라벨은 가격 유지",
    fabricTier: "F3",
    laborTier: "L2",
    fabric: "RRL Slim Fit Selvedge Jean은 셀비지 데님, 슬림 핏, 5포켓 구조를 사용합니다.",
    hardware: "RRL 버튼, 리벳, 가죽 패치, 5포켓 하드웨어가 적용됩니다.",
    construction: "슬림 핏 5포켓 구조, RRL 버튼, 리벳, 가죽 패치가 적용됩니다.",
    collaboration: "협업보다 Ralph Lauren의 빈티지 웨스턴 아카이브가 표기 요소입니다.",
    heritage: "RRL은 아메리칸 웨스턴, 워크웨어, 밀리터리 빈티지를 고급 캐주얼웨어로 포장합니다.",
    scarcity: "RRL 셀비지 원단, 웨스턴 아카이브 브랜딩, 가죽 패치가 구성 요소입니다.",
    sources: [
      ["RRL official", "https://www.ralphlauren.com/brands-double-rl-men"]
    ]
  },
  {
    id: "3sixteen-ct100x",
    category: "core",
    brand: "3sixteen",
    model: "CT-100x",
    photo: "assets/3sixteen CT-100x-new.png?v=20260615-2",
    line: "14.5oz indigo selvedge classic tapered",
    retail: "약 350,000-430,000원",
    resale: "중고 약 160,000-330,000원; 한정 원단 협업은 정가 이상 매물로 등록됨",
    fabricTier: "F3",
    laborTier: "L2",
    fabric: "일본 Kuroki Mills 원단으로 알려진 14.5온스 인디고 셀비지 데님 계열입니다.",
    hardware: "커스텀 버튼, 리벳, 가죽 패치, 셀비지 디테일을 사용합니다.",
    construction: "미국 브랜드의 클래식 테이퍼드 핏, 5포켓 구조, 체인스티치 밑단입니다.",
    collaboration: "정규 모델은 협업보다 Kuroki 원단과 미국 로데님 브랜드 정체성이 구성입니다.",
    heritage: "3sixteen은 현대 미국 로데님 시장에서 고정 핏과 안정적인 원단 공급으로 판매됩니다.",
    scarcity: "정규 모델은 큰 프리미엄보다 가격 방어 성격이 강하고, 한정 원단 모델이 리셀 제품 정보입니다.",
    sources: [
      ["3sixteen CT-100x", "https://www.3sixteen.com/collections/denim/products/ct-100x-classic-tapered-indigo-selvedge"]
    ]
  },
  {
    id: "rogue-territory-stanton",
    category: "core",
    brand: "Rogue Territory",
    model: "Stanton",
    photo: "assets/Rogue Stanton front.jpg",
    line: "Japanese selvedge straight taper",
    retail: "약 380,000-480,000원",
    resale: "중고 약 170,000-360,000원; 한정 원단·협업은 별도 매물",
    fabricTier: "F3",
    laborTier: "L2",
    fabric: "일본 셀비지 데님을 사용하는 미국 로데님 브랜드의 대표 핏입니다.",
    hardware: "브랜드 버튼, 리벳, 가죽 패치, 펜 포켓 스티치 같은 RGT 디테일이 있습니다.",
    construction: "미국 생산 중심의 5포켓 구조와 체인스티치 마감입니다.",
    collaboration: "협업보다 Stanton 핏과 Rogue Territory 브랜드 디테일이 구성 요소입니다.",
    heritage: "Rogue Territory는 현대 미국 로데님과 워크웨어 커뮤니티에서 강한 팬층을 갖습니다.",
    scarcity: "Stanton 핏, 일본 셀비지, 펜 포켓 스티치가 구성 요소입니다.",
    sources: [
      ["Rogue Territory official", "https://www.rogueterritory.com/"]
    ]
  },
  {
    id: "tellason-ankara",
    category: "core",
    brand: "Tellason",
    model: "Ankara",
    photo: "assets/Social Sculpture 01 Slim Damaged main.png",
    line: "Slim tapered selvedge denim",
    retail: "약 320,000-420,000원",
    resale: "중고 거래 기준 약 120,000-280,000원",
    fabricTier: "F3",
    laborTier: "L2",
    fabric: "Tellason의 셀비지 데님 라인입니다. 과거 Cone Mills White Oak 원단 사용 모델은 F7로 분류됩니다.",
    hardware: "브랜드 버튼, 리벳, 가죽 패치, 5포켓 하드웨어를 사용합니다.",
    construction: "미국 생산 중심, 슬림 테이퍼드 핏, 체인스티치 마감입니다.",
    collaboration: "협업보다 미국 생산과 원단 출처가 구성 요소입니다.",
    heritage: "Tellason은 샌프란시스코 기반의 미국 로데님 브랜드로 Cone White Oak 시대와 연결됩니다.",
    scarcity: "White Oak 원단 제품은 공장 폐쇄 이후 별도 아카이브 항목으로 분류됩니다.",
    sources: [
      ["Tellason official", "https://www.tellason.com/"]
    ]
  },
  {
    id: "freenote-portola",
    category: "core",
    brand: "Freenote Cloth",
    model: "Portola",
    photo: "assets/Freenote Portola front.jpg",
    line: "Japanese selvedge modern taper",
    retail: "약 390,000-520,000원",
    resale: "중고 거래 기준 약 180,000-380,000원",
    fabricTier: "F3",
    laborTier: "L2",
    fabric: "Freenote Portola는 일본 셀비지 원단과 미국 생산 5포켓 구조를 사용합니다.",
    hardware: "커스텀 버튼, 리벳, 가죽 패치, 포켓백 프린트 등 브랜드 디테일을 사용합니다.",
    construction: "미국 생산, 테이퍼드 핏, 체인스티치 밑단과 견고한 봉제를 갖춥니다.",
    collaboration: "협업보다 미국 생산과 원단 배치가 구성 요소입니다.",
    heritage: "Freenote Cloth는 미국 웨스턴/워크웨어 기반의 현대 로데님 브랜드입니다.",
    scarcity: "일본 셀비지, 미국 생산, 커스텀 하드웨어가 구성 요소입니다.",
    sources: [
      ["Freenote Cloth official", "https://freenotecloth.com/"]
    ]
  },
  {
    id: "stevenson-carmel",
    category: "core",
    brand: "Stevenson Overall Co.",
    model: "Carmel 220",
    photo: "assets/1101 메인.png",
    line: "1920s inspired selvedge denim",
    retail: "약 420,000-560,000원",
    resale: "중고 약 220,000-450,000원; 단종 모델은 호가 상승",
    fabricTier: "F3",
    laborTier: "L3",
    fabric: "빈티지 질감을 재현한 일본 셀비지 데님입니다.",
    hardware: "월계수 버튼, 리벳, 가죽 패치, 빈티지풍 하드웨어를 사용합니다.",
    construction: "곡선형 포켓 스티치와 싱글니들풍 디테일 등 초기 데님에서 영감을 받은 구조입니다.",
    collaboration: "협업보다 1920년대풍 패턴과 봉제 디테일이 구성 요소입니다.",
    heritage: "Stevenson Overall은 초기 미국 데님과 워크웨어 디테일을 현대 일본 생산으로 재구성합니다.",
    scarcity: "모델별 생산량이 많지 않아 단종 핏은 해외 중고 시장에서 찾기 어렵습니다.",
    sources: [
      ["Stevenson Overall official", "https://stevenson-overall.com/"]
    ]
  },
  {
    id: "freewheelers-601xx",
    category: "heritage",
    brand: "Freewheelers",
    model: "601XX",
    photo: "assets/The Flat Head 3002 메인.png",
    line: "Vintage reproduction selvedge denim",
    retail: "약 520,000-700,000원",
    resale: "중고 거래 기준 약 300,000-650,000원",
    fabricTier: "F3",
    laborTier: "L3",
    fabric: "빈티지 미국 데님을 복각한 일본 셀비지 데님입니다.",
    hardware: "복각 버튼, 리벳, 가죽 패치, 버튼 플라이 등 고증 지향 하드웨어를 사용합니다.",
    construction: "일본 생산, 빈티지 패턴과 봉제 디테일을 재현한 5포켓 구조입니다.",
    collaboration: "협업보다 빈티지 복각 패턴, 일본 생산, 복각 하드웨어가 구성 요소입니다.",
    heritage: "Freewheelers는 빈티지 아메리칸 의류 고증을 고가 일본 생산으로 구현하는 브랜드입니다.",
    scarcity: "빈티지 복각 셀비지, 일본 생산, 고증 지향 하드웨어가 구성 요소입니다.",
    sources: [
      ["Freewheelers official", "https://www.freewheelers.co.jp/"]
    ]
  },
  {
    id: "tanuki-ht",
    category: "core",
    brand: "Tanuki",
    model: "HT High Tapered",
    photo: "assets/XX-019 메인.png",
    line: "Japanese selvedge high tapered",
    retail: "약 320,000-450,000원",
    resale: "중고 약 150,000-330,000원; 특수 원단 라인은 더 높게 형성",
    fabricTier: "F3",
    laborTier: "L2",
    fabric: "Tanuki HT는 일본 셀비지 데님과 하이 테이퍼드 5포켓 구조를 사용합니다.",
    hardware: "Tanuki 패치, 버튼, 리벳, 셀비지 디테일을 사용합니다.",
    construction: "하이 테이퍼드 핏, 5포켓 구조, 버튼 플라이와 체인스티치 마감입니다.",
    collaboration: "정규 라인은 협업보다 현대적인 핏과 원단 선택이 구성입니다.",
    heritage: "Tanuki는 일본 로데님을 더 현대적인 실루엣과 브랜딩으로 제시합니다.",
    scarcity: "일본 셀비지, 하이 테이퍼드 핏, Tanuki 패치와 버튼 하드웨어가 구성 요소입니다.",
    sources: [
      ["Tanuki official", "https://tanukijapan.com/"]
    ]
  }
];

const state = { selected: products[0].id };

function tierName(code, list) {
  return list.find((item) => item[0] === code)?.[1] || code;
}

function tierText(code, list) {
  const tier = list.find((item) => item[0] === code);
  return tier ? `${tier[1]}: ${tier[2]}` : code;
}

function sourceHost(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function routeSummary(product) {
  const resaleHosts = ["stockx.com", "grailed.com", "goat.com", "reddit.com"];
  const officialSources = [];
  const resaleSources = [];

  product.sources.forEach(([label, url]) => {
    const host = sourceHost(url);
    if (resaleHosts.some((known) => host.includes(known))) {
      resaleSources.push(label);
    } else {
      officialSources.push(label);
    }
  });

  const officialText = officialSources.length ? officialSources.join(", ") : "현재 확인된 공식 루트 없음";
  const resaleText = resaleSources.length ? resaleSources.join(", ") : "현재 확인된 중고 매물 없음";

  return { officialText, resaleText, hasResale: resaleSources.length > 0, hasOfficial: officialSources.length > 0 };
}

function priceLinks(product) {
  const resaleHosts = ["stockx.com", "grailed.com", "goat.com", "ebay.com", "reddit.com"];
  const officialSource = product.sources.find(([, url]) => {
    const host = sourceHost(url);
    return !resaleHosts.some((known) => host.includes(known));
  });
  const resaleSource = product.sources.find(([, url]) => {
    const host = sourceHost(url);
    return resaleHosts.some((known) => host.includes(known));
  });
  const marketQuery = product.brand;
  const copyQuery = `${product.brand} ${product.model}`;
  const encodedMarketQuery = encodeURIComponent(marketQuery);
  const resaleSearchUrl = `https://www.ebay.com/sch/i.html?_nkw=${encodedMarketQuery}`;

  return {
    officialUrl: officialSource?.[1] || "",
    officialLabel: officialSource?.[0] || "공식 판매처",
    resaleUrl: resaleSource?.[1] || resaleSearchUrl,
    resaleLabel: resaleSource?.[0] || "eBay 중고 매물 검색",
    marketQuery,
    copyQuery,
    karrotUrl: `https://www.daangn.com/kr/buy-sell/?search=${encodedMarketQuery}`,
    fruitsUrl: `https://fruitsfamily.com/search/${encodedMarketQuery}`
  };
}

function escapeAttribute(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function resalePrices(value) {
  const prices = [];
  const pattern = /([\d,]+)(?:\s*-\s*([\d,]+))?원/g;
  let match;

  while ((match = pattern.exec(value)) !== null) {
    prices.push(Number(match[1].replaceAll(",", "")));
    if (match[2]) prices.push(Number(match[2].replaceAll(",", "")));
  }

  return prices;
}

function combinedResalePrices(product) {
  return [...resalePrices(product.resale), ...(product.domesticResale || [])];
}

function lowestResalePrice(product) {
  const prices = combinedResalePrices(product);
  if (!prices.length) return product.resale;
  return `약 ${Math.min(...prices).toLocaleString("ko-KR")}원`;
}

function highestResalePrice(product) {
  const prices = combinedResalePrices(product);
  if (!prices.length) return product.resale;
  return `약 ${Math.max(...prices).toLocaleString("ko-KR")}원`;
}

function normalizeBrandName(name) {
  return name.toLowerCase().replace(/\s+/g, " ").trim();
}

function brandInitial(name) {
  const match = name.match(/[a-z0-9]/i);
  return match ? match[0].toUpperCase() : "#";
}

function getBrandDirectory() {
  const brandMap = new Map();

  products.forEach((product) => {
    if (!brandMap.has(product.brand)) {
      brandMap.set(product.brand, []);
    }
    brandMap.get(product.brand).push(product);
  });

  const brandEntries = [...brandMap.entries()]
    .map(([brand, brandProducts]) => ({
      brand,
      letter: brandInitial(brand),
      products: brandProducts.sort((a, b) => a.model.localeCompare(b.model, "en", { sensitivity: "base" }))
    }))
    .sort((a, b) => normalizeBrandName(a.brand).localeCompare(normalizeBrandName(b.brand), "en", { sensitivity: "base" }));

  const letterMap = new Map();
  brandEntries.forEach((entry) => {
    if (!letterMap.has(entry.letter)) {
      letterMap.set(entry.letter, []);
    }
    letterMap.get(entry.letter).push(entry);
  });

  return [...letterMap.entries()]
    .map(([letter, brands]) => ({
      letter,
      brands: brands.sort((a, b) => normalizeBrandName(a.brand).localeCompare(normalizeBrandName(b.brand), "en", { sensitivity: "base" }))
    }))
    .sort((a, b) => a.letter.localeCompare(b.letter, "en", { sensitivity: "base" }));
}

function getBrandList() {
  const brandMap = new Map();

  products.forEach((product) => {
    if (!brandMap.has(product.brand)) {
      brandMap.set(product.brand, []);
    }
    brandMap.get(product.brand).push(product);
  });

  return [...brandMap.entries()]
    .map(([brand, brandProducts]) => ({
      brand,
      letter: brandInitial(brand),
      products: brandProducts.sort((a, b) => a.model.localeCompare(b.model, "en", { sensitivity: "base" }))
    }))
    .sort((a, b) => normalizeBrandName(a.brand).localeCompare(normalizeBrandName(b.brand), "en", { sensitivity: "base" }));
}

function getProductById(id) {
  return products.find((product) => product.id === id) || products[0];
}

function detailUrl(id) {
  return `product.html?id=${encodeURIComponent(id)}`;
}

function brandUrl(brand) {
  return `index.html?brand=${encodeURIComponent(brand)}#index`;
}

function getSelectedBrand() {
  return new URLSearchParams(location.search).get("brand") || "";
}

function getQueryProductId() {
  return new URLSearchParams(location.search).get("id");
}

function renderDetailList(title, items) {
  return `
    <section class="detail-section">
      <h4>${title}</h4>
      ${items.map((item) => `<p>${item}</p>`).join("")}
    </section>
  `;
}

function renderProducts() {
  const grid = document.querySelector("#productGrid");
  if (!grid) return;
  const selectedBrand = getSelectedBrand();
  const visibleProducts = selectedBrand
    ? products.filter((product) => product.brand === selectedBrand)
    : products;

  grid.innerHTML = `
    ${selectedBrand ? `
      <div class="product-grid-heading">
        <div>
          <span class="meta-label">Brand</span>
          <h2>${selectedBrand}</h2>
        </div>
        <a href="index.html#index">View All</a>
      </div>
    ` : ""}
    ${visibleProducts.map((product) => `
    <article class="product-card${state.selected === product.id ? " is-selected" : ""}" id="${product.id}">
      <a class="product-photo-link" href="${detailUrl(product.id)}" aria-label="${product.brand} ${product.model} 상세 보기">
        <figure class="product-photo">
          <img src="${product.photo}" alt="${product.brand} ${product.model} 제품 사진">
        </figure>
      </a>
      <div class="card-top">
        <div class="card-title">
          <a class="product-title-link" href="${detailUrl(product.id)}">
            <h3>${product.brand} ${product.model}</h3>
          </a>
        </div>
      </div>
      <div class="price-grid">
        <div><span class="meta-label">정가</span><strong>${product.retail}</strong></div>
        <div><span class="meta-label">리셀 가격 범위</span><strong>${product.resale}</strong></div>
      </div>
    </article>
  `).join("")}`;
}

function searchableText(product) {
  return [
    product.brand,
    product.model,
    product.line,
    product.category,
    product.fabric,
    product.hardware,
    product.construction,
    product.collaboration,
    product.heritage,
    product.scarcity
  ].join(" ").toLocaleLowerCase();
}

function renderSearchResults(matches, message) {
  const results = document.querySelector("#searchResults");
  const status = document.querySelector("#searchStatus");
  if (!results) return;

  if (status) status.textContent = message;
  const hasPhotoMatches = matches.some((match) => match.matchType === "image");
  results.classList.toggle("search-results--photo", hasPhotoMatches);
  results.innerHTML = hasPhotoMatches
    ? matches.map(({ product, matchLabel }, index) => `
      <a class="search-result-card${index === 0 ? " is-best-match" : ""}" href="${detailUrl(product.id)}" aria-label="${product.brand} ${product.model} 상세 보기">
        <figure class="search-result-photo">
          <img src="${product.photo}" alt="${product.brand} ${product.model} 제품 사진">
        </figure>
        <div class="search-result-copy">
          <span class="meta-label">${matchLabel}</span>
          <h3>${product.brand} ${product.model}</h3>
          <p>${product.line}</p>
          <div class="search-result-price">
            <span>정가 ${product.retail}</span>
            <span>리셀 ${product.resale}</span>
          </div>
        </div>
      </a>
    `).join("")
    : matches.map(({ product }) => `
      <a class="search-result-name" href="${detailUrl(product.id)}">${product.brand} ${product.model}</a>
    `).join("");
}

function textSearchProducts(query) {
  const terms = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];

  return products
    .map((product) => {
      const text = searchableText(product);
      const matchedTerms = terms.filter((term) => text.includes(term)).length;
      const name = `${product.brand} ${product.model}`.toLocaleLowerCase();
      const nameBonus = name.includes(terms.join(" ")) ? 3 : 0;
      return { product, score: matchedTerms + nameBonus };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.product.brand.localeCompare(b.product.brand))
    .map(({ product }) => ({ product, matchLabel: "이름·정보 검색 결과" }));
}

function loadImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = source;
  });
}

function imageFeature(image) {
  const size = 16;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });
  canvas.width = size;
  canvas.height = size;
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, size, size);

  const scale = Math.min(size / image.naturalWidth, size / image.naturalHeight);
  const width = image.naturalWidth * scale;
  const height = image.naturalHeight * scale;
  context.drawImage(image, (size - width) / 2, (size - height) / 2, width, height);

  const pixels = context.getImageData(0, 0, size, size).data;
  const feature = [];
  for (let index = 0; index < pixels.length; index += 4) {
    const alpha = pixels[index + 3] / 255;
    const red = pixels[index] * alpha + 255 * (1 - alpha);
    const green = pixels[index + 1] * alpha + 255 * (1 - alpha);
    const blue = pixels[index + 2] * alpha + 255 * (1 - alpha);
    feature.push(red / 255, green / 255, blue / 255);
  }
  return feature;
}

function featureDistance(left, right) {
  let total = 0;
  for (let index = 0; index < left.length; index += 1) {
    const difference = left[index] - right[index];
    total += difference * difference;
  }
  return Math.sqrt(total / left.length);
}

let catalogImageFeatures;

async function getCatalogImageFeatures() {
  if (!catalogImageFeatures) {
    catalogImageFeatures = Promise.all(products.map(async (product) => ({
      product,
      feature: imageFeature(await loadImage(product.photo))
    })));
  }
  return catalogImageFeatures;
}

async function imageSearchProducts(file) {
  const objectUrl = URL.createObjectURL(file);
  try {
    const uploadedFeature = imageFeature(await loadImage(objectUrl));
    const catalog = await getCatalogImageFeatures();
    const filename = file.name.replace(/\.[^.]+$/, "").toLocaleLowerCase();

    return catalog
      .map(({ product, feature }) => {
        const productName = `${product.brand} ${product.model}`.toLocaleLowerCase();
        const filenameBonus = productName.split(/\s+/).some((word) => word.length > 2 && filename.includes(word)) ? -0.08 : 0;
        return { product, distance: featureDistance(uploadedFeature, feature) + filenameBonus };
      })
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 6)
      .map(({ product, distance }, index) => ({
        product,
        matchType: "image",
        matchLabel: index === 0 ? "가장 가까운 데님 사진" : "유사한 데님 사진"
      }));
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

function setupSearch() {
  const input = document.querySelector("#denimSearchInput");
  const photoInput = document.querySelector("#denimSearchPhoto");
  const overlay = document.querySelector("#searchOverlay");
  const toggle = document.querySelector("#searchToggle");
  const close = document.querySelector("#searchClose");
  const viewAll = document.querySelector("#viewAllSearch");
  const previewWrap = document.querySelector("#searchPhotoPreview");
  const preview = document.querySelector("#searchPreviewImage");
  const photoName = document.querySelector("#searchPhotoName");
  const clearPhoto = document.querySelector("#clearSearchPhoto");
  if (!input || !photoInput || !overlay || !toggle || !close || !viewAll || !previewWrap || !preview || !photoName || !clearPhoto) return;

  let previewUrl = "";

  const setOverlayOpen = (open) => {
    if (open) closeHeaderOverlay("#searchOverlay");
    overlay.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("search-open", open);
    if (open) input.focus();
  };

  toggle.addEventListener("click", () => setOverlayOpen(overlay.hidden));
  close.addEventListener("click", () => setOverlayOpen(false));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.hidden) setOverlayOpen(false);
  });

  viewAll.addEventListener("click", () => {
    const matches = products.map((product) => ({ product, matchLabel: "전체 제품" }));
    renderSearchResults(matches, `${matches.length}개 제품을 표시합니다.`);
  });

  input.addEventListener("input", () => {
    const query = input.value.trim();
    if (!query) {
      renderSearchResults([], "검색어를 입력하세요.");
      return;
    }
    const matches = textSearchProducts(query);
    renderSearchResults(matches, matches.length ? `${matches.length}개 제품을 찾았습니다.` : "일치하는 등록 제품이 없습니다.");
  });

  photoInput.addEventListener("change", async () => {
    const file = photoInput.files?.[0];
    if (!file) return;

    if (previewUrl) URL.revokeObjectURL(previewUrl);
    previewUrl = URL.createObjectURL(file);
    preview.src = previewUrl;
    photoName.textContent = file.name;
    previewWrap.hidden = false;
    renderSearchResults([], "등록된 제품 이미지와 비교하고 있습니다...");

    try {
      const matches = await imageSearchProducts(file);
      renderSearchResults(matches, "사진과 가까운 등록 제품 후보입니다. 다른 각도의 사진은 결과가 다를 수 있습니다.");
    } catch {
      renderSearchResults([], "이미지를 읽지 못했습니다. JPG, PNG 또는 WebP 파일로 다시 시도하세요.");
    }
  });

  clearPhoto.addEventListener("click", () => {
    photoInput.value = "";
    preview.removeAttribute("src");
    previewWrap.hidden = true;
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    previewUrl = "";
    input.dispatchEvent(new Event("input"));
  });
}

function setupSizing() {
  const overlay = document.querySelector("#sizingOverlay");
  const toggle = document.querySelector("#sizingToggle");
  const close = document.querySelector("#sizingClose");
  if (!overlay || !toggle || !close) return;

  const setOverlayOpen = (open) => {
    if (open) closeHeaderOverlay("#sizingOverlay");
    overlay.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("search-open", open);
  };

  toggle.addEventListener("click", () => setOverlayOpen(overlay.hidden));
  close.addEventListener("click", () => setOverlayOpen(false));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.hidden) setOverlayOpen(false);
  });
}

function closeHeaderOverlay(idToKeepOpen = "") {
  [
    ["#searchOverlay", "#searchToggle"],
    ["#sizingOverlay", "#sizingToggle"],
    ["#brandOverlay", "#brandToggle"]
  ].forEach(([overlaySelector, toggleSelector]) => {
    if (overlaySelector === idToKeepOpen) return;
    const overlay = document.querySelector(overlaySelector);
    const toggle = document.querySelector(toggleSelector);
    if (!overlay || !toggle) return;
    overlay.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  });
}

function setupBrandOverlay() {
  const overlay = document.querySelector("#brandOverlay");
  const toggle = document.querySelector("#brandToggle");
  const close = document.querySelector("#brandClose");
  if (!overlay || !toggle || !close) return;

  const setOverlayOpen = (open) => {
    if (open) closeHeaderOverlay("#brandOverlay");
    overlay.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("search-open", open);
  };

  toggle.addEventListener("click", () => setOverlayOpen(overlay.hidden));
  close.addEventListener("click", () => setOverlayOpen(false));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.hidden) setOverlayOpen(false);
  });
}

function renderProductDetail(product) {
  const slot = document.querySelector("#productDetail");
  if (!slot) return;
  const routes = routeSummary(product);
  const links = priceLinks(product);
  slot.innerHTML = `
    <article class="detail-card">
      <div class="detail-hero">
        <div class="detail-copy">
          <p class="kicker">${product.brand}</p>
          <h3>${product.model}</h3>
          <div class="detail-price-list">
            <a href="${links.officialUrl}" target="_blank" rel="noreferrer">
              <span>공식판매처</span>
              <strong>${product.retail}</strong>
            </a>
            <a href="${links.resaleUrl}" target="_blank" rel="noreferrer">
              <span>중고 최저가</span>
              <strong>${lowestResalePrice(product)}</strong>
            </a>
            <a href="${links.resaleUrl}" target="_blank" rel="noreferrer">
              <span>중고 최고가</span>
              <strong>${highestResalePrice(product)}</strong>
            </a>
          </div>
          <div class="domestic-market-links">
            <span class="meta-label">국내 중고 검색</span>
            <code>${links.marketQuery}</code>
            <a href="${links.fruitsUrl}" target="_blank" rel="noreferrer">후루츠에서 검색</a>
            <a href="${links.karrotUrl}" target="_blank" rel="noreferrer">당근에서 검색</a>
            <button type="button" data-copy-market-query="${escapeAttribute(links.copyQuery)}">제품명 복사</button>
          </div>
          <div class="detail-grid">
            <div class="meta"><span class="meta-label">원단 상세</span><p>${product.fabric}</p><p>${tierText(product.fabricTier, fabricTiers)}</p></div>
            <div class="meta"><span class="meta-label">구조 상세</span><p>${product.hardware}</p><p>${product.construction}</p><p>${tierText(product.laborTier, laborTiers)}</p></div>
            ${product.category === "collaboration" ? `<div class="meta"><span class="meta-label">협업 정보</span><p>${product.collaboration}</p></div>` : ""}
            <div class="meta"><span class="meta-label">헤리티지</span><p>${product.heritage}</p></div>
            <div class="meta"><span class="meta-label">희소성</span><p>공식 루트: ${routes.officialText}</p><p>중고 시장: ${routes.resaleText}</p></div>
          </div>
          <section class="detail-sources">
            <h4>출처</h4>
            <div class="source-row">
              ${product.sources.map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
            </div>
          </section>
        </div>
        <figure class="detail-photo">
          <img src="${product.photo}" alt="${product.brand} ${product.model} 제품 상세 이미지">
        </figure>
      </div>
    </article>
  `;
}

document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy-market-query]");
  if (!button) return;

  const query = button.dataset.copyMarketQuery || "";
  try {
    await navigator.clipboard.writeText(query);
    button.textContent = "복사됨";
    window.setTimeout(() => {
      button.textContent = "제품명 복사";
    }, 1400);
  } catch {
    button.textContent = query;
  }
});

function renderBrands() {
  const directory = document.querySelector("#brandDirectory");
  const alphabet = document.querySelector("#brandAlphabet");
  if (!directory || !alphabet) return;
  const letterGroups = getBrandDirectory();
  const letters = letterGroups.map((item) => item.letter);

  alphabet.innerHTML = `
    <button type="button" class="brand-all active" data-letter="ALL">전체 브랜드 보기</button>
    <div class="alphabet-grid">
      ${["#", ...letters.filter((letter) => letter !== "#")].map((letter) => `<button type="button" data-letter="${letter}">${letter}</button>`).join("")}
    </div>
  `;

  const allBrands = getBrandList();
  const renderList = (letter) => {
    const visibleBrands = letter === "ALL"
      ? allBrands
      : allBrands.filter((item) => item.letter === letter);

    directory.innerHTML = `
      <div class="brand-list-head">
        <p class="kicker">${letter === "ALL" ? "전체" : letter}</p>
        <p>${visibleBrands.length}개 브랜드</p>
      </div>
      <div class="brand-list">
        ${visibleBrands.map((entry) => `
          <a class="brand-list-item" href="${brandUrl(entry.brand)}">
            <span>${entry.brand}</span>
            <small>${entry.products.length}개 제품</small>
          </a>
        `).join("")}
      </div>
    `;
  };

  const setActiveLetter = (letter, preserveScroll = false) => {
    const scrollPosition = window.scrollY;
    alphabet.querySelectorAll("button").forEach((button) => {
      button.classList.toggle("active", button.dataset.letter === letter || (letter === "ALL" && button.classList.contains("brand-all")));
    });
    renderList(letter);
    if (preserveScroll) {
      window.scrollTo({ top: scrollPosition, behavior: "auto" });
      requestAnimationFrame(() => window.scrollTo({ top: scrollPosition, behavior: "auto" }));
    }
  };

  setActiveLetter("ALL");

  alphabet.querySelectorAll(".alphabet-grid button[data-letter]").forEach((button) => {
    const letter = button.dataset.letter;
    button.addEventListener("click", (event) => {
      event.preventDefault();
      setActiveLetter(letter, true);
    });
  });

  alphabet.querySelector(".brand-all").addEventListener("click", (event) => {
    event.preventDefault();
    setActiveLetter("ALL", true);
  });
}

function setActiveNav(hash) {
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");
  document.querySelectorAll(".site-nav a").forEach((link) => link.classList.toggle("active", link.getAttribute("href") === "#index"));
  nav?.classList.remove("open");
  toggle?.setAttribute("aria-expanded", "false");
}

const navToggle = document.querySelector(".nav-toggle");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    const nav = document.querySelector(".site-nav");
    nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(nav.classList.contains("open")));
  });
}

const detailPage = document.querySelector("#productDetail");
if (detailPage) {
  const detailId = getQueryProductId();
  state.selected = getProductById(detailId).id;
  renderProductDetail(getProductById(detailId));
}

renderProducts();
renderBrands();
setupSearch();
setupSizing();
setupBrandOverlay();
setActiveNav(location.hash);
window.addEventListener("hashchange", () => {
  setActiveNav(location.hash);
  renderProducts();
});
