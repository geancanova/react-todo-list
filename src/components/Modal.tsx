import styles from './Modal.module.css';

interface Props {
  children?: React.ReactNode
}

const Modal = ({ children }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.getElementById('modal');

    if (e.target === modal && e.target !== modal.children[0]) {
      modal!.classList.add('hide');
    }
  };

  return (
    <div id='modal' className={`${styles.modal} hide`} onClick={closeModal}>
      <div className={styles.modal_content}>
        <h2>Editar tarefa</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal
