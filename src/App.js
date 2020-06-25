import React, { useState } from 'react'
import UserTable from './UserTable'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'

const App = () => {
	
	const usersData = [
		{ id: 1, name: 'TCS', username: 'Guna' },
		{ id: 2, name: 'CTS', username: 'Vignesh' },
		{ id: 3, name: 'INFOVIEW', username: 'Parth' },
	]

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div className="container">
			<h1>Employee management system</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<div>
							<h2>Edit Employee</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</div>
					) : (
						<div>
							<h2>Add Employee</h2>
							<AddUserForm addUser={addUser} />
						</div>
					)}
				</div>
				<div className="flex-large">
					<h2>View Employee Details</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}
export default App;