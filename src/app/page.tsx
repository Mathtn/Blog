import PostFeatured from "@/components/PostFeatured";
import PostLists from "@/components/PostLists";
import SpinLoader from "@/components/spinLoader";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
        <PostFeatured />
        <PostLists />
      </Suspense>
    </>
  );
}
