import { User, UserRequest } from "../proto/users_pb";
import { client } from "./utils";

export default function getUser(id:number){
    return new Promise<User>((res, rej)=>{
        const request = new UserRequest();
        request.setId(id);

        client.getUser(request, (err, user)=>{
            if(err){
                rej(err);
            }
            else{
                res(user);
            }
        })
    })
}