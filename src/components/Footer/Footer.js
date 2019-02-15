import React from 'react';

const footer = () => {
    return (
        <footer className="bg-indigo-darker text-grey-lightest h-12 flex align justify-center items-center mt-auto">
            &copy; { new Date().getFullYear() } Tigran
        </footer>
    )
};

export default footer;