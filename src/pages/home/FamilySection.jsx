import React from 'react';
import Gallery from '../../components/Gallery';

const FamilySection = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div id="myfamilysection" className="grid gap-20">
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
                    <h2 className="text-lg font-semibold mb-2">My Family</h2>
                    <Gallery />
                </div>
            </div>
        </div>
    );
};

export default FamilySection;