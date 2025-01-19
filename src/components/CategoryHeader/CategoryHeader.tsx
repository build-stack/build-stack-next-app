import Image from 'next/image';
import styles from './CategoryHeader.module.css';

export default function CategoryHeader({ title, image, description }: { title: string, image?: string, description?: string }) {
    return (
        <header className={ styles.categoryHeaderHeader }>
            <div className={ styles.categoryHeader }>
                { image && <Image
                    src={ image }
                    alt="metallic sphere floating mid-air against a minimalist backdrop"
                    width={2000}
                    height={1000}
                    priority
                    sizes="100vw"
                    style={{
                        zIndex: 0,
                        color: 'transparent',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%', 
                        height: '100%'
                     }}
                /> }
                <div className={ styles.categoryHeaderText }>
                    <h1 className={ `text-4xl xl:text-7xl font-light text-white mb-2` }>{ title }</h1>
                    <p className={ `text-md xl:text-2xl font-light text-white` }>{ description }</p>
                </div>
            </div>
        </header>
    )
}