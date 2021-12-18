import styled from 'styled-components';
import { Button } from './common';
import { FaRegBuilding } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { BsLink45Deg, BsPeople } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { TUser } from '../types/index';
import { formatStars } from '../utils/formatStars';

type Props = {
  user: TUser;
};
const Profile = ({ user }: Props) => {
  const {
    avatar_url,
    name,
    login,
    bio,
    followers,
    following,
    company,
    location,
    blog,
    twitter_username,
  } = user;

  const deleteAtOfCompany = (company: string) => company.replace('@', '');

  return (
    <StyledProfile>
      <ProfileContent>
        <UserWrapper>
          <PictureWrapper>
            <UserPicture src={avatar_url} />
          </PictureWrapper>
          <ContentWrapper>
            <UserName>{name}</UserName>
            <UserNickName>{login}</UserNickName>
          </ContentWrapper>
        </UserWrapper>
        <ButtonFollow>Follow</ButtonFollow>
        {bio ? <Bio>{bio}</Bio> : null}
        <FollowerAndFollowing>
          <Followers>
            <BsPeople />
            <Bold> {formatStars(followers)}</Bold> Followers
          </Followers>
          <Followings>
            <Bold>{formatStars(following)}</Bold> Following
          </Followings>
        </FollowerAndFollowing>
        <Detail>
          {company ? (
            <DetailItem>
              <FaRegBuilding />
              <DetailLink
                href={`https://github.com/${deleteAtOfCompany(company)}`}
                target='_blank'
              >
                {deleteAtOfCompany(company)}
              </DetailLink>
            </DetailItem>
          ) : null}
          {location ? (
            <DetailItem>
              <FiMapPin />
              {location}
            </DetailItem>
          ) : null}

          {blog ? (
            <DetailItem>
              <BsLink45Deg />
              <DetailLink href={blog} target='_blank'>
                {blog}
              </DetailLink>
            </DetailItem>
          ) : null}
          {twitter_username ? (
            <DetailItem>
              <AiOutlineTwitter />
              <DetailLink
                href={`https://twitter.com/${twitter_username}`}
                target='_blank'
              >
                @{twitter_username}
              </DetailLink>
            </DetailItem>
          ) : null}
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
  width: 100%;
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
  vertical-align: middle;
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
