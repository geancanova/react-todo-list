const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer>
      <p>
        <span>Todo List</span> @ {currentYear}
      </p>
    </footer>
  )
}

export default Footer
