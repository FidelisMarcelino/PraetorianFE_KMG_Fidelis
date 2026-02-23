export default function StudentItem({students}) {
    return(
        <>
            <ul>
                {students.map((student, index) => (
                    <li key={student.id}>{index + 1}. {student.name}</li>
                ))}
            </ul>
        </>
    )
}