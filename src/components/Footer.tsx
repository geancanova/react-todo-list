import styles from './Footer.module.css';

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        <span>Todo List</span> @ {currentYear}
      </p>
    </footer>
  )
}

export default Footer
