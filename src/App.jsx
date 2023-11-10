import { Trash } from "@phosphor-icons/react/dist/ssr"
import { useState } from "react"

const data = [
  {
    id:1,
    toDo: "Work Out",
    checked: false
  },
  {
    id:2,
    toDo: "Home Work",
    checked: false
  }
]

function App() {

  const [lists,setLists] = useState(data)
  const [addList, setAddList] = useState('')
  


  function handlerCheck(id){
    const newLists = [...lists]
    newLists.map((list) => {
      list.id === id ? list.checked = !list.checked : list
    })
   setLists(newLists)
   
  }

  function handlerDelete(id){
    const deleteList = lists.filter((list) => list.id != id)
    setLists(deleteList)

  }

  function handlerAddList(e){
    e.preventDefault()

    if(!addList) return

    const list = {
      id: Date.now(),
      toDo: addList,
      checked: false
    }

    setLists([...lists,list])
    setAddList('')

  }


  


  return (
    <section>
      <header>
        <h2>To Do list</h2>
      </header>
            <div className="add-list">
              <form onSubmit={(e) => handlerAddList(e)}>
                <input type="text"
                placeholder="Add your list.."
                value={addList}
                onChange={(e) => setAddList(e.target.value)}/>
                <button>Add</button>
              </form>
            </div>
            <div className="lists">
             {lists.map((list) =>{
              return(
                <div className="row-list" key={list.id}>
                  <div className="list-value">
                    <input type="checkbox"  checked={list.checked} onChange={() => handlerCheck(list.id)}/>
                    <p className={list.checked ? "checked-todo" : ""}>{list.toDo}</p>
                 </div>
                  <div className="trash-button" onClick={() => handlerDelete(list.id)}>
                    <Trash size={24} />
                  </div>
              </div>
              )
             })} 
            </div>
        </section>
  )
}

export default App
