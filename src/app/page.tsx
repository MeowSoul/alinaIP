// pages/index.tsx
import React from 'react';
import Link from 'next/link';

const IndexPage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Main Page</h1>
            <Link href="/main">
                <a>Go to Main Page</a>
            </Link>
        </div>
    );
};

export default IndexPage;
