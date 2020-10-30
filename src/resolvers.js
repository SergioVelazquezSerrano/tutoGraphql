import { tareas } from "./sample";

import User from "./models/User";

export const resolvers ={
    Query: {
        hello: ()=>{
            return "Hola Mundo Graph";
        },
        saludar(root, {name}, context){
            console.log(context);
            return `Hola ${name}`;
        },
        tareas(){
            return tareas;
        },
        async Users(){
            const users = await User.find();
            return users;
        }
    },
    Mutation: {
        crearTarea(_, {input}){
            input._id=tareas.length;
            tareas.push(input);
            return input;
        },
        async crearUser(_,{input}){
            const newUser =new User(input);
            await newUser.save();
            return newUser;
        },
        async deleteUser(_,{_id}){
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_,{_id, input}){
            return await User.findByIdAndUpdate(_id, input, {new:true});
        }
    }
}