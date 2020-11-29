import React, {Component} from 'react'

const day1="";
const day2="";
const day3="";
const day4="";
const day5="";
const day6="";
const day7="";
const day8="";
const day9="요나단이 다윗을 사랑하여 주었던 것을\n 골라보세요 \n"+
"1. 겉옷, 칼, 활, 허리띠\n"+
"2. 사울의 작은 딸\n"+
"3. 사무엘\n"+
"4. 수금을 잘 타는 사람을 구하게 하소서\n"+
"5. 여호와의 기름 부음을 받은 자\n"+
"6. 가드 왕 아기스\n\n\n";
const day10="다윗이 사울을 피하여 \n 누구에게 갔나요?\n"+
"1. 겉옷, 칼, 활, 허리띠\n"+
"2. 사울의 작은 딸\n"+
"3. 사무엘\n"+
"4. 수금을 잘 타는 사람을 구하게 하소서\n"+
"5. 여호와의 기름 부음을 받은 자\n"+
"6. 가드 왕 아기스\n\n\n";
const day11="다윗이 사울을 두려워하여 도망한 것과\n 관계있는 것을 골라보세요 \n"+
"1. 겉옷, 칼, 활, 허리띠\n"+
"2. 사울의 작은 딸\n"+
"3. 사무엘\n"+
"4. 수금을 잘 타는 사람을 구하게 하소서\n"+
"5. 여호와의 기름 부음을 받은 자\n"+
"6. 가드 왕 아기스\n\n\n";
const day12="다윗이 사울을 죽이지 않고\n 겉옷 자락만 벤 이유는?\n"+
"1. 겉옷, 칼, 활, 허리띠\n"+
"2. 사울의 작은 딸\n"+
"3. 사무엘\n"+
"4. 수금을 잘 타는 사람을 구하게 하소서\n"+
"5. 여호와의 기름 부음을 받은 자\n"+
"6. 가드 왕 아기스\n\n\n";
const day13="\n - 나발이 다윗의 요청을 거절한 이유는 무엇일까요? (25:1-13)\n - 다윗은 분노할 만한 이유가 있음에도 불구하고 사울에게 관용을 베푼 이유는 무엇일까요?(26:6-12)\n\n\n";
const day14="\n - 다윗이 블레셋 땅으로 피신했던 목적은 무엇일까요?(27:1-7)\n - 신접한 여인을 찾아간 사울의 모습에서 볼 수 있는 것은 무엇일까요?(28:8-11)\n\n\n";
const day15="\n - 블레셋의 도피 도중에 다윗이 행했던 선행의 결과는 무엇일까요?(29:1-11)\n - 다윗이 아말렉 토벌을 나가기 전에 한 일은 무엇일까요?(30:17,18)\n\n\n";
const day16="\n - 마가의 다락에 모여 기도한 사람의 수는 몇 명인가요? (1:15)\n - 오순절에 베드로의 설교를 듣고 회개한 자는 몇 명인가요?(2:41)\n\n\n";
const day17="\n - 베드로와 요한이 성전 미문에 있던 앉은뱅이에게 준 것은 무엇인가요?(3:6)\n - 박해받던 초대교회는 무엇에 더욱 힘을 쓰고 있나요?(4:24-31)\n\n\n";
const day18="\n - 사도들은 능욕 받은 것을 어떻게 생각하고 있나요?(5:41)\n - 일곱 명의 사역자의 자격은 무엇인가요?(6:3-5)\n\n\n";



const day19="\n - 하나님의 말씀을 전하다가 돌에 맞아 순교한 사람은 누구인가요?(7:54-60)\n - 에디오피아 내시에게 복음을 전했던 사람은 누구인가요?(8:26-40)\n\n\n";
const day20="\n - 롯다에서 베드로는 '에니아'라는 사람을 고쳤습니다. 이 사람은 어떤 병을 가지고 있었나요?(9:32-35)\n - 이달리야 백부장인 이 사람은 하나님을 경외하며 백성을 구제하고 기도하던 사람이었습니다. 이 사람의 이름은 무엇인가요?(10:1-8)\n\n\n";
const day21="\n - 제자들이 비로소 그리스도인이라 일컬음을 받게 된 곳은 어디인가요?(11:19-26)\n - 옥에 갇힌 베드로를 위해 간절히 하나님께 기도한 사람들은 어디에서 모여 기도했나요?(12:1-19)\n\n\n";
const day22="\n - 안디옥 교회의 많은 선지자들과 교사 중 성령이 전도여행을 위해 보낸 두 사람은 누구인가요?(12:1-3)\n - 바울이 발을 쓰지 못하는 사람을 치료하자 그 곳 사람들이 바울과 바나바를 각각 어떤 신의 이름으로 불렀나요?(14:8-18)\n\n\n";
const day23="\n - 바울이 마가로 인해 바나바와 다투고 갈라선 이후 누구를 선택하여 전도여행을 함께 했나요?(15:36-41)\n - '드로아'라는 지역에서 환상을 통해 바울에게 '건너와서 우리를 도우라'는 말을 한 사람은 어느 지역의 사람인가요?(16:6-10)\n\n\n";
const day24="\n - 바울이 우상이 가득한 것을 보고 격분하여 철학자들과 많은 토론을 벌인 지역은 어디인가요?(17:16-31)\n - 바울이 아굴라와 그의 아내 브리스길라를 만난 곳은 어디인가요?(18:1-4)\n\n\n";



const day25="";
const day26="";
const day27="";
const day28="";
const day29="";
const day30="";
const bible_quiz_array = {
    '1' : day1, 
    '2' : day2,
    '3' : day3,
    '4' : day4,
    '5' : day5, 
    '6' : day6,
    '7' : day7,
    '8' : day8, 
    '9' : day9,
    '10' : day10,
    '11' : day11, 
    '12' : day12,
    '13' : day13,
    '14' : day14, 
    '15' : day15,
    '16' : day16,
    '17' : day17, 
    '18' : day18,
    '19' : day19,
    '20' : day20, 
    '21' : day21,
    '22' : day22,
    '23' : day23, 
    '24' : day24,
    '25' : day25,
    '26' : day26, 
    '27' : day27,
    '28' : day28,
    '29' : day29, 
    '30' : day30
    
}

export {bible_quiz_array};