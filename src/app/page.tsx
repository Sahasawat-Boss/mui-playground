import BasicPopover from "./components/Popover"
import ButtonUsage from "./components/ButtonUsage"
import BasicModal from "./components/Modal"

const Home = () => {
  return (
    <div className="max-w-96 mx-auto bg-gray-100">
      <h1 className="text-3xl text-center">Test MUI</h1>
      <main className="flex flex-col justify-center items-center">
        <ButtonUsage />
        <BasicModal />
        <BasicPopover/>
      </main>
    </div>
  )
}

export default Home