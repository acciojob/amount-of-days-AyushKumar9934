function daysOfAYear(params) {
	if(params%400===0 || (params%4===0 && params%100!=0)) return 366;
	return 365;
}
}
