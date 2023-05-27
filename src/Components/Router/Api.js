
const students = [
    {
        name:'Ameer Hamza',
        id:'ameer-hamza',
        city: 'Larkana',
        country:'Pakistan',
        education:{
            school:'Sukkur IBA University',
            address:'Nisar Ahmed Siddiqui Road'
        }
    },
    {
        name:'Ghulam Mustafa',
        id:'ghulam-mustafa',
        city: 'San Fransisco',
        country:'America',
        education:{
            school:'Shah Abdul Latif University',
            address:'Khairpur, Sindh'
        }
    },
    {
        name:'Junaid Ahmed',
        id:'junaid-ahmed',
        city: 'Sukkur',
        country:'Pakistan',
        education:{
            school:'SIBAU',
            address:'Nisar Ahmed Siddiqui Road'
        }
    },
    {
        name:'Uzair Ahmed',
        id:'uzair-ahmed',
        city: 'Karachi',
        country:'Pakistan',
        education:{
            school:'NJV School Karachi',
            address:'M.A Jinnah Road near OAK Tower, Karachi, Sindh'
        }
    },
    {
        name:'Daniyal Ahmed',
        id:'daniyal-ahmed',
        city: 'Hyderabad',
        country:'Pakistan',
        education:{
            school:'Pilot Higher Secondary School, Larkana',
            address:'V.I.P Road near Civil Hospital Larkana'
        }
    },
]

export function getStudents(){
    return students;
}

export function getFurtherInfo(id){
    let std = {};
    students.map(student=>{
        if(student.id===id){
            std = student;
        }
    }); 
    return std;
}
export function getEducation(id){
    let ed = {};
    students.map(student=>{
        if(student.id === id){
            ed = student.education;
        }
            
    })
    return ed;
}