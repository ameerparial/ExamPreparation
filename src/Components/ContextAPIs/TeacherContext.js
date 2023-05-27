import { createContext } from "react";


const TeacherContext= createContext();
const TeacherProvider = TeacherContext.Provider;
const TeacherConsumer = TeacherContext.Consumer;

export {TeacherContext,TeacherProvider, TeacherConsumer};