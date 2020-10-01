import { Section, ESectionSize } from '@Components/Layout/Section'
import styles from '@Styles/Layout.module.css';

export const Lander = () => {
    return <div>
        <Section sectionSize={ESectionSize.FULL_VIEWPORT}>
            <div className={`${styles.lander_section} h-full relative w-full`}>
                {/* <img className="bottom-0 inset-x-auto max-h-full opacity-50" src="quartz.jpg" /> */}
            </div>
        </Section>
    </div>;
}
const landerStyle = {
    backgroundImage: `url(quartz2.jpg)`,
    backgroundPositionX: '25%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: '0.50'
}