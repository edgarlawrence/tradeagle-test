import axios from "axios"
import { URL_POST } from '@env';

const PostAPI = async (data) => {
    console.log('data',data)
    return await axios.post('http://64.227.166.246/1234/api/company/signup/', {
        "name": data.name,
        "email": data.email,
        "contact_number": data.number,
        "whatsapp_number": data.waNumber,
        "address": data.address,
        "city": data.city,
        "state": data.state,
        "pin_code": data.postalCode,
        "pan": data.pan,
        "gst_no": data.gst,
        "password": data.password
    },
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
}

export { PostAPI }