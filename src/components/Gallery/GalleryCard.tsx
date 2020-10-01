import styles from '@Styles/Gallery.module.css';

export const GalleryCard = ({ src = '' }) => {
    return (
        <div className={styles.gallery_card}>
            <img className={styles.gallery_thumbnail} src={src} />
            <p>Hayward, CA</p>
            <p>Living Room Design</p>
        </div>
    );
};
