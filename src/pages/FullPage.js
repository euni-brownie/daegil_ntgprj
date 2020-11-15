import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Subject from '../components/subject/Subject.js';
import SubjectProfile from '../components/subject/SubjectProfile.js';
import Button from '../components/button/Button.js';

class FullPage extends Component{
    render(){
      return(
        <ReactFullpage
        //fullpage options
        licenseKey = {'OPEN-SOURCE-GPLV3-LICENSE'}
        scrollingSpeed = {1000}
        sectionsColor={["#282c34", "#9baec8","#353848","#ff5f45", "#0798ec","#282c34"]}
        navigation = {true}
        navigationPosition= 'right'
        navigationTooltips={['시작','1','2','3','4','확인']}
        scrollOverflow= {true}
        normalScrollElements= {'.txtbox'}
        render={({ state, fullpageApi }) => {
        return (
          <div className="App"> 
          <ReactFullpage.Wrapper>
            <div className="section">
            <Subject 
              title ="주님과 거리 좁히기 1234 Challenge!"
              sub="하나님께 가까이 함이 내게 복이라 (시73:28)
              일정 : 11.9 ~ 12.12까지 (30일간, 월-토 주일 제외)"            
              >
  
            </Subject>
            <Button classname="btn-enabled" title="n일차 시작!"
                    onClick={() => fullpageApi.moveSectionDown()}>
              </Button>
            </div>
  
            <div className="section">
            <Subject 
              title ="1분 말씀묵상" 
              sub="동영상" >
              </Subject>
              <div class="video">
                <div class="video-container">
                  <iframe width="100%" height="100%" 
                          src="https://www.youtube.com/embed/CDFE4u4RQIE?controls=0" 
                          frameborder="0" 
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen></iframe>
                </div>
              </div>    
            </div>
   
  
  
             <div className="section">
                <div className="slide">
                    <Subject 
                  title ="2분 성경읽기" 
                  sub="성경 본문">
                  </Subject>
                 <div className="txtbox">
                  <div className="txtcontent">
                                  <h3>사무엘상 7장 [개역개정]</h3>
                        1  기럇여아림 사람들이 와서 여호와의 궤를 옮겨 산에 사는 아비나답의 집에 들여놓고 그의 아들 엘리아살을 거룩하게 구별하여 여호와의 궤를 지키게 하였더니<br/>
                        2  궤가 기럇여아림에 들어간 날부터 이십 년 동안 오래 있은지라 이스라엘 온 족속이 여호와를 사모하니라<br/>
                        3  ○사무엘이 이스라엘 온 족속에게 말하여 이르되 만일 너희가 전심으로 여호와께 돌아오려거든 이방 신들과 아스다롯을 너희 중에서 제거하고 너희 마음을 여호와께로 향하여 그만을 섬기라 그리하면 너희를 블레셋 사람의 손에서 건져내시리라<br/>
                        4  이에 이스라엘 자손이 바알들과 아스다롯을 제거하고 여호와만 섬기니라<br/>
                        5  ○사무엘이 이르되 온 이스라엘은 미스바로 모이라 내가 너희를 위하여 여호와께 기도하리라 하매<br/>
                        6  그들이 미스바에 모여 물을 길어 여호와 앞에 붓고 그 날 종일 금식하고 거기에서 이르되 우리가 여호와께 범죄하였나이다 하니라 사무엘이 미스바에서 이스라엘 자손을 다스리니라<br/>
                        7  이스라엘 자손이 미스바에 모였다 함을 블레셋 사람들이 듣고 그들의 방백들이 이스라엘을 치러 올라온지라 이스라엘 자손들이 듣고 블레셋 사람들을 두려워하여<br/>
                        8  이스라엘 자손이 사무엘에게 이르되 당신은 우리를 위하여 우리 하나님 여호와께 쉬지 말고 부르짖어 우리를 블레셋 사람들의 손에서 구원하시게 하소서 하니<br/>
                        9  사무엘이 젖 먹는 어린 양 하나를 가져다가 온전한 번제를 여호와께 드리고 이스라엘을 위하여 여호와께 부르짖으매 여호와께서 응답하셨더라<br/>
                        10  사무엘이 번제를 드릴 때에 블레셋 사람이 이스라엘과 싸우려고 가까이 오매 그 날에 여호와께서 블레셋 사람에게 큰 우레를 발하여 그들을 어지럽게 하시니 그들이 이스라엘 앞에 패한지라<br/>
                        11  이스라엘 사람들이 미스바에서 나가서 블레셋 사람들을 추격하여 벧갈 아래에 이르기까지 쳤더라<br/>
                        12  ○사무엘이 돌을 취하여 미스바와 센 사이에 세워 이르되 여호와께서 여기까지 우리를 도우셨다 하고 그 이름을 에벤에셀이라 하니라<br/>
                        13  이에 블레셋 사람들이 굴복하여 다시는 이스라엘 지역 안에 들어오지 못하였으며 여호와의 손이 사무엘이 사는 날 동안에 블레셋 사람을 막으시매<br/>
                        14  블레셋 사람들이 이스라엘에게서 빼앗았던 성읍이 에그론부터 가드까지 이스라엘에게 회복되니 이스라엘이 그 사방 지역을 블레셋 사람들의 손에서 도로 찾았고 또 이스라엘과 아모리 사람 사이에 평화가 있었더라<br/>
                        15  ○사무엘이 사는 날 동안에 이스라엘을 다스렸으되<br/>
                        16  해마다 벧엘과 길갈과 미스바로 순회하여 그 모든 곳에서 이스라엘을 다스렸고<br/>
                        17  라마로 돌아왔으니 이는 거기에 자기 집이 있음이니라 거기서도 이스라엘을 다스렸으며 또 거기에 여호와를 위하여 제단을 쌓았더라<br/>
                        사무엘상 8장 [개역개정]
                        1  사무엘이 늙으매 그의 아들들을 이스라엘 사사로 삼으니<br/>
                        2  장자의 이름은 요엘이요 차자의 이름은 아비야라 그들이 브엘세바에서 사사가 되니라<br/>
                        3  그의 아들들이 자기 아버지의 행위를 따르지 아니하고 이익을 따라 뇌물을 받고 판결을 굽게 하니라<br/>
                        4  ○이스라엘 모든 장로가 모여 라마에 있는 사무엘에게 나아가서<br/>
                        5  그에게 이르되 보소서 당신은 늙고 당신의 아들들은 당신의 행위를 따르지 아니하니 모든 나라와 같이 우리에게 왕을 세워 우리를 다스리게 하소서 한지라<br/>
                        6  우리에게 왕을 주어 우리를 다스리게 하라 했을 때에 사무엘이 그것을 기뻐하지 아니하여 여호와께 기도하매<br/>
                        7  여호와께서 사무엘에게 이르시되 백성이 네게 한 말을 다 들으라 이는 그들이 너를 버림이 아니요 나를 버려 자기들의 왕이 되지 못하게 함이니라<br/>
                        8  내가 그들을 애굽에서 인도하여 낸 날부터 오늘까지 그들이 모든 행사로 나를 버리고 다른 신들을 섬김 같이 네게도 그리하는도다<br/>
                        9  그러므로 그들의 말을 듣되 너는 그들에게 엄히 경고하고 그들을 다스릴 왕의 제도를 가르치라<br/>
                        10  ○사무엘이 왕을 요구하는 백성에게 여호와의 모든 말씀을 말하여<br/>
                        11  이르되 너희를 다스릴 왕의 제도는 이러하니라 그가 너희 아들들을 데려다가 그의 병거와 말을 어거하게 하리니 그들이 그 병거 앞에서 달릴 것이며<br/>
                        12  그가 또 너희의 아들들을 천부장과 오십부장을 삼을 것이며 자기 밭을 갈게 하고 자기 추수를 하게 할 것이며 자기 무기와 병거의 장비도 만들게 할 것이며<br/>
                        13  그가 또 너희의 딸들을 데려다가 향료 만드는 자와 요리하는 자와 떡 굽는 자로 삼을 것이며<br/>
                        14  그가 또 너희의 밭과 포도원과 감람원에서 제일 좋은 것을 가져다가 자기의 신하들에게 줄 것이며<br/>
                        15  그가 또 너희의 곡식과 포도원 소산의 십일조를 거두어 자기의 관리와 신하에게 줄 것이며<br/>
                        16  그가 또 너희의 노비와 가장 아름다운 소년과 나귀들을 끌어다가 자기 일을 시킬 것이며<br/>
                        17  너희의 양 떼의 십분의 일을 거두어 가리니 너희가 그의 종이 될 것이라<br/>
                        18  그 날에 너희는 너희가 택한 왕으로 말미암아 부르짖되 그 날에 여호와께서 너희에게 응답하지 아니하시리라 하니<br/>
                        19  ○백성이 사무엘의 말 듣기를 거절하여 이르되 아니로소이다 우리도 우리 왕이 있어야 하리니<br/>
                        20  우리도 다른 나라들 같이 되어 우리의 왕이 우리를 다스리며 우리 앞에 나가서 우리의 싸움을 싸워야 할 것이니이다 하는지라<br/>
                        21  사무엘이 백성의 말을 다 듣고 여호와께 아뢰매<br/>
                        22  여호와께서 사무엘에게 이르시되 그들의 말을 들어 왕을 세우라 하시니 사무엘이 이스라엘 사람들에게 이르되 너희는 각기 성읍으로 돌아가라 하니라<br/>
                        </div>
                       </div>
                      </div>
                  <div className="slide">
                            <Subject 
                        title ="2분 성경읽기" 
                        sub="성경 퀴즈">
                        </Subject>
                  </div>
            </div>
  
            <div className="section">
            <SubjectProfile 
              title ="3겹줄 기도" 
              sub="오늘은 이분들을 위해 기도 하는건 어때요?">
              </SubjectProfile>
            </div>
  
              <div className="section">
            <Subject 
              title ="4랑실천 happy box" 
              sub="기한 20/12/11 까지">
              </Subject>
              <Button classname="btn-confirm" title="오늘도전 완료하기" onClick={() => fullpageApi.moveSectionDown()}>
              </Button>
              </div>

              <div className="section">
              <Subject 
                title ="15 / 20 (회) 성공!!" 
                sub="-">
                </Subject>
              </div>


              </ReactFullpage.Wrapper>
          </div>);}}
        />

      );
    }
  }

  export default FullPage;