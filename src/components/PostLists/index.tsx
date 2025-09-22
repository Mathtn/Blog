import PostImageCover from "../PostCoverImage";
import PostSummary from "../PostSummary";
import { findAllPublicPosts } from "@/lib/post/queries";

export default async function PostLists() {
  const posts = await findAllPublicPosts();
  return (
    <div className="grid grid-cols-1 mb-16 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;

        return (
          <div className="flex gap-4 flex-col group" key={post.id}>
            <PostImageCover
              linkProps={{ href: postLink }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
                priority: true,
              }}
            />
            <PostSummary
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              title={post.title}
              postLink={postLink}
              postHeading={"h2"}
            />
          </div>
        );
      })}
    </div>
  );
}
