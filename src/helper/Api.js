import axios from "axios"
import { URL_POST } from '@env';

const PostAPI = async(data) => {
    return await axios.post(`${URL_POST}`, {
        name: data.name,
        email: data.email,
        contact_number: data.number,
        whatsapp_number: data.waNumber,
        address: data.address,
        city: data.city,
        state: data.state,
        pin_code: data.postalCode,
        pan: data.pan,
        gst_no: data.gst,
        password: data.password
    })
}

export { PostAPI }