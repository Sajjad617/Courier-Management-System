import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { HttpClientConnection } from 'src/app/services/httpClientConnection.service';
import Swal from 'sweetalert2';
// import { PercelrcvVM } from 'src/app/Models/percel-vm.model';

@Component({
  selector: 'app-all-parcel',
  imports: [HttpClientModule, RouterLink],
  templateUrl: './all-parcel.html',
  styleUrl: './all-parcel.scss'
})
// export class AllParcel implements OnInit{
export class AllParcel {

  rcv_data :any[]=[];

   constructor(private http: HttpClient, private router : Router, private dataService : HttpClientConnection){
    debugger;
    this.getPercelList();
    
};

  //  ngOnInit(): void {
  //  this.getPercelList();
  // }; 
getPercelList(){
  this.dataService.GetData('Marcent/ParcelGet').subscribe((data:any)=>{
    this.rcv_data = data;
  })
}

EditClick(parcelId: number) {
  this.router.navigate(['/Create-New-Parcel'], { queryParams: { id: parcelId } });
}

rmv(ParcelId: number) {
  Swal.fire({
    title: "Are you sure you want to delete this parcel?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      this.dataService.DeleteData(`Marcent/${ParcelId}`).subscribe({
        next: () => {
          this.getPercelList();

          Swal.fire("Deleted!", "Parcel has been deleted.", "success");
          // this.rcv_data = this.rcv_data.filter(p => p.parcelId !== ParcelId);
        },
        error: (err) => {
          console.error('Error deleting parcel', err);
          Swal.fire("Error!", "Failed to delete parcel.", "error");
        }
      });
    }
  });
}
// rmv(ParcelId: number){
//   this.http.delete(`https://localhost:7054/api/Marcent/${ParcelId}`).subscribe({
//         next: () => {
//           this.getPercelList();
//           alert('Parcel deleted successfully');

//           // UI থেকে রেকর্ড সরানো
//           // this.rcv_data = this.rcv_data.filter(p => p.parcelId !== id);
//           // this.rcv_data = this.rcv_data.filter(p => p.parcelId !== ParcelId);
//         },
//         error: (err) => {
//           console.error('Error deleting parcel', err);
//           alert('Failed to delete parcel');
//         }
//       });
// }

}
