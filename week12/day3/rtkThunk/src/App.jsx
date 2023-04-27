import Cats from "./components/Cats"
import Counter from "./components/Counter"
import Users from "./components/Users"

function App() {

  return (
    <section className="border-solid border-2 border-white rounded-xl p-10">
      <h1>APP</h1>
      <Counter />
      <Users />
      <Cats />
    </section>
  )
}

export default App
