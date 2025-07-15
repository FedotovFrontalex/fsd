import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer
            className={ styles.footer }
        >   
            <span>Политика конфиденциальности</span>
            <span>Правила использования</span>
            <span>© Все права защищены</span>
        </footer>
    )
}