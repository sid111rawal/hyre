import React from 'react';
import { useSession, getSession } from 'next-auth/react';

function ProtectedPage() {
    const { data: session } = useSession();

    return (
        <div>
            <h1>Protected Page</h1>
            {session ? (
                <div>
                    <p>Welcome, {session.user.email}!</p>
                    <p>Your role is: {session.user.role}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    } else {
        return {
            props: {
                session,
            },
        };
    }
};
export default ProtectedPage;
