import { Component, Input, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-generatePDF-unrouted',
  templateUrl: './generatePDF-unrouted.component.html',
  styleUrls: ['./generatePDF-unrouted.component.css']
})
export class GeneratePDFUnroutedComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

  public openPDF(): void {

    // Creamos un nuevo PDF
    let doc = new jsPDF("landscape", "mm", "a4");

    // Escribimos el nombre de los encabezados de la tabla
    var headers = [
      "Id",
      "Issue",
      "Observations",
      "Integration Turn",
      "Integration Datetime",
      "Pullrequest Url",
      "Developer",
      "Value"
    ];
    //console.log(headers);

    // Añadimos los datos que queremos mostrar (que nos llegan desde el padre)
    var dataBody = [];

    // DEVELOPER
    /* this.data.forEach(resp => {
      dataBody.push([resp.id, resp.name, resp.surname, resp.lastname, resp.email, resp.issues, resp.teams, resp.resolutions, resp.helps, resp.team.name, resp.usertype.name]);
    }); */

    //HELP
    /* this.data.forEach(resp => {
      dataBody.push([resp.id, resp.resolution.id, resp.developer.id, resp.percentage]);
    }); */

    // RESOLUTION
    this.data.forEach(resp => {
      dataBody.push([resp.id, resp.issue.id, resp.observations, resp.integration_turn, resp.integration_datetime, resp.pullrequest_url, resp.developer.id, resp.value]);
    });

    //TASK
    /* this.data.forEach(resp => {
      dataBody.push([resp.id, resp.description, resp.project.id, resp.priority, resp.complexity]);
    }); */

    // Header
    let fileWidth = 30;
    let fileHeight = 20;
    var img = new Image();
    img.src = 'assets/andamio.png'
    doc.addImage(img, 'PNG', 11, 10, fileWidth, fileHeight);

    const header = "Resolutions";
    doc.text(header, 245, 17, { baseline: "top" });

    // Tabla
    autoTable(doc, {
      theme: 'grid',
      startY: 32,
      margin: { left: 20, right: 20 },
      head: [headers],
      headStyles: { halign: 'center', valign: 'middle', fontStyle: 'bold', fillColor: [30, 212, 145]},
      body:
        dataBody,
      /* didDrawCell: function(data) {
        if (data.row.index > 0 && data.row.index % 9 === 0 && data.column.index === data.table.columns.length - 1) {
          //doc.cellAddPage();  
          doc.addPage();
        }
      } */
      //html: '#pdf-table',
    })

    /* const pageCount = doc.getNumberOfPages();
    const pageCount2 = doc.internal.pageSize;
    console.log(pageCount);
    console.log(pageCount2); */
    
    // Footer
    const pageSize = doc.internal.pageSize;
    //const pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();
    const pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();

    const footer = "Footer";
    doc.text(footer, 20, pageHeight - 6, { baseline: "bottom" });
    //pageWidth / 2 - doc.getTextWidth(footer) / 2,
    
    // Guardamos el PDF
    doc.save('ejemplo.pdf');
  }
}
