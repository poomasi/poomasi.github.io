import { useToastClear } from '@hooks'

import styled from '@emotion/styled'
import TextareaAutosize from 'react-textarea-autosize'

const imageUrl =
  'https://media.licdn.com/dms/image/D5603AQGVNgciNVRM7Q/profile-displayphoto-shrink_200_200/0/1670180619652?e=1712793600&v=beta&t=NimD6kebYbex1suBZ-QmZfr1oTaXHydj9u0H50gAHsQ'

export function DetailPage() {
  useToastClear()

  return (
    <Container>
      <PageContainer>
        <PageContent>
          <Header>
            <ProfilePictureWrapper>
              <ProfileImage src={imageUrl} alt={'profile-image'} />
            </ProfilePictureWrapper>
            <HeaderBody>
              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <div style={{ fontWeight: 'bold', fontSize: '40px' }}>정민찬</div>
                <div style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '30px', color: ' var(--gray-color)' }}>Backend</div>
              </div>
              <div style={{ fontSize: '20px' }}>CJ CGV 소프트웨어 엔지니어</div>
            </HeaderBody>
          </Header>

          <div style={{ marginTop: '30px', fontWeight: 'bold', fontSize: '20px' }}>자기소개</div>
          <Description readOnly value={'안녕하세요.\n나는 개발자입니다.'} />
          <Body>---질의응답 테이블---</Body>
        </PageContent>
      </PageContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 80px;
`
const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 5% 0 5%;
  /* background-color: pink; */
`
const PageContent = styled.div`
  width: 1200px;
  margin-bottom: 50px;
`

const Header = styled.div`
  width: 100%;
  display: flex;
`

const ProfilePictureWrapper = styled.div`
  display: flex;

  width: 140px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const HeaderBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-left: 30px;
  padding-top: 40px;
  /* background-color: blue; */
`

const Description = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 10px;
  border: none;
  outline: none;
  resize: none;
  font-size: 17px;
  /* background-color: green; */
`

const Body = styled.div`
  margin-top: 30px;
  width: 100%;
`
