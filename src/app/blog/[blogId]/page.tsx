type Props = {
      params: {
            blogId: string
      }
    }

export default function Home({ params }: Props) {
    return (
          <h1>{params.blogId} Blog</h1>
    );
  }