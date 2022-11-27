import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function GeneratePDF({ person }){

    function generate(){

        const doc = new jsPDF();

        doc.autoTable({
            head: [["FirstName","LastName","Password","Email","UserName"]],
            body:
                person?.map(({FirstName,LastName,Password,Email,UserName}) => {
                    return[
                        FirstName,LastName,Password,Email,UserName
                    ]
                })
        })

        doc.save("Users.pdf")
    }

    return(

        <div>
            <button type = "primary" onClick = {generate}>Download PDF</button>
        </div>
    )
}