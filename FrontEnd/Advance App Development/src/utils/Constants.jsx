// apiConfig.js

// Base URL for the API
const API_BASE_URL = "http://localhost:8080";

// API endpoints
const API_ENDPOINTS = {
	userController: {
		signUp: "/api/signup",
		updateUser: (id) => `/api/signup/user/${id}`,
		getUserById: (id) => `/api/signup/${id}`,
		getUserByName: (name) => `/api/signup/username/${name}`,
		getUserByEmail: (name) => `/api/signup/userEmail/${name}`,
		getAllSignups: "/api/signup/allSignups",
		deleteUser: (id) => `/api/signup/delete/${id}`,
	},
	paymentController: {
		updatePayment: (id) => `/api/payment/updatePayment/${id}`,
		addPayment: "/api/payment",
		getPaymentById: (id) => `/api/payment/${id}`,
		getPaymentByName: (name) => `/api/payment/getPayment/${name}`,
		getAllPayments: "/api/payment/allPayments",
		deletePayment: (id) => `/api/payment/deletePayment/${id}`,
	},
	joinedStudentController: {
		updateStudent: (id) => `/api/joinedStudent/updateStudent/${id}`,
		addStudent: "/api/joinedStudent",
		getStudentById: (id) => `/api/joinedStudent/${id}`,
		getStudentByName: (name) => `/api/joinedStudent/getStudent/${name}`,
		getAllStudents: "/api/joinedStudent/allStudents",
		deleteStudent: (id) => `/api/joinedStudent/delete/${id}`,
	},
	enrollCourseController: {
		updateEnrollment: (id) => `/api/enroll/updateEnrollment/${id}`,
		enrollStudent: "/api/enroll",
		getEnrollmentById: (id) => `/api/enroll/${id}`,
		getAllEnrollments: "/api/enroll/allEnrollments",
		deleteEnrollment: (id) => `/api/enroll/delete/${id}`,
	},
	collegeController: {
		updateCollege: (id) => `/api/college/updateCollege/${id}`,
		addCollege: "/api/college",
		getCollegeById: (id) => `/api/college/${id}`,
		getCollegeByName: (name) => `/api/college/getCollege/${name}`,
		getAllColleges: "/api/college/allCollege",
		deleteCollege: (id) => `/api/college/delete/${id}`,
	},
	authenticationController: {
		authenticate: "/api/auth/authenticate",
	},
};

export { API_BASE_URL, API_ENDPOINTS };
