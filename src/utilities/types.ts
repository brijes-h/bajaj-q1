export type EmployeeDetails = {
	employees: EmployeeType[];
};
export type EmployeeType = {
	id: number;
	name?: string;
	designation?: string;
	skills?: string[];
	projects?: Project[];
};
export type Project = {
	name?: string;
	description?: string;
	team?: Team[];
	tasks?: Task[];
};
export type Team = {
	name?: string;
	role?: string;
};
export type Task = {
	id?: number;
	name?: string;
	status?: string;
};
export type Response = {
	config?: any;
	data: EmployeeDetails;
	header?: any;
	request?: any;
	status: number;
	statusText?: string;
};