import { Section, ESectionSize } from '@Components/Layout/Section';
import { useState } from 'react';
import { GalleryCard } from '@Components/Gallery/GalleryCard';

export const Gallery = ({ filterFeaturedDesigns = false }) => {
    const sectionSize = filterFeaturedDesigns ? ESectionSize.MEDIUM : ESectionSize.FULL_VIEWPORT;
    const [images, setImages] = useState(['/gallery/1.jpg']);
    return (
        <Section sectionSize={sectionSize}>
            <div className={`h-full relative w-full container mx-auto `}>
                <h1 className="text-center text-3xl mb-8">Featured Designs</h1>
                <div className="grid grid-cols-3 gap-4">
                    {images.map((image) => (
                        <GalleryCard src={image} />
                    ))}
                </div>
            </div>
        </Section>
    );
};
