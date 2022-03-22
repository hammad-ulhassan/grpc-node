import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { resolveModuleName } from "typescript";
import { User } from "../proto/users_pb";
import { client } from "./utils";

export default function allUsers(){
    return new Promise<User[]>((res, rej)=>{
        const stream = client.getUsers(new Empty());
        const users: User[] = [];
        stream.on("data", (user)=>users.push(user));
        stream.on("error", rej);
        stream.on("end", ()=>res(users));
    })
}