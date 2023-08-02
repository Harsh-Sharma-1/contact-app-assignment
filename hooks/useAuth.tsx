import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session.data) {
            router.push('/');
        }
    }, [session.data]);

    console.log(session);

    return;
};

export default useAuth;
