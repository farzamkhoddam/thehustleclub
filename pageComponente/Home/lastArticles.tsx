import { useState } from "react";
import { Posts_posts as PostsPage } from "../../wpapi";
import styled from "styled-components";
import { device } from "../../consts/theme";
import HomeCarousel from "pageComponente/Home/homeCarousel";
import Link from "next/link";
import LighteningIcon from "components/Svgs/lightening";

interface Props {
  posts: PostsPage;
}

export default function LatArticles({ posts }: Props) {
  const [carouselValue, setCarouselValue] = useState(0);

  return (
    <SectionContainer>
      <StyledLighteningIcon1 />
      <LatestWrapper>
        <LatestHeader>
          <SectionTitle>The Shortest Path To Online Income</SectionTitle>
          <SectionSubtitle>
            {` Every 14 days, our team of analysts puts together a detailed,
            step-by-step playbook on proven side hustles that are generating
            real income in today's digital world. All you need to do is choose
            the side hustle that works with your lifestyle and take action on
            our detailed playbooks.`}
          </SectionSubtitle>

          {/* در طراحی قبلی، میتونستیم با این دکمه ها، اسلایدر رو حرکت بدیم. در طراحی جدید اسلایدری در کار نیست
          اما چون ممکنه دوباره بعدا اسلایدری خواسته بشه، فقط دکمه ها کامنت شدن و اسلایدر پابرجاست 
          اما فقط ۳ کارت رو نشون میده و به خاطر حذف دکمه ها امکان تغییر نداره */}
          {/* <ArrowsContainer>
            <ArrowButton onClick={() => setCarouselValue((o) => o - 1)}>
              <Image
                src="/tiny-arrow-left.svg"
                alt="left"
                width={24}
                height={24}
              />
            </ArrowButton>
            <ArrowButton onClick={() => setCarouselValue((o) => o + 1)}>
              <Image
                src="/tiny-arrow-right.svg"
                alt="left"
                width={24}
                height={24}
              />
            </ArrowButton>
          </ArrowsContainer> */}
        </LatestHeader>
        <HomeCarousel
          posts={posts}
          value={carouselValue}
          onChange={(value) => setCarouselValue(value)}
        />
        <Link href="/articles">
          <ShowMoreButton>Show More</ShowMoreButton>
        </Link>
      </LatestWrapper>
    </SectionContainer>
  );
}

const LatestWrapper = styled.section`
  margin-top: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: var(--page-max-width);
  margin-right: auto;
  margin-left: auto;
  padding: 0 1rem;
`;
const LatestHeader = styled.div`
  width: 100%;
  padding: 0 1rem;
  max-width: var(--page-max-width);
`;
const SectionTitle = styled.h2`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 67px;
  text-transform: capitalize;

  @media ${device.laptop} {
    font-size: 40px;
    line-height: 48px;
  }
  @media ${device.tablet} {
    font-size: 7vw;
    line-height: 8vw;
  }
  @media ${device.mobileL} {
    font-size: 2rem;
    line-height: 2.2rem;
  }
`;
const SectionSubtitle = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  /* Gray 2 */

  color: var(--gray-color-normal);
`;
// const ArrowsContainer = styled.div`
//   display: flex;
// `;
// const ArrowButton = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
// `;
const ShowMoreButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 178px;
  height: 56px;
  margin: 3rem auto;
  background: #ffffff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #1d3330;
  border: 2px solid #1d3330;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  position: relative;
`;
const StyledLighteningIcon1 = styled(LighteningIcon)`
  position: absolute;
  top: 40%;
  right: 0%;
`;
