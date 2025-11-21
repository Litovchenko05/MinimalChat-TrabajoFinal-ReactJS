import './AddNewChat.css'

const AddNewChat = ({addNewChat}) => {

	const handleSubmitNewChatForm = (event) => {
		event.preventDefault()
		const form = event.target
		const name = form.name.value
		if (!name) return
		form.reset()
		addNewChat(name)
	} 

  return (
		<form onSubmit={handleSubmitNewChatForm}>
			<div>
				<input name='name' id='name' placeholder='Enter the name of the new chat'/>
				<button type="submit">Add Chat</button>
			</div>
		</form>	
  )
}

export default AddNewChat