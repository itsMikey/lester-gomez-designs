import { Section, ESectionSize } from '@Components/Layout/Section'

export const Gallery = () => {
    return (
        <Section sectionSize={ESectionSize.FULL_VIEWPORT}>
            <div className={`h-full relative w-full`}>
                {/* <img className="bottom-0 inset-x-auto max-h-full opacity-50" src="quartz.jpg" /> */}
                <h3>Gallery</h3>
            </div>
        </Section>
    )
}