import styled from 'styled-components';
import { Button } from './common';
import { FaRegBuilding } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { BsLink45Deg, BsPeople } from 'react-icons/bs';
import { AiOutlineTwitter, AiOutlineStar } from 'react-icons/ai';

const Profile = () => {
  return (
    <StyledProfile>
      <ProfileContent>
        <UserWrapper>
          <PictureWrapper>
            <UserPicture src='https://avatars.githubusercontent.com/u/1500684?v=4' />
          </PictureWrapper>
          <ContentWrapper>
            <UserName>Kent C. Dodds</UserName>
            <UserNickName>kentcdodds</UserNickName>
          </ContentWrapper>
        </UserWrapper>
        <ButtonFollow>Follow</ButtonFollow>
        <Bio>
          Improving the world with quality software · Husband, Father,
          Latter-day Saint, Teacher, OSS · @remix-run · TestingJavaScript.com ·
          EpicReact.Dev · Be Kind
        </Bio>
        <FollowerAndFollowing>
          <Followers>
            <BsPeople />
            <Bold> 22.2k</Bold> Followers
          </Followers>
          <Followings>
            <Bold>42</Bold> Following
          </Followings>
          <Stars>
            <AiOutlineStar />
            <Bold>1.2k </Bold>
          </Stars>
        </FollowerAndFollowing>
        <Detail>
          <DetailItem>
            <FaRegBuilding />
            <DetailLink href='!#'>@remix-run</DetailLink>
          </DetailItem>
          <DetailItem>
            <FiMapPin />
            Salt Lake City, Utah, USA
          </DetailItem>
          <DetailItem>
            <BsLink45Deg />
            <DetailLink href='!#'> https://kentcdodds.com</DetailLink>
          </DetailItem>
          <DetailItem>
            <AiOutlineTwitter />
            <DetailLink href='!#'>@kentcdodds</DetailLink>
          </DetailItem>
        </Detail>
      </ProfileContent>
    </StyledProfile>
  );
};

const StyledProfile = styled.div``;
const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PictureWrapper = styled.figure`
  border-radius: 50%;
  overflow: hidden;
  max-width: 20%;
  border: 1px solid ${({ theme }) => theme.color.border};
  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
`;

const ContentWrapper = styled.div``;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
  }
`;

const UserPicture = styled.img`
  width: 100%;
`;

const UserName = styled.h1`
  font-size: 1.625rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.color.textPrincipal};
`;
const UserNickName = styled.span`
  font-size: 20px;
  font-weight: 300;
  line-height: 2rem;
`;
const Bio = styled.p`
  line-height: 1.5rem;
  color: ${({ theme }) => theme.color.textPrincipal};
`;

const ButtonFollow = styled(Button)`
  order: 5;
  @media screen and (min-width: 768px) {
    order: 0;
  }
`;

const FollowerAndFollowing = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
`;
const Followers = styled.li`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const Followings = styled.li``;

const Stars = styled.li`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const Detail = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DetailItem = styled.li`
  display: flex;
  gap: 0.5rem;
  color: ${({ theme }) => theme.color.textPrincipal};
`;

const DetailLink = styled.a`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color.textPrincipal};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Bold = styled.strong`
  color: ${({ theme }) => theme.color.textPrincipal};
`;

export default Profile;
