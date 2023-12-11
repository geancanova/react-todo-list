import styles from './App.module.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que vamos fazer hoje?</h2>
          <TaskForm btnText="Criar Tarefa" />
        </div>
        <div>
          <h2>Lista de Tarefas</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
