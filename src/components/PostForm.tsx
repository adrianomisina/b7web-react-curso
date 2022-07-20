import { useState, ChangeEvent } from "react"

type Props = {
  onAdd: (title: string, body: string ) => void
}

export const PostForm = ({ onAdd }:Props) => {
  const [addTitleText, setAddTitleText] = useState('')
  const [addBodyText, setAddBodyText] = useState('')

  const handeAddTitleChange = (e: ChangeEvent<HTMLInputElement>)=> {
    setAddTitleText(e.target.value)
  }

  const handeAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>)=> {
    setAddBodyText(e.target.value)
  }

  const handleAddClick = () => {
    if (addTitleText && addBodyText) {
      onAdd(addTitleText, addBodyText)
    } else {
      alert ("preencha os Campos")
    }
  }

  return (
    <fieldset className="border-2 mb-3 p-3" >
      <legend className="p-5">Adicionar Novo Post</legend>
      <input value={addTitleText} onChange={handeAddTitleChange} className="block border" type="text" placeholder="Digite um título"/>
      <textarea value={addBodyText} onChange={handeAddBodyChange} className="block border"></textarea>
      <button className="block border" onClick={handleAddClick}>Adicionar</button>
    </fieldset>

  )
}