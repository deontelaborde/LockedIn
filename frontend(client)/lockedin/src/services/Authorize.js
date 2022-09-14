import Client from "./api"

export const RegisterCustomer = async (data) => {
  try {
    const res = await Client.post('/customers/register', data)
    return res.data
  } catch (error) {
    throw error
  }

}

export const RegisterBusiness = async (data) => {
  try {
    const res = await Client.post('/businesses/register', data)
    return res.data
  } catch (error) {
    throw error
  }

}
export const LoginBusiness = async (data) => {
  try {
    const res = await Client.post('/businesses/login', data);
    localStorage.setItem('token', res.data.token);
    return res.data.user;
  } catch (error) {
    throw error;
  }
};


export const CheckSession = async () => {
  try {
    const res = await Client.get('/businesses/session');
    return res.data;
  } catch (error) {
    throw error;
  }
};
