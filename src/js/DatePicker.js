export default class {

	maxNumberDays = 31;
	minNumberDays = 28;

	currentMonth;
	currentYear;
	monthCalendar = {};
	
	monthNames = [
			'January', 'February', 'March',
			'April', 'May', 'June',
			'July', 'August', 'September',
			'October', 'November', 'December'
	];
	
	weekdayNames = [
			"Sun", "Mon", "Tue", 
			"Wed", "Thu", "Fri", "Sat"
	];

	constructor() {
		let currentDate = new Date();
		this.currentDayNumber = currentDate.getDate();
		this.currentMonth = currentDate.getMonth();
		this.currentYear = currentDate.getFullYear();
	}

	/*
	* generate the calendar of the current month
	*/	
	generateMonthCalendar() {

		let dayMonth = new Date();
		let dayValid = true;
		for (let i = 1; i < this.maxNumberDays; i++) {

			dayMonth.setDate(i);
			
			if (i > this.minNumberDays) {
				if (dayMonth.getMonth() !== this.currentMonth) {
					dayValid = false;
				}
			} 
			
			if (dayValid){
				//find the day of the week
				this.monthCalendar[i] = {};
				
				Object.defineProperty(this.monthCalendar[i], 'day', {
				  value: dayMonth.getDay(),
				  writable: false,
					enumerable: true
				});
			}
			
		}
	}
}