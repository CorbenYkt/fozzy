import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { photos } from '../pages/photos';
import 'yet-another-react-lightbox/styles.css';
import {
    Captions, Fullscreen, Thumbnails, Zoom,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Images from '../pages/Images';
import React from 'react';

function Gallery() {
    const [index, setIndex] = useState<number>(-1);
    return (
        <>
            <Images
                data={photos}
                onClick={(currentIndex) => setIndex(currentIndex)}
            />

            <Lightbox
                plugins={[Captions, Fullscreen, Zoom, Thumbnails]}
                captions={{
                    showToggle: true,
                    descriptionTextAlign: 'end',
                }}
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={photos}
            />
        </>
    );


}

export default Gallery;