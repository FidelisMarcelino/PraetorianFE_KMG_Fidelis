import StudentItem from "./StudentItem";

export default function App(){
    const course = ["React", "Vue", "Angular"];
    const students = [
        {id:1, name: "Andi"},
        {id: 2, name: "Budi"},
        {id: 3, name: "Caca"},
    ];
    
    return(
        <>
        {/* Without props */}
            {/* <div>
                <ul>
                    {students.map((student) => (
                        <li key={student.id}>{student.name}</li>
                    ))}
                </ul>

                <ul>
                    {course.map((course) => (
                        <li>{course}</li>
                    ))}
                </ul>
            </div> */}

            {/* With props */}
            <ul className="p-2">
                <p className="text-red-700 font-bold">Daftar Mahasiswa</p>
                <StudentItem students={students}/>
            </ul>
        </>
    )
}