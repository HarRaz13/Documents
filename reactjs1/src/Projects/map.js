function App(){
    var employees = [
        {empID: 1234, name: "John", designation: "SE"},
        {empID: 4567, name: "Tom", designation: "SSE"},
        {empID: 8910, name: "Kevin", designation: "TA"},
    ];
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>EmpID</th>
                        <th>Name</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) =>{
                        return(
                            <tr key={employee.empID}>
                                <td>{employee.empID}</td>
                                <td>{employee.name}</td>
                                <td>{employee.designation}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
export default App