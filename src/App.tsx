import styled from '@emotion/styled'

const MINIMUM_DESKTOP_WIDTH: number = 1570
const MINIMUM_TABLET_WIDTH: number = 850

function getLeftContainer() {
  return (
    <LeftContainer>
      <TitleContainer>
        <Title>개발자 전문 상담 멘토링,</Title>
        <Title style={{ fontWeight: 'bold' }}>품앗이</Title>
        <Link href="https://poomasi.github.io/">https://poomasi.github.io/</Link>
      </TitleContainer>
    </LeftContainer>
  )
}

function getCenterConainer() {
  return (
    <CenterContainer>
      <Section>
        <Seperator />
        <SubHead>소개</SubHead>
        <Description>
          품앗이에는 다양한 직군의 개발자들이 있습니다.
          <br />
          저희는 삼인행필유아사(三人行必有我師)를 바탕으로,
          <br />
          누구에게나 배울점이 있다는 믿음하에 저희가 가진 경험을
          <br />
          서로 전파하고 멘토링을 진행하고 있습니다.
          <br />각 분야의 개발자들에게 도움을 받아보세요.
        </Description>
      </Section>

      <Section>
        <Seperator />
        <SubHead>분야</SubHead>
        <Description>
          Backend : 백엔드 생태계에서 사용되는 프레임워크별 장단점과 아키텍처를 안내해 드립니다.
          <br />
          Web Frontend : 웹 프론트엔드 생태계에서 사용되는 라이브러리와 상태관리 방법에 대해 알려드립니다.
          <br />
          Mobile(iOS) : 유지보수가 용이한 iOS 개발에 대해 같이 고민하고 디자인 패턴을 안내해 드립니다.
          <br />
          Mobile(Hybrid) : 모바일 하이브리드 생태계인 RN, Flutter에 대해 알려드립니다.
          <br />
          DevOps : 기본적인 개발 방법론, CI/CD 파이프라인 설계에 대해 안내해 드립니다.
          <br />
          Data : 유통MD 및 비즈니스 분석가에서 데이터 직군으로 전향한 스토리와 데이터 엔지니어, 데이터 사이언티스트 직무의 역할 및 로드맵을
          알려드립니다.
          <br />
          Algorithm : Problem Solving에 사용되는 알고리즘과 자료구조를 안내해 드립니다.
        </Description>
      </Section>

      <Section>
        <Seperator />
        <SubHead>세부 안내</SubHead>
        <Description>
          품삯은 따로 받고있지 않습니다 :)
          <br />
          신청 방법 : 고민 분야와 사연을 담아 하기 이메일로 신청
          <br />
          이메일 : <Mail href="mailto://poomasiofficial@gmail.com">poomasiofficial@gmail.com</Mail>
        </Description>
      </Section>
    </CenterContainer>
  )
}

function getRightContainer() {
  return (
    <RightContainer>
      <Section>
        <Seperator />
        <SubHead>품앗이꾼</SubHead>
        <Description>
          Backend/DevOps <b>정민찬</b>
          <br />
          극장업 C사 소프트웨어 엔지니어
          <br />
          플랫폼 D사 소프트웨어 엔지니어
        </Description>

        <br />

        <Description>
          Mobile(iOS)/Algorithm <b>Logan</b>
          <br />
          플랫폼 K사 iOS 리드
        </Description>

        <br />

        <Description>
          Data <b>Summer</b>
          <br />
          유통업 G사 데이터 아키텍트
          <br />
          핀테크 F사 데이터 엔지니어
        </Description>

        <br />

        <Description>
          Backend <b>Tony</b>
          <br />
          AI/ML L사 백엔드 개발자
        </Description>

        <br />

        <Description>
          Mobile(iOS) <b>Able</b>
          <br />
          카셰어링 S사 iOS 개발자
        </Description>
      </Section>
    </RightContainer>
  )
}

function App() {
  return (
    <Container>
      {getLeftContainer()}
      {getCenterConainer()}
      {getRightContainer()}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 80px 15% 80px 15%;
  background-image: url('assets/background.jpg');
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1570px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 520px) {
    padding: 50px 7% 50px 7%;
  }
`

const LeftContainer = styled.div`
  width: 100%;

  @media (max-width: 1570px) {
    grid-column: 1 / span 2;
    margin-bottom: 35px;
  }
  @media (max-width: 850px) {
    grid-column: 1;
  }
`
const TitleContainer = styled.div`
  width: 100%;
`
const Title = styled.div`
  font-size: 36px;

  @media (max-width: 520px) {
    font-size: 30px;
  }
`
const Link = styled.a`
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  font-style: italic;

  &:hover {
    color: black;
    background-color: white;
    transition: 0.5s ease;
  }
`
const Mail = styled.a`
  text-decoration: none;

  &:hover {
    color: black;
    background-color: white;
    transition: 0.5s ease;
  }
`

const CenterContainer = styled.div`
  width: 350px;

  @media (max-width: 1570px) {
    margin-right: 45px;
  }
  @media (max-width: 520px) {
    width: 100%;
    margin-right: 0;
  }
`

const RightContainer = styled.div`
  width: 100%;
  @media (max-width: 1570px) {
    width: 100%;
  }
`

const Section = styled.div`
  width: 100%;
  margin-bottom: 35px;
`
const Seperator = styled.div`
  height: 4px;
  width: 23px;
  background-color: #fff;
  margin-top: 7px;
  margin-bottom: 16px;
`
const SubHead = styled.div`
  font-size: 27px;
  margin-bottom: 13px;
`
const Description = styled.div`
  line-height: 1.6;
  font-size: 14px;
`

export default App
