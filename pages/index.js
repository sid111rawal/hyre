import { getServerSession } from "next-auth/next";
import { useRouter } from "next/router";
import { useEffect } from "react";

function HomePage({ session }) {
  const router = useRouter();

  useEffect(() => {
    
  }, []);

  return <h1>Home Page</h1>;
}

export const getServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res);
  console.log("Session:", session);

  if (session?.user?.isAdmin) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default HomePage;