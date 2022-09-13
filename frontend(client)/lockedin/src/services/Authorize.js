import Client from "./api"

export const RegisterCustomer = async (data) => {
  try {
    const res = await Client.post('/customers/register', data)
    return res.data
  } catch (error) {
    throw error
  }

}