import SEO from "../../components/seo";
import styled from "styled-components";
import BlogList from "./blogList";
import { Viewer_viewer as User, Posts_posts as PostsPage } from "../../wpapi";
import Menu from "../../components/menu";
import Button from "../../components/Button";
import { device } from "consts/theme";
import React from "react";
import MasterClasses from "./MasterClass";

interface Props {
  pages: PostsPage[];
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  user: User;
}

export const PlaybooksView = ({
  pages,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  user,
}: Props) => {
  return (
    <div className="page">
      <SEO />
      <Menu activeItemIndex={1} user={user} />
      <div className="wrapper">
        <H1>Hustle Playbooks</H1>
        {pages.map((page) => (
          <BlogList key={page.pageInfo?.startCursor} posts={page.nodes || []} />
        ))}
        <LoadMoreButton>
          {hasNextPage ? (
            <ThisButton
              title={isFetchingNextPage ? "Loading..." : "Load More"}
              clickHandler={fetchNextPage}
            />
          ) : null}
        </LoadMoreButton>
        {user?.subscribed && <MasterClasses />}
      </div>
    </div>
  );
};
const H1 = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #1d3330;
  margin-top: var(--header-height-desktop);
  padding-top: 64px;
  margin-bottom: 40px;
  padding-left: 22px;
  @media ${device.tabletL} {
    font-size: 20px;
    line-height: 24px;
  }
`;

const LoadMoreButton = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 300px;
`;
const ThisButton = styled(Button)`
  width: 264px;
  height: 64px;
`;
