import { Section, ESectionSize } from '@Components/Layout/Section'

export const About = () => {
    return <div>
        <Section sectionSize={ESectionSize.MEDIUM}>
            <div className="flex items-center justify-items-center text-center h-full align-middle">
                <div className="w-full">
                    <h1 className="text-5xl">LG Designs</h1>
                    <p className="text-2xl">"Less is more"</p>
                </div>
            </div>
        </Section>
    </div>;
}
