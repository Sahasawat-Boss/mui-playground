import BasicPopover from "./components/Popover"
import ButtonUsage from "./components/ButtonUsage"
import BasicModal from "./components/Modal"
import DataTable from "./components/DataTable"
import DataTableFetch from "./components/DataTableFetch"

const Home = () => {
  return (
    <div className=" bg-gray-100">
      <h1 className="text-3xl text-center">Test MUI</h1>
      <main className="flex flex-col justify-center items-center">
        <ButtonUsage />
        <BasicModal />
        <BasicPopover />
        <DataTable />
        <DataTableFetch/>
      </main>
    </div>
  )
}

export default Home