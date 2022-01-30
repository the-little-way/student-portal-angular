import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
/* import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [ { path: 'dashboard', component: DashboardComponent } ]; */


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {




//	students : { Name : string, ID : string, Total : number, Paid : number }
	Name : string = "Emmanuel Dialo Tayo";
	ID : string = "NGH-01122334";
	Total : number = 4500;
	Paid : number = 2550;
//	Remainder : number = Total - Paid;


//Close button will warn, then selecting YES will delete uploaded image
	isCollapsed : boolean = true;
/* 	
	function hidewarning() {
		let ask = document.getElementById('askWarning');
		ask.classList.remove("toDisp")
	}
	
	function reveal() {
		let ask = document.getElementById('askWarning');
		ask.classList.add("toDisp");
		setTimeout(()=>{ hidewarning() }, 3000);
	}
	
	function delImg() {
		let userImgDisplay = document.getElementById('userImgDisplay');
		userImgDisplay.src = "../assets/defaultimg.png";
	}


//Upload. Display. Submit picture file

	let userImgDisplay = document.getElementById('userImgDisplay');
	let fileInput = document.getElementById('fileInput');
	fileInput.addEventListener('change', function() {
		userImgDisplay.src = URL.createObjectURL(this.files);
	}
	
	function submitImg() {
		
	}

//Logout button

	function logout() {
			
		}

*/

  constructor(private router: Router) { 
  
  }

	reveal() {
		this.isCollapsed = !this.isCollapsed;
	}
	
	logout(): void {
		localStorage.clear();
		this.router.navigateByUrl('login');
	};
	
  ngOnInit(): void {
	  
	  
  }

}
