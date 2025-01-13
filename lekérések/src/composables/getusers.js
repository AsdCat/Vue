import axios from "axios";
import { reactive } from "vue";


const getUser = ()=>{
    const data = reactive({
        users: [],
        loading: true,
    })

    const loadUser = async () =>{
        try{
            const res = await axios.get('http://localhost:3000/users');
            data.users = res.data
            data.loading = false
        } catch(err){
            console.log(err);
            data.loading = false
        }
    };
    loadUser()

    return{ data, loadUser}
};
export default getUser


