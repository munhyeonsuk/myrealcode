const hd ={
    logo : {
        Text : "",
        href : "",
        img : "",
        cls : ["fixed-top bg-white"],
    },
    gnb : [
        {
            Text : "경주 소개",
            href : "",
            cls : ["d-flex ps-0 mb-0"],
            gnb_ul_li : [
                {
                    Text : "역사 및 소개",
                    href : ""
                },
                {
                    Text : "지역 특산품",
                    href : ""
                }
            ]
        },
        {
            Text : "여행 정보",
            href : "",
            cls : [],
            gnb_ul_li : [
                {
                    Text : "관광지",
                    href : ""
                },
                {
                    Text : "음식 및 카페",
                    href : ""
                },
                {
                    Text : "축제",
                    href : ""
                },
                {
                    Text : "추천 코스",
                    href : ""
                },
                {
                    Text : "여행 후기",
                    href : ""
                }
            ]
        },
        {
            Text : "예약 및 문의",
            href : "",
            cls : [],
            gnb_ul_li : [
                {
                    Text : "숙소 예약",
                    href : ""
                },
                {
                    Text : "패키지 여행 예약",
                    href : ""
                },
                {
                    Text : "문의사항",
                    href : ""
                },
                {
                    Text : "자주 묻는 문의",
                    href : ""
                }
            ]
        },
        {
            Text : "이벤트",
            href : "",
            cls : [],
            gnb_ul_li : [
                {
                    Text : "진행중인 이벤트",
                    href : ""
                }
            ]
        }
    ],
    util : [
        {
            Text : "실시간인기",
            href : "",
            cls : []
        },
        {
            Text : "로그인",
            href : "",
            cls : []
        }
    ]
}

window.onload = function(){
    let navitag = "";




    document.querySelector("#gnb").innerHTML = navitag
}