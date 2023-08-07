import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

constructor(private orderService:OrderService , private toastr :ToastrService){}
// loading:boolean = false;
orders:any;



ngOnInit(){
  // this.loading = true;
  this.orderService.getUserOrder();
  this.orderService.getOrderData().subscribe((data:any)=>{
    if(data.order){
      this.orders = data.order;
      // console.log(this.orders);
      
      // console.log(this.orders);
      
      // this.loading =false
    }
  })
}

orderCancel(id: string) {
  // this.loading = true
  this.orderService.cancelOrder(id);
  this.orderService.getOrderData().subscribe((data: any) => {
    if (data) {
      this.orders = this.orders.filter((x: any) => x._id != id);
      this.toastr.success(data.msg);
      // this.loading = false
    }
  });
}


}
