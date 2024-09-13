const baseUrl = 'https://alora-plus.vercel.app/api/v1/';
const adminId = sessionStorage.getItem('id')


export const superAdminEndPoints = {
    superAdminLogin: `${baseUrl}login`,
    getdoctors: `${baseUrl}doctors`,
    deletedoctor: `${baseUrl}doctor/`,
    doctorsAdd: `${baseUrl}doctor`,
    getnurses: `${baseUrl}nurses`,
    addnurses: `${baseUrl}nurse`,
    nursesById: `${baseUrl}nurse/`,
    getNursesForAdmin: `${baseUrl}nurse/doctorid/${adminId}`,
    getpatients: `${baseUrl}patients`,
    getPatientsForAdmin: `${baseUrl}patient/doctorid/${adminId}`,
    addpatients: `${baseUrl}patient`,
    patientById: `${baseUrl}patient/`,
    approveDoctor: `${baseUrl}doctor/accountStatusUpdate/`,
}
