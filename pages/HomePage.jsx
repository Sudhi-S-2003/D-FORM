import Left from "../components/Left/Left"
import Right from "../components/Right/Right"
import Header from "../components/Header"
function HomePage() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row bg-slate-600">
        <Left />
        <Right />
      </div>
    </div>

  )
}

export default HomePage