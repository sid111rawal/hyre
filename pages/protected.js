import React from 'react';
import { useRouter } from 'next/router';
import withMiddleware from './api/middleware';

function ProtectedPage() {
    return (
        <div>
            <h1>Protected Page</h1>
        </div>
    );
}

export const getServerSideProps = withMiddleware(async (context) => {
    if (!context.req.user) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    } else{
        return {
            props: {},
        };
    }
});
export default ProtectedPage;
