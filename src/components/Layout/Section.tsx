export enum ESectionSize {
    FULL_VIEWPORT = 0, 
    LARGE = 1,
    MEDIUM = 2,
    SMALL= 3
}
export const Section = ({sectionSize, children}) => {
    const getSectionClass = (sectionSize) => {
        switch (sectionSize) {
            case ESectionSize.FULL_VIEWPORT:
                return 'h-screen';
            case ESectionSize.LARGE:
                return 'h-three-fourth'
            case ESectionSize.MEDIUM:
                return 'h-half'
            case ESectionSize.SMALL:
                return 'h-fourth'
        }
    }
    const sectionClass= getSectionClass(sectionSize);
    
    return (
        <div className={['w-full', sectionClass].join(' ')}>
            {children}
        </div>
    )
    
}