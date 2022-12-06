import dbConnect from '../config/dbConnect'

const users = async () => {
	const data = await dbConnect.select('*').from('data.users')

	return data
}

const allUsers = await users()

export default allUsers
